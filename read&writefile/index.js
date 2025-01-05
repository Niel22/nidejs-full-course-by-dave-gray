const fsPromises = require('fs').promises;
const path = require('path');

// fs.readFile(path.join(__dirname, 'files', 'starter.txt'), 'utf8',(err, data) => {
//     if(err) throw err;
//     console.log(data);
// })

const fileOps = async () => {
    try{
        const data = await fsPromises.readFile(path.join(__dirname, 'files', 'starter.txt'), 'utf8');

        await fsPromises.unlink(path.join(__dirname, 'files', 'starter.txt'));
        console.log(data);

        await fsPromises.writeFile(path.join(__dirname, 'files', 'lorem.txt'), data);
        await fsPromises.appendFile(path.join(__dirname, 'files', 'lorem.txt'), `\n\nHow are yu doig today`);
        await fsPromises.rename(path.join(__dirname, 'files', 'lorem.txt'), path.join(__dirname, 'files', 'loremWrite.txt'));

        const newData = await fsPromises.readFile(path.join(__dirname, 'files', 'loremWrite.txt'), 'utf8');
        console.log(newData);
    }catch(err){
        console.log(err);
    }
}

fileOps();

// console.log('Hello log');



// fs.writeFile(path.join(__dirname, 'files', 'reply.txt'), `Nice to meet you dave`, (err) => {
//     if(err) throw err;
//     console.log("Operation completed");
    
//     fs.appendFile(path.join(__dirname, 'files', 'reply.txt'), `\n\nTesting text`, (err) => {
//         if(err) throw err;
//         console.log("Operation completed");

//         fs.rename(path.join(__dirname, 'files', 'reply.txt'), path.join(__dirname, 'files', 'newReply.txt'), (err) => {
//             if(err) throw err;
//             console.log("Operation completed");
//         })
//     })
// })


// process.on('uncaughtException', err => {
//     console.error(`There was an uncaught error ${err}`);
//     process.exit(1)
// })