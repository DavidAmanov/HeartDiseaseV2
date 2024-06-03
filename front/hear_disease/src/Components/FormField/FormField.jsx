import React, {useState} from "react";
import AnnotationInput from "../AnnotationInput/AnnotationInput";
import './FormField.css'


const FormFiled = React.forwardRef(({item, index, Ellipse, ...rest}, ref) => {
    const [isHovered, setIsHovered] = useState(false);
    return(item.select===true ? 
      <div key={index} className="itemContainer">
        <div className="field">
          <div className='itemTitle'>
            <span>{item.name}</span>
            <img src={Ellipse} alt='ellipse' onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}/>
          </div>
          <select ref={ref} {...rest} className="formItem">
            {item.options.map((name, num)=>{
              return <option key={num} value={name.value} >{name.key}</option>
            })}
          </select> 
        </div> 
        {isHovered && <AnnotationInput annotation={item.annotation} />}
      </div>:
      <div key={index} className="itemContainer">
        <div className="field">
            <div className='itemTitle'>
              <span>{item.name}</span>
              <img src={Ellipse} alt='ellipse' onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}/>
            </div>
            <input ref={ref} {...rest} className="formItem" id={index} type={item.inputValue} placeholder="Write your result" step={0.01}/>
        </div>
        {isHovered && <AnnotationInput annotation={item.annotation}/>}
      </div>)
})

export default FormFiled