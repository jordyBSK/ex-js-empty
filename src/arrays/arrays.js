import * as string_decoder from "string_decoder";

/**
 * @param {array<string>} array An array containing words and sentences
 * @return {array<string>} An array with all words isolated, and with empty strings removed
 */

export function splitAllStringsByWordAndFilterEmptyOnes(array) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    let splitArray = array[i].split(' ');

    for (let j = 0; j < splitArray.length; j++) {
      if (splitArray[j] !== '') {
        newArray.push(splitArray[j]);
      }
    }
  }
  return newArray;
}

/**
 * @param {*[]} array1
 * @param {*[]} array2
 * @return {*[]} return an array containing all elements from the two given arrays
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
 */
export function concatenateArrays(array1, array2) {
  //
  const concatArray = array1.concat(array2);

  return concatArray
}

/**
 * @param {array} array an array of arbitrary elements
 * @param {number} index where you need to replace the element in the array
 * @param {...*} newElements
 * @return {array<*>} A new array, sorted, **the original array should not be modified**
 */
export function replaceElementsInArrayAtAGivenPlace(array, index, ...newElements) {
  //
  let newArray = [...array]
  newArray.splice(index, newElements.length, newElements)
  return newArray.flat()
}
