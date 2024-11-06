class ArrayAnalyzer {
  // Create object and set methods for getting the properties.
  createObject(array) {
    const obj = {
      average: this.getAverage(array), // The average value in the array.
      min: this.getMin(array), // The min value in the array.
      max: this.getMax(array), // The max value in the array.
      length: this.getLength(array), // The length of the array.
    };

    return obj;
  }

  // Returns the array average.
  getAverage(array) {
    // Get sum of all numbers in array.
    const sum = array.reduce((accumulator, currentValue) => {
      return accumulator + currentValue;
    }, 0);

    const average = sum / array.length;

    return average;
  }

  // Returns the min value in the array.
  getMin(array) {
    // Sort the array - lowest to highest.
    const sortedArray = array.sort((a, b) => a - b);

    // Get the min value in the array.
    const minValue = sortedArray[0];

    return minValue;
  }

  // Returns the max value in the array.
  getMax(array) {
    // Sort the array - highest to lowest.
    const sortedArray = array.sort((a, b) => b - a);

    // Get the max value in the array.
    const maxValue = sortedArray[0];

    return maxValue;
  }

  // Returns the length of the array.
  getLength(array) {
    return array.length;
  }
}

export default ArrayAnalyzer;
