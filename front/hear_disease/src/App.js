import React, { useState } from 'react';
import './App.css';
import { useForm } from 'react-hook-form';
import {useSelector} from "react-redux";
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';


function App() {
  const formFields = useSelector((state)=>state.formFields)
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
    <Header />
  <section>
    <form onSubmit={handleSubmit(onSubmit)} className='form'>
    {formFields.map((item, index) => (item.select===true ? 
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
  <Footer />
  </>
  );
}

export default App;

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
а где например чекбокс с вариантами.*/