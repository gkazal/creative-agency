import React, { useContext, useState } from 'react';
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
        const newInfo = {...info}
        newInfo[e.target.name] = e.target.value
        setInfo(newInfo)

    }

    const handleService = () => {
      
        const formData = new FormData()
        formData.append('file', file)
        formData.append('title', info.title)
        formData.append('description', info.description)


        fetch('http://localhost:4000/addService', {
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

    return (
        <div>
            <ServiceHeader></ServiceHeader>

            <div className="row">
                <div className="col-md-2 col-sm-12">
                    <AdminSidebar></AdminSidebar>
                </div>

                <Col className="order-container col-md-10 col-sm-12 ">

                    <div className="row">
                        <form className="col-md-5">
                            <div class="form-group ">
                                <label for="validationTooltip01">Service Title</label>
                                <input type="text" name="title" placeholder="enter title" class="form-control" onBlur={handleBlur}/>
                            </div>

                            <div>
                                <label for="validationTooltip01">Description</label>
                                <textarea name="description" placeholder="enter description" onBlur={handleBlur}></textarea>
                            </div>

                            <div>
                                <button onClick={() => handleService()} style={{ width: '150px' }} className="btn btn-dark">Send</button>
                            </div>

                        </form>
                        <form className="col-md-5">
                            <div class="form-group ">
                                <label for="validationTooltip01">Icon</label>
                                <input onChange={(e) => handleFileChange(e)} type="file" class="form-control" />
                            </div>
                        </form>

                    </div>
                </Col>

            </div>

        </div>
    );
};

export default AddService;