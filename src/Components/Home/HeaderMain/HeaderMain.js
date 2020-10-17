import React from 'react';
import frame from '../../../images/logos/Frame.png'

const HeaderMain = () => {
    return (
        <main style={{ height: '100%' }} className="row d-flex align-items-center">
            <div className="col-md-4 offset-md-1">
                <h1 className="text-bolt">Lets Grow Your  <br /> Brand To The <br /> Next Level</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. <br/> Itaque reiciendis rem, nisi ratione quisquam inventore.</p>
                <button className="btn btn-dark">Hire Us</button>
            </div>
            <div className="col-md-6">
                <img src={frame} className="img-fluid" alt="" />
            </div>

        </main>
    );
};

export default HeaderMain;