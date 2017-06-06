const path = require('path');
const Metalsmith = require('metalsmith');
const Handlebars = require('handlebars');

function generate(name, tmpPath, toPath, cb){
  const metalsmith = Metalsmith(path.join(tmpPath, 'template'));
  const data = Object.assign(metalsmith.metadata(),{
    destDirName: name,
    inPlace: toPath === process.cwd(),
    noEscape: true
  });
  metalsmith.clean(false)
    .source('.')
    .destination(toPath)
    .build(function(err, files){
      typeof cb === 'function' && cb(err);
    });
}

module.exports = generate;
