import AboutV1 from '@/components/about/AboutV1';
import ClientV1 from '@/components/client/ClientV1';
import FactV1 from '@/components/fact/FactV1';
import LayoutStyle2 from '@/components/layouts/LayoutStyle2';
import TeamV1 from '@/components/team/TeamV1';
import TestimonialV1 from '@/components/testimonial/TestimonialV1';
import WhyChooseV1 from '@/components/whyChoose/WhyChooseV1';
import React from 'react';

export const metadata = {
    title: "Avrix - Digital Agency Portfolio - About Us"
};

const AboutUsPage = () => {
    return (
        <>
            <LayoutStyle2 pageTitle="About Us" breadCrumb="about-us">
                <AboutV1 sectionClass="default-padding" />
                <FactV1 />
                <WhyChooseV1 sectionClass="bg-gray" />
                <TestimonialV1 />
                <ClientV1 />
                <TeamV1 />
            </LayoutStyle2>
        </>
    );
};

export default AboutUsPage;