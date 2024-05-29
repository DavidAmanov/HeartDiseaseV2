import { createSlice } from "@reduxjs/toolkit";

const formSlice = createSlice({
    name: 'formFields',
    initialState: [
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
})


export default formSlice;