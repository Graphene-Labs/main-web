import React from 'react';
import Link from 'next/link';

const MainMenu = ({ toggleSubMenu }) => {
    return (
        <>
            <ul className="nav navbar-nav navbar-center">
                {/* <li><Link href="/about-us">About</Link></li>
                <li className="dropdown">
                    <Link href="/home2" className="dropdown-toggle">Solutions</Link>
                    <ul className="dropdown-menu">
                        <li><Link href="/services">Service Version One</Link></li>
                        <li><Link href="/services-2">Service Version Two</Link></li>
                        <li><Link href="/services-details/1">Marketing Strategy</Link></li>
                        <li><Link href="/services-details/1">Enterprise Consulting</Link></li>
                        <li><Link href="/services-details/1">Growth Tracking</Link></li>
                        <li><Link href="/services-details/1">Social Media Marketing</Link></li>
                        <li><Link href="/services-details/1">Keyword Research</Link></li>
                    </ul>
                </li> */}
                {/* <li><Link href="/blog-with-sidebar/1">Blog</Link></li> */}
                {/* <li><Link href="/project">Showcase</Link></li>
                <li><Link href="/blog-with-sidebar/1">Careers</Link></li> */}
                {/* <li className="dropdown">
                    <Link href="#" className="dropdown-toggle active" onClick={toggleSubMenu}>Home</Link>
                    <ul className="dropdown-menu">
                        <li><Link href="/home2">Portfolio Interactive <span className="badge">Trend</span></Link></li>
                        <li><Link href="/home5">Portfolio Parallax <span className="badge">New</span></Link></li>
                        <li><Link href="/">Digital Agency</Link></li>
                        <li><Link href="/home3">Creative Agency</Link></li>
                        <li><Link href="/home4">Portfolio Slide</Link></li>
                        <li className="dropdown">
                            <Link href="#" className="dropdown-toggle">Home Light Version</Link>
                            <ul className="dropdown-menu">
                                <li><Link href="/home-light">Digital Agency</Link></li>
                                <li><Link href="/home3-light">Creative Agency</Link></li>
                            </ul>
                        </li>
                    </ul>
                </li> */}
                {/* <li className="dropdown">
                    <Link href="#" className="dropdown-toggle" onClick={toggleSubMenu}>Pages</Link>
                    <ul className="dropdown-menu">
                        <li><Link href="/about-us">About Us</Link></li>
                        <li><Link href="/team">Team Members</Link></li>
                        <li><Link href="/team-details/1">Team Details</Link></li>
                        <li className="dropdown">
                            <Link href="#" className="dropdown-toggle" onClick={toggleSubMenu}> Projects</Link>
                            <ul className="dropdown-menu">
                                <li><Link href="/project">Project Showcase</Link></li>
                                <li><Link href="/project-details/1">Project Details</Link></li>
                                <li><Link href="/project-details-2">Project Details Two</Link></li>
                            </ul>
                        </li>
                        <li><Link href="/contact-us">Contact Us</Link></li>
                        <li><Link href="/not-found">Error Page</Link></li>
                    </ul>
                </li>
                <li className="dropdown">
                    <Link href="#" className="dropdown-toggle" onClick={toggleSubMenu}>Blog</Link>
                    <ul className="dropdown-menu">
                        <li><Link href="/blog-standard">Blog Standard</Link></li>
                        <li><Link href="/blog-with-sidebar/1">Blog With Sidebar</Link></li>
                        <li><Link href="/blog-2-column">Blog Grid Two Colum</Link></li>
                        <li><Link href="/blog-3-column">Blog Grid Three Colum</Link></li>
                        <li><Link href="/blog-single">Blog Single</Link></li>
                        <li><Link href="/blog-single-with-sidebar/1">Blog Single With Sidebar</Link></li>
                    </ul>
                </li> */}
                {/* <li><Link href="/contact-us">contact</Link></li> */}
            </ul>
        </>
    );
};

export default MainMenu;