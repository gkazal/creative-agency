import React, { useContext, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import Sidebar from '../../Shared/Sidebar/Sidebar';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';

import './OrderForm.css'
import { Grid } from '@material-ui/core';
import { UserContext } from '../../../App';
import DateFnsUtils from '@date-io/date-fns';
import { useHistory, useParams } from 'react-router-dom';



const OrderForm = () => {

    const {loggedInUser} = useContext(UserContext)
    const {email} = loggedInUser

    const { name } = useParams()
    console.log(name)

    const [serviceName] = useState({ name })

    const [description, setDescription] = useState('')

    const {image} = useContext(UserContext)



    const [selectedDate, setSelectedDate] = useState({
        enterDate: new Date()
    });

    const handleEnterDate = (date) => {
        const newDates = { ...selectedDate }
        newDates.enterDate = date
        setSelectedDate(newDates);
    };

    const history = useHistory(name)


    const handleOrder = (email) => {
        history.push(`/service/${email}`)

        const newOrder = {...loggedInUser, ...selectedDate, ...serviceName }
        newOrder.description = description
        newOrder.image = image


        fetch('http://localhost:4000/addBookingService', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newOrder)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
    }


    return (
        <section>
            <div className="row order-container">
                <div className="col-md-2 col-sm-6">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-10 col-sm-6 order-form" style={{ height: "100vh" }}>

                    <h2 className="mb-3 pb-3">Order here..</h2>

                    <Form className="form" >

                        <Form.Group controlId="formBasicPassword">
                            <Form.Control type="text" value={loggedInUser.displayName} />
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Control type="text" value={loggedInUser.email} />
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Control type="text" value={name} />
                        </Form.Group>

                        <Form.Group  controlId="formBasicPassword">
                            {/* <Form.Control type='text' onChange={(e) => setDescription(e.target.value)} /> */}
                            <form>
                                <textarea placeholder="Project Details.." onChange={(e)=>setDescription(e.target.value)} ></textarea>
                            </form>
                        </Form.Group>

                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <Grid container >
                                <KeyboardDatePicker
                                    disableToolbar
                                    variant="inline"
                                    format="dd/MM/yyyy"
                                    margin="normal"
                                    id="date-picker-inline"
                                    label="Enterence Date"
                                    value={selectedDate.enterDate}
                                    onChange={handleEnterDate}
                                    KeyboardButtonProps={{
                                        'aria-label': 'change date',
                                    }}
                                />

                            </Grid>
                        </MuiPickersUtilsProvider>

                        <Button onClick={() => handleOrder(email)} style={{ marginLeft: '5px' }} variant="dark" size="md" >
                            Send
                        </Button>
                    </Form>

                </div>

            </div>
        </section>
    );
};

export default OrderForm;