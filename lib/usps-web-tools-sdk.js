'use strict';

var configure = require('./configure');

module.exports = {
  addressInformation: require('./apis/addressInformation'),
  configure: configure.configure,
  options: configure.options,
  rateCalculator: require('./apis/rateCalculator'),
  trackAndConfirm: require('./apis/trackAndConfirm')
};