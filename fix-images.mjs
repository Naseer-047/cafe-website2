import fs from 'fs';
import path from 'path';

function processDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      processDir(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      let modified = false;
      
      // Replace <img src="/image.png" /> -> <img src={`${import.meta.env.BASE_URL}image.png`} />
      let newContent = content.replace(/src=["']\/([^"']+\.(png|svg|jpg|jpeg|webp))["']/g, (match, p1) => {
        modified = true;
        return `src={\`\${import.meta.env.BASE_URL}${p1}\`}`;
      });
      
      // Replace image: '/image.png' -> image: `${import.meta.env.BASE_URL}image.png`
      newContent = newContent.replace(/image:\s*["']\/([^"']+\.(png|svg|jpg|jpeg|webp))["']/g, (match, p1) => {
        modified = true;
        return `image: \`\${import.meta.env.BASE_URL}${p1}\``;
      });

      // Replace avatar: '/image.png'
      newContent = newContent.replace(/avatar:\s*["']\/([^"']+\.(png|svg|jpg|jpeg|webp))["']/g, (match, p1) => {
        modified = true;
        return `avatar: \`\${import.meta.env.BASE_URL}${p1}\``;
      });

      // Replace thumbnail: '/image.png'
      newContent = newContent.replace(/thumbnail:\s*["']\/([^"']+\.(png|svg|jpg|jpeg|webp))["']/g, (match, p1) => {
        modified = true;
        return `thumbnail: \`\${import.meta.env.BASE_URL}${p1}\``;
      });

      if (modified) {
        fs.writeFileSync(fullPath, newContent);
        console.log('Updated: ' + fullPath);
      }
    }
  }
}

processDir('./src');
