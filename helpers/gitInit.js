const spawn = require('cross-spawn');

const gitInit = async (projectDir) => {
    return new Promise((resolve, reject) => {
        const child = spawn('git', ['init'], { cwd: projectDir });

        child.on('exit', (code) => {
            if (code !== 0) {
                reject(new Error(`Command exited with code ${code}`));
            } else {
                resolve();
            }
        });
    });
};

module.exports = gitInit;
