import fs from 'fs'
import path from 'path'

// rename.js - implement function that renames file wrongFilename.txt
// to properFilename with extension .md (if there's no file wrongFilename.txt
// or properFilename.md already exists Error with message FS operation failed must be thrown)

const rename = async () => {
    const path2OriginFile = 'src/fs/files/wrongFilename.txt';
    const path2RenamedFile = 'src/fs/files/properFilename.md';
    try {
        console.log('try');
        if (fs.existsSync(path2RenamedFile)) {
            throw 'FS operation failed';
        } else{
            if (!fs.existsSync(path2OriginFile)) {
                throw 'FS operation failed';
            }
        }
        fs.rename(path2OriginFile, path2RenamedFile, () => {
            console.log(`File ${path2OriginFile} renamed into ${path2RenamedFile}`);
        })
    } catch (err) {
        throw 'FS operation failed';
    }
};

await rename();