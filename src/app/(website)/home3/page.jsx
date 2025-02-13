import AboutV2 from '@/components/about/AboutV2';
import BannerV3 from '@/components/banner/BannerV3';
import BlogV2 from '@/components/blog/BlogV2';
import BrandV1 from '@/components/brand/BrandV1';
import ClientV1 from '@/components/client/ClientV1';
import FooterV1 from '@/components/footer/FooterV1';
import HeaderV1 from '@/components/header/HeaderV1';
import DarkLayout from '@/components/layouts/DarkLayout';
import PriceV1 from '@/components/price/PriceV1';
import ProjectV1 from '@/components/project/ProjectV1';
import ServiceV3 from '@/components/services/ServiceV3';
import TeamV1 from '@/components/team/TeamV1';
import React from 'react';

export const metadata = {
    title: "Graphene Labs - Digital Transformation - Home 3"
};

const Home3 = () => {
    return (
        <>
            <div className="smooth-scroll-container">
                <HeaderV1 logoWhite={true} />
                <BannerV3 />
                <ServiceV3 />
                <AboutV2 />
                <BrandV1 sectionClass="default-padding brand-style-two-area" />
                <ClientV1 />
                <TeamV1 />
                <ProjectV1 />
                <PriceV1 />
                <BlogV2 />
                <FooterV1 logoWhite={true} />
                <DarkLayout />
            </div>
        </>
    );
};

export default Home3;