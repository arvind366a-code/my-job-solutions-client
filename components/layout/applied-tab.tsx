"use client";

import React from "react";
import {
  Application,
  CAREER_BRIDGE_JOBS,
} from "./types";

interface AppliedTabProps {
  isSignedIn: boolean;
  appliedJobs: Application[];
  handleModifyStatus: (jobId: string, status: Application["status"]) => void;
  setActiveTab: (tab: string) => void;
}

export function AppliedTab({
  isSignedIn,
  appliedJobs,
  handleModifyStatus,
  setActiveTab,
}: AppliedTabProps) {
  return (
    <div className="max-w-6xl mx-auto px-6 py-10 animate-fade-in font-open-sans">
      <div className="mb-8 pb-5">
        <h1 className="font-open-sans text-2xl md:text-3.5xl font-extrabold text-slate-950">
          Your Applications
        </h1>
        
        <p className="text-slate-950 text-xs md:text-sm mt-1.5 font-medium">
          Track your real-time interviewing schedules and onboarding updates. Keep your CV ready for recruitment checks.
        </p>
      </div>

      {!isSignedIn ? (
        <div className="border border-gray-250 rounded-2xl py-12 px-6 text-center max-w-lg mx-auto bg-white shadow-sm">
          <span className="text-4xl select-none">🔒</span>
          <h3 className="font-open-sans text-lg font-bold text-slate-950 mt-4 mb-2">Authenticated Session Required</h3>
          <p className="text-xs md:text-sm text-slate-950 mb-6 leading-relaxed">
            Please register or log in to view your applications pipeline.
          </p>
          <button
            onClick={() => setActiveTab("register")}
            className="bg-slate-950 hover:bg-black text-white text-xs font-bold px-5 py-2.5 rounded-xl cursor-pointer"
          >
            Register Free
          </button>
        </div>
      ) : appliedJobs.length === 0 ? (
        <div className="border border-dashed border-gray-300 rounded-2xl py-16 px-6 text-center max-w-lg mx-auto">
          <span className="text-4xl select-none">📝</span>
          <h3 className="font-open-sans text-lg font-bold text-slate-950 mt-4 mb-2">No Active Applications</h3>
          <p className="text-xs md:text-sm text-slate-950 mb-6 leading-relaxed">
            You have not submitted applications yet. Once you apply, they will show up here along with progress pipelines.
          </p>
          <button
            onClick={() => setActiveTab("jobs")}
            className="bg-slate-950 hover:bg-black text-white text-xs font-bold px-5 py-2.5 rounded-xl cursor-pointer"
          >
            Browse Vetted Jobs
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-5">
          {appliedJobs.map((app) => {
            const job = CAREER_BRIDGE_JOBS.find((j) => j.id === app.jobId);
            if (!job) return null;

            // Per-card stage logic
            const stageOrder: Record<string, number> = {
              "Applied": 0, "Under Review": 1, "Interview Scheduled": 2, "Placed": 3, "Rejected": 2,
            };
            const stages = [
              { label: "Applied"   },
              { label: "Reviewing" },
              { label: "Interview" },
              { label: "Placed"    },
            ];
            const isRejected = app.status === "Rejected";
            const activeIdx  = isRejected ? 2 : (stageOrder[app.status] ?? 0);

            return (
              <div
                key={app.jobId}
                className="group bg-white border border-slate-100 rounded-[2.5rem] p-6 md:p-8 flex flex-col gap-5 relative shadow-sm hover:shadow-md hover:border-slate-200/60 transition-all duration-300"
              >
                {/* ── Card Top Row: Logo + Title + Company ── */}
                <div className="flex gap-4 items-start">
                  {/* Geometric logo reusing job id */}
                  <div className="w-16 h-16 shrink-0 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center p-2 shadow-inner select-none">
                    <svg viewBox="0 0 100 100" className="w-9 h-9">
                      <defs>
                        <linearGradient id={`ag-${app.jobId}`} x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#0ca581" />
                          <stop offset="100%" stopColor="#0d9488" />
                        </linearGradient>
                      </defs>
                      <circle cx="50" cy="50" r="45" fill={`url(#ag-${app.jobId})`} />
                      <circle cx="50" cy="50" r="22" fill="#ffffff" />
                      <circle cx="50" cy="50" r="11" fill={`url(#ag-${app.jobId})`} />
                      <path d="M50 0 L50 100 M0 50 L100 50" stroke="#ffffff" strokeWidth="2" opacity="0.25" />
                    </svg>
                  </div>

                  <div className="flex-1 min-w-0">
                    <h3 className="font-open-sans text-lg md:text-xl font-bold text-slate-950 leading-tight group-hover:text-[#0ca581] transition-colors">
                      {job.title}
                    </h3>
                    <p className="text-xs md:text-sm text-slate-950 font-semibold mt-1 select-none">{job.company}</p>
                  </div>

                  {/* Status badge top-right */}
                  <span className={`shrink-0 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wide border select-none ${
                    app.status === "Placed"              ? "bg-emerald-50 text-emerald-700 border-emerald-200"
                    : app.status === "Interview Scheduled" ? "bg-blue-50 text-blue-700 border-blue-200"
                    : app.status === "Rejected"           ? "bg-red-50 text-red-700 border-red-200"
                    : "bg-amber-50 text-amber-700 border-amber-200"
                  }`}>{app.status}</span>
                </div>

                {/* ── Metadata Icons Row ── */}
                <div className="flex flex-wrap items-center gap-x-5 gap-y-3 border-t border-slate-50 pt-4 select-none">
                  {/* Salary */}
                  <div className="flex items-center gap-1.5 text-xs text-slate-950 font-bold">
                    <svg className="w-4 h-4 text-[#0ca581] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 002 2z" />
                    </svg>
                    <span>{job.salary}</span>
                  </div>
                  {/* Location */}
                  <div className="flex items-center gap-1.5 text-xs text-slate-950 font-bold">
                    <svg className="w-4 h-4 text-[#0ca581] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span>{job.location}</span>
                  </div>
                  {/* Job Type */}
                  <div className="flex items-center gap-1.5 text-xs text-slate-950 font-bold">
                    <svg className="w-4 h-4 text-[#0ca581] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>{job.jobType}</span>
                  </div>
                  {/* Applied date */}
                  <div className="flex items-center gap-1.5 text-xs text-slate-950 font-bold">
                    <svg className="w-4 h-4 text-[#0ca581] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span>Applied: {app.appliedAt}</span>
                  </div>
                </div>

                {/* ── Compact Stage Progress Tracker ── */}
                <div className="relative py-1">
                  {/* Track line */}
                  <div className="absolute top-[16px] left-[calc(12.5%+8px)] right-[calc(12.5%+8px)] h-[2px] bg-slate-100 rounded-full">
                    <div
                      className={`h-full rounded-full transition-all duration-500 ${isRejected ? "bg-red-300" : "bg-[#0ca581]"}`}
                      style={{ width: `${(activeIdx / 3) * 100}%` }}
                    />
                  </div>
                  {/* Stage nodes */}
                  <div className="grid grid-cols-4 gap-1 relative z-10">
                    {stages.map((s, idx) => {
                      const done     = idx < activeIdx;
                      const current  = idx === activeIdx;
                      const future   = idx > activeIdx;
                      const rejected = isRejected && idx === 2;
                      return (
                        <div key={s.label} className="flex flex-col items-center gap-1.5">
                          <div className={`relative w-7 h-7 rounded-full flex items-center justify-center border-2 transition-all duration-300
                            ${current && !rejected ? "bg-[#0ca581] border-[#0ca581] scale-110 shadow-md shadow-emerald-100" : ""}
                            ${done                ? "bg-[#edf5f3] border-[#0ca581]" : ""}
                            ${future              ? "bg-white border-slate-200" : ""}
                            ${rejected            ? "bg-red-50 border-red-400" : ""}
                          `}>
                            {done ? (
                              <svg className="w-3 h-3 text-[#0ca581]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                              </svg>
                            ) : rejected ? (
                              <svg className="w-3 h-3 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                              </svg>
                            ) : current ? (
                              <span className="w-2.5 h-2.5 rounded-full bg-white block" />
                            ) : (
                              <span className="w-2 h-2 rounded-full bg-slate-200 block" />
                            )}
                            {current && !rejected && (
                              <span className="absolute inset-0 rounded-full bg-[#0ca581]/20 animate-ping" />
                            )}
                          </div>
                          <p className={`text-[9px] font-bold leading-none text-center
                            ${current && !rejected ? "text-[#0ca581]" : ""}
                            ${done                ? "text-[#0ca581]/70" : ""}
                            ${future              ? "text-slate-300" : ""}
                            ${rejected            ? "text-red-500" : ""}
                          `}>
                            {rejected ? "Rejected" : s.label}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* ── Status message ── */}
                <div className="bg-slate-50 rounded-2xl px-5 py-3 border border-slate-100">
                  <p className="text-xs text-slate-950 leading-relaxed font-bold">
                    {app.status === "Placed"              ? "🎉 Congratulations! Our team will reach out with your onboarding details soon."
                      : app.status === "Interview Scheduled" ? "📅 Your interview is scheduled. We'll contact you via WhatsApp with timing and venue details."
                      : app.status === "Rejected"           ? "❌ Your profile was not shortlisted for this role. Don't give up — keep applying!"
                      : "🔍 Your application is under review by our team. We'll respond within 24–48 hours."}
                  </p>
                </div>

                {/* ── Admin controls ── */}
                <div className="absolute bottom-6 md:bottom-8 right-6 md:right-8 flex items-center gap-1.5 select-none">
                  <button onClick={() => handleModifyStatus(app.jobId, "Under Review")}
                    className="text-[9px] font-bold text-amber-700 bg-amber-100/70 hover:bg-amber-100 px-2.5 py-1.5 rounded-xl transition-colors cursor-pointer border border-amber-200/50">Review</button>
                  <button onClick={() => handleModifyStatus(app.jobId, "Interview Scheduled")}
                    className="text-[9px] font-bold text-blue-700 bg-blue-100/70 hover:bg-blue-100 px-2.5 py-1.5 rounded-xl transition-colors cursor-pointer border border-blue-200/50">Interview</button>
                  <button onClick={() => handleModifyStatus(app.jobId, "Placed")}
                    className="bg-[#0ca581] hover:bg-[#0a8769] text-white text-[9px] font-bold px-2.5 py-1.5 rounded-xl transition-all shadow-sm cursor-pointer">Placed</button>
                  <button onClick={() => handleModifyStatus(app.jobId, "Rejected")}
                    className="text-[9px] font-bold text-red-700 bg-red-100/70 hover:bg-red-100 px-2.5 py-1.5 rounded-xl transition-colors cursor-pointer border border-red-200/50">Reject</button>
                </div>

              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
