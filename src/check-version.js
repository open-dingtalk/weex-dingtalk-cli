const axios =  require('axios');
const chalk = require('chalk');
const semver = require('semver');
const packageConfig = require('../package.json');
const env =  require('./env.js');
const logger = require('./logger.js');

const warn = logger.warn;
const success = logger.success;
const bad = logger.bad;

function check_version(cb){
  const cliVersion = env['weex_dingtalk_cli_info'];
  if (!semver.satisfies(process.version, packageConfig.engines.node)){
    return console.log(chalk.red(
      'You must upgrade node to >=' + packageConfig.engines.node + '.x to use weex-dingtalk-cli'
    ));
  }
  axios({
    method: 'get',
    url: cliVersion
  })
  .then(function(res){
    const data = res.data;
    if (res.status === 200){
      const lastVersion = data['dist-tags'].latest;
      const currentVersion = packageConfig.version;
      if (semver.lt(currentVersion, lastVersion)){
        warn('  A newer version of dingtalk-cli is available.')
        console.log();
        success('  latest:    ' + latestVersion)
        console.log();
        bad('  installed: ' + localVersion)
        console.log();
      } else {
        success('is the latest');
      }
      typeof cb === 'function' && cb();
    }
  })
  .catch(function(error){
    bad(JSON.stringify(error));
    typeof cb === 'function' && cb();
  });
}

module.exports = check_version;
