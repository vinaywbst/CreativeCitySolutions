import React from 'react'
import {Link} from "gatsby"
import logo from '../assets/images/footer/footer-logo.png'
import facebook from '../assets/images/footer/facebook.png'
import instagram from '../assets/images/footer/instagram.png'
import twitter from '../assets/images/footer/twitter.png'

const Footer = () => (
    <div className="footer-wrapper">
        <div className="container">
            <div className="row">
            <div className="col-md-3">
                <div className="footer-logo">
                    <img src={logo} alt="logo" />
                </div>
            </div>

            <div className="col-md-6">
                <div className="footer-menu">
                    <ul>
                        <li><Link to="/">About</Link></li>
                        <li><Link to="/">Portfolio</Link></li>
                        <li><Link to="/">FAQ</Link></li>
                        <li><Link to="/">For owners</Link></li>
                        <li><Link to="/">Contact Us</Link></li>
                    </ul>
                </div>
            </div>


            <div className="col-md-3">
                <div className="footer-social">
                    <ul>
                        <li><Link to="/"><img src={facebook} alt="facebook" /></Link></li>
                        <li><Link to="/"><img src={instagram} alt="instagram" /></Link></li>
                        <li><Link to="/"><img src={twitter} alt="twitter" /></Link></li>
                    </ul>
                </div>
            </div>
            </div>
        </div>

        
        <div className="footer-bottom">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <p>Copyright © 2020, Creaty City Solutions</p>
                    </div>
                </div>  
            </div>
        </div>

    </div>
);

export default Footer;
