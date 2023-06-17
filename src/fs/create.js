import fs from 'fs/promises';

// create.js - implement function that creates new file fresh.txt
// with content I am fresh and young inside of the files folder
// (if file already exists Error with message FS operation failed must be thrown)

const create = async () => {
    try {
        const content = 'I am fresh and young';
        await fs.writeFile('src/fs/files/fresh.txt', content, { flag: "wx" });
      } catch (err) {
        console.log('FS operation failed');
        throw 'FS operation failed';
      }
};

await create();