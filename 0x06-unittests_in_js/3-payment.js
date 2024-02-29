var calculateNumber = require('./utils')
const sendPaymentRequestToApi = (totalAmount, totalShipping) => {
    result = calculateNumber(totalAmount, totalShipping);
    console.log('The total is: ' + result);
}

module.exports = sendPaymentRequestToApi;