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
// combinations (18)-->
// [ 'a',
//   'n',
//   'an',
//   'aa',
//   'na',
//   'nn',
//   'ann',
//   'ana',
//   'aan',
//   'nan',
//   'naa',
//   'nna',
//   'anna',
//   'anan',
//   'aann',
//   'nana',
//   'naan',
//   'nnaa' ]


```
##Performance

Finding all permutations of a word is *O(n!)* where n is the number of characters in the word.  You've been warned.

##Combinations

Only unique combinations are returned.  Max possible combinations is N!.
