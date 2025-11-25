"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

export default function About() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const doctors = [
    {
      id: 1,
      name: "Dr. G.P. Bhardwaj",
      title: "MDS (Endodontist & Cosmetic Dentist)",
      img: "/about/35.png",
      about:
        "<strong>Dr. G.P. Bhardwaj</strong>, MDS, is a skilled Endodontist and Cosmetic Dentist known for precision, painless root canals, and advanced smile aesthetics, offering modern, compassionate, and patient-focused dental care for lasting results.",
    },
    {
      id: 2,
      name: "Dr Priyanka Gusain",
      title: "Dental Surgeon",
      img: "/about/36.png",
      about:
        "<strong>Dr Priyanka Gusain</strong>, an experienced Dental Surgeon, provides gentle, precise, and patient-centred care. She excels in preventive, restorative, and surgical treatments, ensuring comfortable procedures and healthy, confident smiles with modern dental techniques.",
    },
  ];

  return (
    <section className="py-12 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        
        <h2
          className="text-3xl text-black md:text-4xl font-semibold text-center mb-8"
          style={{ fontFamily: "Roboto Slab, serif" }}
          data-aos="fade-up"
        >
          About Us
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-5">
          {doctors.map((d) => (
            <article
              key={d.id}
              data-aos="fade-up"
              className="relative bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col md:flex-row items-stretch"
            >
              {/* IMAGE */}
              <div className="w-full md:w-1/2 h-64 md:h-auto flex items-center justify-center bg-[#f7fafc] relative">
                <Image
                  src={d.img}
                  alt={d.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-contain p-4"
                />
              </div>

              {/* TEXT */}
              <div className="p-6 md:p-8 w-full md:w-1/2 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-semibold">{d.name}</h3>

                  <p
                    className="text-sm mt-1 font-semibold text-black"
                    style={{ fontFamily: "Roboto Slab, serif" }}
                  >
                    {d.title}
                  </p>

                  <div
                    className="text-gray-600 mt-4 text-justify"
                    dangerouslySetInnerHTML={{ __html: d.about }}
                  />
                </div>

                <div className="mt-6 flex items-center gap-3">
                  <Link
                    href="/contact-us"
                    className="inline-flex items-center justify-center rounded-lg px-4 py-2 border border-transparent text-sm font-medium shadow-sm transition-transform transform hover:-translate-y-0.5 bg-[#0769af] text-white"
                    aria-label={`Contact ${d.name}`}
                  >
                    Book Your Slot
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
