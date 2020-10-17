import React, { useContext, useEffect, useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { UserContext } from '../../../App';
import { Link } from 'react-router-dom';

import ServiceHeader from '../../Shared/ServiceHeader/ServiceHeader';
import AdminSidebar from '../../Shared/Sidebar/AdminSidebar';
import ShowServiceListInfo from './ShowServiceListInfo/ShowServiceListInfo';
import OrderPage from '../../Order/OrderPage/OrderPage';
import ServiceListBody from '../../ServiceList/ServiceList/ServiceListBody/ServiceListBody';

const ShowServiceList = () => {
    const [bookings, setBookings] = useState([])
    const { loggedInUser } = useContext(UserContext);

    useEffect(() => {
        fetch('https://fathomless-bastion-54324.herokuapp.com/showServiceList?email=' + loggedInUser.email)
            .then(res => res.json())
            .then(data => setBookings(data))
    }, [])



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
                <Col className="order-container col-md-10 col-sm-12">
                    <h5>You have {bookings.length} services</h5>
                    <br />
                    <Row>
                        <Col>
                            <Form.Label type="text">Name</Form.Label>

                        </Col>
                        <Col>
                            <Form.Label type="text">Email</Form.Label>

                        </Col>
                        <Col>
                            <Form.Label type="text">RegisterDate</Form.Label>

                        </Col>
                        <Col>
                            <Form.Label type="text">Service</Form.Label>

                        </Col>
                        <Col>
                            <Form.Label type="text">Project detials</Form.Label>

                        </Col>
                        
                        <Col>
                            <Form.Label type="text">Action</Form.Label>

                        </Col>
                    </Row>
                    {
                        bookings.map(booking => <ShowServiceListInfo booking={booking} key={booking._id}></ShowServiceListInfo>)
                    }
                </Col>

            </div>
        </div>}
        {
            ! isAdmin && <div>
                            <ServiceListBody></ServiceListBody>
                        </div>
        }

        </div>
    );
};

export default ShowServiceList;