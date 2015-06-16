'use strict';

var configure = require('./configure');

module.exports = {
  addressInformation: require('./apis/addressInformation'),
  configure: configure.configure,
  domesticMailServiceStandards: require('./apis/domesticMailServiceStandards'),
  options: configure.options,
  rateCalculator: require('./apis/rateCalculator'),
  trackAndConfirm: require('./apis/trackAndConfirm')
};