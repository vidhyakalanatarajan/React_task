import React from "react";
import "../socialbutton/socialbutton.css"
export function Socialbutton(){
    return(
        <>
        <div className="soc-bg text-center p-5">
            <h1 className="text-light">Socialbutton</h1>
            <button className="bg-warning rounded m-3 border border-0">Like</button>
            <button className="rounded m-3 border border-0">Comment</button>
            <button className="bg-info rounded m-3 border border-0">Share</button>
        </div>
        </>
    );
}