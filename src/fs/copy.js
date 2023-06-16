import fs from 'fs/promises'
import path from 'path'

const copy = async () => {
    const path2dir = 'src/fs';
    try{
        await fs.mkdir(path.join(path2dir, 'files_copy'));
        fs.cp(path.join(path2dir, 'files'),
                path.join(path2dir, 'files_copy'),
                { recursive: true });
    }catch (err) {
        throw 'FS operation failed'
    }
};

await copy();
