'use strict';

var
  fs = require('fs'),
  path = require('path'),
  handlebars = require('handlebars'),
  templateDir = './lib/templates/',
  templates = {};

fs.readdirSync(templateDir).forEach(function (file) {
  templates[path.basename(file, path.extname(file))] =
    handlebars.compile(fs.readFileSync(templateDir + file, { encoding: 'utf8' }));
});

module.exports = templates;