var co = require('co');
var inquirer = require('inquirer');

co(function *(){
  const c = yield new Promise(function(resolve){
    inquirer.prompt({
      type: 'input', 
      message: 'enter Author, the default author is icepy:', 
      name: 'author'
    }).then(function (answers) {
      resolve(answers.author || 'icepy');
    });
  });
  console.log(c)
})