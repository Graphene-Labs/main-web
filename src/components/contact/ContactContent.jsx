'use client'
import React, { useEffect, useState } from 'react'
import ContactForm from './ContactForm';
import SocialShare from '../utilities/SocialShare';

const ContactContent = () => {
    useEffect(() => {
        // Cargar el script de Calendly una vez que el componente se monta
        const script = document.createElement('script')
        script.src = 'https://assets.calendly.com/assets/external/widget.js'
        script.async = true
        document.body.appendChild(script)

        return () => {
            document.body.removeChild(script) // Limpiar el script cuando el componente se desmonta
        }
    }, []) // El efecto solo se ejecuta una vez

    return (
        <>
            <div className="contact-area contact-page overflow-hidden default-padding">
                <div className="container">
                    <div className="flex flex-col-reverse md:flex-row">
                        <div className="col-tact-stye-one col-lg-5 pr-50 pr-md-15 pr-xs-15">
                            <div className="contact-style-one-info">
                                <ul className="contact-address bg-dark text-light" style={{ backgroundImage: "url(assets/img/shape/globe.png)" }}>
                                    <li>
                                        <a className="phone-link" href="tel:+1 5614602879">+1(561)4602879</a>
                                    </li>
                                    <li>
                                        <div className="info">
                                            <h4>Location</h4>
                                            <p>
                                            1007 Ventnor G, Deerfield Beach, FL
                                            </p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="info">
                                            <h4>Official Email</h4>
                                            <a href="mailto:hello@graphenelabs.io">hello@graphenelabs.io</a>
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
                        <div className="col-tact-stye-one col-lg-7 xl:pl-60 pl-md-15 pl-xs-15 mt-md-50 mt-xs-50">
                            <h4 className="sub-title pt-12 md:pt-0">Have Questions?</h4>
                            <h2 className="title">Schedule a Call</h2>
                            <div
                                className="calendly-inline-widget"
                                data-url="https://calendly.com/hello-graphenelabs/30min?hide_event_type_details=1&hide_gdpr_banner=1"
                                style={{ minWidth: '320px', height: '700px' }}
                            ></div>
                            {/* <div className="contact-form-style-one">
                                <h4 className="sub-title">Have Questions?</h4>
                                <h2 className="title">Send us a Massage</h2>
                                <ContactForm />
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ContactContent;