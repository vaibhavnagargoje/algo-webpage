document.addEventListener('DOMContentLoaded', function() {
  const calculateBtn = document.getElementById('calculate-btn');
  const resultBox = document.getElementById('result-box');
  const animationContainer = document.getElementById('animation-container');
  const factorialResult = document.getElementById('factorial-result');

  calculateBtn.addEventListener('click', function() {
    const inputNumber = document.getElementById('number').value;
    animateCalculation(inputNumber);
  });

  function calculateFactorial(n) {
    if (n === 0 || n === 1) {
      return 1;
    } else {
      return n * calculateFactorial(n - 1);
    }
  }

  function animateCalculation(n) {
    clearAnimationContainer();
    fadeIn(resultBox);

    for (let i = 1; i <= n; i++) {
      const animationBox = createAnimationBox(i);
      animateBox(animationBox, i);
      setTimeout(() => {
        animationBox.style.backgroundColor = getRandomColor();
      }, i * 1000); // Adjust the timeout for smooth animation
    }

    setTimeout(() => {
      const result = calculateFactorial(n);
      factorialResult.innerText = `Factorial: ${result}`;
    }, (n + 1) * 1000); // Adjust the timeout for smooth animation
  }

  function createAnimationBox(iteration) {
    const animationBox = document.createElement('div');
    animationBox.className = 'animation-box';
    animationBox.innerHTML = `<span style="color:white;">${iteration}</span>`;
    animationContainer.appendChild(animationBox);
    return animationBox;
  }

  function animateBox(animationBox, iteration) {
    setTimeout(() => {
      fadeIn(animationBox);
      const result = calculateFactorial(iteration);
      animationBox.innerHTML += `<span style="margin-top:10px; font-weight:bold; font-size:30px" >${result}</span>`;
    }, iteration * 1000); // Adjust the timeout for smooth animation
  }

  function clearAnimationContainer() {
    animationContainer.innerHTML = '';
  }

  function fadeIn(element) {
    element.style.opacity = 1;
  }

  function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
});
