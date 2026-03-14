const fs = require('fs');
const path = require('path');

const srcDir = 'C:\\Users\\tripo\\.gemini\\antigravity\\brain\\ac0bf39b-91f4-4633-96a3-43eba7beace4';
const destDir = 'c:\\Users\\tripo\\Documents\\GitHub\\click-property\\Click-Frontend\\public\\images\\home-page-v2';

if (!fs.existsSync(destDir)){
    fs.mkdirSync(destDir, { recursive: true });
}

fs.readdirSync(srcDir).forEach(file => {
    if(file.endsWith('.png')) {
        fs.copyFileSync(path.join(srcDir, file), path.join(destDir, file));
        console.log('Copied ' + file);
    }
});
