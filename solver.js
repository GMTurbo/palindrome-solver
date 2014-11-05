// var events = require("events"),
//   util = require("util");

//make a single solver

var PSolver = function psolver(options) {

  options = options || {};

  debug = options.debug || false;

  var permutate = (function() {

    var results = [];

    function doPermute(input, output, used, size, level) {

      if (size == level) {
        var word = output.join('');
        results.push(word);
        return;
      }

      level++;

      for (var i = 0; i < input.length; i++) {

        if (used[i] === true) {
          continue;
        }

        used[i] = true;

        output.push(input[i]);

        doPermute(input, output, used, size, level);

        used[i] = false;

        output.pop();
      }
    }

    return {
      getPermutations: function(input, size) {
        results = [];
        var chars = input.split('');
        var output = [];
        var used = new Array(chars.length);

        doPermute(chars, output, used, size, 0);

        return results;
      }
    }
  })();

  function _getAllCombinations(word) {
  //  debugger;
    var result = [];
    for (var i = word.length - 1; i > -1; i--) {
      result = result.concat(permutate.getPermutations(word, word.length - i));
    }
    return result;
  }

  function _isPalindrome(word){
    //debugger;

    if(word.length < 3)
     return false;

    var left = 0, right = word.length-1;

    while(word[left] == word[right]){
      if(left == right || Math.abs(left-right) == 1)
        return true;
      left++;
      right--;
    }

    return false;
  }

  function _getAllPalindromes(combos) {

    var result = [];

    for(var i = 0 ; i < combos.length; i++){
      //check each combo
      if(combos.length < 3)
        continue;
      if(_isPalindrome(combos[i]))
        if(!result[combos[i]]){
          result[combos[i]] = 1;
        }
  //      result = result.concat(combos[i]);
    }

    return result;
  }



  function solve(word, cb) {
    //all combos
    //debugger;
    debug&&console.time('run time');

    var combos = _getAllCombinations(word);
    var palindromes = _getAllPalindromes(combos);

    debug&&console.timeEnd('run time');

    cb({
      value: Object.keys(palindromes)
    });

  }


  return {
    solve: solve
  }
}

var word = process.argv[2] || "Gabe";

var solver = new PSolver({debug:true});

solver.solve(word, function(answer) {
  //answer should be an array
  console.log(answer.value);
});

//module.exports = PSolver;
