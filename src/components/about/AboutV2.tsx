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
        <div className="container px-0 max-w-5xl pt-16 md:px-6 md:pt-22" id="schedule-meet">
            {/* <Head>
                <script
                    type="text/javascript"
                    src="https://assets.calendly.com/assets/external/widget.js"
                    async
                ></script>
            </Head> */}

            <div
                className={`flex gap-10 ${sectionClass} pb-0 flex-col items-center md:items-start`}
            >
                <div className="flex-1 w-full">
                    <div className="">
                        <div className="px-0">
                            <div className="about-style-two-info">
                                <div className="text-center">
                                    <h4 className="sub-title mt-10">Talk to us</h4>
                                    <h2 className="title">Get your project moving!</h2>
                                    <p className="pt-4">{`You'll be talking to product and tech experts (no account managers)`}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex-1 w-full min-h-[1450px] sm:min-h-[930px] xl:min-h-[850px] relative">
                    <iframe
                        src="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ3qATp083x4v5bsAoj31XvXOHgfj6en6N6IVJV6B721-lTrO-6Q_jKnUk0jq8DU3l4CVD6NOVI8"
                        width="100%"
                        className="min-h-[1450px] sm:min-h-[930px] xl:min-h-[850px] max-w-[540px] sm:max-w-full md:left-0 overflow-hidden absolute w-screen md:relative md:w-full"
                        style={{
                            mixBlendMode: 'plus-lighter',
                            filter: 'invert(1) hue-rotate(172deg)',
                        }}
                    />
                </div>
            </div>
        </div>
    )
}

export default AboutV2
