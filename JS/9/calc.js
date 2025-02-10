function calculate(event) {
    event.preventDefault(); 
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const operator = document.getElementById("operator").value;
    let result;
    switch (operator) {
      case "+":
        result = num1 + num2;
        break;
      case "-":
        result = num1 - num2;
        break;
      case "*":
        result = num1 * num2;
        break;
      case "/":
        if (num2 === 0) result = "Error: Division by zero!";
        else            result = num1 / num2;
        break;
      case "%":
        if (num2 === 0) result = "Error: Division by zero!";
        else            result = num1 % num2;
        break;
      default:
        result = "Invalid operator!";
    }
    document.getElementById("result").textContent = result;
  }