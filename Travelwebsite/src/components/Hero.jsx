import React from 'react';
// import './Hero.css';
// import ima1 from '../images/nubik.jpg';
import ima2 from '../images/pexel.jpg';

const Hero = () => {
    return (
        <section className='section text-white' id="intro">
            <div className='Heroimage'>
                <div className="container ctn1">
                    <div className="overlay">
                        <div className="left">
                            <p>Your next trip</p>
                            <div className="inner-1"> <p>From Dreaming to Exploring – Your Next Adventure Begins Here</p></div>
                            <div className="inner-2">
                                <ul>
                                    <li>
                                        <div className="search-container">
                                        <input type="text" className="search-input" placeholder="Search for next destination... at Banjaara Travels" />
                                        <button className="search-button">Search</button>
                                    </div>
                                    </li>
                                    <li>Affordable Prices ✅</li>
                                    <li>Exotic Priveleges and Locations ✅</li>
                                    <li>Easy Bookings ✅</li>
                                    <li>Best Tour Guides ✅</li>
                                </ul>
                            </div>
                        </div>
                        <div className="right">
                            <img src={ima2} className='imag'></img>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;
