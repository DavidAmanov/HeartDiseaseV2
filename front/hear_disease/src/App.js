import React, { useState } from 'react';
import './App.css';
import { useForm } from 'react-hook-form';


/*
https://archive.ics.uci.edu/dataset/45/heart+disease
age: in years

sex: 1 - male, 0 - female

cp: (chest pain type) 0 - typical angina; 1 - atypical angina; 2 - non-anginal pain; 3 - asymptomatic;

trestbps: resting blood pressure (in mm Hg on admission to the hospital)

chol: serum cholestoral in mg/dl

fbs: (fasting blood sugar &gt; 120 mg/dl) (1 = true; 0 = false)

restecg: resting electrocardiographic results 0- normal; 1- having ST-T wave abnormality (T wave inversions and/or ST elevation or depression of > 0.05 mV); 
2 - howing probable or definite left ventricular hypertrophy by Estes' criteria;

thalach: maximum heart rate achieved

exang: exercise induced angina (1 = yes; 0 = no)

oldpeak: = ST depression induced by exercise relative to rest

slope: the slope of the peak exercise ST segment, 0-upsloping; 1-flat; 2-downsloping;

ca: number of major vessels (0-3) colored by flourosopy

thal: 1 = normal; 2 = fixed defect; 3 = reversable defect

теперь для каждого значения нужно создать правильный инпут, сейчас я реализую функцию map и массив строк, надо наверное создать массив объектов с соответствующими вариантами, где просто вводится значение
а где например чекбокс с вариантами.

*/ 
function App() {
  const metricsArray = [
  {
    name:'Age',
    select:false,
    options:[],
    inputValue: 'number', 
  },
  {
    name:'Type of chest pain',
    select:true,
    options: [
      { key: 'Type of chest pain...', value: 'Type of chest pain...' },
      { key: 'typical angina', value: 0 },
      { key: 'atypical angina', value: 1 },
      { key: 'non-anginal pain', value: 2 },
      { key: 'asymptomatic', value: 3 }
    ],
    inputValue: 'number',
  },
  {
    name:'Level of blood pressure (mm/HG)',
    select:false,
    options:[],
    inputValue: 'number',
  },
  {
    name:'Serum cholesterol in mg/dl',
    select:false,
    options:[],
    inputValue: 'number',
  },
  {
    name:'Blood sugar levels on fasting',
    select:true,
    options:[ {key: 'Blood sugar levels on fasting...', value: 'Blood sugar levels on fasting'}, {key: "True", value: 0}, {key: "False", value: 1}],
    inputValue: 'number',
  }, 
  {
    name:'Result of electrocardiogram',
    select:true,
    options:[{key: 'Result of electrocardiogram...', value:'Result of electrocardiogram' }, {key:'normal', value: 0}, {key:'having ST-T wave abnormality (T wave inversions and/or ST elevation or depression of > 0.05 mV)', value: 1}, {key: 'howing probable or definite left ventricular hypertrophy by Estes criteria', value: 2}],
    inputValue: 'number',
  },
  {
    name:'Maximum heart rate achieved',
    select:false,
    options:[],
    inputValue: 'number',
  },
  {
    name:'Angina induced by exercise',
    select:true,
    options:[{key: 'Angina induced by exercise...', value:'Angina induced by exercise...'}, {key: "Yes", value: 0}, {key: "No", value: 1}],
    inputValue: 'number',
  },
  {
    name:'Exercise induced ST-depression',
    select:false,
    options:[],
    inputValue: 'number',
  },
  {
    name:'ST segment measured in terms of slope during peak exercise',
    select:true,
    options:[{key: 'ST segment measured in terms of slope during peak exercise...', value: 'ST segment measured in terms of slope during peak exercise...'}, {key: 'upsloping', value: 0}, {key: 'flat', value: 1}, {key:'downsloping', value: 2}],
    inputValue: 'number',
  },
  {
    name:'The number of major vessels',
    select:true,
    options:[{key: 'The number of major vessels...', value:'The number of major vessels...'}, {key:'0', value: 0}, {key:'1', value: 1}, {key:'2', value: 2}, {key:'3', value: 3}],
    inputValue: 'number',
  },
  {
    name:'A blood disorder called thalassemia',
    select:true,
    options:[{key: 'A blood disorder called thalassemia...', value:'A blood disorder called thalassemia...' }, {key: 'normal', value: 0}, {key:'fixed defect', value: 1}, {key: 'reversable defect', value: 2}],
    inputValue: 'number',
  }
  ]

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [result, setResult] = useState('')

  const toggleModal = () =>{
    setModalIsOpen(!modalIsOpen)
  }

  const {register, formState:{errors}, handleSubmit} = useForm();
  const onSubmit = async (data)=>{
    try {
      const response = await fetch('http://localhost:3001/api', {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
  
      const result = await response.json(); 
      console.log(result)
      setResult(result)
      toggleModal()
    } catch (error) {
      console.error('Error:', error); 
    }
  };
  return (
  <>
  <section>
    <form onSubmit={handleSubmit(onSubmit)} className='form'>
    {metricsArray.map((item, index) => (item.select===true ? 
    <select {...register(item.name, {required: true })} key={index} className="formItem">
      {item.options.map((name, num)=>{
        return <option key={num} value={name.value} >{name.key}</option>
      })}
    </select> :
      <label key={index} >
        <input {...register(item.name, { required: true })} className="formItem" id={index} type={item.inputValue} placeholder={item.name} step={0.01}/>
      </label>
    ))}
    <div className='buttonDiv'>
      <button type='submit'>submit</button>
    </div>
    </form>
  </section>
  {modalIsOpen && (
    <div>
      <h1>Result</h1>
      <h2>{result.result_knn}</h2>
      <h2>{result.probabilities_knn}</h2>
      <h2>{result.result_l1}</h2>
      <h2>{result.probabilities_l1}</h2>
      <h2>{result.result_xgb}</h2>
      <h2>{result.probabilities_xgb}</h2>
      <button onClick={toggleModal}>Close</button>
    </div>
  )}
  </>
  );
}

export default App;


// result_kkn: mes[0].prediction_knn[0],
//             probabilities_knn: mes[0].probabilities_knn[0][0],
//             result_l1: mes[0].prediction_l1_lr[0],
//             probabilities_l1: mes[0].probabilities_l1_lr[0][0],
//             result_xgb: mes[0].prediction_xgb[0],
//             probabilities_xgb: mes[0].probabilities_xgb[0][0]




/*
test data
target value - 0
63
typical
145
233
true
howing probable 
150
No
2,3
upsloping
0
fixed defect
 */ 