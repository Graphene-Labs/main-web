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
                                        <div className="timer"><Count end={80} enableScrollSpy /></div>
                                        {/* <div className="operator">K</div> */}
                                    </div>
                                    <span className="medium">Completed Projects</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-5 col-lg-6 lg:pl-20 pl-md-15 pl-xs-15">
                            <div className="about-style-one">
                                <h2 className="title mb-30">Empowering a New Era of Digital Excellence</h2>
                                <p>
                                Our culture is rooted in empowerment and innovation. We leverage cutting-edge technology to address global business needs and anticipate future challenges. Driven by a mission to transform digital experiences, we push boundaries through advancements in AI, blockchain, and web development.
                                </p>
                                <ul className="list-simple">
                                    <li>Amazing communication.</li>
                                    <li>Innovation and Collaboration</li>
                                    <li>Sustainability and Responsibility</li>
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