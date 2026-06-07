"use client";

import React from "react";

interface AboutUsTabProps {
  aboutFaqOpen: number | null;
  setAboutFaqOpen: (val: number | null) => void;
  setActiveTab: (tab: string) => void;
}

export function AboutUsTab({
  aboutFaqOpen,
  setAboutFaqOpen,
  setActiveTab,
}: AboutUsTabProps) {
  return (
    <div className="animate-fade-in font-open-sans bg-white min-h-screen">
      {/* Header Banner - Only Heading */}
      <div className="bg-gradient-to-r from-[#0ca581] to-[#098265] text-white py-16 px-6 text-center relative overflow-hidden select-none border-b border-[#076850]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:3rem_3rem]" />
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight font-open-sans">
            About Us
          </h1>
        </div>
      </div>

      {/* 1. Title & Paragraph & Wide Image */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-7xl mx-auto flex flex-col gap-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 items-center justify-items-center">
            <div className="flex items-center justify-center select-none w-full">
              <img 
                src="/MyJobSolution-removebg-preview.png" 
                alt="MyJobSolution Logo" 
                className="h-44 sm:h-56 md:h-64 w-auto object-contain transition-transform duration-500 hover:scale-105"
              />
            </div>
            <div className="flex flex-col gap-3.5 items-center justify-center text-center w-full">
              <span className="bg-[#F1F7F6] text-[#0ca581] px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest select-none w-fit">
                ABOUT MYJOBSOLUTION
              </span>
              <p className="text-slate-950 text-sm md:text-base leading-relaxed font-medium max-w-xl">
                MyJobSolution is a growing recruitment and manpower consultancy dedicated to helping job seekers find the right career opportunities and supporting companies in hiring skilled candidates efficiently. We work with candidates across multiple regions of India with full transparency and professionalism.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 2. How it works */}
      <section className="bg-white py-16 px-6 border-t border-slate-50">
        <div className="max-w-7xl mx-auto text-center flex flex-col gap-12">
          <div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight font-open-sans">
              How It Works
            </h2>
            <p className="text-sm md:text-base text-slate-950 max-w-2xl mx-auto mt-3 font-medium leading-relaxed">
              Getting your dream job is simple with MyJobSolution. Follow these four easy steps to register, apply, and get placed quickly.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1: Create Account */}
            <div className="bg-white border border-slate-100 rounded-3xl p-8 flex flex-col items-center text-center gap-5 shadow-sm hover:shadow-md transition-all duration-300 group">
              <div className="w-14 h-14 rounded-2xl bg-[#F1F7F6] flex items-center justify-center text-[#0ca581] group-hover:scale-105 transition-transform duration-300">
                <svg className="w-7 h-7 text-[#0ca581]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                </svg>
              </div>
              <h3 className="font-open-sans text-base font-bold text-slate-950">Create Account</h3>
              <p className="text-xs text-slate-950 leading-relaxed font-medium">
                Register with your phone number and configure password coordinates.
              </p>
            </div>

            {/* Card 2: Upload Resume */}
            <div className="bg-white border border-slate-100 rounded-3xl p-8 flex flex-col items-center text-center gap-5 shadow-sm hover:shadow-md transition-all duration-300 group">
              <div className="w-14 h-14 rounded-2xl bg-[#F1F7F6] flex items-center justify-center text-[#0ca581] group-hover:scale-105 transition-transform duration-300">
                <svg className="w-7 h-7 text-[#0ca581]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="font-open-sans text-base font-bold text-slate-950">Upload Resume</h3>
              <p className="text-xs text-slate-950 leading-relaxed font-medium">
                Submit your updated CV file containing educational qualification details.
              </p>
            </div>

            {/* Card 3: Find Job */}
            <div className="bg-white border border-slate-100 rounded-3xl p-8 flex flex-col items-center text-center gap-5 shadow-sm hover:shadow-md transition-all duration-300 group">
              <div className="w-14 h-14 rounded-2xl bg-[#F1F7F6] flex items-center justify-center text-[#0ca581] group-hover:scale-105 transition-transform duration-300">
                <svg className="w-7 h-7 text-[#0ca581]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="font-open-sans text-base font-bold text-slate-950">Find Job</h3>
              <p className="text-xs text-slate-950 leading-relaxed font-medium">
                Search verified vacancies filtered by Lucknow or Kanpur Nagar hubs.
              </p>
            </div>

            {/* Card 4: Apply Job */}
            <div className="bg-white border border-slate-100 rounded-3xl p-8 flex flex-col items-center text-center gap-5 shadow-sm hover:shadow-md transition-all duration-300 group">
              <div className="w-14 h-14 rounded-2xl bg-[#F1F7F6] flex items-center justify-center text-[#0ca581] group-hover:scale-105 transition-transform duration-300">
                <svg className="w-7 h-7 text-[#0ca581]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
              </div>
              <h3 className="font-open-sans text-base font-bold text-slate-950">Apply Job</h3>
              <p className="text-xs text-slate-950 leading-relaxed font-medium">
                Apply for your chosen role and our team will guide you through the interview.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Why Choose Us */}
      <section className="bg-white py-16 px-6 border-t border-slate-100">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Image Collage */}
          <div className="grid grid-cols-2 gap-4">
            <div className="col-span-1">
              <img 
                src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=400&h=600" 
                alt="Professional recruitment" 
                className="w-full h-full object-cover rounded-3xl shadow-sm aspect-[2/3]"
              />
            </div>
            <div className="col-span-1 flex flex-col gap-4 justify-between">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=400&h=300" 
                alt="Team interview session" 
                className="w-full object-cover rounded-3xl shadow-sm aspect-[4/3]"
              />
              <img 
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=400&h=300" 
                alt="Office workspace" 
                className="w-full object-cover rounded-3xl shadow-sm aspect-[4/3]"
              />
            </div>
          </div>

          {/* Right: Value Points */}
          <div className="text-left flex flex-col items-start gap-6">
            <div>
              <span className="inline-block bg-[#edf5f3] text-[#0ca581] text-xs font-black uppercase tracking-widest px-3.5 py-1 rounded-full mb-4 select-none">
                Why Choose Us
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-950 leading-tight font-open-sans">
                We Work Only With<br />Trusted Partners
              </h2>
              <p className="text-slate-950 text-sm md:text-base leading-relaxed mt-4 font-medium">
                MyJobSolution operates directly with reputable corporations to bring you regional opportunities.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full mt-2">
              {/* Verified Placements */}
              <div className="flex gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-[#F1F7F6] flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-[#0ca581]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-open-sans text-sm font-bold text-slate-950">Verified Placements</h4>
                  <p className="text-xs text-slate-950 mt-1 font-medium leading-relaxed">Every job listing is verified for authenticity and fair wages before we share it with candidates.</p>
                </div>
              </div>

              {/* 100% Free */}
              <div className="flex gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-[#F1F7F6] flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-[#0ca581]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-open-sans text-sm font-bold text-slate-950">100% Free for Job Seekers</h4>
                  <p className="text-xs text-slate-950 mt-1 font-medium leading-relaxed">We never charge candidates for registration, resume support, or placement — our service is completely free.</p>
                </div>
              </div>

              {/* Trusted Companies */}
              <div className="flex gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-[#F1F7F6] flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-[#0ca581]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-open-sans text-sm font-bold text-slate-950">Trusted Company Network</h4>
                  <p className="text-xs text-slate-950 mt-1 font-medium leading-relaxed">We work with reputed companies across Uttar Pradesh and major cities in India.</p>
                </div>
              </div>

              {/* Fast Hiring */}
              <div className="flex gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-[#F1F7F6] flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-[#0ca581]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-open-sans text-sm font-bold text-slate-950">Fast Hiring Support</h4>
                  <p className="text-xs text-slate-950 mt-1 font-medium leading-relaxed">From profile submission to interview in as little as 3 working days — we move fast for you.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Team Section */}
      <section className="bg-white py-20 px-6 border-t border-slate-50">
        <div className="max-w-5xl mx-auto flex flex-col gap-12">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight font-open-sans">
              Our Team
            </h2>
            <p className="text-sm text-slate-955 mt-3 font-medium max-w-xl mx-auto leading-relaxed">
              Our professional coordinators ensure quick turnaround times.
            </p>
          </div>

          {/* Centered 3-column grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 justify-items-center">
            {/* Member 1 */}
            <div className="w-full max-w-[320px] bg-white border border-slate-100 rounded-3xl p-6 flex flex-col gap-4 shadow-sm hover:shadow-lg hover:-translate-y-1.5 transition-all duration-300 group text-center">
              <div className="w-24 h-24 rounded-full overflow-hidden mx-auto border-2 border-emerald-500/20 group-hover:border-[#0ca581] transition-colors duration-300 select-none bg-slate-50">
                <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=256" alt="Abhishek Pandey" className="w-full h-full object-cover object-top scale-102 group-hover:scale-106 transition-transform duration-500" />
              </div>
              <div className="flex flex-col items-center gap-1">
                <h4 className="font-open-sans text-lg font-bold text-slate-950 leading-snug group-hover:text-[#0ca581] transition-colors">Abhishek Pandey</h4>
                <p className="text-xs text-[#0ca581] font-bold uppercase tracking-wider">Founder &amp; Managing Director</p>
                <p className="text-xs text-slate-950 font-medium leading-relaxed mt-2">
                  Steering client operations and regional partnerships across Khalilabad and Gorakhpur.
                </p>
              </div>
            </div>

            {/* Member 2 */}
            <div className="w-full max-w-[320px] bg-white border border-slate-100 rounded-3xl p-6 flex flex-col gap-4 shadow-sm hover:shadow-lg hover:-translate-y-1.5 transition-all duration-300 group text-center">
              <div className="w-24 h-24 rounded-full overflow-hidden mx-auto border-2 border-emerald-500/20 group-hover:border-[#0ca581] transition-colors duration-300 select-none bg-slate-50">
                <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=256" alt="Shalini Verma" className="w-full h-full object-cover object-top scale-102 group-hover:scale-106 transition-transform duration-500" />
              </div>
              <div className="flex flex-col items-center gap-1">
                <h4 className="font-open-sans text-lg font-bold text-slate-950 leading-snug group-hover:text-[#0ca581] transition-colors">Shalini Verma</h4>
                <p className="text-xs text-[#0ca581] font-bold uppercase tracking-wider">HR Manager</p>
                <p className="text-xs text-slate-955 font-medium leading-relaxed mt-2">
                  Supervises initial vetting checks and schedules candidate evaluations for Lucknow.
                </p>
              </div>
            </div>

            {/* Member 3 */}
            <div className="w-full max-w-[320px] bg-white border border-slate-100 rounded-3xl p-6 flex flex-col gap-4 shadow-sm hover:shadow-lg hover:-translate-y-1.5 transition-all duration-300 group text-center">
              <div className="w-24 h-24 rounded-full overflow-hidden mx-auto border-2 border-emerald-500/20 group-hover:border-[#0ca581] transition-colors duration-300 select-none bg-slate-50">
                <img src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=256" alt="Rohan Das" className="w-full h-full object-cover object-top scale-102 group-hover:scale-106 transition-transform duration-500" />
              </div>
              <div className="flex flex-col items-center gap-1">
                <h4 className="font-open-sans text-lg font-bold text-slate-950 leading-snug group-hover:text-[#0ca581] transition-colors">Rohan Das</h4>
                <p className="text-xs text-[#0ca581] font-bold uppercase tracking-wider">Recruitment Executive</p>
                <p className="text-xs text-slate-955 font-medium leading-relaxed mt-2">
                  Coordinates placement follow-ups and supports freshers with resume reviews.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Frequently Asked Questions */}
      <section className="bg-[#f9fafb] py-20 px-6 border-t border-slate-100">
        <div className="max-w-4xl mx-auto flex flex-col gap-12">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight font-open-sans">
              Frequently Asked Questions
            </h2>
            <p className="text-sm text-slate-950 mt-3 font-bold max-w-xl mx-auto leading-relaxed">
              Got questions? We have answers. Here are the most common questions candidates and employers ask us.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            {[
              {
                q: "Can I upload my CV or resume?",
                a: "Yes, you can upload your resume directly through our registration form. Our team will review your profile and match you with suitable job openings based on your skills and experience."
              },
              {
                q: "How long does the recruitment process take?",
                a: "The process typically takes 3 to 7 working days depending on the role and company requirements. We work quickly to ensure candidates are placed as fast as possible."
              },
              {
                q: "Do you recruit for freshers, graduates, and students?",
                a: "Absolutely! We welcome freshers, graduates, and students. We have dedicated job openings for entry-level candidates and provide full support including resume guidance and interview preparation."
              },
              {
                q: "What does your recruitment and selection process involve?",
                a: "Our process includes profile registration, resume review, candidate shortlisting, interview briefing, and final placement coordination. We stay with you at every step until you are successfully placed."
              },
              {
                q: "Can I get notified about future job openings that match my profile?",
                a: "Yes! Once you register with us, our team keeps your profile active and notifies you whenever a suitable opening becomes available matching your skills, location, and experience."
              },
              {
                q: "Is your service free for job seekers?",
                a: "Yes, our placement services are completely free for job seekers. We never charge candidates for registration, resume support, or placement assistance."
              }
            ].map((faq, index) => {
              const isOpen = aboutFaqOpen === index;
              const indexStr = String(index + 1).padStart(2, '0');
              return (
                <div 
                  key={index}
                  className={`border rounded-3xl transition-all duration-300 ${
                    isOpen 
                      ? "bg-[#F1F7F6]/50 border-emerald-100" 
                      : "bg-white border-slate-100 hover:border-slate-200"
                  }`}
                >
                  <button
                    onClick={() => setAboutFaqOpen(isOpen ? null : index)}
                    className="w-full text-left px-6 py-5 sm:py-6 flex items-center justify-between gap-4 cursor-pointer select-none"
                  >
                    <div className="flex items-center gap-4">
                      <span className={`text-sm sm:text-base font-bold font-open-sans ${isOpen ? "text-[#0ca581]" : "text-slate-950"}`}>
                        {indexStr}
                      </span>
                      <span className="text-sm sm:text-base font-bold text-slate-950 leading-snug">
                        {faq.q}
                      </span>
                    </div>
                    <span className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors shrink-0 ${isOpen ? "bg-[#0ca581] text-white" : "bg-slate-50 text-slate-400"}`}>
                      {isOpen ? (
                        <svg className="w-4.5 h-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M18 12H6" />
                        </svg>
                      ) : (
                        <svg className="w-4.5 h-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12M6 12h12" />
                        </svg>
                      )}
                    </span>
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-slate-955 leading-relaxed font-medium border-t border-emerald-100/30">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
