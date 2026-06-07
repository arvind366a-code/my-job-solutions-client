"use client";

import React, { useState } from "react";

interface HomeTabProps {
  setSearchTerm: (val: string) => void;
  setFilterLocation: (val: string) => void;
  setActiveTab: (tab: string) => void;
}

export function HomeTab({
  setSearchTerm,
  setFilterLocation,
  setActiveTab,
}: HomeTabProps) {
  const [homeSearchQuery, setHomeSearchQuery] = useState("");
  const [homeSearchLocation, setHomeSearchLocation] = useState("");
  const [homeSearchCategory, setHomeSearchCategory] = useState("");

  return (
    <div className="relative overflow-hidden bg-white text-slate-950 font-open-sans">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-24 pb-20 px-6 bg-[#0D1F3C] overflow-hidden text-center">
        {/* Background Unsplash Image with Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20 filter blur-[1px]"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1600')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0D1F3C]/70 via-[#0D1F3C]/90 to-[#0D1F3C]" />
        
        <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight mb-4 select-none leading-tight">
            Find Your Dream Job Today!
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-emerald-100/90 font-medium mb-12 max-w-2xl mx-auto leading-relaxed">
            Connecting Talented People with the Best Companies in Your Area
          </p>

          {/* Interactive Search Bar */}
          <div className="w-full max-w-4xl bg-white p-3 rounded-2xl md:rounded-full shadow-2xl flex flex-col md:flex-row items-center gap-3 border border-white/20">
            {/* Job input */}
            <div className="flex-grow flex items-center gap-3 w-full px-4 border-b md:border-b-0 md:border-r border-gray-250 pb-3 md:pb-0">
              <svg className="w-5 h-5 text-teal-600 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input 
                type="text" 
                value={homeSearchQuery}
                onChange={(e) => setHomeSearchQuery(e.target.value)}
                placeholder="Job Title or Company..."
                className="w-full bg-transparent text-sm font-semibold outline-none text-slate-955 placeholder-slate-400"
              />
            </div>

            {/* Location Dropdown */}
            <div className="w-full md:w-56 flex items-center gap-2 px-4 border-b md:border-b-0 md:border-r border-gray-200 pb-3 md:pb-0">
              <svg className="w-5 h-5 text-teal-600 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <select
                value={homeSearchLocation}
                onChange={(e) => setHomeSearchLocation(e.target.value)}
                className="w-full bg-transparent text-sm font-semibold text-slate-955 outline-none cursor-pointer"
              >
                <option value="">Select Location</option>
                <option value="Kanpur Nagar">Kanpur Nagar</option>
                <option value="Lucknow">Lucknow</option>
                <option value="Agra">Agra</option>
                <option value="Varanasi">Varanasi</option>
                <option value="Allahabad (Prayagraj)">Prayagraj</option>
              </select>
            </div>

            {/* Category Dropdown */}
            <div className="w-full md:w-56 flex items-center gap-2 px-4 pb-3 md:pb-0">
              <svg className="w-5 h-5 text-teal-600 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <select
                value={homeSearchCategory}
                onChange={(e) => setHomeSearchCategory(e.target.value)}
                className="w-full bg-transparent text-sm font-semibold text-slate-955 outline-none cursor-pointer"
              >
                <option value="">Select Category</option>
                <option value="Graduate">Graduate</option>
                <option value="12th Pass">12th Pass</option>
                <option value="10th Pass">10th Pass</option>
                <option value="ITI / Diploma">ITI / Diploma</option>
              </select>
            </div>

            {/* Search Button */}
            <button 
              onClick={() => {
                setSearchTerm(homeSearchQuery);
                setFilterLocation(homeSearchLocation);
                setActiveTab("jobs");
              }}
              className="w-full md:w-auto bg-[#0ca581] hover:bg-[#0a8567] text-white font-extrabold text-sm px-8 py-3.5 rounded-xl md:rounded-full cursor-pointer transition-all duration-200 active:scale-95 shadow-md hover:shadow-lg whitespace-nowrap"
            >
              Search Job
            </button>
          </div>

          {/* Stats Row */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 md:gap-16 mt-16 text-white select-none">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full border border-emerald-500/30 bg-emerald-500/10 flex items-center justify-center text-[#0ca581]">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="text-left">
                <p className="text-2xl font-black leading-tight">30,000</p>
                <p className="text-[10px] text-emerald-100 font-extrabold uppercase tracking-wider">Jobs</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full border border-emerald-500/30 bg-emerald-500/10 flex items-center justify-center text-[#0ca581]">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <div className="text-left">
                <p className="text-2xl font-black leading-tight">10,000</p>
                <p className="text-[10px] text-emerald-100 font-extrabold uppercase tracking-wider">Candidates</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full border border-emerald-500/30 bg-emerald-500/10 flex items-center justify-center text-[#0ca581]">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <div className="text-left">
                <p className="text-2xl font-black leading-tight">15,000</p>
                <p className="text-[10px] text-emerald-100 font-extrabold uppercase tracking-wider">Companies</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. BRAND LOGOS STRIP */}
      <section className="bg-[#090d14] py-8 select-none border-y border-gray-800">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap items-center justify-center gap-12 md:gap-24">
          <div className="flex items-center gap-2 text-white font-extrabold text-lg opacity-85 hover:opacity-100 transition-opacity">
            <svg className="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm4.586 14.424c-.18.295-.565.387-.86.207-2.377-1.454-5.37-1.783-8.893-.982-.336.076-.67-.135-.746-.47-.077-.337.135-.67.472-.747 3.847-.878 7.143-.5 9.82 1.14.296.18.387.563.207.86zm1.226-2.723c-.227.367-.707.487-1.074.26-2.72-1.672-6.87-2.157-10.08-1.182-.413.125-.847-.107-.972-.52-.125-.413.107-.847.52-.972 3.676-1.116 8.243-.574 11.347 1.33.368.228.488.708.26 1.075zm.106-2.833C14.492 8.892 8.7 8.7 5.354 9.716c-.512.155-1.046-.134-1.202-.647-.155-.513.135-1.047.647-1.202 3.856-1.17 10.23-.953 14.218 1.413.46.273.61.87.337 1.33-.273.46-.87.61-1.33.337z"/>
            </svg>
            <span>Spotify</span>
          </div>
          <div className="flex items-center gap-2 text-white font-extrabold text-lg opacity-85 hover:opacity-100 transition-opacity">
            <svg className="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523 2.528 2.528 0 0 1-2.522-2.523 2.528 2.528 0 0 1 2.522-2.52h2.52v2.52zm1.261 0a2.528 2.528 0 0 1 2.52-2.52h5.043a2.528 2.528 0 0 1 2.522 2.52v5.042a2.528 2.528 0 0 1-2.522 2.52H8.823a2.528 2.528 0 0 1-2.52-2.52v-5.042zM8.823 5.043a2.528 2.528 0 0 1-2.52-2.52A2.528 2.528 0 0 1 8.823 0a2.528 2.528 0 0 1 2.52 2.52v2.52h-2.52zm0 1.261a2.528 2.528 0 0 1 2.52 2.52v5.043a2.528 2.528 0 0 1-2.52 2.522H3.78a2.528 2.528 0 0 1-2.52-2.522V8.824a2.528 2.528 0 0 1 2.52-2.52h5.043zm10.135 3.78a2.528 2.528 0 0 1 2.52-2.52 2.528 2.528 0 0 1 2.522 2.52 2.528 2.528 0 0 1-2.522 2.52h-2.52v-2.52zm-1.262 0a2.528 2.528 0 0 1-2.52 2.52h-5.043a2.528 2.528 0 0 1-2.522-2.52V3.78a2.528 2.528 0 0 1 2.522-2.52h5.043a2.528 2.528 0 0 1 2.52 2.52v5.043zm-3.78 10.135a2.528 2.528 0 0 1 2.52 2.52 2.528 2.528 0 0 1-2.52-2.522 2.528 2.528 0 0 1-2.522-2.522v-2.52h2.522zm0-1.262a2.528 2.528 0 0 1-2.522-2.52v-5.043a2.528 2.528 0 0 1 2.522-2.52h5.043a2.528 2.528 0 0 1 2.52 2.52v5.043h-5.043z"/>
            </svg>
            <span>slack</span>
          </div>
          <div className="flex items-center gap-2 text-white font-extrabold text-lg opacity-85 hover:opacity-100 transition-opacity">
            <svg className="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M13.966 22.624h6.12L12.562 2.007h-4.91L.126 22.624h6.12l2.45-6.134h5.27zm-4.14-10.228l1.656-4.14 1.656 4.14z"/>
            </svg>
            <span>Adobe</span>
          </div>
          <div className="flex items-center gap-2 text-white font-extrabold text-lg opacity-85 hover:opacity-100 transition-opacity">
            <svg className="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 24 24">
              <circle cx="12" cy="7" r="2.5" />
              <circle cx="7.5" cy="15" r="2.5" />
              <circle cx="16.5" cy="15" r="2.5" />
            </svg>
            <span>asana</span>
          </div>
          <div className="flex items-center gap-2 text-white font-extrabold text-lg opacity-85 hover:opacity-100 transition-opacity">
            <svg className="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15.5h-2v-2h2v2zm0-4h-2v-4h2v4z"/>
            </svg>
            <span>Linear</span>
          </div>
        </div>
      </section>

      {/* 3. BROWSE BY CATEGORY */}
      <section className="bg-[#f1f7f6] py-24 px-6 select-none">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight mb-2">
            Browse by Category
          </h2>
          <p className="text-sm md:text-base text-slate-955 max-w-2xl mx-auto mb-16 font-open-sans font-medium">
            Choose from a wide variety of industries and find the job that fits your skills and experience.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Agriculture", jobs: "150 Jobs", icon: (
                <svg className="w-8 h-8 text-[#0ca581]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18M3 12h18M12 3a9 9 0 019 9v1a9 9 0 01-9 9m0-19a9 9 0 00-9 9v1a9 9 0 009 9" />
                </svg>
              )},
              { name: "Metal Production", jobs: "90 Jobs", icon: (
                <svg className="w-8 h-8 text-[#0ca581]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              )},
              { name: "Commerce", jobs: "230 Jobs", icon: (
                <svg className="w-8 h-8 text-[#0ca581]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
              )},
              { name: "Construction", jobs: "110 Jobs", icon: (
                <svg className="w-8 h-8 text-[#0ca581]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              )},
              { name: "Hotels & Tourism", jobs: "180 Jobs", icon: (
                <svg className="w-8 h-8 text-[#0ca581]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              )},
              { name: "Education", jobs: "130 Jobs", icon: (
                <svg className="w-8 h-8 text-[#0ca581]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 14v7" />
                </svg>
              )},
              { name: "Financial Services", jobs: "140 Jobs", icon: (
                <svg className="w-8 h-8 text-[#0ca581]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              )},
              { name: "Transport", jobs: "120 Jobs", icon: (
                <svg className="w-8 h-8 text-[#0ca581]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                </svg>
              )}
            ].map((cat) => (
              <div 
                key={cat.name}
                onClick={() => {
                  let searchKeyword = cat.name;
                  if (cat.name === "Financial Services") searchKeyword = "Accountant";
                  if (cat.name === "Commerce") searchKeyword = "Sales";
                  if (cat.name === "Hotels & Tourism") searchKeyword = "Receptionist";
                  if (cat.name === "Transport") searchKeyword = "Delivery";
                  
                  setSearchTerm(searchKeyword);
                  setFilterLocation("");
                  setActiveTab("jobs");
                }}
                className="bg-white border border-gray-100 rounded-2xl p-8 flex flex-col items-center justify-center gap-4 cursor-pointer hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="w-16 h-16 rounded-full bg-emerald-50 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {cat.icon}
                </div>
                <h3 className="font-open-sans text-lg font-semibold text-slate-955">{cat.name}</h3>
                <span className="bg-[#edf5f3] text-[#0ca581] font-black text-xs px-4 py-1.5 rounded-full">
                  {cat.jobs}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. GOOD LIFE BEGINS WITH A GOOD COMPANY */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          {/* Left Portrait Image */}
          <div className="lg:col-span-5 relative">
            <div className="absolute inset-0 bg-emerald-500/10 rounded-3xl translate-x-4 translate-y-4 -z-10" />
            <img 
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=85&w=600&h=800" 
              alt="Smiling Professionals Team" 
              className="w-full aspect-[3/4] object-cover rounded-3xl shadow-xl"
            />
          </div>

          {/* Right Description */}
          <div className="lg:col-span-7 text-left flex flex-col items-start">
            <h2 className="text-3xl sm:text-4.5xl font-black text-slate-950 leading-tight mb-6">
              Good Life Begins With<br />A Good Company
            </h2>
            <p className="text-slate-955 text-sm md:text-base leading-relaxed mb-8 font-open-sans font-medium">
              We believe that a good career path can change a person's life, and finding the right place to work is the first step. Our direct cooperation with certified regional partners allows us to present transparent offers, verified base salaries, and actual growth possibilities. Enjoy zero placement costs, prompt response matches, and designated support coordination at each step.
            </p>

            <div className="flex items-center mb-12">
              <button 
                onClick={() => setActiveTab("jobs")}
                className="bg-[#0ca581] hover:bg-[#0a8567] text-white font-extrabold text-sm px-8 py-3.5 rounded-full cursor-pointer transition-all duration-200 active:scale-95 shadow-md hover:shadow-lg"
              >
                Search Job
              </button>
              <button 
                onClick={() => setActiveTab("about")}
                className="text-slate-950 hover:text-[#0ca581] font-bold text-sm ml-6 hover:underline flex items-center gap-1 cursor-pointer"
              >
                Learn More ➔
              </button>
            </div>

            {/* Stats columns */}
            <div className="grid grid-cols-3 gap-6 w-full border-t border-gray-150 pt-8">
              <div>
                <p className="text-3xl font-black text-[#0ca581] tracking-tight">12k+</p>
                <p className="text-xs text-slate-950 font-bold uppercase mt-1 tracking-wider">Clients worldwide</p>
                <p className="text-[10px] text-slate-950 mt-0.5 font-bold">Active businesses matching weekly</p>
              </div>
              <div>
                <p className="text-3xl font-black text-[#0ca581] tracking-tight">20k+</p>
                <p className="text-xs text-slate-950 font-bold uppercase mt-1 tracking-wider">Active resumes</p>
                <p className="text-[10px] text-slate-950 mt-0.5 font-bold">Vetted profiles on stand-by</p>
              </div>
              <div>
                <p className="text-3xl font-black text-[#0ca581] tracking-tight">18k+</p>
                <p className="text-xs text-slate-950 font-bold uppercase mt-1 tracking-wider">Companies</p>
                <p className="text-[10px] text-slate-950 mt-0.5 font-bold">Hub cooperating coordinates</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CREATE A BETTER FUTURE BANNER */}
      <section className="px-6 py-8">
        <div className="max-w-7xl mx-auto bg-[#090d14] rounded-3xl overflow-hidden shadow-2xl relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Column Content */}
            <div className="lg:col-span-7 text-left p-8 md:p-16 relative z-10">
              <h2 className="text-3xl sm:text-4xl md:text-[42px] font-black text-white leading-tight mb-4">
                Create A Better<br />Future Yourself
              </h2>
              <p className="text-slate-200 text-sm md:text-base leading-relaxed mb-8 max-w-xl font-medium">
                Choose from a wide variety of industries and find the job that fits your skills and experience. Get direct interview scheduling free!
              </p>
              <button 
                onClick={() => setActiveTab("jobs")}
                className="bg-[#0ca581] hover:bg-[#0a8567] text-white font-extrabold text-sm px-8 py-3.5 rounded-full cursor-pointer transition-all duration-200 active:scale-95 shadow-md"
              >
                Search Job
              </button>
            </div>
            {/* Right Column Image */}
            <div className="lg:col-span-5 h-64 lg:h-full relative overflow-hidden self-stretch">
              <div className="absolute inset-0 bg-gradient-to-r lg:bg-gradient-to-l from-transparent via-[#090d14]/70 to-[#090d14] z-10" />
              <img 
                src="https://images.unsplash.com/photo-1521737711867-e3b904737a88?auto=format&fit=crop&q=85&w=800" 
                alt="Diverse team of workers"
                className="w-full h-full object-cover lg:absolute lg:inset-y-0 lg:right-0"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 6. TESTIMONIALS */}
      <section className="bg-[#f1f7f6] py-24 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight mb-2">
            Testimonials from Our Customers
          </h2>
          <p className="text-sm md:text-base text-slate-955 max-w-2xl mx-auto mb-16 font-open-sans font-medium">
            Read what some of our job seekers and hiring managers have to say about their experience with us.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            {/* Testimonial 1 */}
            <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm flex flex-col justify-between relative hover:shadow-xl transition-shadow duration-300">
              <div>
                <div className="flex items-center gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <span key={s} className="text-amber-400 text-lg">★</span>
                  ))}
                </div>
                <h4 className="font-open-sans text-base font-semibold text-slate-955 mb-2">Amazing services</h4>
                <p className="text-slate-955 text-xs md:text-sm leading-relaxed mb-8 font-open-sans font-medium">
                  "I completed my profile and coordinators immediately matched me with Sharma Enterprises in Kanpur. Very transparent packages and direct support, charging absolutely nothing."
                </p>
              </div>
              <div className="flex items-center justify-between border-t border-gray-50 pt-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-emerald-500 text-white font-extrabold flex items-center justify-center text-xs shadow">
                    AV
                  </div>
                  <div>
                    <h5 className="font-open-sans text-xs font-semibold text-slate-955">Ankit Verma</h5>
                    <p className="font-open-sans text-[10px] text-slate-955 font-semibold uppercase mt-0.5">Placed Seeker</p>
                  </div>
                </div>
                <span className="text-4xl text-emerald-500 font-serif opacity-30 select-none">“</span>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm flex flex-col justify-between relative hover:shadow-xl transition-shadow duration-300">
              <div>
                <div className="flex items-center gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <span key={s} className="text-amber-400 text-lg">★</span>
                  ))}
                </div>
                <h4 className="font-open-sans text-base font-semibold text-slate-955 mb-2">Everything simple</h4>
                <p className="text-slate-955 text-xs md:text-sm leading-relaxed mb-8 font-open-sans font-medium">
                  "Being a graduate, I struggled to find genuine accounting jobs. Shalini checked my details and matching was instant. Highly recommended to all local job seekers."
                </p>
              </div>
              <div className="flex items-center justify-between border-t border-gray-50 pt-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-emerald-600 text-white font-extrabold flex items-center justify-center text-xs shadow">
                    KD
                  </div>
                  <div>
                    <h5 className="font-open-sans text-xs font-semibold text-slate-955">Kajal Dwivedi</h5>
                    <p className="font-open-sans text-[10px] text-slate-955 font-semibold uppercase mt-0.5">Placed Seeker</p>
                  </div>
                </div>
                <span className="text-4xl text-emerald-500 font-serif opacity-30 select-none">“</span>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm flex flex-col justify-between relative hover:shadow-xl transition-shadow duration-300">
              <div>
                <div className="flex items-center gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <span key={s} className="text-amber-400 text-lg">★</span>
                  ))}
                </div>
                <h4 className="font-open-sans text-base font-semibold text-slate-955 mb-2">Awesome, thank you!</h4>
                <p className="text-slate-955 text-xs md:text-sm leading-relaxed mb-8 font-open-sans font-medium">
                  "Direct coordination was my main priority. I uploaded my driving documentation and matched to QuickMart Logistics the next day. Zero middleman deductions."
                </p>
              </div>
              <div className="flex items-center justify-between border-t border-gray-50 pt-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-teal-600 text-white font-extrabold flex items-center justify-center text-xs shadow">
                    SR
                  </div>
                  <div>
                    <h5 className="font-open-sans text-xs font-semibold text-slate-955">Sunil Rajput</h5>
                    <p className="font-open-sans text-[10px] text-slate-955 font-semibold uppercase mt-0.5">Placed Seeker</p>
                  </div>
                </div>
                <span className="text-4xl text-emerald-500 font-serif opacity-30 select-none">“</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. NEWS AND BLOG */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-12">
            <div className="text-left">
              <h2 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight mb-2">
                News and Blog
              </h2>
              <p className="text-xs sm:text-sm text-slate-955 font-open-sans font-medium">
                Stay up to date with the latest job trends and news.
              </p>
            </div>
            <button 
              onClick={() => setActiveTab("about")}
              className="text-[#0ca581] hover:text-[#0a8567] font-extrabold text-xs sm:text-sm flex items-center gap-1.5 hover:underline cursor-pointer"
            >
              View All ➔
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            <div className="group cursor-pointer">
              <div className="aspect-[16/10] overflow-hidden rounded-2xl mb-4 shadow-sm border border-gray-100">
                <img 
                  src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=85&w=800" 
                  alt="Workplace Engagement"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="flex items-center gap-3 text-[11px] text-slate-955 font-bold uppercase tracking-wider mb-2 select-none">
                <span className="bg-[#edf5f3] text-[#0ca581] px-2.5 py-0.5 rounded-full font-black">News</span>
                <span>18 March 2026</span>
              </div>
              <h3 className="font-open-sans text-base md:text-lg font-semibold text-slate-955 leading-snug mb-2 group-hover:text-[#0ca581] transition-colors duration-200">
                Revitalizing Workplace Morale: Innovative Tactics For Boosting Employee Engagement in 2026
              </h3>
              <button onClick={() => setActiveTab("about")} className="text-xs font-black text-slate-955 group-hover:text-[#0ca581] flex items-center gap-1 hover:underline cursor-pointer">
                Read More ➔
              </button>
            </div>

            <div className="group cursor-pointer">
              <div className="aspect-[16/10] overflow-hidden rounded-2xl mb-4 shadow-sm border border-gray-100">
                <img 
                  src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=85&w=800" 
                  alt="Job Interview Advice"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="flex items-center gap-3 text-[11px] text-slate-955 font-bold uppercase tracking-wider mb-2 select-none">
                <span className="bg-[#edf5f3] text-[#0ca581] px-2.5 py-0.5 rounded-full font-black">Jobs</span>
                <span>18 March 2026</span>
              </div>
              <h3 className="font-open-sans text-base md:text-lg font-semibold text-slate-955 leading-snug mb-2 group-hover:text-[#0ca581] transition-colors duration-200">
                How To Avoid The Top Six Most Common Job Interview Mistakes
              </h3>
              <button onClick={() => setActiveTab("about")} className="text-xs font-black text-slate-955 group-hover:text-[#0ca581] flex items-center gap-1 hover:underline cursor-pointer">
                Read More ➔
              </button>
            </div>

            <div className="group cursor-pointer">
              <div className="aspect-[16/10] overflow-hidden rounded-2xl mb-4 shadow-sm border border-gray-100">
                <img 
                  src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=85&w=800" 
                  alt="CV and Resume Advice"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="flex items-center gap-3 text-[11px] text-slate-955 font-bold uppercase tracking-wider mb-2 select-none">
                <span className="bg-[#edf5f3] text-[#0ca581] px-2.5 py-0.5 rounded-full font-black">Advice</span>
                <span>18 March 2026</span>
              </div>
              <h3 className="font-open-sans text-base md:text-lg font-semibold text-slate-955 leading-snug mb-2 group-hover:text-[#0ca581] transition-colors duration-200">
                Top 3 Formatting Rules for Regional CV Submissions to Attract Recruiters
              </h3>
              <button onClick={() => setActiveTab("about")} className="text-xs font-black text-slate-955 group-hover:text-[#0ca581] flex items-center gap-1 hover:underline cursor-pointer">
                Read More ➔
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
