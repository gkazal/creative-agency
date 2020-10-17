import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../../App';
import ServiceHeader from '../../../Shared/ServiceHeader/ServiceHeader';
import Sidebar from '../../../Shared/Sidebar/Sidebar';
import ServiceListInfo from './ServiceListInfo';

const ServiceListBody = () => {

    const [bookings, setBookings] = useState([])
    const { loggedInUser } = useContext(UserContext);


    useEffect(() => {
        fetch('https://fathomless-bastion-54324.herokuapp.com/bookingService?email=' + loggedInUser.email)
            .then(res => res.json())
            .then(data => setBookings(data))
    }, [])

    return (
        <div>
            <ServiceHeader></ServiceHeader>

            <div className="row">
                <div className="col-md-2 col-sm-6">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-10 order-container">
                    <h2>you have {bookings.length} services</h2>

                    {
                        bookings.map(booking => <ServiceListInfo key={booking._id} booking={booking}></ServiceListInfo>)
                    }

                </div>

            </div>

        </div>
    );
};

export default ServiceListBody;