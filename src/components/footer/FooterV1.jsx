import Image from 'next/image';
import React from 'react';
import SocialShare from '../utilities/SocialShare';
import FooterNewsLetter from '../form/FooterNewsLetter';
import Link from 'next/link';
import logoLight from '@/assets/img/logo-light.png'
import logo from '@/assets/img/logo.png'

const FooterV1 = ({ logoWhite }) => {
    return (
        <>
            <footer>
                <div className="footer-box">
                    <div className="container">
                        <div className="f-items default-padding-bottom pt-70 pt-xs-0">
                            <div className="row">
                                <div className="col-lg-3 col-md-6 footer-item mt-20">
                                    <div className="flex flex-column h-[100%] justify-between">
                                        <div>

                                            <Link href="/">
                                                {logoWhite ?
                                                    <Image className="logo" src={logoLight} alt="Logo" />
                                                    : <Image className="logo" src={logo} alt="Logo" />
                                                }
                                            </Link>
                                            <p>
                                            Evolving to the next level is closer than you think. Let us help you get there.
                                            </p>
                                        </div>
                                        <div className="footer-social mt-30">
                                            <ul>
                                                <SocialShare />
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-3 col-md-6 mt-20 footer-item pl-50 pl-md-15 pl-xs-15">
                                    <div className="f-item link">
                                        <h4 className="widget-title">Company</h4>
                                        <ul>
                                            <li>
                                                <Link href="/about-us">Company Profile</Link>
                                            </li>
                                            <li>
                                                <Link href="/about-us">About</Link>
                                            </li>
                                            <li>
                                                <Link href="/contact-us">Help Center</Link>
                                            </li>
                                            <li>
                                                <Link href="/contact-us">Career</Link>
                                            </li>
                                            <li>
                                                <Link href="/about-us">Features</Link>
                                            </li>
                                            <li>
                                                <Link href="/contact-us">Contact</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="col-lg-3 col-md-6 mt-20 footer-item pl-50 pl-md-15 pl-xs-15">
                                    <div className="f-item link">
                                        <h4 className="widget-title">Solutions</h4>
                                        <ul>
                                            <li>
                                                <Link href="/about-us">Digital Transformation</Link>
                                            </li>
                                            <li>
                                                <Link href="/about-us">Process Automation</Link>
                                            </li>
                                            <li>
                                                <Link href="/contact-us">Enterprise-Wide Business Intelligence</Link>
                                            </li>
                                            <li>
                                                <Link href="/contact-us">Sales and Commercial Business Intelligence</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>



                                <div className="col-lg-3 col-md-6 footer-item  mt-20">
                                    <div className="f-item contact">
                                        <h4 className="widget-title">Contact Info</h4>
                                        <ul>
                                            <li>
                                                <div className="content">
                                                    <strong>Address:</strong>
                                                    1007 Ventnor G, Deerfield Beach, FL
                                                </div>
                                            </li>
                                            <li>
                                                <div className="content">
                                                    <strong>Email:</strong>
                                                    <a href="mailto:hello@graphenelabs.io">hello@graphenelabs.io</a>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="content">
                                                    <strong>Phone:</strong>
                                                    <a href="tel:+1 5614602879">+1(561)4602879</a>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="footer-bottom bg-dark text-light text-center">
                        <div className="container">
                            <div className="row">
                                <div>
                                    <p>
                                        Copyright &copy; {(new Date().getFullYear())} Graphene Labs. All Rights Reserved
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </footer>
        </>
    );
};

export default FooterV1;