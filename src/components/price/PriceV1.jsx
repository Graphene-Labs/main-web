import React from 'react';
import PriceV1Data from '@/assets/jsonData/price/PriceV1Data.json'
import Image from 'next/image';
import shape11 from '@/assets/img/shape/11.png'
import SinglePriceV1 from './SinglePriceV1';
import Link from 'next/link';

const PriceV1 = ({ sectionClass }) => {
    return (
        <>
            <div className={`pricing-style-one-area default-padding-top bg-gray ${sectionClass}`}>
                <div className="shape-left-top">
                    <Image src={shape11} alt="Image Not Found" />
                </div>
                <div className="container">
                    <div className="pricing-items">
                        <div className="row align-center">
                            <div className="col-xl-6 col-lg-7 " >

                                {/* {PriceV1Data.map(price =>
                                    <SinglePriceV1 price={price} key={price.id} />
                                )} */}
                                <div className={`pricing-style-one case-study-img min-h-[450px]`}>

                                </div>
                            </div>
                            <div className="col-xl-5 col-lg-4 offset-xl-1 offset-lg-1 ">
                                <h4 className="sub-title">Case Study</h4>
                                <h2 className="title">Digital Transformation: Port Security and Loss Prevention</h2>
                                <p>We implemented a comprehensive solution for port security, integrating an IoT-based QR tracking system and advanced data analytics. This innovation enabled real-time monitoring of trucks, reducing operational losses, enhancing security, and improving overall efficiency in the port operations.
                                </p>
                                {/* <h5>Join today and get <strong>50%</strong> Off</h5> */}
                                <Link className="btn mt-10 btn-gradient btn-sm" href="/contact-us">Get a Free consultantion</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PriceV1;