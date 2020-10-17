import React from 'react';
import { Carousel } from 'react-bootstrap';
import carousel1 from '../../../images/carousel-1.png'
import carousel2 from '../../../images/carousel-2.png'
import carousel3 from '../../../images/carousel-3.png'
import carousel4 from '../../../images/carousel-4.png'
import carousel5 from '../../../images/carousel-5.png'

import './Work.css'



const Work = () => {
    return (

        <div style={{ backgroundColor: 'black' }}>
            <h4 style={{color:'white', textAlign:'center'}}>Here are some of our works</h4>



            <div style={{ width: '400px',marginLeft: '35%' }} id="carouselExampleFade" class="carousel slide carousel-fade mt-5 pt-5 mb-5 pb-5 " data-ride="carousel">
                <div class="carousel-inner d-flex justify-content-center "  >
                    <div className=" ">
                        <div class="carousel-item active ">
                            <img src={carousel1} class="d-block w-100" alt="..." />
                        </div>
                        <div class="carousel-item">
                            <img src={carousel2} class="d-block w-100" alt="..." />
                        </div>
                        <div class="carousel-item">
                            <img src={carousel5} class="d-block w-100" alt="..." />
                        </div>
                    </div>


                    <a class="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>
                </div>
            </div>

            {/* <div id="slider1" className="carousel slide" data-ride="carousel1">
                
                <div className="carousel-inner " role="listbox">
                    <div className="carousel-item active ">
                        <img src={carousel1} className="d-block img-fluid" alt="First Slide"/>
                    </div>
                    <div className="carousel-item active">
                        <img src={carousel2} className="d-block img-fluid" alt="second Slide"/>
                    </div>
                    <div className="carousel-item active">
                        <img src={carousel3} className="d-block img-fluid" alt="third Slide"/>
                    </div>
                    <div className="carousel-item active">
                        <img src={carousel4} className="d-block img-fluid" alt="fourth Slide"/>
                    </div>
                </div>
                <a href="#slider1" className="carousel-control-prev" data-slide="prev">
                    <span className="carousel-control-prev-icon"></span>
                </a>
                <a href="#slider1" className="carousel-control-next" data-slide="next">
                    <span className="carousel-control-next-icon"></span>
                </a>


            </div> */}
        </div>
    );
};

export default Work;