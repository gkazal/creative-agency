import React, { useEffect, useState } from 'react';
import FeedbackPost from '../FeedbackPost/FeedbackPost';


const Feedback = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        fetch('https://fathomless-bastion-54324.herokuapp.com/reviewInfo')
            .then(res => res.json())
            .then(data => setData(data))
    }, [])
    return (
        <section>
            <div>
                <div className="text-center mt-3 pt-3 mb-2 pb-2">
                    <h4 style={{ textAlign: 'center', marginTop: '50px' }}>Clients <span style={{ color: 'green' }}>Feedback</span></h4>
                </div>
                <div className="row d-flex justify-content-center  service-container ">
                    {
                        data.map(feedback => <FeedbackPost feedback={feedback} key={feedback.id}></FeedbackPost>)

                    }

                </div>

            </div>

        </section>
    );
};

export default Feedback;