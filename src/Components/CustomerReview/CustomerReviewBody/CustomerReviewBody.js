import React, { useContext, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router-dom';
import { UserContext } from '../../../App';
import Sidebar from '../../Shared/Sidebar/Sidebar';

const CustomerReviewBody = () => {

    const { loggedInUser } = useContext(UserContext)
    console.log(loggedInUser)
    const {displayName,photoURL} = loggedInUser

    const [description, setDescription] = useState('')

    const [company, setCompany] = useState('')


    // const { displayName } = useParams()

    // const history = useHistory(displayName)

    const handleReview = (displayName) => {
        // history.push(`/review/${email}`)

        const newOrder = {...loggedInUser}
        newOrder.description = description
        newOrder.company = company
        newOrder.photoURL = photoURL

        fetch('https://fathomless-bastion-54324.herokuapp.com/addReview', {
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

                    <h2 className="mb-3 pb-3">Review</h2>

                    <Form className="form" >

                        <Form.Group controlId="formBasicPassword">
                            <Form.Control type="text" value={loggedInUser.displayName} />
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Control type="text" placeholder="Company Nmae.."  onChange={(e) => setCompany(e.target.value)}  />
                        </Form.Group>
                       

                        <Form.Group controlId="formBasicPassword">
                            {/* <Form.Control type='text' onChange={(e) => setDescription(e.target.value)} /> */}
                            <form>
                                <textarea placeholder="Project Details.." onChange={(e) => setDescription(e.target.value)} ></textarea>
                            </form>
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Control type="text" value={photoURL} />
                        </Form.Group>

                        <Button onClick={() => handleReview(displayName)} style={{ marginLeft: '5px' }} variant="dark" size="md" >
                            Send
                        </Button>
                    </Form>
                </div>

            </div>
        </section >
    );
};

export default CustomerReviewBody;