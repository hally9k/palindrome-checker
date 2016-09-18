const chai = require('chai');
const expect = chai.expect;
const sinon = require('sinon');

const isPalindrome = require('../index');

describe("Palindrome Checker Functional Tests", function() {

  it('detects an empty string as a palindrome', () => {
    let result = isPalindrome('');
    expect(result).to.be.true;
  });

  it('detects a single character as a palindrome', () => {
    let result = isPalindrome('a');
    expect(result).to.be.true;
  });

  it('detects palindromic word', () => {
    let result = isPalindrome('hannah');
    expect(result).to.be.true;
  });

  it('detects non-palindromic word', () => {
    let result = isPalindrome('spanner');
    expect(result).to.be.false;
  });

  it('detects palindromic sentence with capitalisation', () => {
    let result = isPalindrome('Mr owl ate my metal worm');
    expect(result).to.be.true;
  });

  it('detects palindromic sentence with multiple capitalisations', () => {
    let result = isPalindrome('Never Odd Or Even');
    expect(result).to.be.true;
  });

  it('detects non-palindromic sentence with multiple capitalisations', () => {
    let result = isPalindrome('Never Even Or Odd');
    expect(result).to.be.false;
  });

  it('throws an error with a good message when the input is a number', () => {
    let isPalindromeSpy = sinon.spy(isPalindrome);
    let errorMessage = null;
    try {
      let result = isPalindromeSpy(1);
    } catch(e) {
      errorMessage = e.message;
    }
    expect(isPalindromeSpy.threw()).to.be.true;
    expect(errorMessage).to.equal('palindrome-checker requires a string as input. The given input\'s type was "number".');
  });

  it('throws an error with a good message when the input is an object', () => {
    let isPalindromeSpy = sinon.spy(isPalindrome);
    let errorMessage = null;
    try {
      let result = isPalindromeSpy({});
    } catch(e) {
      errorMessage = e.message;
    }
    expect(isPalindromeSpy.threw()).to.be.true;
    expect(errorMessage).to.equal('palindrome-checker requires a string as input. The given input\'s type was "object".');
  });

  it('throws an error with a good message when the input is a boolean', () => {
    let isPalindromeSpy = sinon.spy(isPalindrome);
    let errorMessage = null;
    try {
      let result = isPalindromeSpy(true);
    } catch(e) {
      errorMessage = e.message;
    }
    expect(isPalindromeSpy.threw()).to.be.true;
    expect(errorMessage).to.equal('palindrome-checker requires a string as input. The given input\'s type was "boolean".');
  });

  it('throws an error with a good message when the input is undefined', () => {
    let isPalindromeSpy = sinon.spy(isPalindrome);
    let errorMessage = null;
    try {
      let result = isPalindromeSpy(undefined);
    } catch(e) {
      errorMessage = e.message;
    }
    expect(isPalindromeSpy.threw()).to.be.true;
    expect(errorMessage).to.equal('palindrome-checker requires a string as input. The given input\'s type was "undefined".');
  });

  it('throws an error with a good message when the input is a function', () => {
    let isPalindromeSpy = sinon.spy(isPalindrome);
    let errorMessage = null;
    try {
      let result = isPalindromeSpy(()=>{});
    } catch(e) {
      errorMessage = e.message;
    }
    expect(isPalindromeSpy.threw()).to.be.true;
    expect(errorMessage).to.equal('palindrome-checker requires a string as input. The given input\'s type was "function".');
  });

  it('throws an error with a good message when the input is a symbol', () => {
    let isPalindromeSpy = sinon.spy(isPalindrome);
    let errorMessage = null;
    try {
      let result = isPalindromeSpy(Symbol());
    } catch(e) {
      errorMessage = e.message;
    }
    expect(isPalindromeSpy.threw()).to.be.true;
    expect(errorMessage).to.equal('palindrome-checker requires a string as input. The given input\'s type was "symbol".');
  });

  it('throws an error with a good message when the input is null', () => {
    let isPalindromeSpy = sinon.spy(isPalindrome);
    let errorMessage = null;
    try {
      let result = isPalindromeSpy(null);
    } catch(e) {
      errorMessage = e.message;
    }
    expect(isPalindromeSpy.threw()).to.be.true;
    expect(errorMessage).to.equal('palindrome-checker requires a string as input. The given input\'s type was "null".');
  });

});
