function calc(operation) {
const firstValue = parseFloat(document.getElementById("first-number").value);
const secondValue = parseFloat(document.getElementById("second-number").value);
let result = "";

  if (isNaN(firstValue) || isNaN(secondValue)) {
    result = "missing values or not numbers"

  }else {
    switch (operation) {
      case "add":
        result = `${firstValue} + ${secondValue} = ${firstValue + secondValue}`;
        break;
      case "subtract":
        result = `${firstValue} - ${secondValue} = ${firstValue - secondValue}`;
        break;
      case "multiply":
        result =  `${firstValue} x ${secondValue} = ${firstValue * secondValue}`;
        break;
      case "divide":
      if (secondValue === 0) {
        result = "cannot divide by 0"
      } else {
        result =  `${firstValue} / ${secondValue} = ${firstValue / secondValue}`;
      }
      break;
      default : result = "Unkown operation.";
    }
  }
  document.getElementById('result').style.border = "1px solid red";
  document.getElementById('result').innerHTML = result;
  document.getElementById('second-number').value = "";
  document.getElementById('first-number').value = ""; 
}
    