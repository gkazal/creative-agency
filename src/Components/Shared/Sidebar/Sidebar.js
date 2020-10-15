import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import {faSignOutAlt, faCommentAlt, faHome, faTaxi, faShoppingCart} from '@fortawesome/free-solid-svg-icons';


import './Sidebar.css'

const Sidebar = () => {
    return (
        <div className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4" style={{ height: "100vh" }}>
            <ul className="list-unstyled">
                
                <li>
                    <Link to="/home" className="text-dark">
                        <FontAwesomeIcon icon={faHome} /> <span>Home</span>
                    </Link>
                </li>
                {<div>
                    <li>
                        <Link to="/order" className="text-dark">
                            <FontAwesomeIcon icon={faShoppingCart} /> <span>Order</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/service" className="text-dark">
                            <FontAwesomeIcon icon={faTaxi} /> <span>Service</span>
                        </Link>
                    </li>
                 
                    <li>
                        <Link to="/review" className="text-dark" >
                            <FontAwesomeIcon icon={faCommentAlt} /> <span>Review</span>
                        </Link>
                    </li>
                    
                </div>}
            </ul>
           
        </div>
    );
};

export default Sidebar;