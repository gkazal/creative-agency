import React, { useContext, useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import img from '../../../images/logos/logo.png'

const Navbar = () => {
    const {loggedInUser} = useContext(UserContext)
    const [isAdmin, setIsAdmin] = useState(false)

    useEffect(() => {
        fetch('https://fathomless-bastion-54324.herokuapp.com/isAdmin', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email: loggedInUser.email })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setIsAdmin(data)
            })
            
    }, [])

    return (
        <nav className="navbar navbar-expand-lg navbar-light col-md-10 offset-md-1">

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse mt-2 pt-2" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <img style={{  width:'200px' }} src={img} alt="" />

                </ul>
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                        <a className="nav-link mr-3" href="/home">Home <span className="sr-only">(current)</span></a>
                    </li>

                    <li>
                        <a className="nav-link mr-3" href="/home">Our Portfolio</a>
                    </li>
                    <li>
                        <a className="nav-link mr-3" href="/home">Our Team</a>
                    </li>
                    <li>
                        <a className="nav-link mr-3" href="/home">Contact Us</a>
                    </li>
                    { 
                        <li>
                            <Link to="/showServiceList">
                                <Button variant="dark">Login</Button>
                            </Link>
                        </li> 
                    }


                </ul>

            </div>
        </nav>
    );
};

export default Navbar;