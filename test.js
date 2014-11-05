
var PSolver = require('./solver.js');

var word = process.argv[2] || "anna";

var solver = new PSolver({
  debug: true
});

solver.palindromes(word, function(answer) {
  //answer should be an array
  console.log(answer.type, '('+ answer.result.length +')-->', answer.result);
});

solver.combinations(word, function(answer) {
  //answer is an array
  console.log(answer.type, '('+ answer.result.length +')-->', answer.result);
});
