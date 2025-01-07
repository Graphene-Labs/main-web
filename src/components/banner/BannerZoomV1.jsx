"use client"
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const BannerZoomV1 = () => {

    const [scroll, setScroll] = useState(0);

    const handleScroll = () => {
        setScroll(window.scrollY);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const width = 100 + scroll / 18 + '%';

    return (
        <>
            <div className="banner-animation-zoom">
                <div className="animation-zoom-banner" style={{ backgroundImage: "url(/assets/img/banner/1.jpg)", width: width }}></div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 offset-lg-6">
                            <div className="experience-box">
                                <div className="inner-content">
                                    <h2><strong>12+</strong> Years of experience</h2>
                                    <p>
                                    After 12 years of being part of the growth of technology, we are now focused on providing you with real and sustainable solutions.
                                    </p>
                                    <Link className="btn-animation" href="/services"><i className="fas fa-arrow-right"></i> <span>Our Services</span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    );
};

export default BannerZoomV1;