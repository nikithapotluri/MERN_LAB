
function analyzeText(event) {
    event.preventDefault(); 
    const text = document.getElementById("userText").value;
    const characterCount = text.length;
    const wordCount = text.trim().split(/\s+/).filter(word => word !== "").length;
    const lineCount = text.split(/\n/).length;
    alert(`Character Count: ${characterCount}\nWord Count: ${wordCount}\nLine Count: ${lineCount}`);
  }