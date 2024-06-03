import React, { useState } from 'react';
import './App.css';
import { useForm } from 'react-hook-form';
import {useSelector} from "react-redux";
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Description from './Components/Description/Description';
import Ellipse from './img/Ellipse 1.svg'
import FormFiled from './Components/FormField/FormField';
import Modal from './Components/Modal/Modal'


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
    <div>
    <Header />
    <div className='page'>
      <Description />
      <section>
        <div className='formTitle'>
          <h1>HEART DISEASE PREDICTION MODEL</h1>
          <span>Fill gaps to get result</span>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className='form'>
          {formFields.map((item, index) => (
            <FormFiled {...register(item.name, {required: true })} key={index} item={item} index={index} Ellipse={Ellipse}/>
          ))}
          <div className='buttonDiv'>
            <button type='submit'>Submit</button>
          </div>
        </form>
      </section>
      {modalIsOpen && (<Modal result={result} toggleModal={toggleModal} className="modal"/>)}
    </div>
    <Footer />
  </div>
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




{/* <form onSubmit={handleSubmit(onSubmit)} className='form'>
          {formFields.map((item, index) => (item.select===true ? 
          <div key={index} className="itemContainer">
            <div className='itemTitle'>
              <text>{item.name}</text>
              <img src={Ellipse} alt='ellipse'/>
            </div>
            <select {...register(item.name, {required: true })} className="formItem">
              {item.options.map((name, num)=>{
                return <option key={num} value={name.value} >{name.key}</option>
              })}
            </select> 
          </div> :
            <label key={index} className="itemContainer">
              <div className='itemTitle'>
                <span>{item.name}</span>
                <img src={Ellipse} alt='ellipse' onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}/>
              </div>
              <input {...register(item.name, { required: true })} className="formItem" id={index} type={item.inputValue} placeholder="Write your result" step={0.01}/>
              {isHovered && <AnnotationInput annotation={item.annotation}/>}
            </label>
          ))}
          <div className='buttonDiv'>
            <button type='submit'>Submit</button>
          </div>
        </form> */}








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