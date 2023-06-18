// write.js - implement function that writes process.stdin data into
// file fileToWrite.txt content using Writable Stream

import * as stream from 'stream';
import fs from 'fs';
import {once} from 'events';
import util from 'util';

const onFinish = util.promisify(stream.finished);

const write = async () => {
    const path2file = 'src/streams/files/fileToWrite.txt';
    const readable = process.stdin;// fs.createReadStream(path2file);
    const writable = fs.createWriteStream(path2file);
    for await (const chunk of readable) {
        if (!writable.write(chunk)) {
          await once(writable, 'drain'); // backpressure
        }
      }
      writable.end();
      await onFinish(writable);
};

await write();