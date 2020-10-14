import React from 'react';
import slack from '../../../images/logos/slack.png'
import google from '../../../images/logos/google.png'
import uber from '../../../images/logos/uber.png'
import netflix from '../../../images/logos/netflix.png'
import airbnb from '../../../images/logos/airbnb.png'

import './Client.css'

const Client = () => {
    return (
        <div className="client d-flex justify-content-between  ">
            <div className=" mx-auto m-5 p-5 ">
                <img style={{ height: '50px', border: '0' }} src={slack} className="img-thumbnail" alt="" />
                <img style={{ height: '50px', border: '0' }} src={google} className="img-thumbnail" alt="" />

                <img style={{ height: '50px', border: '0' }} src={uber} className="img-thumbnail" alt="" />

                <img style={{ height: '50px', border: '0' }} src={netflix} className="img-thumbnail" alt="" />
                <img style={{ height: '50px', border: '0' }} src={airbnb} className="img-thumbnail" alt="" />
            </div>

        </div>

    );
};

export default Client;