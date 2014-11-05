#Palindrome-solver

Get every possible palindrome within a word

##Example
```javascript
var PSolver = require('palindrome-solver');

var word = "anna";

var solver = new PSolver();

solver.palindromes(word, function(answer) {
  //answer is an array
  console.log(answer.type, '('+ answer.result.length +')-->', answer.result);
});

// palindromes run time: 0ms
//
// palindromes (4)--> [ 'ana', 'nan', 'anna', 'naan' ]

solver.combinations(word, function(answer) {
  //answer is an array
  console.log(answer.type, '('+ answer.result.length +')-->', answer.result);
});

// combinations run time: 0ms
//
// combinations (64)--> [ 'a',
//   'n',
//   'n',
//   'a',
//   'an',
//   'an',
//   'aa',
//   'na',
//   'nn',
//   'na',
//   'na',
//   'nn',
//   'na',
//   'aa',
//   'an',
//   'an',
//   'ann',
//   'ana',
//   'ann',
//   'ana',
//   'aan',
//   'aan',
//   'nan',
//   'naa',
//   'nna',
//   'nna',
//   'naa',
//   'nan',
//   'nan',
//   'naa',
//   'nna',
//   'nna',
//   'naa',
//   'nan',
//   'aan',
//   'aan',
//   'ana',
//   'ann',
//   'ana',
//   'ann',
//   'anna',
//   'anan',
//   'anna',
//   'anan',
//   'aann',
//   'aann',
//   'nana',
//   'naan',
//   'nnaa',
//   'nnaa',
//   'naan',
//   'nana',
//   'nana',
//   'naan',
//   'nnaa',
//   'nnaa',
//   'naan',
//   'nana',
//   'aann',
//   'aann',
//   'anan',
//   'anna',
//   'anan',
//   'anna' ]


```
##Performance

Finding all permutations of a word is *O(n!)* where n is the number of characters in the word.  You've been warned.
