function repeatStringNumTimes(str, num) {
    // repeat after me
    
    var outputArray = [];
    
    for (var i = 1; i <= num; i++){
      outputArray.push(str);
    }
    str = outputArray.join('');
    return str;
  }
  
  repeatStringNumTimes("abc", 3);
  