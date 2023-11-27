document.addEventListener('DOMContentLoaded', function() {
    const checkBtn = document.getElementById('check-btn');
    const resultBox = document.getElementById('result-box');
    const leftBox = document.getElementById('left-box');
    const rightBox = document.getElementById('right-box');
    const palindromeResult = document.getElementById('palindrome-result');
  
    checkBtn.addEventListener('click', function() {
      const input = document.getElementById('input').value;
      animatePalindromeCheck(input);
    });
  
    function isPalindrome(str) {
      const cleanedStr = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
      const reversedStr = cleanedStr.split('').reverse().join('');
      return cleanedStr === reversedStr;
    }
  
    function animatePalindromeCheck(input) {
      clearAnimation();
      fadeIn(resultBox);
  
      const length = input.length;
      const halfLength = Math.ceil(length / 2);
  
      for (let i = 0; i < halfLength; i++) {
        setTimeout(() => {
          leftBox.innerText = input[i];
          leftBox.style.backgroundColor = isPalindrome(input.substring(0, i + 1)) ? '#4caf50' : '#e74c3c';
          fadeIn(leftBox);
        }, i * 1000);
  
        setTimeout(() => {
          rightBox.innerText = input[length - i - 1];
          rightBox.style.backgroundColor = isPalindrome(input.substring(0, length - i)) ? '#4caf50' : '#e74c3c';
          fadeIn(rightBox);
        }, i * 1000);
      }
  
      setTimeout(() => {
        const result = isPalindrome(input) ? 'Palindrome' : 'Not a Palindrome';
        palindromeResult.innerText = `Result: ${result}`;
        fadeIn(palindromeResult);
      }, (halfLength + 1) * 1000);
    }
  
    function clearAnimation() {
      leftBox.innerText = '';
      rightBox.innerText = '';
      leftBox.style.backgroundColor = '#3498db';
      rightBox.style.backgroundColor = '#3498db';
    }
  
    function fadeIn(element) {
      element.style.opacity = 1;
    }
  });
  