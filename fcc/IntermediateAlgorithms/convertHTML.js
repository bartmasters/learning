function convertHTML(str) {
  var newStr = str.replace(/&/g, '&amp;');
  newStr = newStr.replace(/</g, '&lt;');
  newStr = newStr.replace(/>/g, '&gt;');
  newStr = newStr.replace(/"/g, '&quot;');
  newStr = newStr.replace(/'/g, '&apos;');

  return newStr;
}

convertHTML('Hamburgers < Pizza < Tacos');
