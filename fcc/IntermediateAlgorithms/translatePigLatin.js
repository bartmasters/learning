function translatePigLatin(str) {

    var firstConsonant;
    for (var i=0; i<str.length; i++){
        if (str.charAt(i) == 'a' || 
            str.charAt(i) =='e' ||
            str.charAt(i) == 'i' || 
            str.charAt(i) == 'o' || 
            str.charAt(i) == 'u'){
            firstConsonant = i;
            i = str.length;
        }
    }
    var consonantCluster = str.substr(0,firstConsonant);
    if (firstConsonant == 0){
        consonantCluster = consonantCluster + "w";
    }
    var vowels = str.substr(firstConsonant,str.length);
    consonantCluster = consonantCluster + "ay";

    return vowels + consonantCluster;
  }
  
  console.log(translatePigLatin("glove"));
