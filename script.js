let display = '';

function updisplay() {
    document.getElementById('display').textContent = display || '0';
}

function appnum (number){
    display += number;
    updisplay();
}

function inoperator(oprtr) {
    display += oprtr;
    updisplay();
}

function cleardis() {
    display = '';
    updisplay();
}

function calculateResult() {
    try {
      display = eval(display); // Evaluates the math expression
      updisplay();
    } catch (e) {
      displayValue = 'Error';
      updisplay();
    }
  }