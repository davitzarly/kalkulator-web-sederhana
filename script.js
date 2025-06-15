let display = document.getElementById("display");
let currentInput = '';
let resetNext = false;

function appendNumber(number) {
  if (resetNext) {
    currentInput = '';
    resetNext = false;
  }

  if (number === '.' && currentInput.includes('.')) return;

  currentInput += number;
  display.textContent = currentInput;
}

function appendOperator(operator) {
  if (resetNext) resetNext = false;

  if (/[+\-*/%]$/.test(currentInput)) {
    currentInput = currentInput.slice(0, -1);
  }

  currentInput += operator;
  display.textContent = currentInput;
}

function clearDisplay() {
  currentInput = '';
  display.textContent = '0';
}

function calculateResult() {
  try {
    let result = eval(currentInput.replace(/÷/g, '/').replace(/×/g, '*'));
    display.textContent = result;
    currentInput = result.toString();
    resetNext = true;
  } catch {
    display.textContent = 'Error';
    currentInput = '';
  }
}

function toggleSign() {
  if (!currentInput) return;

  if (currentInput.startsWith('-')) {
    currentInput = currentInput.substring(1);
  } else {
    currentInput = '-' + currentInput;
  }

  display.textContent = currentInput;
}
