
// args.js - implement function that parses command line arguments
// (given in format --propName value --prop2Name value2,
// you don't need to validate it) and prints them to the console
// in the format propName is value, prop2Name is value2

// node src/cli/args --opt1 val1 --opt2 val2
// Output:
// opt1 is val1
// opt2 is val2

const parseArgs = () => {
    let outStr = '';
    process.argv.map((value, index) => {
        if (index > 1) {
            if (value.match('^--')) {
                outStr = value.slice(2);
            } else {
                outStr += ` is ${value}`;
                console.log(outStr);
                outStr = '';
            }
        }
    });
};

parseArgs();

