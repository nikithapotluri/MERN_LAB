function checkName() {
    let name;
    while (true) {
      name = prompt("Enter your name:");
      if (name === null) {
        alert("Name input canceled.");
        return;
      }
      if (name.length > 0 && name[0] === name[0].toUpperCase()) {
        alert("Valid name! First character is uppercase.");
        break;
      } else {
        alert("The first character must be uppercase. Please try again.");
      }
    }
  }