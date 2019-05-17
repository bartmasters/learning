/*Find the smallest common multiple of the provided parameters that can be evenly divided by both, 
as well as by all sequential numbers in the range between these parameters.

The range will be an array of two numbers that will not necessarily be in numerical order.

e.g. for 1 and 3 - find the smallest common multiple of both 1 and 3 that is evenly divisible 
by all numbers between 1 and 3.*/

function smallestCommons(arr) {

  // Firstly make sure the input numbers are in order, then create an array with all intermediate numbers

  arr.sort();
  var rangeArray = [];
  
  for (var i=arr[0]; i<=arr[1]; i++){
    rangeArray.push(i);
  }

    var num = rangeArray[0];
    var j = 1;

  // Need to properly understand this code
    for (i = 1; i < rangeArray.length; i++){
      while (num % rangeArray[i] !== 0) {
        j = j + 1;
        num = j * rangeArray[0];
      }
      rangeArray[0] = num;
      j = 1;
    }
return num;
}

smallestCommons([5,1]);