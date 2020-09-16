import React from 'react'
import {Link} from "gatsby"
import collaborate1 from '../assets/images/home/colaboration1.png'
import collaborate2 from '../assets/images/home/colaboration2.png'
import collaborate3 from '../assets/images/home/colaboration3.png'

const Collaborate = () => (
    <div className="collaborate">
        <div className="container">
            <h2>Why collaborate with us</h2>
            <div className="row">

                <div className="col-md-4">
                    <div className="collaborate-box">
                        <img src={collaborate1} alt="collaborate" />
                        <h4>Take responsibility to green environment</h4>
                        <ul className="collaborate-list d-flex">
                            <li>solar panels</li>
                            <li>green roof top</li>
                            <li>green thу facade</li>
                            <li>insulation</li>
                        </ul>
                        <Link to="/">Read more</Link>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="collaborate-box">
                        <img src={collaborate2} alt="collaborate" />
                        <h4>Financial stability</h4>
                        <ul className="collaborate-list">
                            <li>financial compensation</li>
                            <li>stable cash position homeowner association</li>
                        </ul>
                        <Link to="/">Read more</Link>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="collaborate-box">
                        <img src={collaborate3} alt="collaborate" />
                        <h4>Aesthetic appearance</h4>
                        <ul className="collaborate-list">
                            <li>maintenance</li>
                            <li>modernize the building</li>
                            <li>cosmetic improvements</li>
                        </ul>
                        <Link to="/">Read more</Link>
                    </div>
                </div>

            </div>
        </div>
    </div>
);

export default Collaborate;
