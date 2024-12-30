import React from 'react';
import ContactForm from './ContactForm';
import SocialShare from '../utilities/SocialShare';

const ContactContent = () => {
    return (
        <>
            <div className="contact-area contact-page overflow-hidden default-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-tact-stye-one col-lg-5 pr-50 pr-md-15 pr-xs-15">
                            <div className="contact-style-one-info">
                                <ul className="contact-address bg-dark text-light" style={{ backgroundImage: "url(assets/img/shape/globe.png)" }}>
                                    <li>
                                        <a className="phone-link" href="tel:+4733378901">+4733378901</a>
                                    </li>
                                    <li>
                                        <div className="info">
                                            <h4>Location</h4>
                                            <p>
                                                55 Main Street, The Grand Avenue <br /> 2nd Block, New York City
                                            </p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="info">
                                            <h4>Official Email</h4>
                                            <a href="mailto:info@digital.com.com">info@digital.com</a>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="info">
                                            <ul className="social-link">
                                                <SocialShare />
                                            </ul>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-tact-stye-one col-lg-7 pl-60 pl-md-15 pl-xs-15 mt-md-50 mt-xs-50">
                            <div className="contact-form-style-one">
                                <h4 className="sub-title">Have Questions?</h4>
                                <h2 className="title">Send us a Massage</h2>
                                <ContactForm />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ContactContent;