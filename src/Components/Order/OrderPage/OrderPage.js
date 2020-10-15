import React from 'react';
import ServiceHeader from '../../Shared/ServiceHeader/ServiceHeader';
import OrderForm from '../OrderForm/OrderForm';

const OrderPage = () => {
    return (
        <div>
            <ServiceHeader></ServiceHeader>
            <OrderForm></OrderForm>
        </div>
    );
};

export default OrderPage;