const Utils = {
    calculateNumber: (type, num1, num2) => {
      switch (type) {
        case 'SUM':
          return num1 + num2;
        case 'SUBTRACT':
          return num1 - num2;
        case 'DIVIDE':
          return num2 !== 0 ? num1 / num2 : 'Error';
        default:
          return 'Error';
      }
    }
};

module.exports = Utils;
