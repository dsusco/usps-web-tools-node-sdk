'use strict';

var
  default_options = {},
  extend = require('extend');

module.exports = {
  configure: function (options) {
    default_options = extend(true, default_options, options);

    return this;
  },
  options: default_options,
  password: function () { return default_options.password; },
  userID: function () { return default_options.userID; }
};