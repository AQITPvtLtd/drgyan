"use client";

import Image from "next/image";
import Link from "next/link";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP Plugin
gsap.registerPlugin(ScrollTrigger);

export default function Banner() {
  const bannerRef = useRef(null);
  const contentRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Background fade + subtle zoom animation
      gsap.from(".bg-animate > .bg-img", {
        opacity: 0,
        scale: 1.05, // thoda kam zoom — overflow kam hoga
        duration: 1.8,
        ease: "power3.out",
        transformOrigin: "center center",
        willChange: "transform, opacity",
        scrollTrigger: {
          trigger: bannerRef.current,
          start: "top bottom",
          toggleActions: "restart none none reset",
        },
      });

      // Heading animation
      gsap.from(".banner-heading", {
        y: 50,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
        delay: 0.2,
        willChange: "transform, opacity",
        scrollTrigger: {
          trigger: bannerRef.current,
          start: "top 80%",
          toggleActions: "restart none none reset",
        },
      });

      // Paragraph animation
      gsap.from(".banner-sub", {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        delay: 0.4,
        willChange: "transform, opacity",
        scrollTrigger: {
          trigger: bannerRef.current,
          start: "top 80%",
          toggleActions: "restart none none reset",
        },
      });

      // Button animation
      gsap.from(".banner-btn", {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        delay: 0.5,
        willChange: "transform, opacity",
        scrollTrigger: {
          trigger: bannerRef.current,
          start: "top 80%",
          toggleActions: "restart none none reset",
        },
      });
    }, bannerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={bannerRef}
      className="relative mt-20 w-full h-[85vh] md:h-[90vh] flex items-center overflow-hidden" // <-- overflow-hidden added
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-animate overflow-hidden"> {/* <-- overflow-hidden added */}
        <div className="bg-img absolute inset-0"> {/* wrapper to target animation safely */}
          <Image
            src="/banner/ban1.png"
            alt="Dentist Banner"
            fill
            className="object-cover lg:object-fill pointer-events-none select-none"
            priority
          />
        </div>

        {/* Smooth Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/10 to-transparent pointer-events-none" />
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto w-full px-6 md:px-10 text-white">
        <div
          ref={contentRef}
          className="max-w-xl bg-black opacity-60 px-10 py-10 rounded-2xl"
          style={{ willChange: "opacity, transform" }}
        >
          <h1
            className="text-4xl md:text-4xl font-extrabold leading-tight drop-shadow-xl banner-heading"
            style={{ fontFamily: "Roboto Slab, serif" }}
          >
            Transforming Smiles with,
            <span className="block mt-1 text-blue-300">Precision & Care</span>
          </h1>

          <p className="text-sm mt-4 text-gray-200 font-light banner-sub">
            Premium treatments with precision, expertise, and modern technology. <br />
            Trusted Dentists in Delhi for painless and advanced dental treatments.
          </p>

          <Link href="/contact-us">
            <button className="mt-8 bg-[#0769af] cursor-pointer hover:bg-blue-600 text-white px-8 py-4 rounded-full text-base md:text-lg font-semibold shadow-2xl transition-all duration-300 banner-btn">
              Book Your Slot
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
