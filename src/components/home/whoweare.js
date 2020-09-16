import React from 'react'
import whoweare from '../assets/images/home/who-we-are.png'
import icon1 from '../assets/images/home/icon1.png'
import icon2 from '../assets/images/home/icon2.png'
import icon3 from '../assets/images/home/icon3.png'
import icon4 from '../assets/images/home/icon4.png'



const WhoWeAre = () => (
    <div className="who-we-are">
        <div className="container">
            <h2>Who we are</h2>
            <div className="row">

                <div className="col-md-6">
                    <div className="who-we-are-content">
                        <div className="who-we-are-box">
                            <img src={icon1} alt="Transparent" />
                            <h4>Transparent</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipis</p>
                        </div>

                        <div className="who-we-are-box">
                            <img src={icon2} alt="Realistic" />
                            <h4>Realistic</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipis</p>
                        </div>

                        <div className="who-we-are-box">
                            <img src={icon3} alt="Professional" />
                            <h4>Professional</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipis</p>
                        </div>

                        <div className="who-we-are-box">
                            <img src={icon4} alt="Win-win" />
                            <h4>Win-win</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipis</p>
                        </div>
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="who-we-are-image">
                        <img src={whoweare} alt="who we are" />
                    </div>
                </div>



            </div>
        </div>
    </div>
);

export default WhoWeAre;
