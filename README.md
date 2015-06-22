# USPS Web Tools Node.js SDK

A simple Node.js software developer's kit for the [USPS Web Tools APIs](https://www.usps.com/business/web-tools-apis/technical-documentation.htm).

## Installing

    npm install usps-web-tools-node-sdk

**Note:** you might want to add the `--save` or `--save-dev` flag to add it to your _package.json_ dependencies or devDependencies.

## Using

Before you can use this SDK you'll need to get access to the USPS Web Tools via their [registration process](https://registration.shippingapis.com/). Once complete you will receive an e-mail with your username and password and access to the:

* Address APIs,
* Tracking & Delivery Information APIs,
* Price Calculator APIs, and
* Service Standards & Commitments APIs.

If you require access to the Shipping Label and Package Pickup APIs you'll need to request additional permissions as per the e-mail (see the _II. Request Additional API Permissions_ section).

    // require the module
    var usps = require('usps-web-tools-node-sdk');

    // tell it to use your username from the e-mail
    usps.configure({ userID: 'YOUR_USERNAME' });

    // invoke the API you need with...
    usps.addressInformation.cityStateLookup(
      // a data object with the required fields
      { zipCode: ['90210'] },
      // and a callback
      function (error, response) {
        if (error) {
          // if there's a problem, the error object won't be null
          console.log(error);
        } else {
          // otherwise, you'll get a response object
          console.log(JSON.stringify(response));
        }
      }
    );

## Testing

To run the tests:

    npm install
    npm test

## Contributing

If you'd like to help just fork and pull.

### TODO

The following still needs to get done:

* Implement Shipping Label and Package Pickup APIs
* Documentation
* GitHub Pages
* More tests (I ran in to a few instances where the [Technical Documentation](https://www.usps.com/business/web-tools-apis/technical-documentation.htm) was wrong with regards to tag names, so tests that hit all the tags are needed)