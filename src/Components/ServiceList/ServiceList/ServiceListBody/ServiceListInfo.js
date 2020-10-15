import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import React, { useEffect, useState } from 'react';
import Sidebar from '../../../Shared/Sidebar/Sidebar';



const ServiceListInfo = (props) => {
    const useStyles = makeStyles((theme) => ({

        cardStyle: {
            width: '20rem',
            display: 'inline-block',
            margin: '20px',
            padding: '20px',
            backgroundColor: 'white',
            borderRadius: '5px'
        },
    }));
    const classes = useStyles();

    const { enterDate, image, name, description} = props.booking
    console.log(name, enterDate)

    return (


        <div className={classes.cardStyle}>
            <div className="">
                <img style={{ width: '80px' }} src={image} class="card-img-top" alt="..." />
                <button type="button" class="btn btn-light ml-5">Primary</button>
                <h5 class="card-title mt-2 mb-2">{name}</h5>
                <Typography variant="body2" gutterBottom>
                    {(new Date(enterDate).toString('dd/MM/yyyy'))}
                </Typography>
                <p class="card-text text-secondary">{description}</p>
            </div>
        </div>

    );
};

export default ServiceListInfo;