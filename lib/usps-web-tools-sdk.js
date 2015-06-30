'use strict';

var configure = require('./configure');

module.exports = {
  addressInformation: require('./apis/addressInformation'),
  configure: configure.configure,
  customFormLabel: require('./apis/customFormLabel'),
  domesticMailServiceStandards: require('./apis/domesticMailServiceStandards'),
  options: configure.options,
  rateCalculator: require('./apis/rateCalculator'),
  sdcServiceStandards: require('./apis/sdcServiceStandards'),
  trackAndConfirm: require('./apis/trackAndConfirm')
};