import { readdir, lstat, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const root = fileURLToPath(new URL('../public/images/', import.meta.url));
const scriptStat = await lstat(fileURLToPath(import.meta.url));
const rules = {
  hero: { width: 1280, quality: 84 },
  about: { width: 1600, quality: 80 },
  programs: { width: 1600, quality: 80 },
  activities: { width: 1920, height: 1920, quality: 82 },
  experts: { width: 720, quality: 86 },
  'experts/network': { width: 320, height: 480, quality: 86 },
  maps: { width: 480, quality: 88 },
  community: { width: 1200, quality: 80 },
  testimonials: { width: 480, height: 720, quality: 86 },
  // Preserve logo detail and alpha; do not resize brand assets.
  brand: { lossless: true },
};
const formatBytes = (bytes) => `${(bytes / (Math.abs(bytes) >= 1048576 ? 1048576 : 1024)).toFixed(2)} ${Math.abs(bytes) >= 1048576 ? 'MB' : 'KB'}`;
const percent = (before, after) => before ? (before - after) / before * 100 : 0;

async function scan(directory) {
  const files = [];
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const fullPath = path.join(directory, entry.name);
    // Never follow symlinks outside the asset tree.
    if (entry.isDirectory()) files.push(...await scan(fullPath));
    else if (entry.isFile() && /\.(jpe?g|png|webp)$/i.test(entry.name) && !entry.name.endsWith('.optimized.webp')) {
      const name = path.relative(root, fullPath).split(path.sep).join('/');
      // Keep logos; WebP generated from JPG/PNG is an output, not another source.
      if (/^(brand|partners)\//.test(name)) continue;
      if (/\.webp$/i.test(entry.name)) {
        const siblings = await readdir(directory);
        if (siblings.some((sibling) => /\.(jpe?g|png)$/i.test(sibling) && path.parse(sibling).name === path.parse(entry.name).name)) continue;
      }
      files.push(fullPath);
    }
  }
  return files.sort();
}

async function existingFile(file) {
  try { return await lstat(file); }
  catch (error) { if (error.code === 'ENOENT') return null; throw error; }
}

async function main() {
  const files = await scan(root);
  const destinations = new Map();
  const outputFor = (source) => source.slice(0, -path.extname(source).length) + (/\.webp$/i.test(source) ? '.optimized.webp' : '.webp');
  for (const source of files) {
    const key = outputFor(source).toLowerCase();
    destinations.set(key, (destinations.get(key) ?? 0) + 1);
  }
  let optimized = 0, skipped = 0, failed = 0, totalBefore = 0, totalAfter = 0, reductionSum = 0;
  for (const source of files) {
    const name = path.relative(root, source).split(path.sep).join('/');
    const output = outputFor(source);
    try {
      if (destinations.get(output.toLowerCase()) > 1) {
        throw new Error('Trùng tên output WebP giữa nhiều ảnh nguồn. Hãy đặt tên nguồn khác nhau.');
      }
      const sourceStat = await lstat(source);
      const outputStat = await existingFile(output);
      if (outputStat && !outputStat.isFile()) throw new Error('Output không phải file thường; không ghi đè.');
      const before = await sharp(source).metadata();
      if (outputStat && Math.max(sourceStat.mtimeMs, scriptStat.mtimeMs) <= outputStat.mtimeMs) {
        const after = await sharp(output).metadata();
        console.log(`[SKIP] ${name}: WebP đã cập nhật | ${before.width}×${before.height} → ${after.width}×${after.height} | ${formatBytes(sourceStat.size)} → ${formatBytes(outputStat.size)} | tiết kiệm ${formatBytes(sourceStat.size - outputStat.size)} (${percent(sourceStat.size, outputStat.size).toFixed(1)}%)`);
        skipped++;
        totalBefore += sourceStat.size;
        totalAfter += outputStat.size;
        continue;
      }
      if ((before.pages ?? 1) > 1) throw new Error('Ảnh nhiều frame: bỏ qua để không làm mất animation.');
      const rule = rules[path.posix.dirname(name).toLowerCase()] ?? rules[name.split('/')[0].toLowerCase()] ?? { width: 1600, quality: 80 };
      // Apply EXIF orientation before removing metadata. Sharp strips metadata by default.
      let pipeline = sharp(source).rotate();
      if (rule.width) pipeline = pipeline.resize({ width: rule.width, height: rule.height, fit: 'inside', withoutEnlargement: true });
      const { data, info } = await pipeline.webp(rule.lossless ? { lossless: true } : { quality: rule.quality }).toBuffer({ resolveWithObject: true });
      await writeFile(output, data, { flag: outputStat ? 'w' : 'wx' });
      const reduction = percent(sourceStat.size, info.size);
      console.log(`[OK] ${name} → ${path.basename(output)} | ${before.width}×${before.height} → ${info.width}×${info.height} | ${formatBytes(sourceStat.size)} → ${formatBytes(info.size)} | tiết kiệm ${formatBytes(sourceStat.size - info.size)} (${reduction.toFixed(1)}%)${reduction < 0 ? ' — WebP lớn hơn nguồn' : ''}`);
      optimized++;
      totalBefore += sourceStat.size;
      totalAfter += info.size;
      reductionSum += reduction;
    } catch (error) {
      failed++;
      console.error(`[LỖI] ${name}: ${error.message}`);
    }
  }
  console.log(`\nTổng ảnh nguồn nội dung tìm thấy: ${files.length}\nĐã optimize: ${optimized}\nSkipped (WebP đã cập nhật): ${skipped}\nLỗi/không xử lý được: ${failed}`);
  console.log(`Dung lượng tất cả cặp ảnh nguồn/output (gồm file skipped):\nTrước: ${formatBytes(totalBefore)}\nSau: ${formatBytes(totalAfter)}\nTiết kiệm: ${formatBytes(totalBefore - totalAfter)}\nTỷ lệ giảm tổng dung lượng: ${percent(totalBefore, totalAfter).toFixed(1)}%\nTỷ lệ giảm trung bình mỗi file mới xử lý: ${(optimized ? reductionSum / optimized : 0).toFixed(1)}%`);
  if (!files.length) console.log('Chưa có ảnh JPG/JPEG/PNG để optimize. Không tạo ảnh giả.');
  if (failed) process.exitCode = 1;
}

main().catch((error) => {
  console.error(`Không thể chạy tối ưu ảnh: ${error.message}`);
  process.exitCode = 1;
});
