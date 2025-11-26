"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Banner() {
  const bannerRef = useRef(null);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section
      ref={bannerRef}
      className="relative mt-20 w-full h-[85vh] md:h-[90vh] flex items-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-animate overflow-hidden">
        <div className="bg-img absolute inset-0">
          <Image
            src="/banner/ban1.png"
            alt="Dentist Banner"
            fill
            className="object-cover lg:object-fill pointer-events-none select-none"
            priority
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/10 to-transparent pointer-events-none" />
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto w-full px-6 md:px-10 text-white">
        <div
          className="max-w-xl bg-black opacity-60 px-10 py-10 rounded-2xl"
        >
          <h1
            data-aos="fade-up"
            data-aos-delay="300"
            className="text-4xl md:text-4xl font-extrabold leading-tight drop-shadow-xl"
            style={{ fontFamily: "Roboto Slab, serif" }}
          >
            Transforming Smiles with,
            <span
              data-aos="fade-up"
              data-aos-delay="400"
              className="block mt-1 text-blue-300"
            >
              Precision & Care
            </span>
          </h1>

          <p
            data-aos="fade-up"
            data-aos-delay="500"
            className="text-sm mt-4 text-gray-200 font-light"
          >
            Premium treatments with precision, expertise, and modern technology. <br />
            Trusted Dentists in Delhi for painless and advanced dental treatments.
          </p>

          <Link href="/contact-us">
            <button
              data-aos="fade-up"
              data-aos-delay="600"
              className="mt-8 bg-[#0769af] cursor-pointer hover:bg-blue-600 text-white px-8 py-4 rounded-full text-base md:text-lg font-semibold shadow-2xl transition-all duration-300"
            >
              Book Your Slot
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
