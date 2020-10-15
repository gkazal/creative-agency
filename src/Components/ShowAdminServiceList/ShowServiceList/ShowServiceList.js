import React, { useContext, useEffect, useState } from 'react';
import { Col, Form, Row } from 'react-bootstrap';

import ServiceHeader from '../../Shared/ServiceHeader/ServiceHeader';
import AdminSidebar from '../../Shared/Sidebar/AdminSidebar';
import ShowServiceListInfo from './ShowServiceListInfo/ShowServiceListInfo';

const ShowServiceList = () => {
    const [bookings, setBookings] = useState([])


    useEffect(() => {
        fetch('http://localhost:4000/showServiceList')
            .then(res => res.json())
            .then(data => setBookings(data))
    }, [])

    return (
        <div>
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

        </div>
    );
};

export default ShowServiceList;