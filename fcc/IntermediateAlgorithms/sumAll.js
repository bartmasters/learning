
function sumAll(arr) {
    var minNum = Math.min(arr[0],arr[1]);
    var maxNum = Math.max(arr[0],arr[1]);
    
    var count = 0;
    for (var i = minNum; i <= maxNum; i++){
      count += i;
    }
    return count;
  }
  
  sumAll([4, 1]);
  