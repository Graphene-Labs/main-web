import React from 'react';
import Link from 'next/link';
import PopupVideo from '../video/PopupVideo';

const BannerV1 = () => {
    return (
        <>
            <div className="banner-style-one h-[85vh] max-h-[850px]">
                <div className="container-lg">
                    <div className="row align-center">
                        <div className="col-lg-8 banner-one-item">
                            <h4 className='sub-title !border-none !p-0 !mb-2'>Maximize your sales and optimize operations </h4>
                            <h2>Evolve to the<strong>next level</strong></h2>
                        </div>
                        <div className="col-lg-3 offset-lg-1 banner-one-item text-center">
                            {/* <div className="curve-text">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 150 150" version="1.1">
                                    <path id="textPath" d="M 0,75 a 75,75 0 1,1 0,1 z"></path>
                                    <text><textPath href="#textPath">We are a tech laboratory</textPath></text>
                                </svg>
                                <PopupVideo videoClass="popup-youtube" videoId="ipUuoMCEbDQ">
                                    <i className="fas fa-arrow-right"></i>
                                </PopupVideo>
                            </div> */}
                        </div>
                    </div>
                    <div className="w-full text-right">
                        <Link className="btn mt-10 btn-gradient btn-md" href="/contact-us">Get a free consultation</Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BannerV1;