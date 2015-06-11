'use strict';

var usps = require('../');

module.exports = {
  configure: function(test) {
    test.expect(1);

    usps.configure({ a: 'a' });
    test.deepEqual(usps.options, { a: 'a' }, 'configure fails to set options');

    test.done();
  }
};