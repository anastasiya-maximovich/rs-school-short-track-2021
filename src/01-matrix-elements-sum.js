
 function getMatrixElementsSum(matrix) {
  let sum = 0;

  for (let i = 0; i < matrix.length - 1; i++) {
    for (let y = 0; y < matrix[i].length; y++) {
      if (matrix[i][y] > 0) {
        // add the first line items if they are positive
        if (i === 0) {
          sum += matrix[i][y];
        }
        // if the current item in matrix is positive, add the item in the line below
        if (matrix[i + 1][y] > 0) {
          sum += matrix[i + 1][y];
        }
      }
    }
  }

  return sum;
}


module.exports = getMatrixElementsSum;
