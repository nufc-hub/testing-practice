function reverseString(string) {
  // Reversed string will be added to this variable.
  let reversedString = '';

  // Start at the last letter of the string and work backwards.
  for (let i = string.length - 1; i >= 0; i--) {
    const letter = string[i];

    // Add letter to string.
    reversedString += letter;
  }
  return reversedString;
}

export default reverseString;
