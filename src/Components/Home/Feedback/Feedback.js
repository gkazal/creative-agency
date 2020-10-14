import React from 'react';
import FeedbackPost from '../FeedbackPost/FeedbackPost';
import customer1 from '../../../images/customer-1.png'
import customer2 from '../../../images/customer-2.png'
import customer3 from '../../../images/customer-3.png'


const clientsFeedback = [
    {
        name: 'Nash Patrick',
        position:'CEO, Manpol',
        img: customer1,
        description: 'we craft stunning and amazin web ul using a weel draft to fit your project'
    },
    {
        name: 'Miriam Baron',
        position:'CEO, Manpol',
        img: customer2,
        description: 'we craft stunning and amazin web ul using a weel draft to fit your project'
    },
    {
        name: 'Bria Balon',
        position:'CEO, Manpol',
        img: customer3,
        description: 'we craft stunning and amazin web ul using a weel draft to fit your project'
    },
]

const Feedback = () => {
    return (
        <section>
            <div className="container mt-5 pt-5">
                <div className="container">
                    <h4 style={{ textAlign: 'center',marginTop:'50px' }}>Clients <span style={{color:'green'}}>Feedback</span></h4>
                </div>
                <div className="card-deck mt-5">
                    {
                        clientsFeedback.map(feedback => <FeedbackPost feedback={feedback}></FeedbackPost> )

                    }

                </div>

            </div>

        </section>
    );
};

export default Feedback;