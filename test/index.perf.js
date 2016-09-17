const chai = require('chai');
const expect = chai.expect;
const sinon = require('sinon');
const microtime = require('microtime');
const sum = require('lodash.sum');

const isPalindrome = require('../index');

describe("Palindrome Checker Performance Tests", function() {

  it('meets performance requirements for an empty string', () => {
    let result = isPalindrome('');
    expect(result).to.be.true;
    let averageRunDuration = benchmark(isPalindrome, '', 1000)
    expect(averageRunDuration).to.be.lessThan(4);
  });
  it('meets performance requirements for a single character', () => {
    let result = isPalindrome('a');
    expect(result).to.be.true;
    let averageRunDuration = benchmark(isPalindrome, 'a', 1000)
    expect(averageRunDuration).to.be.lessThan(4);
  });
  it('meets performance requirements for a palindromic word', () => {
    let result = isPalindrome('hannah');
    expect(result).to.be.true;
    let averageRunDuration = benchmark(isPalindrome, 'hannah', 1000)
    expect(averageRunDuration).to.be.lessThan(5);
  });
  it('meets performance requirements for a non-palindromic word', () => {
    let result = isPalindrome('spanner');
    expect(result).to.be.false;
    let averageRunDuration = benchmark(isPalindrome, 'spanner', 1000)
    expect(averageRunDuration).to.be.lessThan(5);
  });
  it('meets performance requirements for a palindromic sentence with capitalisation', () => {
    let result = isPalindrome('Mr owl ate my metal worm');
    expect(result).to.be.true;
    let averageRunDuration = benchmark(isPalindrome, 'Mr owl ate my metal worm', 1000)
    expect(averageRunDuration).to.be.lessThan(6);
  });
  it('meets performance requirements for a palindromic sentence with multiple capitalisations', () => {
    let result = isPalindrome('Never Odd Or Even');
    expect(result).to.be.true;
    let averageRunDuration = benchmark(isPalindrome, 'Never Odd Or Even', 1000)
    expect(averageRunDuration).to.be.lessThan(6);
  });
  it('meets performance requirements for a non-palindromic sentence with multiple capitalisations', () => {
    let result = isPalindrome('Never Even Or Odd');
    expect(result).to.be.false;
    let averageRunDuration = benchmark(isPalindrome, 'Never Even Or Odd', 1000)
    expect(averageRunDuration).to.be.lessThan(6);
  });
});

function benchmark(func, param, iterations) {
  let results = [];
  for(let i = 0; i < iterations; ++i) {
    let start = microtime.now();
    func(param)
    let end = microtime.now();
    results.push(end - start);
  }
  return sum(results) / results.length;
}
