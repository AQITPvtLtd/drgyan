"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

import { FaInstagram, FaFacebookF, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

import AOS from "aos";
import "aos/dist/aos.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    AOS.init({ duration: 700, once: false });
  }, []);

  const navLinks = [
    { name: "HOME", path: "/" },
    { name: "ABOUT US", path: "/about-us" },
    { name: "BLOGS", path: "/blogs" },
    { name: "CONTACT US", path: "/contact-us" },
  ];

  const linkClasses = (path) =>
    `relative px-1 py-1 transition-all duration-300 
     ${pathname === path ? "text-[#0769af] font-semibold" : "text-gray-700"} 
     after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-[#0769af] 
     hover:after:w-full after:duration-300`;

  return (
    <header
      className="fixed top-0 left-0 right-0 bg-white z-50 shadow-sm"
      data-aos="fade-down"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-25 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo/logo.png"
            alt="Logo"
            width={250}
            height={100}
            className="w-auto h-22 object-contain"
            data-aos="fade-right"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav
          className="hidden md:flex items-center space-x-10 text-xl absolute left-1/2 transform -translate-x-1/2"
        >
          {navLinks.map((link, index) => (
            <Link
              key={link.path}
              href={link.path}
              className={linkClasses(link.path)}
              data-aos="fade-down"
              data-aos-delay={index * 150}      // 🎯 ONE BY ONE DELAY
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Desktop Social Icons */}
        <div className="hidden md:flex items-center gap-4">
          {[
            {
              icon: <FaInstagram className="text-[#E4405F] text-xl" />,
              link: "https://www.instagram.com/moderndental16/",
            },
            {
              icon: <FaFacebookF className="text-[#1877F2] text-xl" />,
              link:
                "https://www.facebook.com/people/Modern-Dental-and-Oro-Maxillofacial-Clinic/61578640534486/",
            },
            {
              icon: <FaLinkedinIn className="text-[#0077B5] text-xl" />,
              link:
                "https://www.linkedin.com/company/modern-dental-and-oro-maxillofacial-clinic/",
            },
            {
              icon: <FaYoutube className="text-[#FF0000] text-xl" />,
              link: "https://www.youtube.com/@moderndental_clinic",
            },
            {
              icon: <FcGoogle className="text-xl" />,
              link: "https://maps.app.goo.gl/UFLbkM9JhXAKRSXz9",
            },
          ].map((item, index) => (
            <Link
              key={index}
              href={item.link}
              target="_blank"
              data-aos="zoom-in"
              data-aos-delay={index * 150} // 🎯 ONE BY ONE
              className="p-2 bg-white rounded-full shadow-xl hover:scale-110 transition-transform"
            >
              {item.icon}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-black transition-transform duration-300"
          data-aos="fade-left"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown MENU */}
      {isOpen && (
        <div
          className="md:hidden bg-white shadow-lg px-6 py-4 space-y-4 text-lg"
          data-aos="fade-down"
        >
          {navLinks.map((link, index) => (
            <Link
              key={link.path}
              href={link.path}
              onClick={() => setIsOpen(false)}
              data-aos="fade-right"
              data-aos-delay={index * 150}    // 🎯 ONE BY ONE
              className="block text-gray-800 border-b pb-2 hover:text-[#0769af] transition"
            >
              {link.name}
            </Link>
          ))}

          <div className="flex items-center gap-4 pt-3">
            {[
              {
                icon: <FaInstagram className="text-[#E4405F] text-2xl cursor-pointer" />,
                link: "https://www.instagram.com/moderndental16/",
              },
              {
                icon: <FaFacebookF className="text-[#1877F2] text-2xl cursor-pointer" />,
                link:
                  "https://www.facebook.com/people/Modern-Dental-and-Oro-Maxillofacial-Clinic/61578640534486/",
              },
              {
                icon: <FaLinkedinIn className="text-[#0077B5] text-2xl cursor-pointer" />,
                link:
                  "https://www.linkedin.com/company/modern-dental-and-oro-maxillofacial-clinic/",
              },
              {
                icon: <FaYoutube className="text-[#FF0000] text-2xl cursor-pointer" />,
                link: "https://www.youtube.com/@moderndental_clinic",
              },
              {
                icon: <FcGoogle className="text-2xl cursor-pointer" />,
                link: "https://maps.app.goo.gl/UFLbkM9JhXAKRSXz9",
              },
            ].map((item, index) => (
              <Link
                key={index}
                href={item.link}
                target="_blank"
                data-aos="zoom-in"
                data-aos-delay={index * 150}
              >
                {item.icon}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
