const { exec } = require("child_process");

export function runTest(filename) {
  exec(`npm run test:current -- ${filename}`, (error, stdout, stderr) => {
    if (error) {
      console.error(`exec error: ${error}`);
      return;
    }
    console.log(`stdout: ${stdout}`);
    console.error(`stderr: ${stderr}`);
  });
}

module.exports = {
  runTest,
};
