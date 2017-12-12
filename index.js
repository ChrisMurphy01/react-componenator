#!/usr/bin/env node

var directory = process.cwd();
var prompt = require('prompt');
var fs = require('fs');
var read = fs.readFileSync;
var mkdirp = require('mkdirp');
var path = require('path');

var filename;
var componentName;
var componentPath;
var styleExists = false;

var init = function () {
  prompt.start();

  var schema = {
    properties: {
      path: {
        description: 'Path',
        type: 'string',
        pattern: /^[$A-Z_][0-9A-Z/\_$]*$/i,
        message: 'example: "src/components/atoms"',
        default: '',
        required: false
      },
      name: {
        description: 'Name',
        type: 'string',
        pattern: /^[$A-Z_][0-9A-Z_$]*$/i,
        message: 'Name must start with a letter and have no spaces',
        default: 'Component',
        required: true
      },
    }
  };

  prompt.get(schema, function (err, result) {
    if (err) { return onErr(err) }
    componentName = result.name;
    componentPath = result.path + '/';
    write(componentName, componentPath);
  });

  function onErr(err) {
    console.log(err);
    return 1;
  }

  function write(componentName) {
    // var componentName = capitalize(componentName);

    // check if component already exists in current directory
    if (fs.existsSync(componentName)) {
      console.error('Component: ' + componentName + ' already exists, aborting!');
      return;
    }

    console.log('New component path', path.join(process.cwd(), '/' + componentPath));
    var newComponentPath = componentPath + componentName
    mkdirp.sync(newComponentPath);

    fs.readdirSync(path.join(process.cwd(), '/ComponentTemplate')).forEach(file => {
      if (!file) {
        return console.log('No files found')
      }
      console.log('FILE:', path.join(process.cwd(), '/ComponentTemplate/' + file))
      fileTemplate = read(path.join(process.cwd(), '/ComponentTemplate/' + file), 'utf8');

      fileTemplate = fileTemplate.replace(/ComponentTemplate/g, componentName);
      filename = file.replace(/ComponentTemplate/g, componentName)

      fs.writeFile(newComponentPath + '/' + filename, fileTemplate, function (err) {
        if (err) return console.log(err);
        console.log(newComponentPath);
      });
    })
  }
}

module.exports = init();
