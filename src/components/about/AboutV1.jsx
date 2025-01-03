import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import about1Thumb from '@/assets/img/about/1.jpg'
import Count from '../count/Count';

const AboutV1 = ({ sectionClass }) => {
    return (
        <>
            <div className={`about-area ${sectionClass}`}>
                <div className="blur-bg-theme"></div>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-7 col-lg-6">
                            <div className="about-style-one-thumb animate" data-animate="fadeInUp">
                                <Image src={about1Thumb} alt="Image Not Found" />
                                <div className="fun-fact text-light animate" data-animate="fadeInDown" data-duration="1s">
                                    <div className="counter">
                                        <div className="timer"><Count end={38} enableScrollSpy /></div>
                                        <div className="operator">K</div>
                                    </div>
                                    <span className="medium">Completed Projects</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-5 col-lg-6 lg:pl-20 pl-md-15 pl-xs-15">
                            <div className="about-style-one">
                                <h2 className="title mb-30">Creative process in our agency</h2>
                                <p>
                                    From traditional and thought leadership campaigns
                                    to compress. storytelling and creative social media management
                                    we’ve got you covered. Something is not your average
                                    order-taking vendor. We are proud to be the go-to
                                    partner for some of the world’s biggest international agencies
                                    andbrands. Seeing rather her.
                                </p>
                                <ul className="list-simple">
                                    <li>Amazing communication.</li>
                                    <li>Best trendinf designing experience.</li>
                                </ul>
                                <Link href="/about-us" className="arrow-btn"><i className="fas fa-arrow-right"></i></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutV1;