import { Console } from 'console';
import fs from 'fs/promises'

// rename.js - implement function that renames file wrongFilename.txt
// to properFilename with extension .md (if there's no file wrongFilename.txt
// or properFilename.md already exists Error with message FS operation failed must be thrown)

const rename = async () => {
    const path2OriginFile = 'src/fs/files/wrongFilename.txt';
    const path2RenamedFile = 'src/fs/files/properFilename.md';
    try {
        await fs.access(path2RenamedFile, fs.constants.F_OK)
            .then(
                () => {
                    // throw exception if exists
                    throw 'FS operation failed';
                })
            .catch(() => {
                // it is ok
            })
        await fs.access(path2OriginFile, fs.constants.F_OK).then(() => {
            fs.rename(path2OriginFile, path2RenamedFile)
        })
    } catch (err) {
        throw 'FS operation failed';
    }
};

await rename();