document.addEventListener('DOMContentLoaded', function() {
    const display = document.getElementById('display');
    const buttons = Array.from(document.getElementsByClassName('button'));
    let currentInput = '';
    let operator = '';
    let previousInput = '';
  
    buttons.forEach(button => {
      button.addEventListener('click', () => {
        const value = button.getAttribute('data-value');
  
        if (value === 'C') {
          currentInput = '';
          previousInput = '';
          operator = '';
          display.innerText = '0';
        } else if (value === '=') {
          if (operator && previousInput !== '') {
            currentInput = eval(`${previousInput} ${operator} ${currentInput}`);
            display.innerText = currentInput;
            previousInput = '';
            operator = '';
          }
        } else if (['+', '-', '*', '/'].includes(value)) {
          if (currentInput !== '') {
            if (previousInput !== '') {
              previousInput = eval(`${previousInput} ${operator} ${currentInput}`);
            } else {
              previousInput = currentInput;
            }
            operator = value;
            currentInput = '';
          }
        } else {
          currentInput += value;
          display.innerText = currentInput;
        }
      });
    });
  });
  