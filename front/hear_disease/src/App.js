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
    options:['typical angina', 'atypical angina', 'non-anginal pain', 'asymptomatic'],
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
    options:["True", "False"],
    inputValue: 'number',
  }, 
  {
    name:'Result of electrocardiogram',
    select:true,
    options:['normal', 'having ST-T wave abnormality (T wave inversions and/or ST elevation or depression of > 0.05 mV)', 'howing probable or definite left ventricular hypertrophy by Estes criteria'],
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
    options:["Yes", "No"],
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
    options:['upsloping', 'flat', 'downsloping'],
    inputValue: 'number',
  },
  {
    name:'The number of major vessels',
    select:true,
    options:['0', '1', '2', '3'],
    inputValue: 'number',
  },
  {
    name:'A blood disorder called thalassemia',
    select:true,
    options:['normal', 'fixed defect', 'reversable defect'],
    inputValue: 'number',
  }
  ]
  // const metricsArray = ['Age', 'Type of chest pain', 'Level of blood pressure (mm/HG)', 'Serum cholesterol in mg/dl',
  // "Blood sugar levels on fasting ", 'Result of electrocardiogram', 'Maximum heart rate achieved', 'Angina induced by exercise', 'Exercise induced ST-depression',
  // 'ST segment measured in terms of slope during peak exercise', 'The number of major vessels ', 'A blood disorder called thalassemia']
  //настроить правильную работу select option

  const {register, formState:{errors}, handleSubmit} = useForm();
  const onSubmit = (data)=>{
    console.log(data);
  }

  return (
  <>
  <section>
    <form onSubmit={handleSubmit(onSubmit)} className='form'>
    {metricsArray.map((item, index) => (item.select===true ? 
    <select>
      {item.options.map((item)=>{
        <option className="formItem" value={item}>{item}</option>
      })}
    </select> :
      <label key={index}>
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
