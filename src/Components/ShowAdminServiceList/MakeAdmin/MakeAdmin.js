import React from 'react';
import { Col, Row } from 'react-bootstrap';
import ServiceHeader from '../../Shared/ServiceHeader/ServiceHeader';
import AdminSidebar from '../../Shared/Sidebar/AdminSidebar';

const MakeAdmin = () => {

    const handleMakeAdmin = () => {

    }

    return (
        <div>
            <ServiceHeader></ServiceHeader>

            <div className="row">
                <div className="col-md-2 col-sm-12">
                    <AdminSidebar></AdminSidebar>
                </div>
                <Col className="order-container col-md-10 col-sm-12">
                    <div className="col-md-5 mt-3 pt-3 ">

                        <label for="validationTooltip01">Email</label>
                        <input type="email" name="email" placeholder="Email.." class="form-control"/>
                        <button onClick={() => handleMakeAdmin()} style={{ width: '150px' }} className="btn btn-success mt-3">Send</button>


                    </div>
                </Col>

                    </div>

        </div>
    );
};

export default MakeAdmin;