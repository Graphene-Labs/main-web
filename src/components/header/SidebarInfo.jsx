import Image from 'next/image';
import React from 'react';
import logoLight from '@/assets/img/logo-light.png'
import Link from 'next/link';
import { toast } from 'react-toastify';

const SidebarInfo = ({ openInfoBar, closeInfoBar, isInfoOpen }) => {

    const handleSubscribe = (event) => {
        event.preventDefault()
        event.target.reset()
        toast.success("Thanks For Subscribe")
    }

    return (
        <>
            <div className="attr-right">
                <div className="attr-nav flex">
                    <ul>
                        <li className="side-menu">
                            <Link href="#" onClick={openInfoBar} scroll={false}>
                                <span className="bar-1"></span>
                                <span className="bar-2"></span>
                                <span className="bar-3"></span>
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className={`side ${isInfoOpen ? "on" : ""}`}>
                    <Link href="#" scroll={false} className="close-side" onClick={closeInfoBar}><i className="fa fa-times"></i></Link>
                    <div className="widget">
                        <div className="logo">
                            <Image src={logoLight} alt="Logo" />
                        </div>
                    </div>
                    <div className="widget">
                        <p>
                        At Graphene Labs, we harness advanced digital technologies such as artificial intelligence, blockchain, and tailored web solutions to drive business transformation and market expansion. Our approach integrates various digital platforms, enabling businesses to streamline operations, secure data, and enhance customer engagement, ensuring they stay competitive and innovative in their industries.
                        </p>
                    </div>
                    <div className="widget address">
                        <div>
                            <ul>
                                <li>
                                    <div className="content">
                                        <p>Address</p>
                                        <strong>California, TX 70240</strong>
                                    </div>
                                </li>
                                <li>
                                    <div className="content">
                                        <p>Email</p>
                                        <strong>hello@graphenelabs.io</strong>
                                    </div>
                                </li>
                                <li>
                                    <div className="content">
                                        <p>Contact</p>
                                        <strong>+1 5614602879</strong>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="widget newsletter">
                        <h4 className="title">Get Subscribed!</h4>
                        <form onSubmit={handleSubscribe}>
                            <div className="input-group stylish-input-group">
                                <input type="email" placeholder="Enter your e-mail" className="form-control" name="email" autoComplete='off' />
                                <span className="input-group-addon">
                                    <button type="submit">
                                        <i className="fas fa-arrow-right"></i>
                                    </button>
                                </span>
                            </div>
                        </form>
                    </div>
                    <div className="widget social">
                        <ul className="link">
                            <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                            <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                            <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
                            <li><a href="#"><i className="fab fa-behance"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SidebarInfo;