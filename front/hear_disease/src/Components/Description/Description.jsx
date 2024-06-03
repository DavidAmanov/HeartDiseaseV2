import React from "react";
import Image from '../../img/Image.svg';
import './Description.css'

const Description = () => {
    return(
        <section className="description__container">
            <div className="title">
                <span>The project determines <br/>the probability of heart disease</span>
                <img src={Image} alt="cover"/>
            </div>
            <div className="manual">
                <h1>HOW IT WORKS</h1>
                <span>1</span>
                <span>Give to the model a lot of medical data</span>
                <span>2</span>
                <span>The model performs the calculation</span>
                <span>3</span>
                <span>The model outputs the result</span>
            </div>
        </section>
    )
}

export default Description