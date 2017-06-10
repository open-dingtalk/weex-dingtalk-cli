const axios =  require('axios');
const env =  require('./env.js');

const dingtalk_templates = env['dingtalk_templates'];

function fetchTemplates(){
  return new Promise(function(resolve, reject){
    axios({
      method: 'get',
      url: dingtalk_templates,
      headers: {
        'User-Agent': 'dingtalk-cli'
      }
    })
    .then(function(res){
      const data = res.data;
      if (res.status === 200){
        resolve(data);
      } else {
        reject(res);
      }
    })
    .catch(function(err){
      reject(err);
    });
  });
}

module.exports = fetchTemplates;