class ArrayAnalyzer {
  // Create object and set methods for getting the properties.
  createObject(array) {
    const obj = {
      average: this.getAverage(array),
      min: this.getMin(array),
      max: '',
      length: '',
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
    // Sort the array.
    const sortedArray = array.sort((a, b) => a - b);

    // Get the min value in the array.
    const minValue = sortedArray[0];

    return minValue;
  }
}

export default ArrayAnalyzer;
