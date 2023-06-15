import fs from 'fs/promises';

const create = async () => {
    try {
        const content = 'I am fresh and young';
        await fs.writeFile('src/fs/files/fresh.txt', content, { flag: "wx" });
      } catch (err) {
        console.log('FS operation failed');
        throw 'FS operation failed'
      }
};

await create();