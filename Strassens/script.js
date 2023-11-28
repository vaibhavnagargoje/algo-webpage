const X = [
    [12, 34],
    [22, 10]
];

const Y = [
    [3, 4],
    [2, 1]
];

const z = [[], []];

let m1 = (X[0][0] + X[1][1]) * (Y[0][0] + Y[1][1]);
let m2 = (X[1][0] + X[1][1]) * Y[0][0];
let m3 = X[0][0] * (Y[0][1] - Y[1][1]);
let m4 = X[1][1] * (Y[1][0] - Y[0][0]);
let m5 = (X[0][0] + X[0][1]) * Y[1][1];
let m6 = (X[1][0] - X[0][0]) * (Y[0][0] + Y[0][1]);
let m7 = (X[0][1] - X[1][1]) * (Y[1][0] + Y[1][1]);
z[0][0] = m1 + m4 - m5 + m7;
z[0][1] = m3 + m5;
z[1][0] = m2 + m4;
z[1][1] = m1 - m2 + m3 + m6;

// for (let i = 0; i < 2; i++) {
//     for (let j = 0; j < 2; j++) {
//         console.log(z[i][j]);
//     }
// }

const matrixContainerA = document.getElementById('X');
const matrixContainerB = document.getElementById('Y');
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

function multiplyMatrices(X, Y) {
    const result = [];

    for (let i = 0; i < X.length; i++) {
        const newRow = [];

        for (let j = 0; j < Y[0].length; j++) {
            let sum = 0;
            let calculation = '';

            for (let k = 0; k < Y.length; k++) {
                sum += X[i][k] * Y[k][j];
                calculation += `${X[i][k]} * ${Y[k][j]}`;
                if (k !== Y.length - 1) {
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

function show() {
    const cell = document.querySelectorAll(".cell")
    const c1 = matrixContainerA.querySelectorAll(".cell");
    const c2 = matrixContainerB.querySelectorAll(".cell");
    var count = 0;
    for (let i = 0; i < X.length; i++) {
        for (let i = 0; i < X.length; i++) {
            c1[count++].style.backgroundColor = "red";
            cell[count].style.transition = "background-color 0.5s ease";
        }
    }
    console.log(cell[count-1]);
}

displayMatrix(X, matrixContainerA);
displayMatrix(Y, matrixContainerB);

const result = multiplyMatrices(X, Y);
// displayCalculationSteps(result);
displayResultMatrix(result);
show();