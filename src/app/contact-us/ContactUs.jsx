"use client";

import Contact from '@/components/homepage/Contact'
import React, { useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const ContactUs = () => {
  const sectionRef = useRef(null);
  const mapRef = useRef(null);

  useEffect(() => {
    AOS.init({ duration: 900, once: true });
  }, []);

  return (
    <div ref={sectionRef} className="bg-[#f7fafc]">
      {/* NO animation here because you already added */}
      <Contact />

      <div className="grid grid-cols-1 lg:grid-cols-12 py-6">
        <div className="col-span-12 lg:col-start-2 lg:col-span-10 px-4 lg:px-0">

          {/* ⭐ Apply animation ONLY here */}
          <div
            className="map-container"
            ref={mapRef}
            data-aos="fade-up"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.942609029381!2d77.02743597549971!3d28.601498475681662!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1bf8414a8d93%3A0xe68e66a744a275a1!2sModern%20Dental%20and%20Oro%20Maxillofacial%20Clinic!5e0!3m2!1sen!2sin!4v1763715231400!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              className="rounded-xl"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ContactUs;
