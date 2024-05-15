
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
    // let output = run({ age: req.Age, cp: req., trestbps: req, chol: req, fbs: req, restecg: req,
    //       thalach: req, exang: req, oldpeak: req, slope: req, ca: req, thal: req});
    const data = req.body;
    const jsonData = JSON.stringify(data);
    jsonData.map((item)=>item.value.toFixed(2))
    console.log(jsonData);
    
   
    let options = {
        mode: 'json',
 // Путь к интерпретатору Python
        scriptPath: 'C:/Users/David/Desktop/dev/react-tutorial/HeartDiseaseV2/Model', // Путь к файлу с моделью
        args: [jsonData]
    };
    
    PythonShell.run('runModels.py', options, (err, resPy)=>{
        if(err) console.log(err, "1")
        if(resPy) console.log(resPy, "2")
    })
    
})

app.listen(PORT, ()=>{
    console.log('Server is starting');
});





