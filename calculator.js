// Jakobs Super Fede Lommeregner

// Definer globale varibaler
let a;
let b;
let resultDisplay;

function setup() {
  createCanvas(600, 300);
  background(220);
  
  // Input feldt A
  a = createInput();
  a.position(50, 40);
  a.size(100);
  
  // Input feldt B
  b = createInput();
  b.position(175, 40);
  b.size(100);

  // Plus knap
  let addButton = createButton('Plus (+)');
  addButton.position(50, 100);
  addButton.size(100, 40);
  addButton.mousePressed(() => calculate('plus'));

  // Minus knap
  let subtractButton = createButton('Minus (-)');
  subtractButton.position(160, 100);
  subtractButton.size(100, 40);
  subtractButton.mousePressed(() => calculate('minus'));

  // Gange knap
  let multiplyButton = createButton('Multiply (×)');
  multiplyButton.position(270, 100);
  multiplyButton.size(100, 40);
  multiplyButton.mousePressed(() => calculate('multiply'));

  // Divider knap
  let divideButton = createButton('Divide (÷)');
  divideButton.position(380, 100);
  divideButton.size(100, 40);
  divideButton.mousePressed(() => calculate('divide'));

  // reset knap
  let clearButton = createButton('Clear');
  clearButton.position(50,225);
  clearButton.size(100, 40);
  clearButton.mousePressed(clearCalculator);

  // Result display
  resultDisplay = createElement('h2', 'Result: 0');
  resultDisplay.position(50, 160);
}

function calculate(operation) {
  // Parse input
  let aValue = parseFloat(a.value());
  let bValue = parseFloat(b.value());
  let result;

  // Calculator operation
  switch (operation) {
    case 'minus':
      result = aValue - bValue;
      break;
    case 'plus':
      result = aValue + bValue;
      break;
    case 'multiply':
      result = aValue * bValue;
      break;
    case 'divide':
      if (bValue !== 0) {
        result = aValue / bValue;
      } else {
        result = 'Error: Division by zero is undefined.';
      }
      break;
  }

  // Opdater resultDisplay
  resultDisplay.html(`Result: ${result}`);
}

// Reset af Lommeregner
function clearCalculator() {
  a.value('');
  b.value('');
  resultDisplay.html('Result: 0');
}
