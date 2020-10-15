import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import {faUserLock, faHome, faTaxi, faPlus} from '@fortawesome/free-solid-svg-icons';


import './Sidebar.css'

const AdminSidebar = () => {
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
                        <Link to="/showServiceList" className="text-dark">
                            <FontAwesomeIcon icon={faTaxi} /> <span>Service List</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/addService" className="text-dark">
                            <FontAwesomeIcon icon={faPlus} /> <span>Add Service</span>
                        </Link>
                    </li>
                 
                    <li>
                        <Link to="/addAdmin" className="text-dark" >
                            <FontAwesomeIcon icon={faUserLock} /> <span>Make Admin</span>
                        </Link>
                    </li>
                    
                </div>}
            </ul>
           
        </div>
    );
};

export default AdminSidebar;