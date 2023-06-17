import fs from 'fs/promises'

// list.js - implement function that prints all array of filenames from files
// folder into console (if files folder doesn't exists Error with message
// FS operation failed must be thrown)

const list = async () => {
    const path2dir = 'src/fs/files';
    try{
        await fs.readdir(path2dir, {recursive: true}).then((files)=>{
            files.forEach(file => {
                console.log(file);
            })}).catch(()=>{
                throw 'FS operation failed';
            });
    }catch (err) {
        throw 'FS operation failed';
    }
};

await list();