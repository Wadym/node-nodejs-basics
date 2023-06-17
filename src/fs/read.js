import fs from 'fs/promises'

// read.js - implement function that prints content of the fileToRead.txt
// into console (if there's no file fileToRead.txt Error with message
// FS operation failed must be thrown)

const read = async () => {
    const path2file = 'src/fs/files/fileToRead.txt';
    try {
        await fs.readFile(path2file,
            { encoding: 'utf-8' })
            .then((content)=>{
                console.log(content);
            })
            .catch((err) => {
            throw 'FS operation failed';
        })
    } catch (err) {
        throw 'FS operation failed';
    }
};

await read();