function confirmEnding(str, target) {
    // "Never give up and good luck will find you."
    // -- Falcor

    var targetLength = target.length;
    var strWord = str.substring(str.length - targetLength);
    
    if (strWord == target){
      return true;
    }
    else {
      return false;
    }
    console.log("hello");
  }
  
  confirmEnding("Bastian", "n");
  