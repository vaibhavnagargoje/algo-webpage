const matrixA = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

const matrixB = [
  [9, 8, 7],
  [6, 5, 4],
  [3, 2, 1]
];

const matrixContainerA = document.getElementById('matrixA');
const matrixContainerB = document.getElementById('matrixB');
const calculationSteps = document.getElementById('calculationSteps');
const resultMatrixDiv = document.getElementById('resultMatrix');

function displayMatrix(matrix, container) {
  matrix.forEach(row => {
      row.forEach(cell => {
          const cellDiv = document.createElement('div');
          cellDiv.classList.add('cell');
          cellDiv.textContent = cell;
          container.appendChild(cellDiv);
      });
  });
}

function multiplyMatrices(matrixA, matrixB) {
  const result = [];

  for (let i = 0; i < matrixA.length; i++) {
      const newRow = [];

      for (let j = 0; j < matrixB[0].length; j++) {
          let sum = 0;
          let calculation = '';

          for (let k = 0; k < matrixB.length; k++) {
              sum += matrixA[i][k] * matrixB[k][j];
              calculation += `${matrixA[i][k]} * ${matrixB[k][j]}`;
              if (k !== matrixB.length - 1) {
                  calculation += ' + ';
              }
          }

          newRow.push({ value: sum, calculation });
      }

      result.push(newRow);
  }

  return result;
}

function displayCalculationSteps(resultMatrix) {
  resultMatrix.forEach(row => {
      row.forEach(({ value, calculation }) => {
          const cellDiv = document.createElement('div');
          cellDiv.classList.add('cel');
          cellDiv.textContent = calculation + ' = ' + value;
          calculationSteps.appendChild(cellDiv);
      });
  });
}

function displayResultMatrix(resultMatrix) {
  resultMatrix.forEach(row => {
      const rowDiv = document.createElement('div');
      rowDiv.classList.add('row');

      row.forEach(({ value }) => {
          const cellDiv = document.createElement('div');
          cellDiv.classList.add('cell', 'result-cell');
          cellDiv.textContent = value;
          rowDiv.appendChild(cellDiv);
      });

      resultMatrixDiv.appendChild(rowDiv);
  });
}

displayMatrix(matrixA, matrixContainerA);
displayMatrix(matrixB, matrixContainerB);

const result = multiplyMatrices(matrixA, matrixB);
displayCalculationSteps(result);
displayResultMatrix(result);
