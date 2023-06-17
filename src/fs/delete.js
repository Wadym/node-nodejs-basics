import { Stats } from 'fs';
import fs from 'fs/promises'

// delete.js - implement function that deletes file fileToRemove.txt
// (if there's no file fileToRemove.txt Error with message FS operation
// failed must be thrown)

const remove = async () => {
    const path2File = 'src/fs/files/fileToRemove.txt'
    await fs.access(path2File, fs.constants.F_OK).then(() => {
        fs.rm(path2File).catch((err) => {
            if (err) throw 'FS operation failed';
        })
    }).catch((err) => {
        if (err) throw 'FS operation failed';
    });
};

await remove();