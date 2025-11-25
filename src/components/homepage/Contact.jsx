"use client";

import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt, FaClock } from "react-icons/fa";
import Link from "next/link";
import Form from "@/app/contact-us/form/Form";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {
    useEffect(() => {
        AOS.init({
            duration: 700,
            easing: "ease-out-cubic",
            once: false,
        });
    }, []);

    return (
        <section className="py-20 px-6 md:px-12 lg:px-24 bg-[#f7fafc]">

            {/* Heading */}
            <div
                className="text-center mb-16"
                data-aos="fade-down"
            >
                <h2
                    className="text-3xl md:text-4xl font-bold text-black tracking-wide"
                    style={{ fontFamily: "Roboto Slab, serif" }}
                >
                    Contact Us
                </h2>
                <p className="text-gray-600 mt-2">
                    We’re here to help with all your dental care needs.
                </p>
            </div>

            {/* Contact Info Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

                {/* Box 1 */}
                <Link
                    href="https://maps.app.goo.gl/UFLbkM9JhXAKRSXz9"
                    target="_blank"
                    rel="noopener noreferrer"
                    data-aos="fade-up"
                    data-aos-delay="100"
                    className="bg-white shadow-md rounded-2xl p-8 text-center hover:shadow-xl transition block"
                >
                    <div className="w-14 h-14 mx-auto mb-5 flex items-center justify-center bg-[#e7f2fb] text-[#0769af] rounded-full">
                        <FaMapMarkerAlt className="text-2xl" />
                    </div>
                    <p className="text-sm text-gray-600 leading-relaxed">
                        Shop No.382, Office Lobby Vegas Mall,<br />
                        Sector 14, Dwarka,<br /> New Delhi – 110078
                    </p>
                </Link>

                {/* Box 2 */}
                <Link
                    href="mailto:moderndentalclinicdm@gmail.com"
                    data-aos="fade-up"
                    data-aos-delay="200"
                    className="bg-white shadow-md rounded-2xl p-8 text-center hover:shadow-xl transition block"
                >
                    <div className="w-14 h-14 mx-auto mb-5 flex items-center justify-center bg-[#e7f2fb] text-[#0769af] rounded-full">
                        <FaEnvelope className="text-2xl" />
                    </div>
                    <p className="text-sm text-gray-600 break-all">
                        moderndentalclinicdm@gmail.com
                    </p>
                </Link>

                {/* Box 3 */}
                <Link
                    href="tel:9910819907"
                    data-aos="fade-up"
                    data-aos-delay="300"
                    className="bg-white shadow-md rounded-2xl p-8 text-center hover:shadow-xl transition block"
                >
                    <div className="w-14 h-14 mx-auto mb-5 flex items-center justify-center bg-[#e7f2fb] text-[#0769af] rounded-full">
                        <FaPhoneAlt className="text-2xl" />
                    </div>
                    <p className="text-sm text-gray-600">
                        +91 99108 19907
                    </p>
                </Link>

                {/* Box 4 */}
                <div
                    data-aos="fade-up"
                    data-aos-delay="400"
                    className="bg-white shadow-md rounded-2xl p-8 text-center hover:shadow-xl transition"
                >
                    <div className="w-14 h-14 mx-auto mb-5 flex items-center justify-center bg-[#e7f2fb] text-[#0769af] rounded-full">
                        <FaClock className="text-2xl" />
                    </div>
                    <p className="text-sm text-gray-600 leading-relaxed">
                        <strong>Modern Dental Clinic</strong><br />
                        Mon - Sun<br />
                        10:00 AM – 2:00 PM<br />
                        5:00 PM – 8:00 PM<br />
                        Tuesday <br />
                        10:00 AM – 2:00 PM
                    </p>
                </div>

            </div>

            {/* Contact Form */}
            <div
                className="mt-20"
                data-aos="fade-up"
                data-aos-delay="200"
            >
                <Form />
            </div>
        </section>
    );
};

export default Contact;
