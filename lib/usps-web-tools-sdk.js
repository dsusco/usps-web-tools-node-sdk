'use strict';

var configure = require('./configure');

module.exports = {
  addressInformation: require('./apis/addressInformation'),
  configure: configure.configure,
  options: configure.options
};