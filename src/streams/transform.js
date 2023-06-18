// transform.js - implement function that reads data from process.stdin,
// reverses text using Transform Stream and then writes it
// into process.stdout

import { once } from 'events';
import { Transform } from 'stream'

class Reverser extends Transform {

    constructor() {
        super({
            readableObjectMode: true,
            writableObjectMode: true
        })
    }

    async _transform(chunk, encoding, next) {
        const readable = process.stdin;
        const writable = process.stdout;
        writable.write(chunk.reverse());
        for await (let chunk of readable) {
            chunk.reverse();
            if (!writable.write(chunk)) {
                await once(writable, 'drain'); // backpressure
            }
        }
        writable.end();
        await onFinish(writable);
        await next()
    }
}

const transform = async () => {
    const readable = process.stdin;
    const writable = process.stdout;
    const reverser = new Reverser();
    readable.pipe(reverser).pipe(writable);
};

await transform();