function product(num1, num2) {
    return num1 * num2;
  }
  function getProduct() {
    let number1 = parseFloat(prompt("Enter the first number:"));
    let number2 = parseFloat(prompt("Enter the second number:"));
    if (isNaN(number1) || isNaN(number2)) {
      document.getElementById("result").innerText = "Please enter valid numbers!";
    } else {
      let result = product(number1, number2);
      document.getElementById("result").innerText = 
        `The product of ${number1} and ${number2} is ${result}`;
    }
  }