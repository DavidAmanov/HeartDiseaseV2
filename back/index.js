
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
        scriptPath: 'C:/Users/David/Desktop/dev/react-tutorial/HeartDiseaseV2/Model', 
        args: [jsonData]
    };
    
    PythonShell.run('runModels.py', options).then(mes=>{
        if(mes[0].prediction_knn[0] === 1 || mes[0].prediction_l1_lr[0] === 1 || mes[0].prediction_xgb[0] === 1){
            let responseObj = {
                result_knn: mes[0].prediction_knn[0]=== 1 ? "Potential problems identified" : "No problems were found",
                probabilities_knn: mes[0].probabilities_knn[0][0],
                result_l1: mes[0].prediction_l1_lr[0] === 1 ? "Potential problems identified" : "No problems were found",
                probabilities_l1: mes[0].probabilities_l1_lr[0][0],
                result_xgb: mes[0].prediction_xgb[0] === 1 ? "Potential problems identified" : "No problems were found",
                probabilities_xgb: mes[0].probabilities_xgb[0][0],
                conclusion: 'You need to pay attention to the heart',
            };
            res.json(responseObj);
            console.log(mes)
        } else {
            let responseObj = {
                result_knn: "No problems were found",
                probabilities_knn: mes[0].probabilities_knn[0][0] * 100,
                result_l1: "No problems were found",
                probabilities_l1: mes[0].probabilities_l1_lr[0][0] * 100,
                result_xgb: "No problems were found",
                probabilities_xgb: mes[0].probabilities_xgb[0][0] * 100,
                conclusion: 'Everything is looking fine',
            };
            res.json(responseObj);
            console.log(mes)

        }
    })
    
})

app.listen(PORT, ()=>{
    console.log('Server is starting');
});





