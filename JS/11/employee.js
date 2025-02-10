const employees = [];
    function addEmployees() {
      for (let i = 0; i < 5; i++) {
        const firstName = prompt(`Enter the first name of employee ${i + 1}:`);
        const lastName = prompt(`Enter the last name of employee ${i + 1}:`);
        const department = prompt(`Enter the department of employee ${i + 1}:`);
        const employee = {
          firstName: firstName,
          lastName: lastName,
          department: department
        };
        employees.push(employee);
      }
      alert("All employees have been added!");
    }
    function searchEmployee() {
      if (employees.length === 0) {
        alert("No employees have been added yet!");
        return;
      }
      const searchName = prompt("Enter the first name of the employee to search:");
      const foundEmployee = employees.find(emp => emp.firstName.toLowerCase() === searchName.toLowerCase());
      if (foundEmployee) {
        alert(
          `Employee Found:\n` +
          `First Name: ${foundEmployee.firstName}\n` +
          `Last Name: ${foundEmployee.lastName}\n` +
          `Department: ${foundEmployee.department}`
        );
      } else {
        alert("Employee not found!");
      }
    }