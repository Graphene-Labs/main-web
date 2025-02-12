import React from 'react';
import PriceV1Data from '@/assets/jsonData/price/PriceV1Data.json'
import Image from 'next/image';
import shape11 from '@/assets/img/shape/11.png'
import SinglePriceV1 from './SinglePriceV1';
import Link from 'next/link';

const PriceV1 = ({ sectionClass }) => {
    return (
        <>
            <div className={`pricing-style-one-area default-padding-top pb-24 ${sectionClass}`}>
                <div className="shape-left-top">
                    <Image src={shape11} alt="Image Not Found" />
                </div>
                <div className="container">
                    <div className="pricing-items">
                        <div className="row align-center lg:gap-12">
                            <div className="col-xl-6 col-lg-7 " >
                                <h4 className="sub-title lg:hidden">Case Study</h4>

                                {/* {PriceV1Data.map(price =>
                                    <SinglePriceV1 price={price} key={price.id} />
                                )} */}
                                <div className={`pricing-style-one !mt-0 mb-6 lg:!mt-4 case-study-img min-h-[450px]`}>

                                </div>
                            </div>
                            <div className="flex-1">
                                <h4 className="sub-title hidden lg:inline-block">Case Study</h4>
                                <h2 className="title">Logistics Optimization for EU Shipments</h2>
                                <p>We transformed an existing e-commerce platform by seamlessly integrating top logistics providers like DHL, FedEx, and UPS. This game-changing solution empowers B2B companies across the EU to access unbeatable shipping rates for bulk orders, significantly reducing costs and accelerating cross-border deliveries. With smarter logistics, businesses can now scale faster and operate more efficiently than ever before.
                                </p>
                                {/* <h5>Join today and get <strong>50%</strong> Off</h5> */}
                                <Link className="btn mt-10 btn-gradient btn-sm" href="/#schedule-meet">Get a Free consultantion</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PriceV1;