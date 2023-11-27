document.addEventListener('DOMContentLoaded', function() {
    const calculateBtn = document.getElementById('calculate-btn');
    const resultBox = document.getElementById('result-box');
    const animationContainer = document.getElementById('animation-container');
    const fibonacciResult = document.getElementById('fibonacci-result');
  
    calculateBtn.addEventListener('click', function() {
      const numberOfTerms = document.getElementById('number').value;
      animateFibonacciSeries(numberOfTerms);
    });
  
    function calculateFibonacci(n){
      if (n <= 0) {
        return [];
      } else if (n === 1) { 
        return [0];
      } else if (n === 2) {
        return [0, 1];
      } else {
        const series = [0, 1];
        for (let i = 2; i < n; i++) {
          series.push(series[i - 1] + series[i - 2]);
        }
        return series;
      }
    }
  
    function animateFibonacciSeries(n) {
      clearAnimationContainer();
      fadeIn(resultBox);
  
      const fibonacciSeries = calculateFibonacci(n);
  
      for (let i = 0; i < fibonacciSeries.length; i++) {

        const animationBox = createAnimationBox(i + 1, fibonacciSeries[i]);
        animateBox(animationBox, i + 1);
        setTimeout(() => {
          animationBox.style.backgroundColor = getRandomColor();
        }, (i + 1) * 1000); 
      }
  
      setTimeout(() => {
        fibonacciResult.innerText = `Fibonacci Series: ${fibonacciSeries.join(', ')}`;
      }, (n + 1) *1000); 
    }
  
    function createAnimationBox(iteration, value) {
      const animationBox = document.createElement('div');
      animationBox.className = 'animation-box';
      animationBox.innerHTML = `<span style="color:white; position:relative; top:-15px; ">${iteration}</span><span style= "font-weight:bold; font-size:30px">${value}</span>`;
      animationContainer.appendChild(animationBox);
      return animationBox;
    }
  
    function animateBox(animationBox, iteration) {
      setTimeout(() => {
        fadeIn(animationBox);
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
  