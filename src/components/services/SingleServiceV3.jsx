import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const SingleServiceV3 = ({ service }) => {
    const { id, icon, title, number, text, list, icon2, thumb } = service

    return (
        <>
            <li>
            {/* <Link href={`/services-details/${id}`} className="service-hover-item"> */}
                <div className="service-hover-item">
                    <div className="service-hover-content">
                        <div className="icon">
                            <i className={icon}></i>
                        </div>
                        <div className="item-title">
                            <h2>{title}</h2>
                            <span>{number}</span>
                        </div>
                        <div className="details">
                            <ul>
                                {list.map((item)=> (
                                    <li key={item}>{item}</li>
                                ))}
                            </ul>
                        </div>
                        {/* <div className="arrow">
                            <strong className="btn-animation"><i className={icon2}></i> <span>View More</span></strong>
                        </div> */}
                    </div>
                    <div className="service-hover-wrapper">
                        {/* <Image className="service-hover-placeholder" src={`/assets/img/portfolio/${thumb}`} alt="Image Not Found" width={337} height={337} /> */}
                    
                        <div className='service-hover-lottie'>
                            <DotLottieReact
                            src="https://lottie.host/f43441dc-bb4f-4456-b883-0142bab4c75e/19Ab50Xfuj.lottie"
                            loop
                            autoplay
                            />
                        </div>
                    </div>
                </div>
            </li>
        </>
    );
};

export default SingleServiceV3;