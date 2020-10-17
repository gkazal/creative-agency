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

    const {title,image} = service

    const {setImage} = useContext(UserContext)

 
    const history = useHistory(title)
    const serviceHandle = (title) => { 
        setImage(image)

       history.push(`/order/${title}`)

    }


    return (

        <ButtonBase onClick={()=> serviceHandle(title)} className={classes.imageStyle} >
            <div className="hover mr-2 mb-5 pb-5 ">
                {
                    service.image ? <img style={{ width: '80px' }} src={`data:image/png;base64,${service.image.img}`} />
                    :
                    <img style={{ width: '80px' }} src={`http://localhost:4000/${service.img}`} class="card-img-top" alt="" />
                }
                <h5 class="card-title mt-2 mb-2">{service.title}</h5>
                <p class="card-text text-secondary">{service.description}</p>
            </div>

        </ButtonBase>

    );
};

export default ServiceDetail;