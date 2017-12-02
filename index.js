#!/usr/bin/env node

var directory = process.cwd();
var prompt = require('prompt');
var fs = require('fs');
var read = fs.readFileSync;
var mkdirp = require('mkdirp');
var path = require('path');

var jsTemplate;
var scssTemplate;

var localTemplateExists = fs.existsSync('./ComponentTemplate');

if (localTemplateExists) {
  jsTemplate = read(path.join(process.cwd(), '/ComponentTemplate/Template.js'), 'utf8');
  scssTemplate = read(path.join(process.cwd(), '/ComponentTemplate/Template.scss'), 'utf8');
} else {
  jsTemplate = read(__dirname + '/ComponentTemplate/Template.js', 'utf8');
  scssTemplate = read(__dirname + '/ComponentTemplate/Template.scss', 'utf8');
}

var filename;
var componentName;
var styleExists = false;

var init = function () {
  prompt.start();

  var schema = {
    properties: {
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
    write(componentName);
  });

  function onErr(err) {
    console.log(err);
    return 1;
  }


  function capitalize(s) {
    return s[0].toUpperCase() + s.slice(1);
  }

  function write(componentName) {
    var componentName = capitalize(componentName);

    // check if component already exists in current directory
    if (fs.existsSync(componentName)) {
      console.error('Component: ' + componentName + ' already exists, aborting!');
      return;
    }

    mkdirp.sync(componentName);

    console.log('writing style directory');
    fs.writeFile(componentName + '/' + componentName + '.scss', scssTemplate, function (err) {
      if (err) return console.log(err);
      console.log(componentName + '/' + componentName + '.scss');
    });

    jsTemplate = jsTemplate.replace(/{{displayName}}/g, capitalize(componentName));

    fs.writeFile(componentName + '/' + componentName + '.js', jsTemplate, function (err) {
      if (err) return console.log(err);
      console.log(componentName + '/' + componentName + '.js');
    });
  }
}

module.exports = init();
