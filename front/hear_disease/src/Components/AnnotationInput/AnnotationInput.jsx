import React from "react";
import Ellipse2 from '../../img/Ellipse 2.svg'
import './AnnotationInput.css'

const AnnotationInput = ({annotation}) => {
    return(
    <div className="annotation__container">
        <div className="ellipse__container">
            <img src={Ellipse2} alt="ellipse2" style={{width: "21px", height: "21px"}}/>
            <img src={Ellipse2} alt="ellipse2" style={{width: "21px", height: "21px"}}/>
        </div>
        <div className="text_annotation">
            {annotation}
        </div>
    </div>
    )
}

export default AnnotationInput