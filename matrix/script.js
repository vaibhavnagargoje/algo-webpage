document.addEventListener('DOMContentLoaded', function() {
  const calculateBtn = document.getElementById('calculate-btn');
  const matrix1Inputs = document.querySelectorAll('#matrix1 .input');
  const matrix2Inputs = document.querySelectorAll('#matrix2 .input');
  const resultInputs = document.querySelectorAll('.result .input');
  const animationBox = document.getElementById('animation');

  calculateBtn.addEventListener('click', () => {
    const matrix1 = getMatrixValues(matrix1Inputs);
    const matrix2 = getMatrixValues(matrix2Inputs);

    if (matrix1.includes(null) || matrix2.includes(null)) {
      alert('Please fill in all matrix values');
      return;
    }

    multiplyMatrices(matrix1, matrix2);
  });

  function getMatrixValues(inputs) {
    const values = [];
    inputs.forEach(input => {
      values.push(parseFloat(input.value) || null);
    });
    return values;
  }

  function multiplyMatrices(matrix1, matrix2) {
    animateMultiplication(matrix1, matrix2);
    displayResult(matrix1, matrix2);
  }

  function animateMultiplication(matrix1, matrix2) {
    const results = [
      matrix1[0] * matrix2[0] + matrix1[1] * matrix2[2],
      matrix1[0] * matrix2[1] + matrix1[1] * matrix2[3],
      matrix1[2] * matrix2[0] + matrix1[3] * matrix2[2],
      matrix1[2] * matrix2[1] + matrix1[3] * matrix2[3],
    ];

    let counter = 0;
    const interval = setInterval(() => {
      if (counter === 4) {
        clearInterval(interval);
        return;
      }
      animateResult(counter, results[counter]);
      counter++;
    }, 500);
  }

  function displayResult(matrix1, matrix2) {
    const results = [
      matrix1[0] * matrix2[0] + matrix1[1] * matrix2[2],
      matrix1[0] * matrix2[1] + matrix1[1] * matrix2[3],
      matrix1[2] * matrix2[0] + matrix1[3] * matrix2[2],
      matrix1[2] * matrix2[1] + matrix1[3] * matrix2[3],
    ];

    resultInputs[0].value = results[0];
    resultInputs[1].value = results[1];
    resultInputs[2].value = results[2];
    resultInputs[3].value = results[3];
  }

  function animateResult(index, value) {
    setTimeout(() => {
      resultInputs[index].style.opacity = '0';
      setTimeout(() => {
        resultInputs[index].value = value;
        resultInputs[index].style.opacity = '1';
      }, 200);
    }, index * 300);
  }
});
