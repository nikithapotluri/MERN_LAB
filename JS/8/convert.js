function numberToWords(num) {
    const ones = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    const teens = ["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen","sixteen", "seventeen", "eighteen", "nineteen"
    ];
    const tens = ["", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
    if (num === 0) return "zero";
    let result = "";
    if (Math.floor(num / 100) > 0) {
      result += ones[Math.floor(num / 100)] + " hundred ";
      num %= 100;
    }
    if (num >= 10 && num < 20)      result += teens[num - 10];
    else {
      result += tens[Math.floor(num / 10)];
      if (num % 10 > 0)  result += " " + ones[num % 10];
    }
    return result.trim();
  }
  function convertToWords() {
    const input = document.getElementById("numberInput").value,resultBox = document.getElementById("resultBox");
    if (isNaN(input) || input.trim() === "")  resultBox.value = "not a number";
    else {
      const num = parseInt(input);
      if (num < 0 || num > 999)  resultBox.value = "out of range";
      else   resultBox.value = numberToWords(num);
    }
  }