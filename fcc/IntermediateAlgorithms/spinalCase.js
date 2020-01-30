function spinalCase(str) {
    var regex = /\s|_/g;
  
    str = str.replace(/([a-z])([A-Z])/g, '$1 $2');
    str = str.replace(/\s|_/g, '-');
    str = str.toLowerCase();
    return str;
  }

console.log(spinalCase('thisIsSpinalTap'));


