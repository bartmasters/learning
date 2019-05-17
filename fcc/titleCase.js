function titleCase(str) {
    var inputSentence = str.split(" ");
    
    for (var i = 0; i < inputSentence.length; i++){
      var inputWord = inputSentence[i].split("");
      
      var j = 0;
      inputWord[0] = inputWord[0].toUpperCase();
      console.log(inputWord[0]);
      j++;
      
      while (j < inputWord.length){
        inputWord[j] = inputWord[j].toLowerCase();
        j++;
      }
      inputSentence[i] = inputWord.join("");
    }
    str = inputSentence.join(" ");
    console.log("hello");
    
    return str;
  }
  
  titleCase("I'm a little tea pot");