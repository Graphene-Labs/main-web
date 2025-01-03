'use client'
import React, { useState } from 'react'
import SingleAboutV2Accordion from './SingleAboutV2Accordion'
import AboutV2Data from '@/assets/jsonData/about/AboutV2Data.json'
import PopupVideo from '../video/PopupVideo'

const AboutV2 = ({ sectionClass }) => {
  const [openAccordion, setOpenAccordion] = useState(1) // Estado para controlar cuál está abierto

  const handleToggle = (id) => {
    setOpenAccordion((prevId) => (prevId === id ? null : id)) // Colapsar si está abierto o abrir otro
  }

  return (
    <>
      <div className={`about-style-two-area ${sectionClass}`}>
        <div className="about-style-two-thumb">
          <div className="experience-style-one">
            <div className="video-button">
              <PopupVideo videoId="ipUuoMCEbDQ" videoClass="video-play-button light">
                <i className="fas fa-play"></i>
                <div className="effect"></div>
              </PopupVideo>
            </div>
            <h3>
              We’ve over <br /> 28 Years of Experience
            </h3>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-5 offset-lg-7">
              <div className="about-style-two-info">
                <h4 className="sub-title">Our Benifits</h4>
                <h2 className="title">Unlock revenue Growth to start Business</h2>
                <div className="faq-style-one mt-20">
                  <div className="space-y-4" id="faqAccordion">
                    {AboutV2Data.map((accordion) => (
                      <SingleAboutV2Accordion
                        accordion={accordion}
                        key={accordion.id}
                        isOpen={openAccordion === accordion.id}
                        onToggle={() => handleToggle(accordion.id)}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AboutV2
