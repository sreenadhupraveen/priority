function rotateClockwise(matrix) {
  const newMatrix = matrix[0].map(() => []);

  for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[0].length; j++) {
          newMatrix[j][matrix.length - 1 - i] = matrix[i][j];
      }
  }

  return newMatrix;
}


rotateClockwise([[1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]])

//   o/p should BeforeUnloadEvent
 
//   [[7, 4, 1],
//  [8, 5, 2],
//  [9, 6, 3]]