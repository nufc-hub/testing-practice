class CaesarCipher {
  shift(string, shiftFactor) {
    let newString = '';

    for (let i = 0; i < string.length; i++) {
      // Get ascii code.
      let asciiCode = this.getAsciiCode(string, i);

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

  // Used in the loop of the shift function.
  getAsciiCode(string, index) {
    let asciiCode = string.charCodeAt(index);
    return asciiCode;
  }
}

export default CaesarCipher;
