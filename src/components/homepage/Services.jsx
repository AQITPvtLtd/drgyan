"use client";
import React from "react";

export default function Services() {

    const categories = [
        {
            name: "General Dentistry",
            image: "/treatments/general.png",
            description:
                "We provide complete general dentistry care including check-ups, cleaning, and preventive treatments to maintain long-term oral health for all ages.",
        },
        {
            name: "Cosmetic Dentistry",
            image: "/treatments/cosmetic.png",
            description:
                "Enhance your smile with advanced cosmetic dentistry solutions such as whitening, veneers, and full smile designing for a confident appearance.",
        },
        {
            name: "Restorative Dentistry",
            image: "/treatments/restorative.png",
            description:
                "Restore damaged or missing teeth with durable restorative options like dental implants, crowns, bridges, and complete tooth replacement solutions.",
        },
        {
            name: "Root Canal Treatment",
            image: "/treatments/rootcanal.png",
            description:
                "Save infected teeth with painless and modern root canal treatment performed using advanced techniques for long-lasting results.",
        },
        {
            name: "Orthodontics",
            image: "/treatments/ortho.png",
            description:
                "Straighten teeth and correct bite issues with braces, aligners, and orthodontic treatments designed for kids, teens, and adults.",
        },
        {
            name: "Paediatric Dentistry",
            image: "/treatments/paediatric.png",
            description:
                "Gentle and friendly dental care for children focusing on healthy tooth development, preventive care, and comfortable treatments.",
        },
        {
            name: "Periodontics",
            image: "/treatments/periodontrics.png",
            description:
                "Specialized gum care including deep cleaning, gum disease treatment, and advanced periodontal therapies for strong and healthy gums.",
        },
        {
            name: "Oral Surgery",
            image: "/treatments/oral.png",
            description:
                "Expert oral surgical procedures including jaw correction, cyst removal, and advanced care for complex dental and facial conditions.",
        },
        {
            name: "Laser Dentistry",
            image: "/treatments/laser.png",
            description:
                "Experience painless and precise dental care with advanced laser treatments for gums, whitening, and soft tissue procedures.",
        },
        {
            name: "Implants",
            image: "/treatments/implants.png",
            description:
                "We offer safe, long-lasting dental implants that naturally replace missing teeth and restore chewing strength for a confident smile.",
        },
        {
            name: "Aligners / Invisalign",
            image: "/treatments/aligners.png",
            description:
                "We offer comfortable, nearly invisible aligners that gently straighten teeth, improve alignment, and boost confidence.",
        },
        {
            name: "Other Services",
            image: "/treatments/other.png",
            description:
                "We offer digital smile design, online consultations, and modern dental solutions tailored for a seamless treatment experience.",
        },
    ];

    return (
        <section className="w-full py-10 bg-gradient-to-br from-[#e6f7f7] to-[#f8fffe]">
            <div className="max-w-7xl mx-auto px-4">

                <h2 className="text-center text-4xl font-bold text-black mb-12" style={{ fontFamily: "Roboto Slab, serif" }}>
                    Our Treatments
                </h2>

                {/* FIRST 8 CARDS GRID */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {categories.slice(0, 8).map((item, index) => (
                        <div
                            key={index}
                            className="rounded-2xl overflow-hidden bg-white shadow-md hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
                        >
                            <div className="w-full h-40 sm:h-44 lg:h-48">
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            <div className="p-4 text-center bg-white text-black">
                                <h3 className="text-lg font-semibold mb-2" style={{ fontFamily: "Roboto Slab, serif" }}>
                                    {item.name}
                                </h3>
                                <p className="text-sm text-gray-600 leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* LAST 2 CARDS CENTERED */}
                <div className="flex justify-center gap-6 mt-8 flex-wrap">
                    {categories.slice(8).map((item, index) => (
                        <div
                            key={index}
                            className="w-full sm:w-[300px] md:w-[280px] rounded-2xl overflow-hidden bg-white shadow-md hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
                        >
                            <div className="w-full h-40 sm:h-44 lg:h-48">
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            <div className="p-4 text-center bg-white text-black">
                                <h3 className="text-lg font-semibold mb-2" style={{ fontFamily: "Roboto Slab, serif" }}>
                                    {item.name}
                                </h3>
                                <p className="text-sm text-gray-600 leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
