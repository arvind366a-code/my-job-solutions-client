"use client";

import React from "react";

interface ContactUsTabProps {
  contactForm: {
    name: string;
    mobile: string;
    email: string;
    location: string;
    message: string;
  };
  setContactForm: (val: any) => void;
  contactSuccess: boolean;
  handleContactSubmit: (e: React.FormEvent) => void;
}

export function ContactUsTab({
  contactForm,
  setContactForm,
  contactSuccess,
  handleContactSubmit,
}: ContactUsTabProps) {
  return (
    <div className="w-full bg-[#fafbfc] min-h-screen">
      {/* Header Banner - Only Heading */}
      <div className="bg-gradient-to-r from-[#0ca581] to-[#098265] text-white py-16 px-6 text-center relative overflow-hidden select-none border-b border-[#076850]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:3rem_3rem]" />
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight font-open-sans">
            Contact Us
          </h1>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-6xl mx-auto px-6 py-12 animate-fade-in font-open-sans">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 animate-fade-in">
          
          {/* Left coordinates info */}
          <div className="bg-[#F1F7F6]/60 border border-emerald-100/60 rounded-3xl p-6 md:p-8 shadow-sm flex flex-col gap-6">
            <div>
              <span className="bg-[#F1F7F6] text-[#0ca581] px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest select-none w-fit inline-block">
                Get In Touch
              </span>
              <h2 className="font-open-sans text-2xl md:text-3xl font-black text-slate-950 mt-4 mb-3 leading-snug">
                Contact Information
              </h2>
              <p className="text-xs md:text-sm text-slate-955 leading-relaxed max-w-md font-medium">
                Have a question regarding active vacancies or our vetting checks? Reach out to our central office coordinates.
              </p>
            </div>

            <div className="flex flex-col gap-5 border-t border-emerald-100/30 pt-6">
              {/* Item 1 */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-white border border-emerald-100/40 flex items-center justify-center text-[#0ca581] shrink-0 shadow-sm select-none">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-open-sans text-xs font-black text-slate-950 uppercase tracking-wide">Phone / WhatsApp</h4>
                  <p className="text-xs md:text-sm text-slate-955 mt-1 font-medium">+91 9984433339</p>
                  <p className="text-xs md:text-sm text-slate-955 mt-0.5 font-medium">+91 9984433339</p>
                </div>
              </div>

              {/* Item 2 */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-white border border-emerald-100/40 flex items-center justify-center text-[#0ca581] shrink-0 shadow-sm select-none">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-open-sans text-xs font-black text-slate-950 uppercase tracking-wide">Office Address</h4>
                  <p className="text-xs md:text-sm text-slate-955 mt-1 leading-relaxed font-medium">
                    MyJobSolution<br />Khalilabad, Sant Kabir Nagar, Uttar Pradesh, India
                  </p>
                </div>
              </div>

              {/* Item 3 */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-white border border-emerald-100/40 flex items-center justify-center text-[#0ca581] shrink-0 shadow-sm select-none">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-open-sans text-xs font-black text-slate-950 uppercase tracking-wide">Email &amp; Telegram</h4>
                  <p className="text-xs md:text-sm text-slate-955 mt-1 font-medium">myjobsolution@gmail.com</p>
                  <p className="text-xs md:text-sm text-slate-955 mt-0.5 font-medium">@MyJobSolution</p>
                </div>
              </div>

              {/* Item 4 */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-white border border-emerald-100/40 flex items-center justify-center text-[#0ca581] shrink-0 shadow-sm select-none">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-open-sans text-xs font-black text-slate-950 uppercase tracking-wide">Working Hours</h4>
                  <p className="text-xs md:text-sm text-slate-955 mt-1 font-medium">
                    Monday – Saturday: 10:00 AM – 7:00 PM
                  </p>
                  <p className="text-xs md:text-sm text-red-650 mt-0.5 font-black">Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right form inquiry */}
          <div className="bg-[#F1F7F6]/60 border border-emerald-100/60 rounded-3xl p-6 md:p-8 shadow-sm">
            <h3 className="text-lg font-black text-slate-950 border-l-4 border-[#0ca581] pl-3 select-none mb-6">Send Us a Message</h3>

            {contactSuccess ? (
              <div className="bg-emerald-50 border border-emerald-100 text-[#0ca581] rounded-xl p-8 text-center animate-fade-in">
                <svg className="w-12 h-12 text-[#0ca581] mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h4 className="font-bold text-sm">Message Sent Successfully!</h4>
                <p className="text-xs mt-1.5 opacity-90 leading-relaxed font-semibold">
                  Thank you for writing. Our customer managers will review your query and reply within a few hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleContactSubmit} className="flex flex-col gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-950 mb-1.5">
                    Your Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Full name"
                    value={contactForm.name}
                    onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                    className="w-full bg-white border border-slate-200 rounded-xl px-4 py-2.5 text-xs md:text-sm text-slate-955 font-medium outline-none focus:border-[#0ca581] transition-all placeholder-slate-400"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-950 mb-1.5">
                    Mobile Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    maxLength={10}
                    placeholder="10-digit mobile number"
                    value={contactForm.mobile}
                    onChange={(e) => setContactForm({ ...contactForm, mobile: e.target.value.replace(/\D/g, "") })}
                    className="w-full bg-white border border-slate-200 rounded-xl px-4 py-2.5 text-xs md:text-sm text-slate-955 font-medium outline-none focus:border-[#0ca581] transition-all placeholder-slate-400"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-950 mb-1.5">
                    Email Address <span className="text-slate-950 font-normal">(Optional)</span>
                  </label>
                  <input
                    type="email"
                    placeholder="yourname@gmail.com"
                    value={contactForm.email}
                    onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                    className="w-full bg-white border border-slate-200 rounded-xl px-4 py-2.5 text-xs md:text-sm text-slate-955 font-medium outline-none focus:border-[#0ca581] transition-all placeholder-slate-400"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-950 mb-1.5">
                    Your Location <span className="text-slate-950 font-normal">(Optional)</span>
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Kanpur, Lucknow, Unnao"
                    value={contactForm.location}
                    onChange={(e) => setContactForm({ ...contactForm, location: e.target.value })}
                    className="w-full bg-white border border-slate-200 rounded-xl px-4 py-2.5 text-xs md:text-sm text-slate-955 font-medium outline-none focus:border-[#0ca581] transition-all placeholder-slate-400"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-950 mb-1.5">
                    Query Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Describe your inquiry or vacancy support requirements..."
                    value={contactForm.message}
                    onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                    className="w-full bg-white border border-slate-200 rounded-xl px-4 py-2.5 text-xs md:text-sm text-slate-955 font-medium outline-none focus:border-[#0ca581] transition-all resize-none placeholder-slate-400"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="bg-[#0ca581] hover:bg-[#0a8769] text-white font-extrabold text-xs md:text-sm py-3 rounded-xl transition-all shadow-sm active:scale-95 cursor-pointer mt-2"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}
