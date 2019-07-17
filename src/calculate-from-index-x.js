import toObject from 'to-object-x';
import toLength from 'to-length-x';
import toInteger from 'to-integer-x';
import isArrayLike from 'is-array-like-x';

const getMax = function getMax(a, b) {
  return a >= b ? a : b;
};

/**
 * This method calculates a fromIndex of a given value for an array.
 *
 * @param {Array} array - * The array on which to calculate the starting index.
 * @throws {TypeError} If array is null or undefined.
 * @param {number} fromIndex - * The position in this array at which to begin. A
 *  negative value gives the index of array.length + fromIndex by asc.
 * @returns {number} The calculated fromIndex. Default is 0.
 */
const calcFromIndex = function calcFromIndex(array, fromIndex) {
  const object = toObject(array);

  if (isArrayLike(object) === false) {
    return 0;
  }

  const index = toInteger(fromIndex);

  return index >= 0 ? index : getMax(0, toLength(object.length) + index);
};

export default calcFromIndex;
