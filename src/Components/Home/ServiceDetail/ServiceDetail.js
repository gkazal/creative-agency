import { ButtonBase, makeStyles} from '@material-ui/core';
import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../../../App';

import './ServiceDetail.css'

const ServiceDetail = ({ service }) => {
    const useStyles = makeStyles((theme) => ({
       
        imageStyle: {
            width: '20rem',
            display: 'inline-block',
            margin: '20px',
            padding: '20px',            
        },
    }));
    const classes = useStyles();

    const {name,img} = service

    const {setImage} = useContext(UserContext)

 
    const history = useHistory(name)
    const serviceHandle = (name) => { 
        setImage(img)
        history.push(`/order/${name}`)

    }

    return (

        <ButtonBase onClick={()=> serviceHandle(name)} className={classes.imageStyle} >
            <div className="hover mr-3">
                <img style={{ width: '80px' }} src={service.img} class="card-img-top" alt="..." />
                <h5 class="card-title mt-2 mb-2">{service.name}</h5>
                <p class="card-text text-secondary">{service.description}</p>
            </div>

        </ButtonBase>

    );
};

export default ServiceDetail;