import React from 'react';
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

теперь для каждого значения нужно создать правильный импут, сейчас я реализую функцию map и массив строк, надо наверное создать массив объектов с соответствующими вариантами, где просто вводится значение
а где например чекбокс с вариантами.

metric={
  name:string,
  select:boolean,
  if(seleect=true){
  options:[string]},
  input value: string/number, 

}
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
  // const metricsArray = ['Age', 'Type of chest pain', 'Level of blood pressure (mm/HG)', 'Serum cholesterol in mg/dl',
  // "Blood sugar levels on fasting ", 'Result of electrocardiogram', 'Maximum heart rate achieved', 'Angina induced by exercise', 'Exercise induced ST-depression',
  // 'ST segment measured in terms of slope during peak exercise', 'The number of major vessels ', 'A blood disorder called thalassemia']
  //настроить правильную работу select option
  //defaultValues:{
  // Age: '', 
  // Type of chest pain: '', 
  // Level of blood pressure (mm/HG): '', 
  // Serum cholesterol in mg/dl: '' 
  // Blood sugar levels on fasting: "", 
  // Result of electrocardiogram: '',
  // Maximum heart rate achieved: '', 
  // Angina induced by exercise: '', 
  // Exercise induced ST-depression: '', 
  // ST segment measured in terms of slope during peak exercise: '', 
  // The number of major vessels: '', 
  // A blood disorder called thalassemia:'',

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
      alert(result); 
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
        <input {...register(item.name, { required: true })} className="formItem" id={index} type={item.inputValue} placeholder={item.name} />
      </label>
    ))}
    <div className='buttonDiv'>
      <button type='submit'>submit</button>
    </div>
    </form>
  </section>
  </>
  );
}

export default App;


// {
//   Age: '123',
//   'Type of chest pain': 'typical angina',
//   'Level of blood pressure (mm/HG)': '231',
//   'Serum cholesterol in mg/dl': '213',
//   'Blood sugar levels on fasting': 'True',
//   'Result of electrocardiogram': 'normal',
//   'Maximum heart rate achieved': '2131',
//   'Angina induced by exercise': 'Yes',
//   'Exercise induced ST-depression': '213',
//   'ST segment measured in terms of slope during peak exercise': 'upsloping',
//   'The number of major vessels': '0',
//   'A blood disorder called thalassemia': 'normal'
// } simple object