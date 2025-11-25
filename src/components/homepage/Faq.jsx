"use client";

import React, { useState, useEffect } from "react";
import { FaChevronDown } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const faqs = [
  { question: 'Why should I visit the dentist regularly?', answer: 'Regular check-ups help prevent cavities, gum disease, and major dental issues before they become painful or expensive.' },
  { question: 'How often should I get a dental cleaning?', answer: 'Most people need a cleaning every 6 months. Some may need it more often if they have gum issues.' },
  { question: 'Does dental treatment hurt?', answer: 'Most treatments are painless. Modern techniques and anesthesia make your experience comfortable and stress-free.' },
  { question: 'What should I do if I have a toothache?', answer: 'Book an appointment immediately. Toothaches usually mean infection or decay that needs quick treatment.' },
  { question: 'Is teeth whitening safe?', answer: 'Yes, professional whitening is safe and effective. It is done under expert supervision to protect your gums and enamel.' },
  { question: 'How long does a root canal take?', answer: 'Most root canals are completed in 1–2 sittings, depending on the infection.' },
  { question: 'When should my child first visit the dentist?', answer: 'Around age 1 or when the first tooth appears.' },
  { question: 'Are dental X-rays safe?', answer: 'Yes, digital X-rays use very low radiation and are completely safe for children and adults.' },
];

export default function Faq() {
  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    AOS.init({
      duration: 700,
      once: false,
      easing: "ease-out-cubic",
    });
  }, []);

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="lg:py-20 py-12 px-6 md:px-12 lg:px-24 mx-auto bg-white">
      <div className="grid lg:grid-cols-2 gap-12 items-start">

        {/* Left Heading */}
        <div data-aos="fade-right">
          <h2
            className="lg:text-5xl text-3xl font-bold text-gray-900 leading-tight"
            style={{ fontFamily: "Roboto Slab, serif" }}
          >
            Frequently Asked<br />Questions
          </h2>
        </div>

        {/* Right Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="bg-white rounded-xl shadow-md p-5 transition-all hover:shadow-lg faq-card"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full flex justify-between items-center text-left font-semibold text-gray-900 text-base"
              >
                {faq.question}
                <FaChevronDown
                  className={`transition-transform duration-300 ${
                    activeIndex === index ? "rotate-180" : ""
                  } text-gray-500`}
                />
              </button>

              <div
                className={`overflow-hidden transition-[max-height,margin] duration-300 ${
                  activeIndex === index ? "max-h-[500px] mt-3" : "max-h-0"
                }`}
              >
                <p className="text-sm text-gray-600 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
