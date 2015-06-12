'use strict';

var usps = require('../');

module.exports = {
  configure: function (test) {
    test.expect(1);

    usps.configure(require('./options'));
    test.deepEqual(usps.options, require('./options'), 'configure fails to set options');

    test.done();
  }
};