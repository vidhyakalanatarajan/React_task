import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCircleCheck,faBell,faCircleXmark} from '@fortawesome/free-regular-svg-icons';


export function Notification(){
    return(
        <>
        <h1>Notifications</h1>
        <div className="row gap-1 text-white">
        <div className="bg-info p-3 col-12 col-md-3 col-lg-12"><FontAwesomeIcon icon={faCircleCheck} />    Information messaeg</div>
        <div className="bg-success p-3 col-12 col-md-3 col-lg-12"><FontAwesomeIcon icon={faCircleCheck} />success messaeg</div>
        <div className="bg-warning p-3 col-12 col-md-3 col-lg-12"><FontAwesomeIcon icon={faBell} />warning messaeg</div>
        <div className="bg-danger p-3 col-12 col-md-3 col-lg-12"><FontAwesomeIcon icon={faCircleXmark} />error messaeg</div>
        </div>
        </>
    );
}