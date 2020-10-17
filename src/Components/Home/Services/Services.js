import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';

import ServiceDetail from '../ServiceDetail/ServiceDetail';


const Services = () => {
    const [data, setData] = useState([])

    const { setImage } = useContext(UserContext)
    setImage(data)

    useEffect(() => {
        fetch('https://fathomless-bastion-54324.herokuapp.com/service')
            .then(res => res.json())
            .then(data => setData(data))
    }, [])

    return (
        <div>
            <div className="text-center mt-5 pt-5 ">
                <h4>Provide awesome <span style={{ color: 'green' }}>services</span></h4>

            </div>
            <div className="row d-flex justify-content-center  service-container ">
                {
                    data.map(service => <ServiceDetail service={service} key={service._id}></ServiceDetail>)
                }

            </div>
        </div>
    );
};

export default Services;