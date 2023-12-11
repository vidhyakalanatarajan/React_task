import React from "react";
import '../Task2/congratscard.css';
export function Congratscard(){
    return(
        <>
        <div className="img2">
            <h1 className="text-center">Congratulations</h1>
            <div className="bg-info mx-auto col-6 text-center p-3">
                <img src="https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png"/>
                <p>Full stack development is the end-to-end development of applications. It includes both the front end and back end of an application.</p>
                <img src="https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png"/>
            </div>
        </div>
        </>
    );
}