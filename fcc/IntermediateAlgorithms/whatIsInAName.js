function whatIsInAName(collection, source) {
    // What's in a name?
    var arr = [];
    // Only change code below this line

    var sourceKeys = Object.keys(source);

    for (var i = 0; i < collection.length; i++){
      var myFlag = false;

      for (var j = 0; j<sourceKeys.length; j++){
        if (collection[i][sourceKeys[j]] == source[sourceKeys[j]]){
          myFlag = true;
        }
        else {
          myFlag = false;
        }
      }
      if (myFlag){
        arr.push(collection[i]);
      }
    }

    // Only change code above this line
    return arr;
  }
  
//whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });

whatIsInAName([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "b": 2 })