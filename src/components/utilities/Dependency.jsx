"use client"
import Script from "next/script";
import React, { useEffect } from "react";
import { ScrollToTop } from "react-simple-scroll-up";

const Dependency = () => {
  useEffect(() => {
    // WOW.js debería estar ya cargado en el script
    const wow = new window.WOW({
      live: false,
    });
    wow.init();

    // Cargar Bootstrap JS
    require("bootstrap/dist/js/bootstrap.bundle.js");
  }, []);

  return (
    <>
      {/* Cargar WOW.js y usar beforeInteractive para que se cargue antes de la interacción */}
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/wow/1.1.2/wow.min.js"
        strategy="beforeInteractive" // Cargar el script antes de la interacción
      />
      <ScrollToTop symbol={<i className="fal fa-long-arrow-up"></i>} />
    </>
  );
};

export default Dependency;
