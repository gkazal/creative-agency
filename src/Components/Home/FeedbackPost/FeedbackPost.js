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


    return (
        <div class="card " style={{ width: '18rem', marginBottom:"100px" }}>
            <div className="row card-body">
                <div className="mr-3 ml-2">
                    <Avatar alt="Remy Sharp" src={feedback.img} className={classes.large} /> 
                </div>

                <div >
                    <h5 class="card-title">{feedback.name}</h5>
                    <h6 className="card-title">{feedback.position}</h6>
                </div>
            </div>

            <div className="card-body">
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>

            </div>
        </div>

    );
};

export default FeedbackPost;