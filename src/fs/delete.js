import fs from 'fs'

// delete.js - implement function that deletes file fileToRemove.txt
// (if there's no file fileToRemove.txt Error with message FS operation
// failed must be thrown)

const remove = async () => {
    const path2File = 'src/fs/files/fileToRemove.txt'
    if(fs.existsSync(path2File)){
        fs.rm(path2File, (err) => {
            if (err) throw 'FS operation failed';
        })

    }else{
        throw 'FS operation failed';
    }
};

await remove();