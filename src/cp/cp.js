// cp.js - implement function spawnChildProcess that receives
// array of arguments args and creates child process from file
// script.js, passing these args to it. This function should
// create IPC-channel between stdin and stdout of master process
// and child process:
//      child process stdin should receive input from master process stdin
//      child process stdout should send data to master process stdout

import { spawn } from 'child_process';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const spawnChildProcess = async (args) => {
    console.log([...args]);
    const __dirname = dirname(fileURLToPath(import.meta.url));
    const child = spawn(`node`, [`${__dirname}\\files\\script.js`, ...args]);
    child.stdout.on('data', (data) => {
        console.log(`stdout: ${data}`);
    });

    child.stderr.on('data', (data) => {
        console.error(`stderr: ${data}`);
    });

    child.on('exit', function (code, signal) {
        console.log('child process exited with ' +
                    `code ${code} and signal ${signal}`);
      });

      process.stdin.pipe(child.stdin);

};

// Put your arguments in function call to test this functionality
//spawnChildProcess( /* [someArgument1, someArgument2, ...] */);
// spawnChildProcess( ['someArgument1', 'someArgument2', 'CLOSE']);
spawnChildProcess( ['someArgument1', 'someArgument2']);
