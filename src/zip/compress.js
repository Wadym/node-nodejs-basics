// compress.js - implement function that compresses file
// fileToCompress.txt to archive.gz using zlib and Streams API

import { createGzip } from 'node:zlib';
import { pipeline } from 'node:stream';
import { createReadStream, createWriteStream } from 'node:fs';
import { promisify } from 'node:util';

const compress = async () => {
    const path2InFile = 'src/zip/files/fileToCompress.txt';
    const path2OutFile = 'src/zip/files/archive.gz'
    const pipe = promisify(pipeline);
    const gzip = createGzip();
    const source = createReadStream(path2InFile);
    const destination = createWriteStream(path2OutFile);
    await pipe(source, gzip, destination);
};

await compress();