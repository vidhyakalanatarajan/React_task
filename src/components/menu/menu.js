import React from "react";
import { Link } from "react-router-dom";
export function Menu() {
    return (
        <>
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">Moodle-Tasks</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <Link to="/helloworld"><button className="nav-link">Helloworld</button></Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/congratscard"><button className="nav-link">Congratscard</button></Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/superoverleague"><button className="nav-link">Superoverleague</button></Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/socialbutton"><button className="nav-link">Socialbutton </button></Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/notification"><button className="nav-link">Notification </button></Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/login"><button className="nav-link">Login </button></Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/technologycards"><button className="nav-link">Technologycards </button></Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/products"><button className="nav-link">Details </button></Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/productpage"><button className="nav-link">productpage</button></Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/counter"><button className="nav-link">counter</button></Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/Fruitscounter"><button className="nav-link">Fruitscounter</button></Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/Feedback"><button className="nav-link">Feedback</button></Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/datajson"><button className="nav-link">Datajson</button></Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav></>
    );
}