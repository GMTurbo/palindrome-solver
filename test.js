
var PSolver = require('./solver.min.js');

var word = process.argv[2] || "anna";

var solver = new PSolver({
  debug: true
});

solver.palindromes(word, function(answer) {
  console.log(answer.type, '('+ answer.result.length +')-->\n', answer.result);
});

solver.combinations(word, function(answer) {
  console.log(answer.type, '('+ answer.result.length +')-->\n');
});
