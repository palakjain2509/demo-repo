const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Configuration
const IMAGE_DIRS = [
  'public/images',
  'public/images/home',
  'public/images/platform',
  'public/images/solutions'
];

const QUALITY = 85;
const MAX_WIDTH = 1920;
const FORMATS = ['webp', 'avif'];

// Check if ImageMagick is available
function checkImageMagick() {
  try {
    execSync('convert --version', { stdio: 'ignore' });
    return true;
  } catch (error) {
    console.log('ImageMagick not found. Install it for advanced image optimization.');
    return false;
  }
}

// Get all image files recursively
function getImageFiles(dir) {
  const files = [];
  
  if (!fs.existsSync(dir)) {
    return files;
  }

  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      files.push(...getImageFiles(fullPath));
    } else if (isImageFile(item)) {
      files.push(fullPath);
    }
  }
  
  return files;
}

// Check if file is an image
function isImageFile(filename) {
  const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.bmp', '.tiff', '.webp'];
  const ext = path.extname(filename).toLowerCase();
  return imageExtensions.includes(ext);
}

// Optimize image using ImageMagick
function optimizeImage(inputPath, outputPath, format, width, quality) {
  try {
    const command = `convert "${inputPath}" -resize ${width}x -quality ${quality} "${outputPath}"`;
    execSync(command, { stdio: 'ignore' });
    return true;
  } catch (error) {
    console.error(`Error optimizing ${inputPath}:`, error.message);
    return false;
  }
}

// Generate responsive images
function generateResponsiveImages(imagePath) {
  const dir = path.dirname(imagePath);
  const name = path.basename(imagePath, path.extname(imagePath));
  const results = [];

  // Generate different sizes
  const sizes = [
    { width: 640, suffix: 'sm' },
    { width: 1024, suffix: 'md' },
    { width: 1920, suffix: 'lg' }
  ];

  for (const format of FORMATS) {
    for (const size of sizes) {
      const outputPath = path.join(dir, `${name}-${size.suffix}.${format}`);
      
      if (optimizeImage(imagePath, outputPath, format, size.width, QUALITY)) {
        results.push({
          original: imagePath,
          optimized: outputPath,
          format,
          width: size.width,
          size: fs.statSync(outputPath).size
        });
      }
    }
  }

  return results;
}

// Create image manifest
function createImageManifest(optimizedImages) {
  const manifest = {
    version: '1.0',
    generated: new Date().toISOString(),
    images: optimizedImages.map(img => ({
      original: img.original,
      optimized: img.optimized,
      format: img.format,
      width: img.width,
      size: img.size
    }))
  };

  fs.writeFileSync('public/image-manifest.json', JSON.stringify(manifest, null, 2));
  console.log('Image manifest created: public/image-manifest.json');
}

// Main optimization function
function optimizeImages() {
  console.log('Starting image optimization...');
  
  const hasImageMagick = checkImageMagick();
  if (!hasImageMagick) {
    console.log('Skipping advanced optimization. Install ImageMagick for full optimization.');
    return;
  }

  const allImages = [];
  const optimizedImages = [];

  // Get all images from directories
  for (const dir of IMAGE_DIRS) {
    const images = getImageFiles(dir);
    allImages.push(...images);
  }

  console.log(`Found ${allImages.length} images to optimize`);

  // Optimize each image
  for (const imagePath of allImages) {
    console.log(`Optimizing: ${imagePath}`);
    const results = generateResponsiveImages(imagePath);
    optimizedImages.push(...results);
  }

  // Create manifest
  createImageManifest(optimizedImages);

  // Generate optimization report
  const totalOriginalSize = allImages.reduce((sum, img) => sum + fs.statSync(img).size, 0);
  const totalOptimizedSize = optimizedImages.reduce((sum, img) => sum + img.size, 0);
  const savings = ((totalOriginalSize - totalOptimizedSize) / totalOriginalSize * 100).toFixed(2);

  console.log('\n=== Optimization Report ===');
  console.log(`Original images: ${allImages.length}`);
  console.log(`Optimized versions: ${optimizedImages.length}`);
  console.log(`Original size: ${(totalOriginalSize / 1024 / 1024).toFixed(2)} MB`);
  console.log(`Optimized size: ${(totalOptimizedSize / 1024 / 1024).toFixed(2)} MB`);
  console.log(`Size reduction: ${savings}%`);
  console.log('==========================');
}

// Run optimization
if (require.main === module) {
  optimizeImages();
}

module.exports = {
  optimizeImages,
  generateResponsiveImages,
  createImageManifest
}; 