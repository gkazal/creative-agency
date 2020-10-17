import { Avatar, makeStyles } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    small: {
        width: theme.spacing(3),
        height: theme.spacing(3),
    },
    large: {
        width: theme.spacing(7),
        height: theme.spacing(7),
    },
}));

const FeedbackPost = ({ feedback }) => {
    const classes = useStyles();

    const {displayName, company, photoURL, description} = feedback


    return (
        <div class="card mr-2 mb-2 pb-2" style={{ width: '18rem',}}>
            <div className="row card-body">
                <div className="mr-3 ml-2">
                    <Avatar alt="Remy Sharp" src={photoURL} className={classes.large} /> 
                </div>

                <div >
                    <h5 class="card-title">{displayName}</h5>
                    <h6 className="card-title">{company}</h6>
                </div>
            </div>

            <div className="card-body">
                <p class="card-text">{description}</p>

            </div>
        </div>

    );
};

export default FeedbackPost;