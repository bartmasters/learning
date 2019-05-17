
function mutation(arr) {
    //Split the second string into an array for searching.
    
    arr[0] = arr[0].toLocaleLowerCase();
    arr[1] = arr[1].toLocaleLowerCase();
    var searchArray = arr[1].split('');
    console.log(searchArray);
    console.log(arr[0]);
    
    for (var i = 0; i < searchArray.length; i++){
      if (arr[0].indexOf(searchArray[i]) == -1 ){
        return false;
      }
      //console.log(flag);
    }
    
      return true;
   
  }
  
  mutation(["hello", "hey"]);
  