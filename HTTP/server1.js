const express=require('express');
const fs=require('fs');
const app=express();

app.use(express.json());

app.get('/getDetails',async(req,res)=>{
    const empData=fs.readFileSync('./employees.json','utf-8')
    res.send({message:'Employee Details fetched',payload:JSON.parse(empData)});
})

app.post('/addEmployee', async (req, res) => {
    try {
        const empData = fs.readFileSync('./employees.json', 'utf-8');
        let employees = JSON.parse(empData).employees;

        const newEmployee = req.body;
        newEmployee.id = employees.length ? employees[employees.length - 1].id + 1 : 1;

        employees.push(newEmployee);

        fs.writeFileSync('./employees.json', JSON.stringify({ employees }, null, 2), 'utf-8');

        res.send({ message: "Employee Added Successfully !", payload: newEmployee });

    } catch (error) {
        res.end({ message: "Error while adding employee", error: error.message });
    }
});

app.put('/updateEmployee/:id', async (req, res) => {
    try {
        const empData = fs.readFileSync('./employees.json', 'utf-8');
        let employees = JSON.parse(empData).employees
        //console.log(employees);
        const empId = parseInt(req.params.id);
        const updatedInfo = req.body;
        
        const index = employees.findIndex(emp => emp.id === empId);
        if (index === -1) {
            return res.send({ message: "Employee Not Found" });
        }
        
        employees[index] = { ...employees[index], ...updatedInfo };

        fs.writeFileSync('./employees.json', JSON.stringify({ employees }, null, 2), 'utf-8');

        res.send({ message: "Employee details Updated Successfully !", payload: employees[index] });

    } catch (error) {
        res.send({ message: "Error while updating employee", error: error.message });
    }
});

app.delete('/deleteEmployee/:id', async (req, res) => {
    try {
        const empData = fs.readFileSync('./employees.json', 'utf-8');
        let employees = JSON.parse(empData).employees;

        const empId = parseInt(req.params.id);

        // Find the index of the employee to be deleted
        const index = employees.findIndex(emp => emp.id === empId);
        if (index === -1) {
            return res.send({ message: "Employee Not Found" });
        }

        // Remove the employee from the array
        const deletedEmployee = employees.splice(index, 1)[0];

        // Save the updated employee list back to the file
        fs.writeFileSync('./employees.json', JSON.stringify({ employees }, null, 2), 'utf-8');

        res.send({ message: "Employee Deleted Successfully !", payload: deletedEmployee });

    } catch (error) {
        res.send({ message: "Error while deleting employee", error: error.message });
    }
});



app.listen(5000,()=>{
    console.log("The server is running on PORT number : 5000");
})