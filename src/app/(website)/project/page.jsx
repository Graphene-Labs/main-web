import LayoutStyle2 from '@/components/layouts/LayoutStyle2';
import PortfolioV2 from '@/components/portfolio/PortfolioV2';
import React from 'react';

export const metadata = {
    title: "Graphene Labs - Digital Transformation - Project"
};

const Project = () => {
    return (
        <>
            <LayoutStyle2 pageTitle={`Take a look some of our recent case studies`} breadCrumb="project">
                <PortfolioV2 />
            </LayoutStyle2>
        </>
    );
};

export default Project;