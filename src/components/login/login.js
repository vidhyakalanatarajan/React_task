import React from "react";
import '../login/login.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import{faUser} from '@fortawesome/free-solid-svg-icons'
export function Login(){
    return(
        <>
            <div className="log-bg row">
            <div className="col-12 col-lg-6 p-5">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMNGhVnnntJiKKSYsccLuAPcsKwCx0E-XPKQ&usqp=CAU" className="w-75"/>
            </div>
            <div className="col-12 col-lg-6 p-5">
                <h1>Member Login</h1>
                <div className="d-flex"><FontAwesomeIcon icon={faUser}/><input type="text" placeholder="Email" className="mt-3 rounded"></input></div><br/>
                <input type="Password" placeholder="**" className="mt-3 rounded" ></input><br/>
                <button className="bg-success mt-3 rounded p-2 ps-5 pe-5 text-light">Login</button>
                <h4 className="text-success mt-3"><span className="text-dark">Forget</span> Username / Password ?</h4>
                <h4 className="text-success mt-3">Create your account-^</h4>
            </div>
            </div>
        </>
    );
}