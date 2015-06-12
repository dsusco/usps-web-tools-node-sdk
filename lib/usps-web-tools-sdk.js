'use strict';

var configure = require('./configure');

module.exports = {
  address: require('./apis/address'),
  configure: configure.configure,
  options: configure.options
};