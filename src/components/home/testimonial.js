import React from 'react'
import quote from '../assets/images/home/quote.png'
import user1 from '../assets/images/home/user1.png'
import user2 from '../assets/images/home/user2.png'
import user3 from '../assets/images/home/user3.png'

const Tesimonial = () => (
    <div className="tesimonial">

        <div className="container">

            <h2>Clients about us</h2>

            <div className="testimonial-content">

                <div className="row">

                    <div className="col-md-4">

                        <div className="testimonial-box">
                            <div className="testimonial-text">
                                <img src={quote} alt="quote" />
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit ame</p>
                            </div>
                            <div className="testimonial-footer">
                                <div className="client-info">
                                    <h5>Johnathan Doe</h5>
                                    <span>Customer</span>
                                </div>
                                <div className="client-img">
                                    <img src={user1} alt="user" />
                                </div>
                            </div>

                        </div>

                    </div>


                    <div className="col-md-4">

                        <div className="testimonial-box">
                            <div className="testimonial-text">
                                <img src={quote} alt="quote" />
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit ame</p>
                            </div>
                            <div className="testimonial-footer">
                                <div className="client-info">
                                    <h5>Emily Watson</h5>
                                    <span>Customer</span>
                                </div>
                                <div className="client-img">
                                    <img src={user2} alt="user" />
                                </div>
                            </div>

                        </div>

                    </div>



                    <div className="col-md-4">

                        <div className="testimonial-box">
                            <div className="testimonial-text">
                                <img src={quote} alt="quote" />
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit ame</p>
                            </div>
                            <div className="testimonial-footer">
                                <div className="client-info">
                                    <h5>Cameron Emington</h5>
                                    <span>Customer</span>
                                </div>
                                <div className="client-img">
                                    <img src={user3} alt="user" />
                                </div>
                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </div>

  
    </div>
);

export default Tesimonial;
