"use client";

import React from "react";
import Image from "next/image";

export default function AboutUs() {
    return (
        <section className="max-w-6xl mx-auto px-6 py-0 lg:py-16">
            {/* Heading */}
            <h2
                className="text-center text-3xl text-black sm:text-4xl font-semibold mb-12 tracking-wide"
                style={{ fontFamily: "Roboto Slab, serif" }}
            >
                Our Mission & Vision
            </h2>

            <div className="grid gap-10 sm:grid-cols-2 items-stretch">

                {/* Mission Card */}
                <article
                    className="relative border border-gray-200 overflow-hidden rounded-3xl bg-white/30 backdrop-blur-xl shadow-xl p-8 
                    flex flex-col md:flex-row items-center gap-6
                    transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:bg-white/40"
                >
                    {/* Glow Line */}
                    <div className="absolute right-4 top-4 w-1 h-28 rounded-full bg-gradient-to-b from-indigo-500 to-sky-300 opacity-50 blur-sm" />

                    {/* Icon */}
                    <div className="flex-none w-28 h-28 md:w-36 md:h-36 rounded-2xl bg-white shadow-lg flex items-center justify-center">
                        <div className="relative w-20 h-20 md:w-24 md:h-24">
                            <Image
                                src="/about/mission.png"
                                alt="Mission"
                                fill
                                className="object-contain"
                            />
                        </div>
                    </div>

                    {/* Text */}
                    <div className="flex-1 min-w-0">
                        <h3 className="text-xl font-bold mb-3 text-black" style={{ fontFamily: "Roboto Slab, serif" }}>Mission</h3>

                        <p className="text-sm text-slate-700 leading-relaxed text-justify">
                            Our mission is to provide safe, gentle, and high-quality dental care
                            for every patient. We focus on comfort, transparency, and modern
                            technology to ensure stress-free treatments. With personalized care
                            for all ages, we aim to help every smile stay healthy and confident.
                        </p>

                        <div className="mt-4 flex gap-2 flex-wrap">
                            <span className="px-3 py-1 rounded-full text-xs font-medium bg-indigo-100 text-indigo-700">Patient-first</span>
                            <span className="px-3 py-1 rounded-full text-xs font-medium bg-sky-100 text-sky-700">Gentle care</span>
                            <span className="px-3 py-1 rounded-full text-xs font-medium bg-emerald-100 text-emerald-700">Modern tech</span>
                        </div>
                    </div>
                </article>

                {/* Vision Card */}
                <article
                    className="relative overflow-hidden border border-gray-200 rounded-3xl bg-white/30 backdrop-blur-xl shadow-xl p-8 
                    flex flex-col md:flex-row items-center gap-6
                    transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:bg-white/40"
                >
                    {/* Glow Line */}
                    <div className="absolute left-4 bottom-4 w-1 h-28 rounded-full bg-gradient-to-t from-rose-400 to-pink-200 opacity-50 blur-sm" />

                    {/* Icon */}
                    <div className="flex-none w-28 h-28 md:w-36 md:h-36 p-5 rounded-2xl bg-white shadow-lg flex items-center justify-center">
                        <div className="relative w-20 h-20 md:w-24 md:h-24">
                            <Image
                                src="/about/vision.png"
                                alt="Vision"
                                fill
                                className="object-contain"
                            />
                        </div>
                    </div>

                    {/* Text */}
                    <div className="flex-1 min-w-0">
                        <h3 className="text-xl font-bold mb-3 text-black" style={{ fontFamily: "Roboto Slab, serif" }}>Vision</h3>

                        <p className="text-sm text-slate-700 leading-relaxed text-justify">
                            Our vision is to become the most trusted dental clinic, known for
                            compassion, expertise, and innovation. We aim to make advanced
                            dentistry comfortable and accessible to everyone—creating healthier
                            smiles and raising the standard of dental care.
                        </p>

                        <div className="mt-4 flex gap-2 flex-wrap">
                            <span className="px-3 py-1 rounded-full text-xs font-medium bg-rose-100 text-rose-700">Trusted</span>
                            <span className="px-3 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">Accessible</span>
                            <span className="px-3 py-1 rounded-full text-xs font-medium bg-violet-100 text-violet-700">Compassion</span>
                        </div>
                    </div>
                </article>
            </div>
        </section>
    );
}
