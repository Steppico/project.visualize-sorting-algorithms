(() => {
  class SomeKindOfSort {
    constructor(array = []) {
      this.array = array;
      this.obj = {};
      this.greater = {};
      this.smaller = {};
      this.pieces = {};
    }
    sort() {
      const array = this.array;
      for (let i = 0; i < array.length; i++) {
        if (typeof array[i] !== "number" || isNaN(array[i])) {
          return undefined;
        }
      }
      const recursive = (array) => {
        if (array.length <= 1) {
          this.pieces[array] = array;
          return array;
        }
        const pivot = array[array.length - 1];
        this.obj[pivot] = "pivot"; //add a function that will create a div with the pivot
        let greater = [];
        let pivotList = [];
        let smaller = [];
        for (let i = 0; i < array.length; i++) {
          if (array[i] > pivot) {
            greater.push(array[i]);
            this.greater[i] = array[i];
          } else if (array[i] < pivot) {
            smaller.push(array[i]);
            this.smaller[i] = array[i];
          } else {
            pivotList.push(array[i]);
          }
        }
        return recursive(smaller).concat(pivotList, recursive(greater));
      };
      let result = recursive(array);
      return result;
    }
    funcPivot() {
      return this.obj;
    }
    funcGreater() {
      return this.greater;
    }
    funcSmaller() {
      return this.smaller;
    }
    pieces() {
      return this.pieces;
    }
    returnValue(value) {
      return value;
    }
  }

  module.exports = SomeKindOfSort;
})();
