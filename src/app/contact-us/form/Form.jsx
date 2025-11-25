"use client";

import { form } from "@/services/user";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import Swal from "sweetalert2";
import { ClipLoader } from "react-spinners";

export default function Form() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    phone: "",
    location: "",
    message: "",
    MedicalReport: null,
  });

  const handlechange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.size > 10 * 1024 * 1024) {
      Swal.fire({
        icon: "warning",
        title: "File Too Large",
        text: "Please upload a file smaller than 10MB.",
      });
      e.target.value = "";
      return;
    }
    setFormData({ ...formData, MedicalReport: file });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formDataToSend = new FormData();
    formDataToSend.append("fullname", formData.fullname);
    formDataToSend.append("phone", formData.phone);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("location", formData.location);
    formDataToSend.append("message", formData.message);

    if (formData.MedicalReport) {
      formDataToSend.append("MedicalReport", formData.MedicalReport);
    }

    try {
      const response = await form(formDataToSend);
      if (response.success) {
        Swal.fire({
          title: "Form Submitted Successfully!",
          text: "We have received your information.",
          icon: "success",
        });
        setFormData({
          fullname: "",
          phone: "",
          email: "",
          location: "",
          message: "",
          MedicalReport: null,
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong! Please try again later.",
        });
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Failed to submit the form. Please check your network and try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto mt-6 bg-white shadow-lg rounded-2xl border border-blue-200 overflow-hidden">

      {/* Header */}
      <div className="bg-[#0769af] p-5 text-white text-center">
        <h2 className="text-3xl font-semibold" style={{ fontFamily: "Roboto Slab, serif" }}>Book Your Dental Consultation</h2>
        <p className="mt-1 text-white/90 text-sm">
          We will get back to you shortly
        </p>
      </div>

      {/* Form Container */}
      <form onSubmit={handleSubmit} className="px-5 py-6 bg-blue-50/60 space-y-5">

        {/* Name + Phone */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-1">
            <label className="text-[#0769af] font-medium text-sm">Full Name</label>
            <input
              type="text"
              name="fullname"
              value={formData.fullname}
              onChange={handlechange}
              required
              className="w-full p-3 bg-white text-black border border-blue-200 rounded-xl shadow-sm focus:ring-2 focus:ring-[#0769af] outline-none text-sm"
            />
          </div>

          <div className="space-y-1">
            <label className="text-[#0769af] font-medium text-sm">Phone Number</label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handlechange}
              required
              className="w-full p-3 bg-white border border-blue-200 text-black rounded-xl shadow-sm focus:ring-2 focus:ring-[#0769af] outline-none text-sm"
            />
          </div>
        </div>

        {/* Email + Location */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-1">
            <label className="text-[#0769af] font-medium text-sm">Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handlechange}
              required
              className="w-full p-3 bg-white border border-blue-200 text-black rounded-xl shadow-sm focus:ring-2 focus:ring-[#0769af] outline-none text-sm"
            />
          </div>

          <div className="space-y-1">
            <label className="text-[#0769af] font-medium text-sm">City / Location</label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handlechange}
              required
              className="w-full p-3 bg-white border border-blue-200 text-black rounded-xl shadow-sm focus:ring-2 focus:ring-[#0769af] outline-none text-sm"
            />
          </div>
        </div>

        {/* Message */}
        <div className="space-y-1">
          <label className="text-[#0769af] font-medium text-sm">Describe Your Dental Issue</label>
          <textarea
            name="message"
            rows="3"
            value={formData.message}
            onChange={handlechange}
            className="w-full p-3 bg-white border border-blue-200 text-black rounded-xl shadow-sm focus:ring-2 focus:ring-[#0769af] outline-none text-sm"
          ></textarea>
        </div>

        {/* File Upload */}
        <div className="space-y-1">
          <label className="text-[#0769af] font-medium text-sm">
            Upload Dental X-Ray or Report (Optional)
          </label>
          <div className="bg-white border border-blue-200 rounded-xl p-3 shadow-sm">
            <input
              type="file"
              onChange={handleFileChange}
              accept=".pdf,.jpg,.jpeg,.png,.doc,.docx,.xls,.xlsx,.txt,.avif"
              className="w-full text-gray-700 text-sm"
            />
          </div>
        </div>

        {/* Submit */}
        <div className="text-center pt-2">
          {loading ? (
            <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">
              <ClipLoader size={50} color="#0284c7" />
            </div>
          ) : (
            <button className="px-10 py-3 bg-[#0769af] cursor-pointer text-white font-semibold text-sm rounded-xl shadow-md hover:bg-sky-600 active:scale-95 transition">
              Book Your Slot
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
