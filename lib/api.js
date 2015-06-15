'use strict';

var
  request = require('request'),
  templates = require('./templates'),
  xml2js = require('xml2js'),
  parser = new xml2js.Parser({
    explicitArray: false,
    ignoreAttrs: true,
    tagNameProcessors: [xml2js.processors.firstCharLowerCase],
    valueProcessors: [
      function (value) {
        if (value === 'UNDEFINED') {
          value = '';
        }

        return value;
      }
    ]
  });

module.exports = {
  request: function (api, req, data, responseObject, callback) {
    request(
      templates.apiSignature({
        api: api,
        xml: templates[req](data)
      }),
      function (error, response, body) {
        if (!error && response.statusCode === 200) {
          parser.parseString(body, function (error, json) {
            if (!error) {
              if (!json.error) {
                callback(null, json[responseObject]);
              } else {
                // usps error
                callback(json.error, null);
              }
            } else {
              // parser error
              callback(error, null);
            }
          });
        } else {
          // request error
          callback(error, null);
        }
      }
    );
  }
};