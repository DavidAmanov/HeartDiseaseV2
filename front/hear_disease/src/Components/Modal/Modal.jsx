import React from "react";
import './Modal.css'
import Image2 from '../../img/meduzy-priroda-fon.jpg'


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
                    <h2>Model Knn: {result.result_knn}</h2>
                    <span>Reliability of the results {result.probabilities_knn.toFixed(1)}%</span>
                    <h2>Model L1LR: {result.result_l1}</h2>
                    <span>Reliability of the results {result.probabilities_l1.toFixed(1)}%</span>
                    <h2>Model XGB: {result.result_xgb}</h2>
                    <span>Reliability of the results {result.probabilities_xgb.toFixed(1)}%</span>
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