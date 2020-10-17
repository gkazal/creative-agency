import React from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';

const ShowServiceListInfo = ({ booking }) => {

    const { displayName, enterDate, email, title, description } = booking
    return (
        <Row>



            <Row style={{ marginBottom: '10px' ,border:'0' }}>
                <Col>
                    <Form.Control type="text" value={displayName} />
                </Col>
                <Col>
                    <Form.Control type="text" value={email} />
                </Col>
                <Col>
                    <Form.Control type="text" value={enterDate} />
                </Col>
                <Col>
                    <Form.Control type="text" value={title} />
                </Col>
                <Col>
                    <Form.Control type="text" value={description} />
                </Col>

                <Col>
                    {/* <Button><img style={{ width: '20px' }} alt="" /></Button> */}
                    <select name="cars" id="cars">
                        <option style={{color:'red'}} value="volvo">Pending</option>
                        <option style={{color:'green'}} value="saab">done</option>
                        <option style={{color:'yellow'}} value="opel">on going</option>
                    </select>
                </Col>
            </Row>

        </Row>
    );
};

export default ShowServiceListInfo;