import React, { useEffect, useState } from 'react';
import FeedbackPost from '../FeedbackPost/FeedbackPost';


const Feedback = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        fetch('http://localhost:4000/reviewInfo')
            .then(res => res.json())
            .then(data => setData(data))
    }, [])
    return (
        <section>
            <div className="container mt-5 pt-5">
                <div className="container">
                    <h4 style={{ textAlign: 'center', marginTop: '50px' }}>Clients <span style={{ color: 'green' }}>Feedback</span></h4>
                </div>
                <div className="card-deck mt-5">
                    {
                        data.map(feedback => <FeedbackPost feedback={feedback} key={feedback.id}></FeedbackPost>)

                    }

                </div>

            </div>

        </section>
    );
};

export default Feedback;