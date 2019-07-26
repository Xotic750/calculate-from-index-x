<a
  href="https://travis-ci.org/Xotic750/calculate-from-index-x"
  title="Travis status">
<img
  src="https://travis-ci.org/Xotic750/calculate-from-index-x.svg?branch=master"
  alt="Travis status" height="18">
</a>
<a
  href="https://david-dm.org/Xotic750/calculate-from-index-x"
  title="Dependency status">
<img src="https://david-dm.org/Xotic750/calculate-from-index-x/status.svg"
  alt="Dependency status" height="18"/>
</a>
<a
  href="https://david-dm.org/Xotic750/calculate-from-index-x?type=dev"
  title="devDependency status">
<img src="https://david-dm.org/Xotic750/calculate-from-index-x/dev-status.svg"
  alt="devDependency status" height="18"/>
</a>
<a
  href="https://badge.fury.io/js/calculate-from-index-x"
  title="npm version">
<img src="https://badge.fury.io/js/calculate-from-index-x.svg"
  alt="npm version" height="18">
</a>
<a
  href="https://www.jsdelivr.com/package/npm/calculate-from-index-x"
  title="jsDelivr hits">
<img src="https://data.jsdelivr.com/v1/package/npm/calculate-from-index-x/badge?style=rounded"
  alt="jsDelivr hits" height="18">
</a>
<a
  href="https://bettercodehub.com/results/Xotic750/calculate-from-index-x"
  title="bettercodehub score">
<img src="https://bettercodehub.com/edge/badge/Xotic750/calculate-from-index-x?branch=master"
  alt="bettercodehub score" height="18">
</a>

<a name="module_calculate-from-index-x"></a>

## calculate-from-index-x

Calculates a fromIndex of a given value for an array.

<a name="exp_module_calculate-from-index-x--module.exports"></a>

### `module.exports(array, fromIndex)` ⇒ <code>number</code> ⏏

This method calculates a fromIndex of a given value for an array.

**Kind**: Exported function  
**Returns**: <code>number</code> - The calculated fromIndex. Default is 0.  
**Throws**:

- <code>TypeError</code> If array is null or undefined.

| Param     | Type                | Description                                                                                                           |
| --------- | ------------------- | --------------------------------------------------------------------------------------------------------------------- |
| array     | <code>array</code>  | \* The array on which to calculate the starting index.                                                                |
| fromIndex | <code>number</code> | \* The position in this array at which to begin. A negative value gives the index of array.length + fromIndex by asc. |

**Example**

```js
import calcFromIndex from 'calculate-from-index-x';

console.log(calcFromIndex([1, 2, 3], 1)); // 1
console.log(calcFromIndex([1, 2, 3], Infinity)); // Infinity
console.log(calcFromIndex([1, 2, 3], -Infinity)); // 0
console.log(calcFromIndex([1, 2, 3], -1)); // 2
```
