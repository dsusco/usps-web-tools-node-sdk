'use strict';

var usps = require('../../');

usps.configure(require('../options'));

module.exports = {
  rate: function (test) {
    usps.rateCalculator.rate(
      { revision: '2',
        package: [ { service: 'FIRST CLASS',
                     firstClassMailType: 'LETTER',
                     zipOrigination: '44106',
                     zipDestination: '20770',
                     pounds: '0',
                     ounces: '3.5',
                     size: 'REGULAR',
                     machinable: 'true' },
                   { service: 'PRIORITY',
                     zipOrigination: '44106',
                     zipDestination: '20770',
                     pounds: '1',
                     ounces: '8',
                     container: 'NONRECTANGULAR',
                     size: 'LARGE',
                     width: '15',
                     length: '30',
                     height: '15',
                     girth: '55',
                     value: '1000',
                     specialServices: [ '1' ] },
                   { service: 'ALL',
                     zipOrigination: '90210',
                     zipDestination: '96698',
                     pounds: '8',
                     ounces: '32',
                     size: 'REGULAR',
                     machinable: 'true',
                     dropOffTime: '23:59',
                     shipDate: { shipDate: '2013-07-28' } } ] },
      function (error, response) {
        test.expect(2);

        test.ifError(error);
        test.deepEqual(
          response,
          {"package":[{"zipOrigination":"44106","zipDestination":"20770","pounds":"0","ounces":"3.5","firstClassMailType":"LETTER","size":"REGULAR","machinable":"TRUE","zone":"3","postage":{"mailService":"First-Class Mail&lt;sup&gt;&#174;&lt;/sup&gt; Stamped Letter","rate":"1.15","specialServices":{"specialService":[{"serviceID":"104","serviceName":"Certificate of Mailing (Form 3817)","available":"true","price":"1.35"},{"serviceID":"160","serviceName":"Certificate of Mailing (Form 3665)","available":"true","price":"0.38"},{"serviceID":"105","serviceName":"Certified Mail&lt;sup&gt;&#174;&lt;/sup&gt;","available":"true","price":"3.45"},{"serviceID":"170","serviceName":"Certified Mail&lt;sup&gt;&#174;&lt;/sup&gt; Restricted Delivery","available":"true","price":"8.60"},{"serviceID":"171","serviceName":"Certified Mail&lt;sup&gt;&#174;&lt;/sup&gt; Adult Signature Required","available":"true","price":"8.60"},{"serviceID":"172","serviceName":"Certified Mail&lt;sup&gt;&#174;&lt;/sup&gt; Adult Signature Restricted Delivery","available":"true","price":"8.60"},{"serviceID":"103","serviceName":"Collect on Delivery","available":"true","price":"7.25","declaredValueRequired":"true","dueSenderRequired":"false"},{"serviceID":"175","serviceName":"Collect on Delivery Restricted Delivery","available":"true","price":"12.40","declaredValueRequired":"true","dueSenderRequired":"false"},{"serviceID":"100","serviceName":"Insurance","available":"true","price":"2.20","declaredValueRequired":"true","dueSenderRequired":"false"},{"serviceID":"177","serviceName":"Insurance Restricted Delivery","available":"true","price":"14.60","declaredValueRequired":"true","dueSenderRequired":"false"},{"serviceID":"109","serviceName":"Registered Mail&lt;sup&gt;&#8482;&lt;/sup&gt;","available":"true","price":"12.20","declaredValueRequired":"true","dueSenderRequired":"false"},{"serviceID":"176","serviceName":"Registered Mail&lt;sup&gt;&#8482;&lt;/sup&gt; Restricted Delivery","available":"true","price":"17.35","declaredValueRequired":"true","dueSenderRequired":"false"}]}}},{"zipOrigination":"44106","zipDestination":"20770","pounds":"1","ounces":"8","container":"NONRECTANGULAR","size":"LARGE","zone":"3","postage":{"mailService":"Priority Mail 2-Day&lt;sup&gt;&#8482;&lt;/sup&gt;","rate":"19.90","commitmentDate":"2015-06-17","commitmentName":"2-Day","specialServices":{"specialService":[{"serviceID":"119","serviceName":"Adult Signature Required","available":"true","price":"5.50"},{"serviceID":"120","serviceName":"Adult Signature Restricted Delivery","available":"true","price":"5.75"},{"serviceID":"1","serviceName":"Insurance","available":"true","price":"14.65","declaredValueRequired":"true","dueSenderRequired":"false"},{"serviceID":"102","serviceName":"Return Receipt","available":"true","price":"2.80"},{"serviceID":"155","serviceName":"USPS Tracking&lt;sup&gt;&#8482;&lt;/sup&gt; Electronic","available":"true","price":"0.0"}]}}},{"error":{"number":"-2147219421","source":"RateEngineV4;RateV4.ProcessRequest","description":"Ship Date must be within the next three days.","helpFile":"","helpContext":""}}]},
          'rateCalculator.rate does not return expected response'
        );

        test.done();
      }
    );
  },
  intlRate: function (test) {
    usps.rateCalculator.intlRate(
      {},
      function (error, response) {
        test.expect(2);

        test.ifError(error);
        test.deepEqual(
          response,
          {"package":[{"error":{"number":"-2147219037","source":";IntlRateV2.ProcessRequest","description":"AcceptanceDateTime cannot be earlier than today's date.","helpFile":"","helpContext":""}},{"prohibitions":"Articles made of tortoise-shell, mother of pearl, ivory, bone meerschaum and amber (succin), natural or reconstructed, worked jade and mineral substances similar to jade.\nCanned vegetables, fish, plums and nuts.\nFuneral urns.\nHousehold articles made of tin.\nPerishable infectious biological substances.\nPerishable noninfectious biological substances.\nPictures and printed matter of pornographic or immoral nature, or which tend to incite crime or juvenile delinquency.\nRadioactive materials.\nSaccharine in tablets or packets.\nUsed clothing, accessories, blankets, linen, textile furnishings, footwear and headwear.\nWatches and clocks.","restrictions":"Articles of gold or platinum, jewelry and precious stones must be licensed by the Algerian Ministry of Finance.\nCoins, banknotes, negotiable securities, checks and other instruments of payment, may only be imported by the Central Bank of Algeria or approved intermediary banks.\nMedicines for human or veterinary use, dietetic products, serums, vaccines and similar produce; medical, surgical, and dental instruments and prostheses require prior approval from the Ministry of Public Health and subject to the visa of the Central Algerian Pharmacy.","observations":"Import permits or licenses are required for many types of goods; therefore, the sender should ascertain from the addressee before mailing whether the necessary documents are held.","customsForms":"First-Class Mail International items and Priority Mail International Flat Rate Envelopes and Small Flat Rate Boxes: \nPS Form 2976 (see 123.61)\nPriority Mail International parcels:\nPS Form 2976-A inside 2976-E (envelope)","expressMail":"Country Code: \nDZ \n\nReciprocal Service Name: \nEMS \n\nRequired Customs Form/Endorsement\n1. Correspondence and business papers.\nPS Form 2976, Customs - CN 22 and Sender's Declaration. Endorse item clearly next to mailing label as BUSINESS PAPERS.\n\n2.  Merchandise samples without commercial value and not subject to customs duty.\nPS Form 2976, Customs - CN 22 and Sender's Declaration.\n\n3. Merchandise and all articles subject to customs duty.\nPS Form 2976-A, Customs Declaration and Dispatch Note CP 72, inside a PS Form 2976-E, Customs Declaration Envelope CP 91. Include a commercial invoice in each item.\n\nNote:\nCoins; banknotes; currency notes, including paper money; securities of any kind payable to bearer; traveler's checks; platinum, gold, and silver; precious stones; jewelry; watches; and other valuable articles are prohibited in Priority Mail Express International shipments. All items prohibited in regular international mail are also prohibited in Priority Mail Express International to Algeria.\n\nAreas Served: See the following list for areas served.\nAdrar RP\nAin Benian\nAin Defla RP\nAin Smara\nAin Temouchent RP\nAlger aeroport Priority Mail Express International\nAlger Didouche Mourad\nAlger RP\nAlgiers and suburbs, as well as all main towns of Wilaya (department)\nAnnaba aeroport Priority Mail Express International\nAnnaba Amirouche\nAnnaba-Menadia\nAnnaba RP\nArzew\nBatna RP\nBechar RP\nBejaia RP\nBerrahal (Annaba)\nBilda RP\nBiskra RP\nBordj Bou Arreridj RP\nBordj Bounaam\nBouira RP\nBou Ismail\nBoumerdes RP\nCheraga\nChlef RP\nConstantine aeroport Priority Mail Express International\nConstentine Daksi\nConstantine RP\nConstantine Sidi Mabrouk\nDar El Beida\nDidouche Mourad\nDjelfa RP\nDouera\nEl Attaf\nEl Bayadh RP\nEl-Biar\nEl Hadjar (Annaba)\nEl Harrach\nEl Khroub\nEl Khroub Djeffal Amar\nEl Madania\nEl Oued RP\nEl Tarf RP\nFouka\nGhardaia RP\nGuelma RP\nHaasi Messaoud\nHadjout\nHaidra\nHamma Bouziane\nHussein-Dey\nIn Amenas\nJijel RP\nKais\nKhemisti\nKhenchela RP\nKolea\nKouba\nLaghouat RP\nLardjen\nLayoune\nMascara RP\nMedea RP\nMila RP\nMostaganem RP\nMSila RP\nNaama RP\nOran\nOran aeroport Priority Mail Express International\nOum El Bouaghi RP\nRelizane RP\nRouiba\nSaida RP\nSetif RP\nSidi Bel Abbes-Sidi Yacine\nSkikda RP\nSouk Ahras RP\nStaoueli\nTamanrasset RP\nTebessa RP\nTheniet El Had\nTiaret RP\nTindouf RP\nTipaza RP\nTissemsilt RP\nTizi Ouzou RP\nTlemcen RP\nZeralda\nZighout Youcef","areasServed":"Please reference Express Mail for Areas Served.","additionalRestrictions":"No Additional Restrictions Data found.","service":{"pounds":"0","ounces":"3","mailType":"Envelope","container":"","size":"REGULAR","width":"0.0","length":"0.0","height":"0.0","girth":"0.0","country":"ALGERIA","postage":"2.92","extraServices":{"extraService":{"serviceID":"6","serviceName":"Certificate of Mailing","available":"True","price":"1.35"}},"valueOfContents":"75.00","insComment":"SERVICE","svcCommitments":"Varies by destination","svcDescription":"First-Class Mail&lt;sup&gt;&#174;&lt;/sup&gt; International Letter","maxDimensions":"Max. length 11-1/2\", height 6-1/8\" or thickness 1/4\"","maxWeight":".22"}}]},
          'rateCalculator.intlRate does not return expected response'
        );

        test.done();
      }
    );
  }
};