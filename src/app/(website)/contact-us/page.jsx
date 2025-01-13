import ContactContent from '@/components/contact/ContactContent';
import LayoutStyle2 from '@/components/layouts/LayoutStyle2';
import React from 'react';

export const metadata = {
    title: "Graphene Labs - Digital Transformation - Contact Us"
};

const ContactUs = () => {
    return (
        <>
            <LayoutStyle2 pageTitle="Get in touch with us" breadCrumb="contact-us">
                <ContactContent />
            </LayoutStyle2>
        </>
    );
};

export default ContactUs;