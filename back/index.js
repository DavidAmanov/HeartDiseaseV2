
const PORT = 3001;
const express = require('express'); //for server
const { PythonShell } = require('python-shell');//convert from pkl model to JSON 
const cors = require('cors');
const app = express(); //for server
app.use(cors());
app.use(express.json());
// Convert pickled object to JSON object




app.post('/api',(req, res)=>{
    //input POST data to model;
    const data = req.body;
    let arr = Object.values(data)
    console.log(arr);
    const jsonData = JSON.stringify(arr);
    
   
    let options = {
        mode: 'json',
 // Путь к интерпретатору Python
        scriptPath: 'C:/Users/David/Desktop/dev/react-tutorial/HeartDiseaseV2/Model', // Путь к файлу с моделью
        args: [jsonData]
    };
    
    PythonShell.run('runModels.py', options).then(mes=>{
        if(mes[0][0] === 1){
            res.json("Go to doctor")
        } else if(mes[0][0] === 0) {
            res.json("You are okay")
        }
        console.log(mes[0][0])})
    
})

app.listen(PORT, ()=>{
    console.log('Server is starting');
});





