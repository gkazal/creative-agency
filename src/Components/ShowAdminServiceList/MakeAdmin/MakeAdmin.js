import React, { useContext, useState } from 'react';
import { useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import { UserContext } from '../../../App';
import ServiceHeader from '../../Shared/ServiceHeader/ServiceHeader';
import AdminSidebar from '../../Shared/Sidebar/AdminSidebar';

const MakeAdmin = () => {
    const { loggedInUser } = useContext(UserContext)

    const [email,setEmail] = useState('')


    const handleMakeAdmin = () => {

        const newOrder = {}
        newOrder.email = email
       

        fetch('https://fathomless-bastion-54324.herokuapp.com/addAdmin', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newOrder)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })

    }
    
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
        <div> { isAdmin && <div>
            <ServiceHeader></ServiceHeader>

            <div className="row">
                <div className="col-md-2 col-sm-12">
                    <AdminSidebar></AdminSidebar>
                </div>
                <div className="order-container col-md-10 col-sm-12">

                    <div className="ml-3 pl-3 mr-5 pr-5  mt-4 pt-4 mb-4 pb-4" style={{backgroundColor:'white',height:'300px',borderRadius:'10px'}}>
                        <form className="form-inline ">
                            <label for="validationTooltip01">Email</label>
                        </form>
                        <form class="form-inline">
                            <div class="form-group mb-2 ">
                                <label for="staticEmail2" class="sr-only">Email</label>
                                <input type="email" class="form-control" id="email" size="40" onChange={(e) => setEmail(e.target.value)} placeholder="Password" />
                            </div>

                            <button onClick={() => handleMakeAdmin()}  type="submit" class="btn btn-success mb-2 ml-2">Submit</button>
                        </form>
                    </div>

                </div>

            </div>
            </div>}

        </div>
    );
};

export default MakeAdmin;