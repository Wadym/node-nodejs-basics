// calcHash.js - implement function that calculates SHA256 hash
// for file fileToCalculateHashFor.txt and logs it into console as hex

import { createHash } from 'node:crypto'
import fs from 'fs/promises'

const calculateHash = async () => {
    const path2file = 'src/hash/files/fileToCalculateHashFor.txt';
    try {
        await fs.readFile(path2file,
            { encoding: 'utf-8' })
            .then((content)=>{
                const hex = createHash('sha256')
                .update(content)
                .digest('hex')
                console.log(hex);
            })
            .catch((err) => {
            throw 'FS operation failed';
        })
    } catch (err) {
        throw 'FS operation failed';
    }
};

await calculateHash();