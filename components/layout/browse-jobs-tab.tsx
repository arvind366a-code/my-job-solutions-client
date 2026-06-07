"use client";

import React from "react";
import {
  Application,
  JobOpening,
  CAREER_BRIDGE_JOBS,
  getJobCategory,
  getJobExperienceMockup,
  getJobMaxSalaryNum,
  getJobMinSalaryNum,
} from "./types";

interface BrowseJobsTabProps {
  isSignedIn: boolean;
  appliedJobs: Application[];
  selectedJob: JobOpening | null;
  setSelectedJob: (job: JobOpening | null) => void;
  searchTerm: string;
  setSearchTerm: (val: string) => void;
  filterLocation: string;
  setFilterLocation: (val: string) => void;
  selectedCategories: string[];
  setSelectedCategories: React.Dispatch<React.SetStateAction<string[]>>;
  selectedJobTypes: string[];
  setSelectedJobTypes: React.Dispatch<React.SetStateAction<string[]>>;
  selectedExperienceLevels: string[];
  setSelectedExperienceLevels: React.Dispatch<React.SetStateAction<string[]>>;
  selectedDatePosted: string;
  setSelectedDatePosted: (val: string) => void;
  salaryRange: number;
  setSalaryRange: (val: number) => void;
  sortBy: string;
  setSortBy: (val: string) => void;
  jobsPage: number;
  setJobsPage: (val: number) => void;
  handleApplyAction: (job: JobOpening) => void;
}

export function BrowseJobsTab({
  isSignedIn,
  appliedJobs,
  selectedJob,
  setSelectedJob,
  searchTerm,
  setSearchTerm,
  filterLocation,
  setFilterLocation,
  selectedCategories,
  setSelectedCategories,
  selectedJobTypes,
  setSelectedJobTypes,
  selectedExperienceLevels,
  setSelectedExperienceLevels,
  selectedDatePosted,
  setSelectedDatePosted,
  salaryRange,
  setSalaryRange,
  sortBy,
  setSortBy,
  jobsPage,
  setJobsPage,
  handleApplyAction,
}: BrowseJobsTabProps) {

  const categoryCounts = {
    "Commerce": CAREER_BRIDGE_JOBS.filter(j => getJobCategory(j.id) === "Commerce").length,
    "Telecommunications": CAREER_BRIDGE_JOBS.filter(j => getJobCategory(j.id) === "Telecommunications").length,
    "Hotels & Tourism": CAREER_BRIDGE_JOBS.filter(j => getJobCategory(j.id) === "Hotels & Tourism").length,
    "Education": CAREER_BRIDGE_JOBS.filter(j => getJobCategory(j.id) === "Education").length,
    "Financial Services": CAREER_BRIDGE_JOBS.filter(j => getJobCategory(j.id) === "Financial Services").length,
  };

  const jobTypeCounts = {
    "Full time": CAREER_BRIDGE_JOBS.filter(j => j.jobType.toLowerCase() === "full time").length,
    "Part time": CAREER_BRIDGE_JOBS.filter(j => j.jobType.toLowerCase() === "part time").length,
    "Freelance": CAREER_BRIDGE_JOBS.filter(j => j.jobType.toLowerCase() === "freelance").length,
    "Seasonal": CAREER_BRIDGE_JOBS.filter(j => j.jobType.toLowerCase() === "seasonal" || j.jobType.toLowerCase() === "shift based" || j.jobType.toLowerCase() === "part time").length,
    "Fixed-Price": 0
  };

  const experienceCounts = {
    "No-experience": CAREER_BRIDGE_JOBS.filter(j => getJobExperienceMockup(j.id) === "No-experience").length,
    "Fresher": CAREER_BRIDGE_JOBS.filter(j => getJobExperienceMockup(j.id) === "Fresher").length,
    "Intermediate": CAREER_BRIDGE_JOBS.filter(j => getJobExperienceMockup(j.id) === "Intermediate").length,
    "Expert": CAREER_BRIDGE_JOBS.filter(j => getJobExperienceMockup(j.id) === "Expert").length,
  };

  const dateCounts = {
    "All": CAREER_BRIDGE_JOBS.length,
    "Last Hour": CAREER_BRIDGE_JOBS.filter(j => j.id !== "peon").length,
    "Last 24 Hours": CAREER_BRIDGE_JOBS.length,
    "Last 7 Days": CAREER_BRIDGE_JOBS.length,
    "Last 30 Days": CAREER_BRIDGE_JOBS.length,
  };

  const handleCheckboxToggle = (
    val: string,
    list: string[],
    setList: React.Dispatch<React.SetStateAction<string[]>>
  ) => {
    if (list.includes(val)) {
      setList(list.filter(x => x !== val));
    } else {
      setList([...list, val]);
    }
    setJobsPage(1);
  };

  const renderGeometricLogo = (jobId: string) => {
    let svgContent;
    switch (jobId) {
      case "forward-security-director":
        svgContent = (
          <svg viewBox="0 0 100 100" className="w-9 h-9">
            <defs>
              <linearGradient id="logo-grad-1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#f43f5e" />
                <stop offset="50%" stopColor="#ec4899" />
                <stop offset="100%" stopColor="#a855f7" />
              </linearGradient>
            </defs>
            <circle cx="50" cy="50" r="45" fill="url(#logo-grad-1)" />
            <circle cx="50" cy="50" r="22" fill="#ffffff" />
            <circle cx="50" cy="50" r="12" fill="url(#logo-grad-1)" />
            <path d="M50 0 L50 100 M0 50 L100 50" stroke="#ffffff" strokeWidth="2" opacity="0.35" />
          </svg>
        );
        break;
      case "regional-creative-facilitator":
        svgContent = (
          <svg viewBox="0 0 100 100" className="w-9 h-9">
            <circle cx="38" cy="52" r="24" fill="#22c55e" opacity="0.85" />
            <circle cx="62" cy="52" r="24" fill="#06b6d4" opacity="0.85" />
            <circle cx="50" cy="32" r="24" fill="#eab308" opacity="0.85" />
            <circle cx="50" cy="47" r="10" fill="#ffffff" />
          </svg>
        );
        break;
      case "internal-integration-planner":
        svgContent = (
          <svg viewBox="0 0 100 100" className="w-9 h-9">
            <circle cx="50" cy="50" r="45" fill="none" stroke="#d946ef" strokeWidth="8" />
            <circle cx="50" cy="50" r="32" fill="none" stroke="#f43f5e" strokeWidth="6" />
            <circle cx="50" cy="50" r="18" fill="#3b82f6" />
          </svg>
        );
        break;
      case "district-intranet-director":
        svgContent = (
          <svg viewBox="0 0 100 100" className="w-9 h-9">
            <defs>
              <linearGradient id="logo-grad-2" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#3b82f6" />
                <stop offset="100%" stopColor="#ef4444" />
              </linearGradient>
            </defs>
            <rect x="15" y="15" width="70" height="70" rx="18" fill="url(#logo-grad-2)" />
            <circle cx="50" cy="50" r="22" fill="#ffffff" />
            <circle cx="50" cy="50" r="10" fill="#10b981" />
          </svg>
        );
        break;
      case "corporate-tactics-facilitator":
        svgContent = (
          <svg viewBox="0 0 100 100" className="w-9 h-9">
            <circle cx="50" cy="50" r="45" fill="#f97316" />
            <polygon points="50,12 85,78 15,78" fill="#14b8a6" />
            <circle cx="50" cy="58" r="12" fill="#ffffff" />
          </svg>
        );
        break;
      case "forward-accounts-consultant":
        svgContent = (
          <svg viewBox="0 0 100 100" className="w-9 h-9">
            <circle cx="50" cy="50" r="45" fill="#8b5cf6" />
            <path d="M50 5 A45 45 0 0 1 95 50 L50 50 Z" fill="#eab308" />
            <path d="M50 50 L95 50 A45 45 0 0 1 50 95 Z" fill="#ec4899" />
            <circle cx="50" cy="50" r="15" fill="#ffffff" />
          </svg>
        );
        break;
      default:
        svgContent = (
          <svg viewBox="0 0 100 100" className="w-9 h-9">
            <circle cx="50" cy="50" r="45" fill="#64748b" />
            <rect x="30" y="30" width="40" height="40" rx="8" fill="#ffffff" opacity="0.6" />
          </svg>
        );
        break;
    }
    return (
      <div className="w-16 h-16 shrink-0 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center p-2 shadow-inner">
        {svgContent}
      </div>
    );
  };

  const filteredJobs = CAREER_BRIDGE_JOBS.filter((job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.skills.some((s) => s.toLowerCase().includes(searchTerm.toLowerCase()));

    const matchesLoc = filterLocation
      ? job.location.toLowerCase().includes(filterLocation.toLowerCase())
      : true;

    const matchesCategory = selectedCategories.length > 0
      ? selectedCategories.includes(getJobCategory(job.id))
      : true;

    const matchesJobType = selectedJobTypes.length > 0
      ? selectedJobTypes.some(type => job.jobType.toLowerCase().includes(type.toLowerCase()))
      : true;

    const matchesExperience = selectedExperienceLevels.length > 0
      ? selectedExperienceLevels.includes(getJobExperienceMockup(job.id))
      : true;

    const matchesSalary = getJobMaxSalaryNum(job.salary) <= salaryRange;

    let matchesDate = true;
    if (selectedDatePosted !== "All") {
      if (selectedDatePosted === "Last Hour") {
        matchesDate = job.id !== "peon";
      }
    }

    return matchesSearch && matchesLoc && matchesCategory && matchesJobType && matchesExperience && matchesSalary && matchesDate;
  }).sort((a, b) => {
    if (sortBy === "salary-asc") {
      return getJobMinSalaryNum(a.salary) - getJobMinSalaryNum(b.salary);
    }
    if (sortBy === "salary-desc") {
      return getJobMaxSalaryNum(b.salary) - getJobMaxSalaryNum(a.salary);
    }
    return 0;
  });

  const paginatedJobs = filteredJobs.slice((jobsPage - 1) * 6, jobsPage * 6);

  if (selectedJob) {
    const relatedJobs = CAREER_BRIDGE_JOBS
      .filter(j => j.id !== selectedJob.id && (getJobCategory(j.id) === getJobCategory(selectedJob.id) || j.location === selectedJob.location))
      .slice(0, 3);

    return (
      <div className="w-full bg-[#fafbfc] min-h-screen">
        {/* Header Banner */}
        <div className="bg-gradient-to-r from-[#0ca581] to-[#098265] text-white py-16 px-6 text-center relative overflow-hidden select-none border-b border-[#076850]">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:3rem_3rem]" />
          <div className="relative z-10 max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight font-open-sans">
              Job Details
            </h1>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="max-w-7xl mx-auto px-6 py-12 font-open-sans">
          {/* Breadcrumbs / Back button */}
          <div className="mb-6 flex items-center justify-between select-none">
            <button
              onClick={() => {
                setSelectedJob(null);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="flex items-center gap-1.5 text-xs font-semibold text-[#0ca581] hover:underline cursor-pointer"
            >
              ← Back to listings
            </button>
            <span className="text-slate-950 text-xs font-medium">Home / Jobs / Job Details</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* LEFT COLUMN: Main Details */}
            <div className="lg:col-span-2 flex flex-col gap-6">
              
              {/* Job Header Info */}
              <div className="bg-white border border-slate-100 rounded-3xl p-6 md:p-8 flex flex-col gap-5 relative shadow-sm">
                <div className="flex gap-4 items-start pr-12">
                  {renderGeometricLogo(selectedJob.id)}
                  <div>
                    <h2 className="font-open-sans text-xl md:text-2xl font-bold text-slate-950 leading-tight">
                      {selectedJob.title}
                    </h2>
                    <p className="text-xs md:text-sm text-slate-955 font-semibold mt-1">
                      {selectedJob.company}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-x-5 gap-y-3.5 border-t border-slate-50 pt-5 mt-1 select-none text-xs text-slate-950 font-semibold">
                  <div className="flex items-center gap-1.5">
                    <svg className="w-4 h-4 text-[#0ca581] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span>{getJobCategory(selectedJob.id)}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <svg className="w-4 h-4 text-[#0ca581] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>{selectedJob.jobType}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <svg className="w-4 h-4 text-[#0ca581] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                    </svg>
                    <span>{selectedJob.salary}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <svg className="w-4 h-4 text-[#0ca581] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span>{selectedJob.location}</span>
                  </div>
                </div>
              </div>

              {/* Job Description */}
              <div className="bg-white border border-slate-100 rounded-3xl p-6 md:p-8 flex flex-col gap-4 shadow-sm">
                <h3 className="text-lg font-bold text-slate-950 border-l-4 border-[#0ca581] pl-3 select-none">Job Description</h3>
                <p className="text-sm text-slate-955 leading-relaxed font-medium">
                  {selectedJob.description}
                </p>
              </div>

              {/* Key Responsibilities */}
              <div className="bg-white border border-slate-100 rounded-3xl p-6 md:p-8 flex flex-col gap-4 shadow-sm">
                <h3 className="text-lg font-bold text-slate-955 border-l-4 border-[#0ca581] pl-3 select-none">Key Responsibilities</h3>
                <ul className="flex flex-col gap-3">
                  {selectedJob.responsibilities.map((resp, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-slate-955 leading-relaxed font-medium">
                      <svg className="w-4.5 h-4.5 text-[#0ca581] shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Professional Skills */}
              <div className="bg-white border border-slate-100 rounded-3xl p-6 md:p-8 flex flex-col gap-4 shadow-sm">
                <h3 className="text-lg font-bold text-slate-955 border-l-4 border-[#0ca581] pl-3 select-none">Professional Skills</h3>
                <ul className="flex flex-col gap-3">
                  {selectedJob.skills.map((skill, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-slate-955 leading-relaxed font-medium">
                      <svg className="w-4.5 h-4.5 text-[#0ca581] shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Related Jobs Container */}
              <div className="flex flex-col gap-5 mt-6">
                <div>
                  <h3 className="text-2xl font-black text-slate-955 font-open-sans">Related Jobs</h3>
                  <p className="text-xs text-slate-955 mt-1 select-none font-medium">Explore additional vacancies matching similar roles or coordinates</p>
                </div>
                <div className="flex flex-col gap-6">
                  {relatedJobs.map((rJob) => (
                    <div
                      key={rJob.id}
                      className="group bg-white border border-slate-100 rounded-[2rem] p-6 flex flex-col gap-4 relative shadow-sm hover:shadow-md transition-all duration-300"
                    >
                      <div className="flex gap-4 items-start pr-16">
                        {renderGeometricLogo(rJob.id)}
                        <div>
                          <h4 className="text-base font-bold text-slate-955 leading-snug group-hover:text-[#0ca581] transition-colors">{rJob.title}</h4>
                          <p className="text-xs text-slate-955 font-medium mt-0.5">{rJob.company}</p>
                        </div>
                      </div>
                      <div className="flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-slate-50 pt-4 mt-1 select-none text-[11px] text-slate-955 font-semibold">
                        <span className="flex items-center gap-1.5">📍 {rJob.location}</span>
                        <span className="flex items-center gap-1.5">🕐 {rJob.jobType}</span>
                        <span className="flex items-center gap-1.5">💼 {rJob.salary}</span>
                      </div>
                      <button
                        onClick={() => {
                          setSelectedJob(rJob);
                          window.scrollTo({ top: 0, behavior: 'smooth' });
                        }}
                        className="absolute bottom-6 right-6 bg-[#0ca581] hover:bg-[#0a8769] text-white text-[10px] font-bold px-4 py-2.5 rounded-xl transition-all active:scale-95 cursor-pointer shadow-sm"
                      >
                        Job Details
                      </button>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* RIGHT COLUMN: Sidebar Overview & Message Form */}
            <div className="lg:col-span-1 flex flex-col gap-6">
              
              {/* Apply CTA */}
              <button
                onClick={() => handleApplyAction(selectedJob)}
                className="bg-[#0ca581] hover:bg-[#0a8769] text-white font-extrabold text-sm w-full py-4 rounded-xl transition-all shadow-md hover:shadow-lg active:scale-98 cursor-pointer select-none text-center"
              >
                Apply Job
              </button>

              {/* Job Overview */}
              <div className="bg-[#F1F7F6]/60 border border-emerald-100/60 rounded-3xl p-6 flex flex-col gap-5 shadow-sm">
                <h4 className="text-sm font-bold text-slate-955 border-b border-emerald-100/30 pb-2.5 mb-1 select-none">Job Overview</h4>
                
                <div className="flex flex-col gap-4.5 select-none">
                  <div className="flex items-start gap-3">
                    <span className="w-8 h-8 rounded-lg bg-white border border-emerald-100/40 flex items-center justify-center text-[#0ca581] shrink-0 shadow-sm">
                      🕐
                    </span>
                    <div>
                      <p className="text-[10px] text-slate-955 font-semibold leading-none">Date Posted</p>
                      <p className="text-xs font-medium text-slate-955 mt-1 leading-snug">
                        2 hours ago
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="w-8 h-8 rounded-lg bg-white border border-emerald-100/40 flex items-center justify-center text-[#0ca581] shrink-0 shadow-sm">
                      📍
                    </span>
                    <div>
                      <p className="text-[10px] text-slate-955 font-semibold leading-none">Location</p>
                      <p className="text-xs font-medium text-slate-955 mt-1 leading-snug">{selectedJob.location}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="w-8 h-8 rounded-lg bg-white border border-emerald-100/40 flex items-center justify-center text-[#0ca581] shrink-0 shadow-sm">
                      💼
                    </span>
                    <div>
                      <p className="text-[10px] text-slate-955 font-semibold leading-none">Job Title</p>
                      <p className="text-xs font-medium text-slate-955 mt-1 leading-snug">{selectedJob.title}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="w-8 h-8 rounded-lg bg-white border border-emerald-100/40 flex items-center justify-center text-[#0ca581] shrink-0 shadow-sm">
                      ⏳
                    </span>
                    <div>
                      <p className="text-[10px] text-slate-955 font-semibold leading-none">Experience</p>
                      <p className="text-xs font-medium text-slate-955 mt-1 leading-snug">{selectedJob.experience}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="w-8 h-8 rounded-lg bg-white border border-emerald-100/40 flex items-center justify-center text-[#0ca581] shrink-0 shadow-sm">
                      <svg className="w-4.5 h-4.5 text-[#0ca581]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path d="M12 14l9-5-9-5-9 5 9 5z" />
                        <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 14v7" />
                      </svg>
                    </span>
                    <div>
                      <p className="text-[10px] text-slate-955 font-semibold leading-none">Degree</p>
                      <p className="text-xs font-medium text-slate-955 mt-1 leading-snug">{selectedJob.qualification}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="w-8 h-8 rounded-lg bg-white border border-emerald-100/40 flex items-center justify-center text-[#0ca581] shrink-0 shadow-sm">
                      <svg className="w-4.5 h-4.5 text-[#0ca581]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                      </svg>
                    </span>
                    <div>
                      <p className="text-[10px] text-slate-955 font-semibold leading-none">Offered Salary</p>
                      <p className="text-xs font-medium text-slate-955 mt-1 leading-snug">{selectedJob.salary}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="w-8 h-8 rounded-lg bg-white border border-emerald-100/40 flex items-center justify-center text-[#0ca581] shrink-0 shadow-sm">
                      <svg className="w-4.5 h-4.5 text-[#0ca581]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </span>
                    <div>
                      <p className="text-[10px] text-slate-955 font-semibold leading-none">Location</p>
                      <p className="text-xs font-medium text-slate-955 mt-1 leading-snug">{selectedJob.location}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Send Us Message Form */}
              <div className="bg-[#F1F7F6]/60 border border-emerald-100/60 rounded-3xl p-6 flex flex-col gap-4 shadow-sm">
                <h4 className="text-sm font-bold text-slate-955 border-b border-emerald-100/30 pb-2.5 mb-1 select-none">Send Us Message</h4>
                
                <form onSubmit={(e) => { e.preventDefault(); alert("Message sent successfully!"); }} className="flex flex-col gap-3.5">
                  <input 
                    type="text" 
                    placeholder="Full name" 
                    required
                    className="bg-white border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs outline-none focus:border-[#0ca581] transition-all placeholder-slate-400"
                  />
                  <input 
                    type="email" 
                    placeholder="Email Address" 
                    required
                    className="bg-white border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs outline-none focus:border-[#0ca581] transition-all placeholder-slate-400"
                  />
                  <input 
                    type="tel" 
                    placeholder="Phone Number" 
                    required
                    className="bg-white border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs outline-none focus:border-[#0ca581] transition-all placeholder-slate-400"
                  />
                  <textarea 
                    placeholder="Your Message" 
                    rows={3}
                    required
                    className="bg-white border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs outline-none focus:border-[#0ca581] transition-all resize-none placeholder-slate-400"
                  />
                  <button
                    type="submit"
                    className="bg-[#0ca581] hover:bg-[#0a8769] text-white font-bold text-xs py-3 rounded-xl transition-all shadow-sm active:scale-95 cursor-pointer mt-1"
                  >
                    Send Message
                  </button>
                </form>
              </div>

            </div>

          </div>
        </div>

      </div>
    );
  }

  return (
    <div className="w-full bg-[#fafbfc] min-h-screen">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-[#0ca581] to-[#098265] text-white py-16 px-6 text-center relative overflow-hidden select-none border-b border-[#076850]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:3rem_3rem]" />
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight font-open-sans">
            Jobs
          </h1>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          
          {/* LEFT COLUMN: Sidebar Filters */}
          <div className="lg:col-span-1 bg-[#F1F7F6]/60 border border-emerald-100/60 rounded-3xl p-6 flex flex-col gap-6 shadow-sm h-fit">
            
            {/* Search Field */}
            <div>
              <h4 className="text-sm font-bold text-slate-955 mb-2">Search by Job Title</h4>
              <div className="relative bg-white border border-gray-200 rounded-xl px-3 py-2.5 flex items-center gap-2 shadow-sm focus-within:border-[#0ca581] focus-within:ring-1 focus-within:ring-[#0ca581] transition-all">
                <svg className="w-4 h-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input
                  type="text"
                  placeholder="Job title or company"
                  value={searchTerm}
                  onChange={(e) => {
                    setSearchTerm(e.target.value);
                    setJobsPage(1);
                  }}
                  className="w-full bg-transparent border-none outline-none text-xs text-slate-955 placeholder-slate-400"
                />
              </div>
            </div>

            {/* Location Field */}
            <div>
              <h4 className="text-sm font-bold text-slate-955 mb-2">Location</h4>
              <div className="relative bg-white border border-gray-200 rounded-xl px-3 py-2.5 flex items-center gap-2 shadow-sm focus-within:border-[#0ca581] transition-all">
                <svg className="w-4 h-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <select
                  value={filterLocation}
                  onChange={(e) => {
                    setFilterLocation(e.target.value);
                    setJobsPage(1);
                  }}
                  className="w-full bg-transparent border-none outline-none text-xs text-slate-955 cursor-pointer appearance-none"
                >
                  <option value="">Choose city</option>
                  <option value="New-York">New-York, USA</option>
                  <option value="Los-Angeles">Los-Angeles, USA</option>
                  <option value="Texas">Texas, USA</option>
                  <option value="Florida">Florida, USA</option>
                  <option value="Boston">Boston, USA</option>
                  <option value="San-Francisco">San-Francisco, USA</option>
                  <option value="Chicago">Chicago, USA</option>
                  <option value="Austin">Austin, USA</option>
                  <option value="Denver">Denver, USA</option>
                </select>
                <svg className="w-4 h-4 text-slate-400 absolute right-3 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>

            {/* Category Filter */}
            <div>
              <h4 className="text-sm font-bold text-slate-955 mb-3">Category</h4>
              <div className="flex flex-col gap-2.5">
                {Object.entries(categoryCounts).map(([cat]) => (
                  <label key={cat} className="flex items-center gap-2 text-xs text-slate-955 font-bold cursor-pointer select-none">
                    <input
                      type="checkbox"
                      checked={selectedCategories.includes(cat)}
                      onChange={() => handleCheckboxToggle(cat, selectedCategories, setSelectedCategories)}
                      className="w-4.5 h-4.5 rounded border-gray-300 text-[#0ca581] focus:ring-[#0ca581] cursor-pointer"
                    />
                    {cat}
                  </label>
                ))}
              </div>
              <button
                onClick={() => {
                  setSelectedCategories(Object.keys(categoryCounts));
                }}
                className="bg-[#0ca581] hover:bg-[#0a8769] text-white text-xs font-bold w-full py-2 rounded-xl mt-4 transition-all shadow-sm cursor-pointer"
              >
                Show More
              </button>
            </div>

            {/* Job Type Filter */}
            <div>
              <h4 className="text-sm font-bold text-slate-955 mb-3">Job Type</h4>
              <div className="flex flex-col gap-2.5">
                {Object.entries(jobTypeCounts).map(([type]) => (
                  <label key={type} className="flex items-center gap-2 text-xs text-slate-955 font-bold cursor-pointer select-none">
                    <input
                      type="checkbox"
                      checked={selectedJobTypes.includes(type)}
                      onChange={() => handleCheckboxToggle(type, selectedJobTypes, setSelectedJobTypes)}
                      className="w-4.5 h-4.5 rounded border-gray-300 text-[#0ca581] focus:ring-[#0ca581] cursor-pointer"
                    />
                    {type}
                  </label>
                ))}
              </div>
            </div>

            {/* Experience Level Filter */}
            <div>
              <h4 className="text-sm font-bold text-slate-955 mb-3">Experience Level</h4>
              <div className="flex flex-col gap-2.5">
                {Object.entries(experienceCounts).map(([exp]) => (
                  <label key={exp} className="flex items-center gap-2 text-xs text-slate-955 font-bold cursor-pointer select-none">
                    <input
                      type="checkbox"
                      checked={selectedExperienceLevels.includes(exp)}
                      onChange={() => handleCheckboxToggle(exp, selectedExperienceLevels, setSelectedExperienceLevels)}
                      className="w-4.5 h-4.5 rounded border-gray-300 text-[#0ca581] focus:ring-[#0ca581] cursor-pointer"
                    />
                    {exp}
                  </label>
                ))}
              </div>
            </div>

            {/* Date Posted Filter */}
            <div>
              <h4 className="text-sm font-bold text-slate-955 mb-3">Date Posted</h4>
              <div className="flex flex-col gap-2.5">
                {Object.entries(dateCounts).map(([date]) => (
                  <label key={date} className="flex items-center gap-2 text-xs text-slate-955 font-bold cursor-pointer select-none">
                    <input
                      type="radio"
                      name="datePostedRadio"
                      checked={selectedDatePosted === date}
                      onChange={() => {
                        setSelectedDatePosted(date);
                        setJobsPage(1);
                      }}
                      className="w-4.5 h-4.5 border-gray-300 text-[#0ca581] focus:ring-[#0ca581] cursor-pointer"
                    />
                    {date}
                  </label>
                ))}
              </div>
            </div>

            {/* Salary Slider */}
            <div>
              <h4 className="text-sm font-bold text-slate-955 mb-1">Salary</h4>
              <input
                type="range"
                min="20000"
                max="100000"
                step="5000"
                value={salaryRange}
                onChange={(e) => {
                  setSalaryRange(Number(e.target.value));
                  setJobsPage(1);
                }}
                className="w-full h-1.5 bg-emerald-100 rounded-lg appearance-none cursor-pointer accent-[#0ca581]"
              />
              <div className="flex items-center justify-between text-xs text-slate-955 font-bold mt-2">
                <span>Salary: $0 - ${salaryRange}</span>
              </div>
              <button
                onClick={() => setJobsPage(1)}
                className="bg-[#0ca581] hover:bg-[#0a8769] text-white text-xs font-bold w-full py-2.5 rounded-xl mt-3 transition-all shadow-sm cursor-pointer"
              >
                Apply
              </button>
            </div>

            {/* Reset Button */}
            <button
              onClick={() => {
                setSearchTerm("");
                setFilterLocation("");
                setSelectedCategories([]);
                setSelectedJobTypes([]);
                setSelectedExperienceLevels([]);
                setSelectedDatePosted("All");
                setSalaryRange(100000);
                setJobsPage(1);
              }}
              className="text-center text-xs font-bold text-slate-400 hover:text-slate-600 underline cursor-pointer mt-2"
            >
              Clear All Filters
            </button>

          </div>

          {/* RIGHT COLUMN: Listings Container */}
          <div className="lg:col-span-3">
            
            {/* Listings Header Row */}
            <div className="flex items-center justify-between mb-8 select-none">
              <p className="text-sm text-slate-955 font-bold">
                Showing <strong className="text-slate-955">{Math.min((jobsPage - 1) * 6 + 1, filteredJobs.length)}-{Math.min(jobsPage * 6, filteredJobs.length)}</strong> of <strong className="text-slate-955">{filteredJobs.length}</strong> results
              </p>
              
              {/* Sort dropdown */}
              <div className="flex items-center gap-2">
                <select
                  value={sortBy}
                  onChange={(e) => {
                    setSortBy(e.target.value);
                    setJobsPage(1);
                  }}
                  className="bg-white border border-gray-200 rounded-xl px-3.5 py-2 text-xs font-bold text-slate-955 cursor-pointer outline-none focus:border-[#0ca581] transition-all"
                >
                  <option value="latest">Sort by latest</option>
                  <option value="salary-desc">Highest Salary</option>
                  <option value="salary-asc">Lowest Salary</option>
                </select>
              </div>
            </div>

            {/* Listings Grid */}
            {filteredJobs.length === 0 ? (
              <div className="bg-white border border-dashed border-slate-200 rounded-3xl py-16 px-6 text-center max-w-lg mx-auto">
                <span className="text-4xl block mb-4 select-none">🔍</span>
                <h3 className="font-open-sans text-lg font-bold text-slate-955 mb-2">No Matching Vacancies Found</h3>
                <p className="text-xs text-slate-955 max-w-sm mx-auto mb-6 leading-relaxed font-bold">
                  We couldn't find any openings matching your selected criteria. Try adjusting your filters or search terms.
                </p>
                <button
                  onClick={() => {
                    setSearchTerm("");
                    setFilterLocation("");
                    setSelectedCategories([]);
                    setSelectedJobTypes([]);
                    setSelectedExperienceLevels([]);
                    setSelectedDatePosted("All");
                    setSalaryRange(100000);
                  }}
                  className="bg-slate-900 hover:bg-slate-700 text-white text-xs font-bold px-5 py-2.5 rounded-xl cursor-pointer shadow-sm transition-all"
                >
                  Reset Filters
                </button>
              </div>
            ) : (
              <div className="flex flex-col gap-6">
                {paginatedJobs.map((job) => {
                  return (
                    <div
                      key={job.id}
                      className="group bg-white border border-slate-100 rounded-[2.5rem] p-6 md:p-8 flex flex-col gap-5 relative shadow-sm hover:shadow-md hover:border-slate-200/60 transition-all duration-300"
                    >

                      {/* Card Content Row */}
                      <div className="flex gap-4 items-start">
                        {/* Geometric Custom Logo */}
                        {renderGeometricLogo(job.id)}

                        <div>
                          {/* Title */}
                          <h3 className="font-open-sans text-lg md:text-xl font-bold text-slate-955 leading-tight group-hover:text-[#0ca581] transition-colors">
                            {job.title}
                          </h3>
                          {/* Company Name */}
                          <p className="text-xs md:text-sm text-slate-955 font-bold mt-1 select-none">
                            {job.company}
                          </p>
                        </div>
                      </div>

                      {/* Metadata Icons Row */}
                      <div className="flex flex-wrap items-center gap-x-5 gap-y-3.5 border-t border-slate-50 pt-5 mt-1 select-none">
                        {/* Category */}
                        <div className="flex items-center gap-1.5 text-xs text-slate-955 font-bold">
                          <svg className="w-4 h-4 text-[#0ca581] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                          <span>{getJobCategory(job.id)}</span>
                        </div>

                        {/* Job Type */}
                        <div className="flex items-center gap-1.5 text-xs text-slate-955 font-bold">
                          <svg className="w-4 h-4 text-[#0ca581] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span>{job.jobType}</span>
                        </div>

                        {/* Salary */}
                        <div className="flex items-center gap-1.5 text-xs text-slate-955 font-bold">
                          <svg className="w-4 h-4 text-[#0ca581] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                          </svg>
                          <span>{job.salary}</span>
                        </div>

                        {/* Location */}
                        <div className="flex items-center gap-1.5 text-xs text-slate-955 font-bold">
                          <svg className="w-4 h-4 text-[#0ca581] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          <span>{job.location}</span>
                        </div>
                      </div>

                      {/* Details Action Button */}
                      <div className="absolute bottom-6 md:bottom-8 right-6 md:right-8 select-none">
                        <button
                          onClick={() => setSelectedJob(job)}
                          className="bg-[#0ca581] hover:bg-[#0a8769] text-white text-xs font-bold px-5 py-2.5 rounded-xl transition-all shadow-sm active:scale-95 cursor-pointer"
                        >
                          Job Details
                        </button>
                      </div>

                    </div>
                  );
                })}
              </div>
            )}

            {/* Pagination Indicator Row */}
            {filteredJobs.length > 6 && (
              <div className="flex items-center justify-center gap-2.5 mt-12 select-none">
                <button
                  onClick={() => {
                    setJobsPage(1);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className={`w-10 h-10 rounded-lg flex items-center justify-center text-sm font-bold transition-all border ${
                    jobsPage === 1
                      ? "bg-[#0ca581] border-[#0ca581] text-white"
                      : "bg-white border-slate-200 text-slate-600 hover:bg-slate-50 cursor-pointer"
                  }`}
                >
                  1
                </button>
                <button
                  onClick={() => {
                    setJobsPage(2);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className={`w-10 h-10 rounded-lg flex items-center justify-center text-sm font-bold transition-all border ${
                    jobsPage === 2
                      ? "bg-[#0ca581] border-[#0ca581] text-white"
                      : "bg-white border-slate-200 text-slate-605 hover:bg-slate-50 cursor-pointer"
                  }`}
                >
                  2
                </button>
                <button
                  onClick={() => {
                    if (jobsPage === 1) {
                      setJobsPage(2);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }
                  }}
                  disabled={jobsPage === 2}
                  className={`px-4 h-10 rounded-lg flex items-center justify-center text-sm font-bold gap-1 transition-all border bg-white border-slate-200 text-slate-605 ${
                    jobsPage === 2
                      ? "opacity-50 cursor-not-allowed"
                      : "hover:bg-slate-50 cursor-pointer"
                  }`}
                >
                  Next &gt;
                </button>
              </div>
            )}

          </div>

        </div>
      </div>

    </div>
  );
}
