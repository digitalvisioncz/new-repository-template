const styles = {
  reset: "\x1b[0m",
  bright: "\x1b[1m",
  dim: "\x1b[2m",
  underscore: "\x1b[4m",
  red: "\x1b[31m",
  green: "\x1b[32m",
  yellow: "\x1b[33m",
};

function successConsole(projectName) {
  console.log();
  console.log(styles.green, 'Your template is ready! Now run the following commands:', styles.reset);
  console.log();
  console.log(`      cd ${projectName}`);
  console.log('      yarn');
  console.log('      yarn start');
  console.log();
}

module.exports = successConsole;
