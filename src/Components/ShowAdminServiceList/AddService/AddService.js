import React, { useContext, useEffect, useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { UserContext } from '../../../App';
import ServiceHeader from '../../Shared/ServiceHeader/ServiceHeader';
import AdminSidebar from '../../Shared/Sidebar/AdminSidebar';


const AddService = () => {

    const [file, setFile] = useState(null)

    const { loggedInUser } = useContext(UserContext)

    const [info, setInfo] = useState({})

    const handleFileChange = (e) => {
        const newFile = e.target.files[0]
        setFile(newFile)
    }

    const handleBlur = (e) => {
        const newInfo = { ...info }
        newInfo[e.target.name] = e.target.value
        setInfo(newInfo)

    }

    const handleService = () => {

        const formData = new FormData()
        formData.append('file', file)
        formData.append('title', info.title)
        formData.append('description', info.description)


        fetch('https://fathomless-bastion-54324.herokuapp.com/addService', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
            })
            .catch(error => {
                console.error(error)
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
        <div> {isAdmin && <div>
            <ServiceHeader></ServiceHeader>

            <div className="row">
                <div className="col-md-2 col-sm-12">
                    <AdminSidebar></AdminSidebar>
                </div>

                <div className="order-container col-md-10 col-sm-12 ">

                    <div className="row ml-3 pl-3 mr-5 pr-5 mt-5 pt-5 mb-5 pb-5" style={{ backgroundColor: 'white', height: '400px', borderRadius: '10px' }}>
                        <form className="col-md-5 ">
                            <div class="form-group ">
                                <label for="validationTooltip01">Service Title</label>
                                <input type="text" name="title" placeholder="enter title" class="form-control" onBlur={handleBlur} />
                            </div>

                            <div>
                                <label for="validationTooltip01">Description</label>
                                <textarea style={{ height: '100px' }} name="description" placeholder="enter description" onBlur={handleBlur}></textarea>
                            </div>

                            <div>
                                <button onClick={() => handleService()} style={{ width: '150px' }} className="btn btn-success">Send</button>
                            </div>

                        </form>
                        <form className="col-md-5">
                            <div class="form-group ">
                                <label for="validationTooltip01">Icon</label>
                                <input onChange={(e) => handleFileChange(e)} type="file" class="form-control" />
                            </div>
                        </form>

                    </div>
                </div>

            </div>
        </div>}

        </div>
    );
};

export default AddService;