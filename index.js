const isString = require('lodash.isstring');

// This was my first implementation... Nice and readable but slooow...
// To run this implementation through the perf tests uncomment this block and
// comment out the export block below... `npm run test:perf`
// module.exports = (input) => {
//   validateInputIsString(input)
//   let candidate = proccessInputString(input);
//   let comparison = input
//                 .replace(/ /g,'')
//                 .toLowerCase()
//                 .split('')
//                 .reverse()
//                 .join('');
//   return candidate === comparison;
// };

module.exports = (input) => {
  validateInputIsString(input);
  let proccessedString = proccessInputString(input);
  return isPalindrome(proccessedString);
};

function isPalindrome(string) {
  if (string.length <= 1) {
    return true;
  } else {
    return (string[0] === string[string.length-1]) &&
            isPalindrome(string.substring(1,string.length-1));
  }
}

function validateInputIsString(input) {
  if(!isString(input)){
    throw new Error('palindrome-checker requires a string as input. The given input\'s type was "' + typeof input + '".');
  }
}

function proccessInputString(string) {
  return string
          .replace(/ /g,'')
          .toLowerCase();
}
