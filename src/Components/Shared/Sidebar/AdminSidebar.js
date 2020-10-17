import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { faUserLock, faHome, faTaxi, faPlus } from '@fortawesome/free-solid-svg-icons';

import './Sidebar.css'
import { UserContext } from '../../../App';

const AdminSidebar = () => {
    const { loggedInUser } = useContext(UserContext)
    const [isAdmin, setIsAdmin] = useState(false)

    useEffect(() => {
        fetch('http://localhost:4000/isAdmin', {
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
    console.log(isAdmin)

    return (
        <div className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4" style={{ height: "100vh" }}>
            <ul className="list-unstyled">

                <li>
                    <Link to="/home" className="text-dark">
                        <FontAwesomeIcon icon={faHome} /> <span>Home</span>
                    </Link>
                </li>
                {isAdmin &&
                    <div>
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

                    </div>
                }
            </ul>

        </div>
    );
};

export default AdminSidebar;