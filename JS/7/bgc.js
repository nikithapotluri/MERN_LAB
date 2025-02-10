function changeBackgroundColor() {
    let color = prompt("Enter a color (name, hex, or rgb):");
    if (color)
      document.getElementById("myParagraph").style.backgroundColor = color;
    else
      alert("No color entered. Please try again.");
  }