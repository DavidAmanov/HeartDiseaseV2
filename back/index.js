const PORT = 3001;
const express = require('express'); //for server
const nodePickle = require('node-pickle');//convert from pkl model to JSON 
const app = express(); //for server
const brain = require('brain.js'); //to use JSON model

app.listen(PORT, ()=>{
    console.log('Server is starting');
});

// Convert pickled object to JSON object
const knn_model = nodePickle.load('modelsSave/knn_model.pkl');
//open JSON model 
let net = new brain.NeuralNetwork();
net.fromJSON(knn_model);
let run = net.toFunction();


app.post('/api',(req, res)=>{
    //input POST data to model;
    let output = run({ age: req, sex: req, cp: req, trestbps: req, chol: req, fbs: req, restecg: req,
         thalach: req, exang: req, oldpeak: req, slope: req, ca: req, thal: req});
})