import React, { useContext } from 'react';
import { UserContext } from '../../../App';
import logo from '../../../images/logos/logo.png'

const ServiceHeader = () => {
    const { loggedInUser, setLoggedInUser } = useContext(UserContext)

    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <img style={{width:'150px'}} src={logo} alt=""/>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarText">
                <ul class="navbar-nav mr-auto">
                   

                </ul>
                <span className="navbar-text">
                    {loggedInUser.displayName}
                </span>
            </div>
        </nav>
    );
};


export default ServiceHeader;