import React from 'react';
import ClientV1Data from '@/assets/jsonData/client/ClientV1Data.json'
import Link from 'next/link';
import Image from 'next/image';

const ClientV1 = () => {
    return (
        <>
            <div className="clietns-area default-padding-bottom bg-dark-secondary text-light">
                <div className="container">
                    <div className="client-items">
                        <div className="row align-center">
                            <div className="col-lg-5">
                                <h5>Join over 40,000 businesses worldwide.</h5>
                                <h2 className="title">Working great with top platforms</h2>
                                <Link className="btn mt-25 btn-gradient btn-sm" href="/contact-us">Join with Us</Link>
                            </div>
                            <div className="col-lg-7">
                                <div className="client-item-box">
                                    <div className="partner-box">
                                        {ClientV1Data.slice(0, 4).map(client =>
                                            <div className="item flex justify-center items-center" key={client.id}>
                                                <Image src={`/assets/img/icon/${client.icon}`} alt="Client Image" width={512} height={512} />
                                            </div>
                                        )}
                                    </div>
                                    <div className="partner-box">
                                        {ClientV1Data.slice(4, 7).map(client =>
                                            <div className="item flex justify-center items-center" key={client.id}>
                                                <i className={client.icon}></i>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ClientV1;