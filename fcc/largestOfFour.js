function largestOfFour(arr) {
    // First get each main array
    
    var OutputArray = [0,0,0,0];
    
    for (var i = 0; i < arr.length; i++){
      var largestNum = 0;
      
      for (var j = 0; j < arr[i].length; j++){
        if (arr[i][j] > largestNum){
          OutputArray[i] = arr[i][j];
          largestNum = arr[i][j];
        }
      }
    }
    return OutputArray;
  }
  
  largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);  