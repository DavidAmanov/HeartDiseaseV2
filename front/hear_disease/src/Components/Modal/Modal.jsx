import React from "react";
import './Modal.css'
import Image2 from '../../img/Image 2.svg'

const Modal = ({result, toggleModal}) => {
    return(
    <div className="modal__overlay">
        <div className="modal__container">
            <div className="btn__container">
                <button onClick={toggleModal}>X</button>
            </div>
            <div className="resultsAndPicture">
                <div className="picture">
                    <img src={Image2} alt="image2"/>
                </div>
                <div className="result">
                    <h1>Results:</h1>
                    <h2>Model Knn:</h2>
                    <span>The patient may have heart problems with the probability {result.probabilities_knn}%</span>
                    <h2>Model L1LR:</h2>
                    <span>The patient may have heart problems with the probability {result.probabilities_l1.toFixed(3)}%</span>
                    <h2>Model XGB:</h2>
                    <span>The patient may have heart problems with the probability {result.probabilities_xgb.toFixed(3)}%</span>
                    <div className="conslusionBlock">
                        <h1>CONCLUSION</h1>
                        <span>{result.conclusion}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Modal