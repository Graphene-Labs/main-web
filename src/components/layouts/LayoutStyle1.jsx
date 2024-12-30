import React from 'react';
import HeaderV1 from '../header/HeaderV1';
import FooterV1 from '../footer/FooterV1';

const LayoutStyle1 = ({ children }) => {
    return (
        <>
            <HeaderV1 />
            {children}
            <FooterV1 logoWhite={true} />
        </>
    );
};

export default LayoutStyle1;