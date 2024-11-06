class ArrayAnalyzer {
  // Create object and set methods for getting the properties.
  createObject(array) {
    const obj = {
      average: this.getAverage(array),
      min: '',
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
}

export default ArrayAnalyzer;
