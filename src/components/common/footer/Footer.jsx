'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaLinkedin, FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";
import { FaEnvelope } from 'react-icons/fa';
import { IoLocationSharp } from "react-icons/io5";
import { IoIosCall } from "react-icons/io";
import { FcGoogle } from "react-icons/fc";

const Footer = () => {
    return (
        <footer className="bg-[#0b4d95] text-white pt-14 pb-6 px-6 md:px-12">

            {/* GRID FIXED TO 3 COLS TO REMOVE EMPTY SPACE */}
            <div className="grid md:grid-cols-3 gap-12 border-b border-white/20 pb-10">

                {/* LOGO COLUMN */}
                <div className="max-w-sm">
                    <Link href="/">
                        <Image
                            src='/logo/logo.png'
                            width={220}
                            height={220}
                            alt='Logo'
                            className="w-52 h-auto"
                        />
                    </Link>

                    <p className="mt-5 text-sm leading-relaxed">
                        Modern Dental and Oro Maxillofacial Clinic offers advanced care with expert root canal treatment, precision dentistry, and patient-focused services for healthier, confident, and long-lasting smiles.
                    </p>
                </div>

                {/* QUICK LINKS COLUMN */}
                <div>
                    <h4 className="text-white font-semibold mb-4 text-lg" style={{ fontFamily: "Roboto Slab, serif" }}>Quick Links</h4>

                    <div className="space-y-2 text-sm">
                        <Link href="/" className="block hover:text-gray-300">Home</Link>
                        <Link href="/about-us" className="block hover:text-gray-300">About Us</Link>
                        <Link href="/blogs" className="block hover:text-gray-300">Blogs</Link>
                        <Link href="/contact-us" className="block hover:text-gray-300">Contact Us</Link>
                    </div>
                </div>

                {/* CONTACT COLUMN */}
                <div>
                    <h4 className="text-white font-semibold mb-4 text-lg" style={{ fontFamily: "Roboto Slab, serif" }}>Contact Us</h4>

                    <ul className="space-y-4 text-sm">

                        <li>
                            <Link href="tel:9910819907" className="flex items-center gap-3 hover:text-gray-300">
                                <IoIosCall className="text-xl" />
                                +91 99108 19907
                            </Link>
                        </li>

                        <li>
                            <Link href="mailto:moderndentalclinicdm@gmail.com" className="flex items-center gap-3 hover:text-gray-300">
                                <FaEnvelope className="text-xl" />
                                moderndentalclinicdm@gmail.com
                            </Link>
                        </li>

                        <li>
                            <Link href="https://maps.app.goo.gl/UFLbkM9JhXAKRSXz9" target="_blank" className="flex items-start gap-3 hover:text-gray-300">
                                <IoLocationSharp className="text-xl mt-1" />
                                <div>
                                    Shop No.382, Office Lobby Vegas Mall,
                                    <br /> Sector 14, Dwarka, New Delhi – 110078
                                </div>
                            </Link>
                        </li>
                    </ul>
                    <div className="flex gap-4 text-2xl mt-5">

                        <Link href="https://www.instagram.com/moderndental16/" target="_blank" className="bg-white p-2 rounded-full hover:scale-110 transition">
                            <FaInstagram className="text-[#E4405F]" />
                        </Link>

                        <Link href="https://www.facebook.com/people/Modern-Dental-and-Oro-Maxillofacial-Clinic/61578640534486/" target="_blank" className="bg-white p-2 rounded-full hover:scale-110 transition">
                            <FaFacebook className="text-[#1877F2]" />
                        </Link>

                        <Link href="https://www.linkedin.com/company/modern-dental-and-oro-maxillofacial-clinic/" target="_blank" className="bg-white p-2 rounded-full hover:scale-110 transition">
                            <FaLinkedin className="text-[#0077B5]" />
                        </Link>

                        <Link href="https://www.youtube.com/@moderndental_clinic" target="_blank" className="bg-white p-2 rounded-full hover:scale-110 transition">
                            <FaYoutube className="text-[#FF0000]" />
                        </Link>

                        <Link href="https://maps.app.goo.gl/UFLbkM9JhXAKRSXz9" target="_blank" className="bg-white p-2 rounded-full hover:scale-110 transition">
                            <FcGoogle />
                        </Link>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="mt-6 text-center text-sm font-semibold" style={{ fontFamily: "Roboto Slab, serif" }}>
                Design & Developed By <Link href="https://tekbooster.com/" className='hover:text-gray-300' target='_blank'>Tek Booster (Digital Marketing Company)</Link>
            </div>
        </footer>
    );
};

export default Footer;

