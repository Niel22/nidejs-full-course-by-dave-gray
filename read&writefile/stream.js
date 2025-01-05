const fs = require('fs');
const path = require('path');

const rs = fs.createReadStream(path.join(__dirname, 'files', 'loremWrite.txt'), {encoding: 'utf8'});

const ws = fs.createWriteStream(path.join(__dirname, 'files', 'new-lorem.txt'));

rs.pipe(ws);

// rs.on('data', (dataChunk) => {
//     ws.write(dataChunk);
// })

// fs.rename(path.join(__dirname, 'files', 'new-lorem.txt'), path.join(__dirname, 'files', 'new-lorem.docx'))