import React from 'react';

const SocialShare = () => {
    return (
        <>
            <li className='facebook'>
                <a href="http://facebook.com" target='_blank'><i className="fab fa-facebook-f"></i></a>
            </li>
            <li className='twitter'>
                <a href="http://twitter.com" target='_blank'><i className="fab fa-twitter"></i></a>
            </li>
            <li className='linkedin'>
                <a href="http://linkedin.com" target='_blank'><i className="fab fa-linkedin-in"></i></a>
            </li>
        </>
    );
};

export default SocialShare;