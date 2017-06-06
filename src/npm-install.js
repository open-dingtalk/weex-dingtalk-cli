const shell = require('shelljs');
const logger = require('./logger');
const chalk = require('chalk');
const ora = require('ora');
const fail = logger.fail;
const success = logger.success;

function install(name){
  shell.cd(name);
  let spinner = ora('install node modules ');
  spinner.start();
  let child = shell.exec('npm install',{ silent:true, async:true });
  child.stdout.on('data',function(data){
    spinner.stop();
    console.log(chalk.white(data));
    spinner.start();
  });
  child.on('exit',function(code){
    if (code === 0){
      spinner.stop();
      success('done thanks');
    } else {
      fail('Error: npm install fail');
    }
  });
}

module.exports = install;