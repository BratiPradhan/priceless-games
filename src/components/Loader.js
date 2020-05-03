import React from 'react';
import Loader from "react-loader-spinner"
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"

const LoaderSpin = () => {
    return (
        <Loader 
            className="deals-loader"
            type="Oval"
            color="#00BFFF"
            height={100}
            width={100}
        />
    )
}

export default LoaderSpin;