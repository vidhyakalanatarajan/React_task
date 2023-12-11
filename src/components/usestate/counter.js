import { useState } from "react";
import React from "react";

export function Counter(){
    const[counter,setCounter] = useState(0);
    var subb = document.getElementById("sub");
    var addb = document.getElementById("add");

    function add(){
        if(counter>=50){
            addb.setAttribute("disabled","");
        }
        else{
            setCounter(counter+1);
            if(subb!=null && counter>=0){
                subb.removeAttribute("disabled");
            }
        }
    }
    function sub(){
        if(counter==0){
            subb.setAttribute("disabled","");
        }
        else{
            if(addb!=null && counter<50){
                addb.removeAttribute("disabled");
            }
            setCounter(counter-1);
        }
    }
    function reset(){
        setCounter(0);
        subb.removeAttribute("disabled");
        addb.removeAttribute("disabled");
    }
    return(
        <>
            <div className="text-center">
            <h3 id="counterVal">{counter}</h3>
            <button id="add" onClick={add}>add</button>
            <button id="sub" onClick={sub}>sub</button>
            <button id="reset" onClick={reset}>Reset</button>
            </div>
        </>
    )
}
