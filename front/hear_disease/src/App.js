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

