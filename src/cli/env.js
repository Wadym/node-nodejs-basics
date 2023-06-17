
// env.js - implement function that parses environment variables with
// prefix RSS_ and prints them to the console in the format
// RSS_name1=value1; RSS_name2=value2

const parseEnv = () => {
    const envs = process.env;
    for (let [key, value] of Object.entries(envs)) {
        if (key.match('^RSS_')) {
            console.log(`${key}=${value}`)
        }
    }
};

const setEnv = () => {
    process.env.RSS_1 = 'value1';
    process.env.RSS_2 = 'value2';
    process.env.RSS_N = 'valueN';
}
const deleteEnv = () => {
    delete process.env.RSS_1;
    delete process.env.RSS_2;
    delete process.env.RSS_N;
}

setEnv();

parseEnv();

deleteEnv();

parseEnv();