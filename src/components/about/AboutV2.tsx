'use client'
import React, { useEffect, useState } from 'react'
import SingleAboutV2Accordion from './SingleAboutV2Accordion'
import AboutV2Data from '@/assets/jsonData/about/AboutV2Data.json'
import PopupVideo from '../video/PopupVideo'
import Head from 'next/head'
import Link from 'next/link'

const AboutV2 = ({ sectionClass }) => {
    const [openAccordion, setOpenAccordion] = useState(1) // Estado para controlar cuál está abierto

    const handleToggle = (id) => {
        setOpenAccordion((prevId) => (prevId === id ? null : id)) // Colapsar si está abierto o abrir otro
    }

    useEffect(() => {
        // Cargar el script de Calendly una vez que el componente se monta
        const script = document.createElement('script')
        script.src = 'https://assets.calendly.com/assets/external/widget.js'
        script.async = true
        document.body.appendChild(script)

        return () => {
            document.body.removeChild(script) // Limpiar el script cuando el componente se desmonta
        }
    }, []) // El efecto solo se ejecuta una vez

    return (
        <div className="container">
            {/* <Head>
                <script
                    type="text/javascript"
                    src="https://assets.calendly.com/assets/external/widget.js"
                    async
                ></script>
            </Head> */}

            <div className={`flex gap-20 ${sectionClass}`}>
                <div className="flex-1">
                    {/* <div className="experience-style-one">
                        <div className="video-button">
                            <PopupVideo videoId="ipUuoMCEbDQ" videoClass="video-play-button light">
                                <i className="fas fa-play"></i>
                                <div className="effect"></div>
                            </PopupVideo>
                        </div>
                        <h3>{'We’ve over <br /> 28 Years of Experience'}</h3>
                    </div> */}
                    <div
                        className="calendly-inline-widget"
                        data-url="https://calendly.com/hello-graphenelabs/30min?hide_event_type_details=1&hide_gdpr_banner=1"
                        style={{ minWidth: '320px', height: '700px' }}
                    ></div>
                </div>
                <div className="container flex-1">
                    <div className="row">
                        <div className="">
                            <div className="about-style-two-info">
                                <h4 className="sub-title">Talk to us</h4>
                                <h2 className="title">Get your project moving!</h2>
                                <div className="faq-style-one mt-16 service-hover-content grid-cols-1">
                                    <div className="space-y-4 details" id="faqAccordion">
                                        <b>LOOKING FOR A RELIABLE SOFTWARE DEVELOPMENT COMPANY?</b>
                                        <p>
                                            Build a high-quality Indultrial product designed for
                                            seamless scaling, active user acquisition, and stable
                                            performance under high loads with Graphene Growth Labs
                                        </p>
                                        <ul>
                                            <li>We will respond to you within 24 hours.</li>
                                            <li>
                                                {`You'll be talking to product and tech experts (no
                                                account managers)`}
                                            </li>
                                        </ul>
                                        <Link
                                            className="btn btn-gradient btn-sm !mt-20"
                                            href="/contact-us"
                                        >
                                            Schedule a Call
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutV2
