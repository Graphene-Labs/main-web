import React from 'react';
import ProjectDetailsContent from '@/components/project/ProjectDetailsContent';
import PortfolioV1Data from '@/assets/jsonData/portfolio/PortfolioV1Data.json';
import LayoutStyle2 from '@/components/layouts/LayoutStyle2';

export const metadata = {
    title: "Graphene Labs - Digital Transformation - Project Details"
};

const ProjectDetails = ({ params }) => {

    const { id } = params
    const data = PortfolioV1Data.find(portfolio => portfolio.id === parseInt(id))

    return (
        <>
            <LayoutStyle2 pageTitle="Natural plus modern" breadCrumb="project-details">
                <ProjectDetailsContent PortfolioInfo={data} />
            </LayoutStyle2>
        </>
    );
};

export default ProjectDetails;