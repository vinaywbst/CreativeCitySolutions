import React from 'react'
import {Link} from "gatsby"
import intrested from '../assets/images/home/intrested.png'
import client1 from '../assets/images/home/client1.png'
import client2 from '../assets/images/home/client2.png'
import client3 from '../assets/images/home/client3.png'
import client4 from '../assets/images/home/client4.png'



const IntrestedCollaboration = () => (
    <div className="intrested-collaboration">


    <div className="intrested-content">
        <div className="container">
            <div className="row">

                <div className="col-md-6">
                    <div className="intrested-box">
                        <h2>Interested in collaboration?</h2>
                        <p>Lorem ipsum dolor sit amet, ctetur adipiscing elit, sed do eiusmod . Lorem ipsum dolor sit amet, ctetur adipiscing elit, sed do eiusmod </p>
                        <Link>Contact Us</Link>
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="intrested-image">
                        <img src={intrested} alt="intrested" />
                    </div>
                </div>

            </div>
        
        </div>
    </div>



        <div className="clients-logo">
          <div className="container">
            <div className="logo-box">
                <img src={client1} alt="logo" />
            </div>

            <div className="logo-box">
                <img src={client2} alt="logo" />
            </div>

            <div className="logo-box">
                <img src={client3} alt="logo" />
            </div>

            <div className="logo-box">
                <img src={client4} alt="logo" />
            </div>

        </div>


        </div>
    </div>
);

export default IntrestedCollaboration;
