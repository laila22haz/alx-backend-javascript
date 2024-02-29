var Utils = require('./utils');

const sendPaymentRequestToApi = (totalAmount, totalShipping) => {
    result = Utils.calculateNumber(totalAmount, totalShipping);
    console.log('The total is: ' + result);
}

module.exports = sendPaymentRequestToApi;