const path = require('path');
const Metalsmith = require('metalsmith');
const Handlebars = require('handlebars');

function generate(name, tmpPath, toPath, meta, cb){
  const metalsmith = Metalsmith(path.join(tmpPath, 'template'));
  const data = Object.assign(Object.assign(metalsmith.metadata(),{
    destDirName: name,
    inPlace: toPath === process.cwd(),
    noEscape: true
  }),meta);
  console.log(data);
  metalsmith.use(renderTemplateFiles(data))
  metalsmith.clean(false)
    .source('.')
    .destination(toPath)
    .build(function(err, files){
      typeof cb === 'function' && cb(err);
    });
}

function renderTemplateFiles(data){
  return function(files, metalsmith, done){
    const keys = Object.keys(files);
    keys.forEach(function(conf){
      const str = files[conf].contents.toString();
      if ('package.json' === conf || 'README.md' === conf){
        if (/{{([^{}]+)}}/g.test(str)){
          const compile = Handlebars.compile(str);
          const res = compile(data);
          files[conf].contents = new Buffer(res);
        }
      }

    });
    done();
  }
}

module.exports = generate;
