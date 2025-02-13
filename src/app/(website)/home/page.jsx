import AboutV1 from '@/components/about/AboutV1';
import AboutV2 from '@/components/about/AboutV2.tsx';
import BannerV1 from '@/components/banner/BannerV1';
import BannerZoomV1 from '@/components/banner/BannerZoomV1';
import BlogV1 from '@/components/blog/BlogV1';
import BrandV1 from '@/components/brand/BrandV1';
import FactV1 from '@/components/fact/FactV1';
import FooterV1 from '@/components/footer/FooterV1';
import HeaderV1 from '@/components/header/HeaderV1';
import DarkLayout from '@/components/layouts/DarkLayout';
import PortfolioV1 from '@/components/portfolio/PortfolioV1';
import ServicesV1 from '@/components/services/ServicesV1';
import PriceV1 from '@/components/price/PriceV1';
import ProjectV1 from '@/components/project/ProjectV1';
import ServiceV3 from '@/components/services/ServiceV3';
import TeamV1 from '@/components/team/TeamV1';
import TestimonialV1 from '@/components/testimonial/TestimonialV1';
import ClientV1 from '@/components/client/ClientV1';
import WhyChooseV1 from '@/components/whyChoose/WhyChooseV1';
import React from 'react';
import Head from 'next/head'

export const metadata = {
    title: "Graphene Labs"
  };

const Home1 = () => {
    return (
        <>
            <Head>
                <script
                    type="text/javascript"
                    src="https://assets.calendly.com/assets/external/widget.js"
                    async
                ></script>
                <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet" />
            </Head>
            <div className="wrapper">
                <div className="smooth-scroll-container">
                    <HeaderV1 logoWhite={true} />
                    <div className="viewport">
                        <BannerV1 />
                        <BannerZoomV1 />
                        <ServiceV3 />
                        <PriceV1 />
                        {/* <AboutV1 sectionClass="default-padding-bottom relative" /> */}
                        {/* <FactV1 sectionClass="bg-gray" /> */}
                        <BrandV1 sectionClass="bg-gradient text-light" />
                        {/* <BrandV1 sectionClass="bg-gradient text-light" /> */}
                        {/* <TestimonialV1 /> */}
                        <ServicesV1 />
                        <ClientV1 />
                        <TeamV1 />
                        {/* <ProjectV1 /> */}
                        <AboutV2 sectionClass="pt-4 lg:pb-28 relative"/>
                        {/* <BlogV1 /> */}
                        <DarkLayout />
                    </div>
                    <FooterV1 logoWhite={true} />
                </div>
            </div>
        </>
    );
};

export default Home1;