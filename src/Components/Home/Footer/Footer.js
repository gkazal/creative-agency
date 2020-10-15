import { TextField } from '@material-ui/core';
import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <main style={{ height: '600px', backgroundColor: '#FBD062' }} className="  mt-5 pt-5">
            <div className="row">
                <div className="col-md-4 offset-md-1">
                    <h1 className="text-bolt">Lets Grow Your  <br /> Brand To The <br /> Next Level</h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque reiciendis rem, nisi ratione quisquam inventore.</p>
                </div>

                <div className="col-md-6">
                    <form>
                        <div class="form-group ">
                            <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Your Email Address" />
                        </div>
                        <div class="form-group ">
                            <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Your Name/Company Name" />
                        </div>
                        <div>

                            <form>
                                <textarea placeholder="Your Message.."></textarea>
                            </form>

                        </div>
                        <div>
                            <button style={{ width: '150px' }} className="btn btn-dark">Send</button>
                        </div>
                    </form>
                </div>


            </div>
            <div className="col-md-12">
                <p className="text-center mb-5 pb-5" >
                    <small>copyright orange Labs {(new Date()).getFullYear()}</small>
                </p>
            </div>


        </main>
    );
};

export default Footer;