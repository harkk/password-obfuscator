var password = process.argv[2];

function obfuscate(str) {
  var newString = "";
  for (var i = 0; i < str.length; i++) {
    if (str[i] === "a") {
      newString += "4";
    } else if (str[i] === "e") {
      newString += "3";
    } else if (str[i] === "o") {
      newString += "0";
    } else if (str[i] === "l") {
      newString += "1";
    } else {
      newString += str[i];
    }
  }
  return newString;
}
console.log(obfuscate(password));