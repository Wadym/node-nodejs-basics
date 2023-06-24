import { Worker, workerData } from 'worker_threads';
import path, { dirname } from 'path';
import { cpus } from 'os';
import * as url from 'url';
import { error } from 'console';

const start_number = 10;
// const __dirname = getDirnameFromUrl(import.meta.url);
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
const workerScript = path.join(__dirname, 'worker.js');
const fibonacciWorkerService = (number) => new Promise((resolve, reject) => {
    const worker = new Worker(workerScript, { workerData: number });
    worker.on('message', data => resolve({
        status: 'resolved',
        data: data
    }));
    worker.on(error, () => resolve({
        status: 'error',
        data: null
    }));
})

const performCalculations = async () => {
    //const workerPool = Array.from({ length: cpus().length }, (_, i) => fibonacciWorkerService(start_number + i));
    const workerPool = Array.from([...Array(cpus().length).keys()], (_,i) => fibonacciWorkerService(start_number + i));
    const result = await Promise.all(workerPool);
    console.log(result);
};

await performCalculations();