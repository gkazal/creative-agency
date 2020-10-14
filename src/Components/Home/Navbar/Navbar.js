import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../../images/logos/logo.png'

const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light col-md-10 offset-md-1">

            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <img style={{height:'50px'}} src={img} alt=""/>

                </ul>
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item active">
                        <a class="nav-link mr-3" href="/home">Home <span class="sr-only">(current)</span></a>
                    </li>
                   
                    <li>
                        <a class="nav-link mr-3" href="/home">Our Portfolio</a>
                    </li>
                    <li>
                        <a class="nav-link mr-3" href="/home">Our Team</a>
                    </li>
                    <li>
                        <a class="nav-link mr-3" href="/home">Contact Us</a>
                    </li>
                    <li>
                        <button className="btn btn-dark">Login</button>
                    </li>

                  
                </ul>

            </div>
        </nav>
    );
};

export default Navbar;