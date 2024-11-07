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
    // Get the min value in the array.
    return Math.min(...array);
  }

  // Returns the max value in the array.
  getMax(array) {
    // Get the max value in the array.
    return Math.max(...array);
  }

  // Returns the length of the array.
  getLength(array) {
    return array.length;
  }
}

export default ArrayAnalyzer;
