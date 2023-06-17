import fs from 'fs/promises'
import path from 'path'

// copy.js - implement function that copies folder files files with
// all its content into folder files_copy at the same level
// (if files folder doesn't exists or files_copy has already been created
// Error with message FS operation failed must be thrown)

const copy = async () => {
    const path2dir = 'src/fs';
    try{
        await fs.mkdir(path.join(path2dir, 'files_copy'));
        await fs.cp(path.join(path2dir, 'files'),
                    path.join(path2dir, 'files_copy'),
                    { recursive: true });
    }catch (err) {
        throw 'FS operation failed';
    }
};

await copy();
