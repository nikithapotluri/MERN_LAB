let students=[];

const express=require('express');
const app =express();
app.use(express.json());

app.get('/getStudentDetails',async(req,res)=>{
    let result;

    if(students.length === 0){
        result="No Students Present";
    }
    else{
        result=students;
    }
    res.send({message:'Students Details Retrieved',payload:result});
})

app.post('/add',async(req,res)=>{
    const data = req.body;
    students.push(data);
    res.send({message:'Student Details Added',payload:data});
})

app.put('/edit', async (req, res) => {
    let data = req.body;

    let checkUser = students.findIndex((ele) => ele.rollNo === data.rollNo); // ✅ Fixed comparison

    if (checkUser !== -1) {
        students[checkUser] = { ...students[checkUser], ...data }; // ✅ Preserve existing properties
        res.send({ message: 'Student Details Updated', payload: students[checkUser] });
    } else {
        res.status(404).send({ message: 'Student Not Found' }); // ✅ Return proper status code
    }
});


app.delete('/delete/:rollNo',async(req,res)=>{
        const {rollNo}=req.params;
        let checkUser=students.findIndex((ele)=>
            ele.rollNo == rollNo
        )
        students.splice(checkUser,1);
        res.send({ message: 'Student Details Deleted', payload: students[checkUser] });
})

app.listen(3000,()=>{
    console.log("The server is running on PORT number: 3000");
})