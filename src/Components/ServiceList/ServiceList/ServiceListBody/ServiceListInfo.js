import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import React, { useEffect, useState } from 'react';


const ServiceListInfo = ({booking}) => {
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

    // const { enterDate, image.img, title, description} = props.booking
    // console.log(image.img)
    const{image} = booking
    console.log(image)

    return (


        <div className={classes.cardStyle}>
            <div className="">
                <img  style={{ width: '80px' }} src={`data:image/png;base64,${image.img}`}  class="card-img-top" alt="..." />
                <button type="button" class="btn btn-light ml-5">Primary</button>
                <h5 class="card-title mt-2 mb-2">{booking.title}</h5>
                <Typography variant="body2" gutterBottom>
                    {(new Date(booking.enterDate).toString('dd/MM/yyyy'))}
                </Typography>
                <p class="card-text text-secondary">{booking.description}</p>
            </div>
        </div>

    );
};

export default ServiceListInfo;