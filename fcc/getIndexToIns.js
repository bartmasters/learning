
function getIndexToIns(arr, num) {
    // Find my place in this sorted array.
    
    arr.sort(function (a,b){return a-b;});
    console.log(arr);
    var i = 0;
    while (i < arr.length){
      if (arr[i] <= num && arr[i+1] >= num){
        console.log("found " + arr[i] + " for " + num + " and " + arr[i+1]);
        console.log("i is " + i);
        
        if (arr[i] == num){
          return i;
        }
          i++;
          return i;
      }
      i++;
    }
    return i;
  }
  
  getIndexToIns([40, 60], 50);
  