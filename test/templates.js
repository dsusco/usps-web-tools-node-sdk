'use strict';

var templates = require('../lib/templates');

module.exports = {
  templates: function (test) {
    test.expect(1);

    test.equal(Object.keys(templates).length, 15, 'number of templates not what was expected');

    test.done();
  }
};