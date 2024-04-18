import React from 'react';
import './App.css';
import { useForm } from 'react-hook-form';

function App() {
  const metricsArray = ['Age', 'Type of chest pain', 'Level of blood pressure (mm/HG)', 'Serum cholesterol in mg/dl',
  "Blood sugar levels on fasting ", 'Result of electrocardiogram', 'Maximum heart rate achieved', 'Angina induced by exercise', 'Exercise induced ST-depression',
  'ST segment measured in terms of slope during peak exercise', 'The number of major vessels ', 'A blood disorder called thalassemia']

  const {register, formState:{errors}, handleSubmit} = useForm();
  const onSubmit = (data)=>{
    console.log(data);
  }

  return (
  <>
  <section>
    <form onSubmit={handleSubmit(onSubmit)} className='form'>
    {metricsArray.map((item, index) => (
      <label key={index}>
        <input {...register(item, { required: true })} className="formItem" id={index} type="text" placeholder={item} />
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
