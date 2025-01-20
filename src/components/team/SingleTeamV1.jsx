import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const SingleTeamV1 = ({ team }) => {
    const { id, thumb, icon1, icon2, icon3, person, designation, linkedin } = team

    return (
        <>
            <div className="team-style-one">
                <div className="thumb">
                    <Image src={`/assets/img/team/${thumb}`} alt="Team Image" width={800} height={800} />
                    <ul className="social">
                        <li className="linkedin">
                            <a href={`https://www.linkedin.com/in/${linkedin}`}>
                                <i className={icon1}></i>
                            </a>
                        </li>
                        {/* <li className="facebook">
                            <a href="https://www.facebook.com/" target='_blank'>
                                <i className={icon1}></i>
                            </a>
                        </li>
                        <li className="twitter">
                            <a href="https://www.twitter.com/" >
                                <i className={icon2}></i>
                            </a>
                        </li> */}
                    </ul>
                </div>
                <div className="content">
                    {/* <Link href="#" scroll={false}><i className={icon3}></i></Link> */}
                    <div className="info">
                        {/* <h4><Link href={`/team-details/${id}`}>{person}</Link></h4> */}
                        <h4><Link href={`https://www.linkedin.com/${linkedin}`}>{person}</Link></h4>
                        <span className='text-xs'>{designation}</span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SingleTeamV1;