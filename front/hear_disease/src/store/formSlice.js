import { createSlice } from "@reduxjs/toolkit";

const formSlice = createSlice({
    name: 'formFields',
    initialState: [
        {
          name:'Age',
          select:false,
          options:[],
          annotation: 'Input your age',
          inputValue: 'number', 
        },
        {
          name:'Type of chest pain',
          select:true,
          options: [
            { key: 'Choose', value: 'Choose' },
            { key: 'typical angina', value: 0 },
            { key: 'atypical angina', value: 1 },
            { key: 'non-anginal pain', value: 2 },
            { key: 'asymptomatic', value: 3 }
          ],
          annotation: 'Chest pain is pain or discomfort in the chest, typically the front of the chest. It may be described as sharp, dull, pressure, eaviness or squeezing.',
          inputValue: 'number',
        },
        {
          name:'Level of blood pressure (mm/HG)',
          select:false,
          options:[],
          annotation: 'Blood pressure (BP) is the pressure of circulating blood against the walls of blood vessels. A normal resting blood pressure is generally below 120 mm Hg systolic, and 80 mm Hg diastolic. This is commonly shortened to 120/80',
          inputValue: 'number',
        },
        {
          name:'Serum cholesterol in mg/dl',
          select:false,
          options:[],
          annotation: "Cholesterol is a naturally produced fatty substance in the liver with a wax-like texture. Once created, it enters the bloodstream to reach different body parts. The term ‘serum cholesterol’ refers to cholesterol levels found in the blood. People with a normal serum cholesterol level don’t face any intense health problems. But when cholesterol levels exceed healthy levels, you can become vulnerable to numerous health diseases. A normal level below 125 to 200mg/dL",
          inputValue: 'number',
        },
        {
          name:'Blood sugar levels on fasting',
          select:true,
          options:[ {key: 'Choose', value: 'Choose'}, {key: "True", value: 0}, {key: "False", value: 1}],
          annotation: "Fbs test (fbs test) means measuring the blood glucose levels after at least of 8 hours of fasting. It is frequently the initial test used to check for prediabetes and diabetes. To take the test, your finger is pricked with the pricker or a needle is used to collect a blood sample from the vein of your arm. After this, the test is done to get the fasting blood sugar level. According to the sugar fasting test, below is the sugar level for people with diabetes, prediabetes, and normal people. Also know about pp blood sugar ",
          inputValue: 'number',
        }, 
        {
          name:'Result of electrocardiogram',
          select:true,
          options:[{key: 'Choose', value:'Choose' }, {key:'normal', value: 0}, {key:'having ST-T wave abnormality (T wave inversions and/or ST elevation or depression of > 0.05 mV)', value: 1}, {key: 'howing probable or definite left ventricular hypertrophy by Estes criteria', value: 2}],
          annotation: "Electrocardiography is the process of producing an electrocardiogram (ECG or EKG[a]), a recording of the heart's electrical activity through repeated cardiac cycles. It is an electrogram of the heart which is a graph of voltage versus time of the electrical activity of the heart using electrodes placed on the skin. These electrodes detect the small electrical changes that are a consequence of cardiac muscle depolarization followed by repolarization during each cardiac cycle (heartbeat).",
          inputValue: 'number',
        },
        {
          name:'Maximum heart rate achieved',
          select:false,
          options:[],
          annotation: "Heart rate (or pulse rate) is the frequency of the heartbeat measured by the number of contractions of the heart per minute (beats per minute, or bpm). The heart rate varies according to the body's physical needs, including the need to absorb oxygen and excrete carbon dioxide.",
          inputValue: 'number',
        },
        {
          name:'Angina induced by exercise',
          select:true,
          options:[{key: 'Choose', value:'Angina induced by exercise...'}, {key: "Yes", value: 0}, {key: "No", value: 1}],
          annotation: "This is known as exercise induced angina. Angina is generally caused from not getting enough blood through the arteries to supply the walls of the heart with enough blood flow to adequately pump. Angina can be caused by blockage, injury or spasms. It can be particularly irritating when it comes on with exercise.",
          inputValue: 'number',
        },
        {
          name:'Exercise induced ST-depression',
          select:false,
          options:[],
          annotation: "ST depression refers to a finding on an electrocardiogram, wherein the trace in the ST segment is abnormally low below the baseline.",
          inputValue: 'number',
        },
        {
          name:`ST segment measured in terms of slope during peak exercise`,
          select:true,
          options:[{key: 'Choose', value: 'Choose'}, {key: 'upsloping', value: 0}, {key: 'flat', value: 1}, {key:'downsloping', value: 2}],
          annotation: "The slope is determined by the direction and steepness of the ST segment relative to the baseline.",
          inputValue: 'number',
        },
        {
          name:'The number of major vessels',
          select:true,
          options:[{key: 'Choose', value:'Choose'}, {key:'0', value: 0}, {key:'1', value: 1}, {key:'2', value: 2}, {key:'3', value: 3}],
          annotation: "Fluoroscopy is a medical imaging technique that uses X-rays to obtain real-time moving images of the interior of the body. When major vessels are 'colored' by fluoroscopy, it typically refers to a procedure where a contrast agent (also known as a contrast dye) is injected into the blood vessels. This contrast agent makes the blood vessels more visible on the fluoroscopic images.",
          inputValue: 'number',
        },
        {
          name:'A blood disorder called thalassemia',
          select:true,
          options:[{key: 'Choose', value:'Choose' }, {key: 'normal', value: 0}, {key:'fixed defect', value: 1}, {key: 'reversable defect', value: 2}],
          annotation: "thallium stress test, which is a type of nuclear imaging test used to evaluate blood flow to the heart muscle. This test helps in diagnosing coronary artery disease and assessing the severity of any blockages.",
          inputValue: 'number',
        }
        ]
})


export default formSlice;