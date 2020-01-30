function truncateString(str, num) {
    // Clear out that junk in your trunk
    
    //var revNum = num * -1;
    
    if (str.length <= num)
      {
        return str;
      }
    
    
    if (num <= 3){
        newStr = str.slice(0, num);
    }
    else{
        newStr = str.slice(0, num - 3);
    }   
  
    newStr = newStr + '...';
    return newStr;
  }
  
  truncateString("A-tisket a-tasket A green and yellow basket", 11);
  truncateString("A-", 1);
  