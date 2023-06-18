// read.js - implement function that reads file fileToRead.txt
// content using Readable Stream and prints it's content
// into process.stdout

import * as stream from 'stream';
import fs from 'fs';
import {once} from 'events';
import util from 'util';

const onFinish = util.promisify(stream.finished);

const read = async () => {
    const path2file = 'src/streams/files/fileToRead.txt';
    const readable = fs.createReadStream(path2file);
    const writable = process.stdout;
    for await (const chunk of readable) {
        if (!writable.write(chunk)) {
          await once(writable, 'drain'); // backpressure
        }
      }
      writable.end();
      await onFinish(writable);
};

await read();