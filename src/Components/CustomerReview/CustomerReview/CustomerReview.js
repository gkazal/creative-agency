import React from 'react';
import ServiceHeader from '../../Shared/ServiceHeader/ServiceHeader';
import CustomerReviewBody from '../CustomerReviewBody/CustomerReviewBody';

const CustomerReview = () => {
    return (
        <div>
            <ServiceHeader></ServiceHeader>
            <CustomerReviewBody></CustomerReviewBody>
        </div>
    );
};

export default CustomerReview;