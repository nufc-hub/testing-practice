class CaesarCipher {
  shift(string, shiftFactor) {
    let newString = '';

    for (let i = 0; i < string.length; i++) {
      // Get ascii code.
      let asciiCode = this.getAsciiCode(string, i);

      // Handle uppercase.
      if (asciiCode >= 65 && asciiCode <= 90) {
        asciiCode = this.upperCaseTextWrap(asciiCode, shiftFactor);
        newString += this.charCodeToString(asciiCode);
      }

      // Handle lowercase.
      else if (asciiCode >= 97 && asciiCode <= 122) {
        asciiCode = this.lowerCaseTextWrap(asciiCode, shiftFactor);
        newString += this.charCodeToString(asciiCode);
      }

      // Handle non letter characters.
      else {
        newString += this.charCodeToString(asciiCode);
      }
    }

    return newString;
  }

  // Used in the loop of the shift function.
  getAsciiCode(string, index) {
    const asciiCode = string.charCodeAt(index);
    return asciiCode;
  }

  // Text wrap.

  upperCaseTextWrap(asciiCode, shiftFactor) {
    const newAsciiCode = ((asciiCode - 65 + shiftFactor) % 26) + 65;
    return newAsciiCode;
  }

  lowerCaseTextWrap(asciiCode, shiftFactor) {
    const newAsciiCode = ((asciiCode - 97 + shiftFactor) % 26) + 97;
    return newAsciiCode;
  }

  // Gets character from its corresponding code and puts it in a string.
  charCodeToString(asciiCode) {
    const string = String.fromCharCode(asciiCode);
    return string;
  }
}

export default CaesarCipher;
