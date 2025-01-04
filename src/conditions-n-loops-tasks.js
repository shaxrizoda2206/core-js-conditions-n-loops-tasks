/* *******************************************************************************************
 *                                                                                           *
 * Please read the following tutorial before implementing tasks:                             *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration         *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch       *
 *                                                                                           *
 ******************************************************************************************* */

/**
 * Determines whether a given number is positive. Zero is considered positive.
 * This function does not use Number or Math class methods.
 *
 * @param {number} number - The number to check.
 * @return {boolean} True if the number is positive or zero, false otherwise.
 *
 * @example:
 *  10 => true
 *  0  => true
 *  -5 => false
 */
function isPositive(number) {
  if (number < 0) {
    return false;
  }
  return true;
}

/**
 * Returns the maximum of three numbers without using Array and Math classes methods.
 *
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @param {number} c - The third number.
 * @return {number} The maximum of the three numbers.
 *
 * @example:
 *  1, 2, 3       => 3
 *  -5, 0, 5      => 5
 *  -0.1, 0, 0.2  => 0.2
 */
function getMaxNumber(a, b, c) {
  let max = a;

  if (b > max) {
    max = b;
  }

  if (c > max) {
    max = c;
  }

  return max;
}

/**
 * Checks if a queen can capture a king in the next move on an 8x8 chessboard.
 * See more details at https://en.wikipedia.org/wiki/Queen_(chess)
 *
 * @typedef {{
 *  x: number,
 *  y: number
 * }} Position
 * @param {Object} queen - The position of the queen.
 * @param {Object} king - The position of the king.
 * @return {boolean} True if the queen can capture the king, false otherwise.
 *
 * @example
 * {x: 1, y: 1}, {x: 5, y: 5} => true
 * {x: 2, y: 1}, {x: 2, y: 8} => true
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 */
function canQueenCaptureKing(queen, king) {
  if (queen.y === king.y) {
    return true;
  }
  if (queen.x === king.x) {
    return true;
  }

  let dx = queen.x - king.x;
  let dy = queen.y - king.y;

  if (dx < 0) {
    dx = -dx;
  }
  if (dy < 0) {
    dy = -dy;
  }

  if (dx === dy) {
    return true;
  }

  return false;
}

/**
 * Determines whether a triangle is isosceles based on its side lengths.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} a - The length of the first side.
 * @param {number} b - The length of the second side.
 * @param {number} c - The length of the third side.
 * @return {boolean} True if the triangle is isosceles, false otherwise.
 *
 * @example:
 *  1, 2, 3   => false
 *  3, 1, 2   => false
 *  2, 3, 2   => true
 *  3, 2, 2   => true
 *  2, 2, 3   => true
 *  2, 2, 5   => false
 *  3, 0, 3   => false
 */
function isIsoscelesTriangle(a, b, c) {
  if (a <= 0 || b <= 0 || c <= 0) {
    return false;
  }
  if (a + b <= c || a + c <= b || b + c <= a) {
    return false;
  }
  if (a === b || b === c || a === c) {
    return true;
  }
  return false;
}

/**
 * Converts a number to Roman numerals. The number will be between 1 and 39.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to convert.
 * @return {string} The Roman numeral representation of the number.
 *
 * @example:
 *  1   => I
 *  2   => II
 *  5   => V
 *  10  => X
 *  26  => XXVI
 */
function convertToRomanNumerals(num) {
  let result = '';
  let temp = num;

  let tens = 0;
  while (temp >= 10) {
    tens += 1;
    temp -= 10;
  }

  if (tens === 3) {
    result += 'XXX';
  } else if (tens === 2) {
    result += 'XX';
  } else if (tens === 1) {
    result += 'X';
  }

  if (temp === 9) {
    result += 'IX';
  } else if (temp >= 5) {
    result += 'V';
    const leftover = temp - 5;
    let i = 0;
    while (i < leftover) {
      result += 'I';
      i += 1;
    }
  } else if (temp === 4) {
    result += 'IV';
  } else {
    let i = 0;
    while (i < temp) {
      result += 'I';
      i += 1;
    }
  }

  return result;
}

/**
 * Converts a number to a string, replacing digits with words.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} numberStr - The number as a string.
 * @return {string} The number with digits replaced by words.
 *
 * @example:
 *  '1'       => 'one'
 *  '10'      => 'one zero'
 *  '-10'     => 'minus one zero'
 *  '10.5'    => 'one zero point five'
 *  '10,5'    => 'one zero point five'
 *  '1950.2'  => 'one nine five zero point two'
 */
function convertNumberToString(numberStr) {
  let length = 0;
  while (numberStr[length] !== undefined) {
    length += 1;
  }
  let result = '';
  let needSpace = false;
  let i = 0;
  while (i < length) {
    const ch = numberStr[i];
    let word = null;
    switch (ch) {
      case '-':
        word = 'minus';
        break;
      case '.':
      case ',':
        word = 'point';
        break;
      case '0':
        word = 'zero';
        break;
      case '1':
        word = 'one';
        break;
      case '2':
        word = 'two';
        break;
      case '3':
        word = 'three';
        break;
      case '4':
        word = 'four';
        break;
      case '5':
        word = 'five';
        break;
      case '6':
        word = 'six';
        break;
      case '7':
        word = 'seven';
        break;
      case '8':
        word = 'eight';
        break;
      case '9':
        word = 'nine';
        break;
      default:
        word = ch;
        break;
    }
    if (word !== null) {
      if (needSpace) {
        result += ' ';
      }
      result += word;
      needSpace = true;
    }
    i += 1;
  }
  return result;
}

/**
 * Determines whether a string is a palindrome.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to check.
 * @return {boolean} True if the string is a palindrome, false otherwise.
 *
 * @example:
 *  'abcba'     => true
 *  '0123210'   => true
 *  'qweqwe'    => false
 */
function isPalindrome(str) {
  let length = 0;
  while (str[length] !== undefined) {
    length += 1;
  }

  let i = 0;
  while (i < length / 2) {
    if (str[i] !== str[length - 1 - i]) {
      return false;
    }
    i += 1;
  }

  return true;
}

/**
 * Finds the first occurrence of a letter in a string.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to search.
 * @param {string} letter - The letter to find.
 * @return {number} The index of the first occurrence of the letter, or -1 if not found.
 *
 * @example:
 *  'qwerty', 'q'     => 0
 *  'qwerty', 't'     => 4
 *  'qwerty', 'Q'     => -1
 *  'qwerty', 'p'     => -1
 */
function getIndexOf(str, letter) {
  let length = 0;
  while (str[length] !== undefined) {
    length += 1;
  }

  let i = 0;
  while (i < length) {
    if (str[i] === letter) {
      return i;
    }
    i += 1;
  }

  return -1;
}

/**
 * Checks if a number contains a specific digit.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to check.
 * @param {number} digit - The digit to search for.
 * @return {boolean} True if the number contains the digit, false otherwise.
 *
 * @example:
 *  123450, 5   => true
 *  123450, 1   => true
 *  123450, 0   => true
 *  12345, 0    => false
 *  12345, 6    => false
 */
function isContainNumber(num, digit) {
  let temp = num;

  if (temp < 0) {
    temp = -temp;
  }

  while (temp > 0) {
    const last = temp % 10;
    if (last === digit) {
      return true;
    }
    temp = (temp - last) / 10;
  }

  return false;
}

/**
 * Finds the index of an element in an array where the sum of elements to the left equals the sum of elements to the right.
 * If such an index does not return -1.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to check.
 * @return {number} The index of the balance point, or -1 if none exists.
 *
 * @example:
 *  [1, 2, 5, 3, 0] => 2    => 1 + 2 === 3 + 0 then balance element is 5 and its index = 2
 *  [2, 3, 9, 5] => 2       => 2 + 3 === 5 then balance element is 9 and its index = 2
 *  [1, 2, 3, 4, 5] => -1   => no balance element
 */
function getBalanceIndex(arr) {
  let length = 0;
  while (arr[length] !== undefined) {
    length += 1;
  }

  let totalSum = 0;
  let i = 0;
  while (i < length) {
    totalSum += arr[i];
    i += 1;
  }

  let leftSum = 0;
  i = 0;
  while (i < length) {
    const value = arr[i];
    const rightSum = totalSum - leftSum - value;

    if (leftSum === rightSum) {
      return i;
    }

    leftSum += value;
    i += 1;
  }

  return -1;
}

/**
 * Generates a spiral matrix of a given size, filled with numbers in ascending order starting from one.
 * The direction of filling with numbers is clockwise.
 * Usage of String and Array classes methods is not allowed in this task.
 *
 * @param {number} size - The size of the matrix.
 * @return {number[][]} The spiral matrix.
 *
 * @example:
 *        [
 *          [1, 2, 3],
 *  3  =>   [8, 9, 4],
 *          [7, 6, 5]
 *        ]
 *        [
 *          [1,  2,  3,  4],
 *  4  =>   [12, 13, 14, 5],
 *          [11, 16, 15, 6],
 *          [10, 9,  8,  7]
 *        ]
 */
function getSpiralMatrix(size) {
  const matrix = [];
  let rowIndex = 0;
  while (rowIndex < size) {
    matrix[rowIndex] = [];
    let colIndex = 0;
    while (colIndex < size) {
      matrix[rowIndex][colIndex] = 0;
      colIndex += 1;
    }
    rowIndex += 1;
  }

  let currentValue = 1;

  let left = 0;
  let right = size - 1;
  let top = 0;
  let bottom = size - 1;

  while (currentValue <= size * size) {
    let i = left;
    while (i <= right) {
      matrix[top][i] = currentValue;
      currentValue += 1;
      i += 1;
    }
    top += 1;

    if (currentValue > size * size) break;

    i = top;
    while (i <= bottom) {
      matrix[i][right] = currentValue;
      currentValue += 1;
      i += 1;
    }
    right -= 1;

    if (currentValue > size * size) break;

    i = right;
    while (i >= left) {
      matrix[bottom][i] = currentValue;
      currentValue += 1;
      i -= 1;
    }
    bottom -= 1;

    if (currentValue > size * size) break;

    i = bottom;
    while (i >= top) {
      matrix[i][left] = currentValue;
      currentValue += 1;
      i -= 1;
    }
    left += 1;
  }

  return matrix;
}

/**
 * Rotates a matrix by 90 degrees clockwise in place.
 * Take into account that the matrix size can be very large. Consider how you can optimize your solution.
 * Usage of String and Array class methods is not allowed in this task.
 *
 * @param {number[][]} matrix - The matrix to rotate.
 * @return {number[][]} The rotated matrix.
 *
 * @example:
 *  [                 [
 *    [1, 2, 3],        [7, 4, 1],
 *    [4, 5, 6],  =>    [8, 5, 2],
 *    [7, 8, 9]         [9, 6, 3]
 *  ]                 ]
 */
function rotateMatrix(matrixParam) {
  const matrix = matrixParam;
  const n = matrix.length;

  for (let i = 0; i < n; i += 1) {
    for (let j = i + 1; j < n; j += 1) {
      const temp = matrix[i][j];
      matrix[i][j] = matrix[j][i];
      matrix[j][i] = temp;
    }
  }

  for (let i = 0; i < n; i += 1) {
    let left = 0;
    let right = n - 1;
    while (left < right) {
      const temp = matrix[i][left];
      matrix[i][left] = matrix[i][right];
      matrix[i][right] = temp;
      left += 1;
      right -= 1;
    }
  }

  return matrix;
}

/**
 * Sorts an array of numbers in ascending order in place.
 * Employ any sorting algorithm of your choice.
 * Take into account that the array can be very large. Consider how you can optimize your solution.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to sort.
 * @return {number[]} The sorted array.
 *
 * @example:
 *  [2, 9, 5]       => [2, 5, 9]
 *  [2, 9, 5, 9]    => [2, 5, 9, 9]
 *  [-2, 9, 5, -3]  => [-3, -2, 5, 9]
 */
function sortByAsc(unsorted) {
  const arr = unsorted;

  function swap(i, j) {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }

  function partition(start, end) {
    let left = start;
    let right = end;
    const pivotIndex = Math.floor((start + end) / 2);
    const pivot = arr[pivotIndex];

    while (left <= right) {
      while (arr[left] < pivot) left += 1;
      while (arr[right] > pivot) right -= 1;

      if (left <= right) {
        swap(left, right);
        left += 1;
        right -= 1;
      }
    }
    return left;
  }

  function quickSort(start, end) {
    if (start >= end) return;
    const pivotIdx = partition(start, end);
    quickSort(start, pivotIdx - 1);
    quickSort(pivotIdx, end);
  }

  quickSort(0, arr.length - 1);
  return arr;
}

/**
 * Shuffles characters in a string so that the characters with an odd index are moved to the end of the string at each iteration.
 * Take into account that the string can be very long and the number of iterations is large. Consider how you can optimize your solution.
 * Usage of Array class methods is not allowed in this task.
 *
 * @param {string} str - The string to shuffle.
 * @param {number} iterations - The number of iterations to perform the shuffle.
 * @return {string} The shuffled string.
 *
 * @example:
 *  '012345', 1 => '024135'
 *  'qwerty', 1 => 'qetwry'
 *  '012345', 2 => '024135' => '043215'
 *  'qwerty', 2 => 'qetwry' => 'qtrewy'
 *  '012345', 3 => '024135' => '043215' => '031425'
 *  'qwerty', 3 => 'qetwry' => 'qtrewy' => 'qrwtey'
 */
function shuffleChar(str, iterations) {
  if (!str || iterations <= 0) {
    return str;
  }
  const n = str.length;
  if (n === 1) {
    return str;
  }

  const e = Math.floor((n + 1) / 2);

  function nextIndex(i) {
    if (i % 2 === 0) {
      return Math.floor(i / 2);
    }
    return e + Math.floor((i - 1) / 2);
  }

  const visited = new Array(n);
  for (let i = 0; i < n; i += 1) {
    visited[i] = false;
  }

  const result = new Array(n);

  for (let start = 0; start < n; start += 1) {
    if (!visited[start]) {
      const cycleIndices = [];
      let cycleSize = 0;
      let current = start;
      do {
        cycleIndices[cycleSize] = current;
        cycleSize += 1;
        visited[current] = true;

        current = nextIndex(current);
      } while (current !== start);

      const modSteps = iterations % cycleSize;

      for (let k = 0; k < cycleSize; k += 1) {
        const originalIndex = cycleIndices[k];
        const finalIndex = cycleIndices[(k + modSteps) % cycleSize];
        result[finalIndex] = str.charAt(originalIndex);
      }
    }
  }

  let output = '';
  for (let i = 0; i < n; i += 1) {
    output += result[i];
  }
  return output;
}

/**
 * Returns the nearest largest integer consisting of the digits of the given positive integer.
 * If there is no such number, it returns the original number.
 * Usage of String class methods is not allowed in this task.
 *
 * @example:
 * 12345    => 12354
 * 123450   => 123504
 * 12344    => 12434
 * 123440   => 124034
 * 1203450  => 1203504
 * 90822    => 92028
 * 321321   => 322113
 *
 * @param {number} number The source number
 * @returns {number} The nearest larger number, or original number if none exists.
 */
function getNearestBigger(number) {
  let temp = number;

  const original = temp;

  if (temp === 0) {
    return 0;
  }

  const digits = [];
  let index = 0;
  while (temp > 0) {
    const d = temp % 10;
    temp = (temp - d) / 10;
    digits[index] = d;
    index += 1;
  }

  const length = index;

  let pivot = -1;
  let i = 1;
  while (i < length) {
    if (digits[i] < digits[i - 1]) {
      pivot = i;
      break;
    }
    i += 1;
  }

  if (pivot === -1) {
    return original;
  }

  const pivotDigit = digits[pivot];
  let swapIndex = -1;
  let smallestAbovePivot = 10;
  let j = 0;
  while (j < pivot) {
    if (digits[j] > pivotDigit && digits[j] < smallestAbovePivot) {
      smallestAbovePivot = digits[j];
      swapIndex = j;
    }
    j += 1;
  }

  const tempDigit = digits[pivot];
  digits[pivot] = digits[swapIndex];
  digits[swapIndex] = tempDigit;

  let start = 0;
  let end = pivot - 1;
  while (start < end) {
    const t = digits[start];
    digits[start] = digits[end];
    digits[end] = t;
    start += 1;
    end -= 1;
  }

  let newNumber = 0;
  let mul = 1;
  i = 0;
  while (i < length) {
    newNumber += digits[i] * mul;
    mul *= 10;
    i += 1;
  }

  return newNumber;
}

module.exports = {
  isPositive,
  getMaxNumber,
  canQueenCaptureKing,
  isIsoscelesTriangle,
  convertToRomanNumerals,
  convertNumberToString,
  isPalindrome,
  getIndexOf,
  isContainNumber,
  getBalanceIndex,
  getSpiralMatrix,
  rotateMatrix,
  sortByAsc,
  shuffleChar,
  getNearestBigger,
};
