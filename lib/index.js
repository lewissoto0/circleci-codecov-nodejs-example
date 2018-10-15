'use strict';

function fizzbuzz(num) {
  let output = '';
  
  if(num % 3 === 0) {
    output += 'fizz';
  }

  if(num % 5 === 0) {
    output += 'buzz'
  }

  return output || num;
}

module.exports = fizzbuzz;
