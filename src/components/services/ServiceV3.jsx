"use client"
import React, { useEffect } from 'react';
import SingleServiceV3 from './SingleServiceV3';
import ServiceV3Data from '@/assets/jsonData/services/ServiceV3Data.json'

const ServiceV3 = () => {

    useEffect(() => {
        const linkElements = document.querySelectorAll('.service-hover-item');
        const linkHoverRevealElements = document.querySelectorAll('.service-hover-wrapper');
        const linkImages = document.querySelectorAll('.service-hover-placeholder');
        const lottieFiles = document.querySelectorAll('.service-hover-lottie');

        const handleMouseEnter = (index, e) => {
            linkHoverRevealElements[index].style.opacity = 0.2;
            linkHoverRevealElements[index].style.transform = `translate(0%, 0%) rotate(-3deg)`;
            // linkImages[index].style.transform = 'scale(1, 1)';
            // lottieFiles.style.transform = 'scale(1, 1)';
            linkHoverRevealElements[index].style.left = (e.clientX - 180) + "px";
        };

        const handleMouseLeave = (index) => {
            linkHoverRevealElements[index].style.opacity = 0;
            linkHoverRevealElements[index].style.transform = `translate(-50%, -50%) rotate(5deg)`;
            // linkImages[index].style.transform = 'scale(0.8, 0.8)';
            // lottieFiles.style.transform = 'scale(0.8, 0.8)';
        };

        linkElements.forEach((link, index) => {
            link.addEventListener('mousemove', (e) => handleMouseEnter(index, e));
            link.addEventListener('mouseleave', () => handleMouseLeave(index));
        });

        // Cleanup event listeners when the component unmounts
        return () => {
            linkElements.forEach((link, index) => {
                link.removeEventListener('mousemove', (e) => handleMouseEnter(index, e));
                link.removeEventListener('mouseleave', () => handleMouseLeave(index));
            });
        };
    }, []);

    return (
        <>
            <div className="services-style-three-area text-light overflow-hidden default-padding pb-0">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="site-heading">
                                <h4 className="sub-title">Innovative Solutions for Your Business</h4>
                                <h2 className="title">Mold Information <br /> Into Strategic Advantages</h2>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="service-hover-items">
                                <ul>
                                    {ServiceV3Data.map(service =>
                                        <SingleServiceV3 service={service} key={service.id} />
                                    )}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ServiceV3;