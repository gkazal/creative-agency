import React from 'react';
import mobile from '../../../images/icons/web and mobile.png'
import graphic from '../../../images/icons/graphics design.png'
import web from '../../../images/icons/web development.png'
import ServiceDetail from '../ServiceDetail/ServiceDetail';


const servicesData = [
    {
        name: 'Web and Mobile design',
        img: mobile,
        description: 'we craft stunning and amazin web ul using a weel draft to fit your project'
    },
    {
        name: 'Grapich Design',
        img: graphic,
        description: 'we craft stunning and amazin web ul using a weel draft to fit your project'
    },
    {
        name: 'Web Development',
        img: web,
        description: 'we craft stunning and amazin web ul using a weel draft to fit your project'
    },
]

const Services = () => {


    return (
        <section>
            <div className="text-center mt-5 ">
                <h4>Provide awesome <span style={{ color: 'green' }}>services</span></h4>

            </div>
            <div className="d-flex justify-content-center  service-container ">
                <div className="">
                    {
                        servicesData.map(service => <ServiceDetail service={service}></ServiceDetail>)
                    }

                </div>
            </div>
        </section>
    );
};

export default Services;