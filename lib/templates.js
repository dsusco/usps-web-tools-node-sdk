'use strict';

var
  configure = require('./configure'),
  fs = require('fs'),
  path = require('path'),
  handlebars = require('handlebars'),
  templateDir = __dirname + '/templates/',
  templates = {};

handlebars.registerHelper({
  userID: configure.userID,
  password: configure.password
});

fs.readdirSync(templateDir).forEach(function (file) {
  templates[path.basename(file, path.extname(file))] =
    handlebars.compile(
      fs.readFileSync(templateDir + file, { encoding: 'utf8' }),
      { noEscape: true }
    );
});

module.exports = templates;