class CaesarCipher {
  shift(string, shiftFactor) {
    let newString = '';

    for (let i = 0; i < string.length; i++) {
      let asciiCode = string.charCodeAt(i);

      // Handle uppercase
      if (asciiCode >= 65 && asciiCode <= 90) {
        asciiCode = ((asciiCode - 65 + shiftFactor) % 26) + 65;
        newString += String.fromCharCode(asciiCode);
      }

      // Handle lowercase
      else if (asciiCode >= 97 && asciiCode <= 122) {
        asciiCode = ((asciiCode - 97 + shiftFactor) % 26) + 97;
        newString += String.fromCharCode(asciiCode);
      }

      // Handle non letter characters
      else {
        newString += String.fromCharCode(asciiCode);
      }
    }

    return newString;
  }
}

export default CaesarCipher;
