const fs = require('fs');
const ytdl = require('@distube/ytdl-core');

const videoUrl = 'https://www.youtube.com/watch?v=4eQ6_ycFOng';
const outputPath = './src/assets/hero-bg.mp4';

console.log('Starting video download...');

const videoStream = ytdl(videoUrl, { quality: 'highestvideo', filter: 'videoonly' });

videoStream.pipe(fs.createWriteStream(outputPath));

videoStream.on('end', () => {
  console.log('Video downloaded successfully to ' + outputPath);
});

videoStream.on('error', (err) => {
  console.error('Error downloading video:', err);
});
