function rot13(str) {
  // LBH QVQ VG!

  let outputStr = '';
  for (let i = 0; i < str.length; i += 1) {
    let code = str.charCodeAt(i);
    if (code >= 65 && code <= 90) {
      code += 13;
      if (code > 90) {
        code -= 26;
      }
    }
    outputStr += String.fromCharCode(code);
  }
  return outputStr;
}

// Change the inputs below to test
rot13('YHPVN FZRYYF');
