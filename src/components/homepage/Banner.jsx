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
      // Background fade + zoom animation
      gsap.from(".bg-animate", {
        opacity: 0,
        scale: 1.1,
        duration: 1.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: bannerRef.current,
          start: "top bottom",
          toggleActions: "restart none none reset", // repeat on scroll
        },
      });

      // Heading animation
      gsap.from(".banner-heading", {
        y: 60,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
        delay: 0.2,
        scrollTrigger: {
          trigger: bannerRef.current,
          start: "top 80%",
          toggleActions: "restart none none reset",
        },
      });

      // Paragraph animation
      gsap.from(".banner-sub", {
        y: 40,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        delay: 0.4,
        scrollTrigger: {
          trigger: bannerRef.current,
          start: "top 80%",
          toggleActions: "restart none none reset",
        },
      });

      // Button animation
      gsap.from(".banner-btn", {
        y: 30,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        delay: 0.5,
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
      className="relative mt-20 w-full h-[85vh] md:h-[90vh] flex items-center"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-animate">
        <Image
          src="/banner/banner2.png"
          alt="Dentist Banner"
          fill
          className="object-cover"
          priority
        />

        {/* Smooth Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto w-full px-6 md:px-10 text-white">
        <div ref={contentRef} className="max-w-xl">
          <h1 className="text-4xl md:text-4xl font-extrabold leading-tight drop-shadow-xl banner-heading" style={{ fontFamily: "Roboto Slab, serif" }}>
            Transforming Smiles with,
            <span className="block mt-1 text-blue-300">Precision & Care</span>
          </h1>

          <p className="text-base mt-4 text-gray-200 font-light banner-sub">
            Premium treatments with precision, expertise, and modern technology.
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
