import React, { useEffect, useState } from 'react';

import ServiceDetail from '../ServiceDetail/ServiceDetail';


const Services = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        fetch('http://localhost:4000/service')
            .then(res => res.json())
            .then(data => setData(data))
    }, [])

    return (
        <section>
            <div className="text-center mt-5 ">
                <h4>Provide awesome <span style={{ color: 'green' }}>services</span></h4>

            </div>
            <div className="d-flex justify-content-center  service-container ">
                <div className="">
                    {
                        data.map(service => <ServiceDetail service={service}></ServiceDetail>)
                    }

                </div>
            </div>
        </section>
    );
};

export default Services;