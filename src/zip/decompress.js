// decompress.js - implement function that decompresses archive.gz
// back to the fileToCompress.txt with same content as before compression
// using zlib and Streams API

import { createGzip, createGunzip } from 'node:zlib';
import { pipeline } from 'node:stream';
import { createReadStream, createWriteStream } from 'node:fs';
import { promisify } from 'node:util';

const decompress = async () => {
    const path2InFile = 'src/zip/files/archive.gz';
    const path2OutFile = 'src/zip/files/fileToCompressOut.txt'
    const pipe = promisify(pipeline);
    const gunzip = createGunzip();
    const source = createReadStream(path2InFile);
    const destination = createWriteStream(path2OutFile);
    await pipe(source, gunzip, destination);
};

await decompress();