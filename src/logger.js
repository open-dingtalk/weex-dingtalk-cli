const chalk = require('chalk');
const util = require('util');
const format = util.format;

const prefix = '    dingtalk-cli';
const sep = chalk.gray('·');

function fail(){
  const msg = format.apply(format,arguments);
  console.error(chalk.red(prefix),sep,msg);
  process.exit(1);
}

function success(){
  const msg = format.apply(format,arguments);
  console.log(chalk.green(prefix),sep,msg);
}

function warn(){
  const msg = format.apply(format,arguments);
  console.log(chalk.yellow(prefix),sep,msg);
}

function bad(){
  const msg = format.apply(format,arguments);
  console.log(chalk.red(prefix),sep,msg);
}

module.exports = {
  fail: fail,
  success: success,
  warn: warn,
  bad: bad
};
