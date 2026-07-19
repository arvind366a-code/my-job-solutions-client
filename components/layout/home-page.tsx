"use client";

import React, { useState, useEffect, Suspense, useCallback } from "react";
import { useAuth, useClerk } from "@clerk/nextjs";
import { AppHeader } from "./app-header";
import {
  UserProfile,
  Application,
  JobOpening,
} from "./types";
import { HomeTab } from "./home-tab";
import { BrowseJobsTab } from "./browse-jobs-tab";
import { AppliedTab } from "./applied-tab";
import { RegisterTab } from "./register-tab";
import { ProfileTab } from "./profile-tab";
import { AboutUsTab } from "./about-us-tab";
import { ContactUsTab } from "./contact-us-tab";

export function HomePage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-white flex items-center justify-center font-extrabold text-slate-950">Loading MyJobSolution...</div>}>
      <HomePageClient />
    </Suspense>
  );
}

function HomePageClient() {
  const [activeTab, setActiveTabState] = useState<string>(() => {
    if (typeof window === "undefined") return "home";
    const params = new URLSearchParams(window.location.search);
    const tabParam = params.get("tab");
    return tabParam && ["home", "jobs", "applied", "about", "contact", "register", "profile"].includes(tabParam)
      ? tabParam
      : "home";
  });
  const { isLoaded, isSignedIn: clerkSignedIn } = useAuth();
  const { signOut } = useClerk();
  const isSignedIn = !!clerkSignedIn;
  const [jobs, setJobs] = useState<JobOpening[]>([]);
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  const [appliedJobs, setAppliedJobs] = useState<Application[]>([]);
  const [selectedJob, setSelectedJob] = useState<JobOpening | null>(null);
  const [reviewJob, setReviewJob] = useState<JobOpening | null>(null);
  const [reviewProfile, setReviewProfile] = useState<UserProfile | null>(null);

  const [searchTerm, setSearchTerm] = useState<string>("");
  const [filterLocation, setFilterLocation] = useState<string>("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedJobTypes, setSelectedJobTypes] = useState<string[]>([]);
  const [selectedExperienceLevels, setSelectedExperienceLevels] = useState<string[]>([]);
  const [selectedDatePosted, setSelectedDatePosted] = useState<string>("All");
  const [salaryRange, setSalaryRange] = useState<number>(100000);
  const [sortBy, setSortBy] = useState<string>("latest");
  const [jobsPage, setJobsPage] = useState<number>(1);
  const [aboutFaqOpen, setAboutFaqOpen] = useState<number | null>(0);

  const [tempResumeName, setTempResumeName] = useState<string>("");
  const [regForm, setRegForm] = useState({
    name: "",
    fatherName: "",
    mobile: "",
    altMobile: "",
    address: "",
    district: "",
    aadhaarLast4: "",
    qualification: "",
    experience: "",
    skills: "",
    interestedJob: "",
  });
  const [regFile, setRegFile] = useState<File | null>(null);
  const [regError, setRegError] = useState<string>("");
  const [regSuccess, setRegSuccess] = useState<boolean>(false);
  const [isSubmittingProfile, setIsSubmittingProfile] = useState(false);
  const [isSubmittingApplication, setIsSubmittingApplication] = useState(false);
  const [isSubmittingContact, setIsSubmittingContact] = useState(false);
  const [contactForm, setContactForm] = useState({
    name: "",
    mobile: "",
    email: "",
    location: "",
    message: "",
  });
  const [contactSuccess, setContactSuccess] = useState(false);

  const setActiveTab = (tab: string) => {
    setActiveTabState(tab);
    setSelectedJob(null);
    if (typeof window !== "undefined") {
      const url = new URL(window.location.href);
      url.searchParams.set("tab", tab);
      window.history.pushState({}, "", url.toString());
      window.scrollTo(0, 0);
    }
  };

  const mergeJobs = useCallback((incomingJobs: JobOpening[]) => {
    setJobs((currentJobs) => {
      const byId = new Map(currentJobs.map((job) => [job.id, job]));
      for (const job of incomingJobs) {
        byId.set(job.id, job);
      }
      return [...byId.values()];
    });
  }, []);

  const refreshApplications = useCallback(async () => {
    const response = await fetch("/api/applications");
    if (!response.ok) return;
    const data = (await response.json()) as {
      applications?: Application[];
      jobs?: JobOpening[];
    };
    setAppliedJobs(data.applications ?? []);
    mergeJobs(data.jobs ?? []);
  }, [mergeJobs]);

  useEffect(() => {
    let cancelled = false;

    async function loadJobs() {
      const response = await fetch("/api/jobs");
      if (!response.ok) return;
      const data = (await response.json()) as { jobs?: JobOpening[] };
      if (!cancelled) {
        setJobs(data.jobs ?? []);
      }
    }

    void loadJobs();
    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    if (!isLoaded) return;
    if (!isSignedIn) {
      window.setTimeout(() => {
        setUserProfile(null);
        setAppliedJobs([]);
      }, 0);
      return;
    }

    let cancelled = false;

    async function loadUserData() {
      const [profileResponse, applicationsResponse] = await Promise.all([
        fetch("/api/profile"),
        fetch("/api/applications"),
      ]);

      if (cancelled) return;

      if (profileResponse.ok) {
        const profileData = (await profileResponse.json()) as {
          profile?: UserProfile | null;
        };
        setUserProfile(profileData.profile ?? null);
        if (profileData.profile) {
          setRegForm({
            name: profileData.profile.name,
            fatherName: profileData.profile.fatherName,
            mobile: profileData.profile.mobile,
            altMobile: profileData.profile.altMobile ?? "",
            address: profileData.profile.address,
            district: profileData.profile.district,
            aadhaarLast4: profileData.profile.aadhaarLast4,
            qualification: profileData.profile.qualification,
            experience: profileData.profile.experience,
            skills: profileData.profile.skills,
            interestedJob: profileData.profile.interestedJob,
          });
        }
      }

      if (applicationsResponse.ok) {
        const applicationsData = (await applicationsResponse.json()) as {
          applications?: Application[];
          jobs?: JobOpening[];
        };
        setAppliedJobs(applicationsData.applications ?? []);
        mergeJobs(applicationsData.jobs ?? []);
      }
    }

    void loadUserData();
    return () => {
      cancelled = true;
    };
  }, [isLoaded, isSignedIn, mergeJobs]);

  const handleSignOutSession = () => {
    setUserProfile(null);
    setAppliedJobs([]);
    void signOut();
    setActiveTab("home");
  };

  const handleFormFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setRegFile(e.target.files[0]);
    }
  };

  const handleApplyAction = (job: JobOpening) => {
    if (!isSignedIn) {
      setRegForm({
        ...regForm,
        interestedJob: job.title,
      });
      setActiveTab("register");
      setSelectedJob(null);
      return;
    }

    if (!userProfile) {
      setRegForm((current) => ({
        ...current,
        interestedJob: job.title,
      }));
      setActiveTab("register");
      setSelectedJob(null);
      return;
    }

    if (appliedJobs.some((a) => a.jobId === job.id)) {
      return;
    }

    setReviewJob(job);
    setReviewProfile({ ...userProfile, interestedJob: job.title });
  };

  const submitReviewedApplication = async () => {
    if (!reviewJob || !reviewProfile) return;
    setIsSubmittingApplication(true);
    setRegError("");

    try {
      const activeResume = tempResumeName || reviewProfile.resumeName || "default_resume.pdf";
      const response = await fetch("/api/applications", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          roleId: reviewJob.id,
          profile: {
            ...reviewProfile,
            resumeName: activeResume,
          },
        }),
      });

      if (!response.ok) {
        const data = (await response.json()) as { error?: string };
        throw new Error(data.error ?? "Unable to submit application");
      }

      setUserProfile({ ...reviewProfile, resumeName: activeResume });
      await refreshApplications();
      setTempResumeName("");
      setReviewJob(null);
      setReviewProfile(null);
      setSelectedJob(null);
      setActiveTab("applied");
    } catch (error) {
      setRegError(error instanceof Error ? error.message : "Unable to submit application");
    } finally {
      setIsSubmittingApplication(false);
    }
  };

  const handleRegistrationSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setRegError("");
    setIsSubmittingProfile(true);

    const {
      name,
      fatherName,
      mobile,
      address,
      district,
      aadhaarLast4,
      qualification,
      experience,
      skills,
      interestedJob,
    } = regForm;

    if (
      !name ||
      !fatherName ||
      !mobile ||
      !address ||
      !district ||
      !aadhaarLast4 ||
      !qualification ||
      !experience ||
      !skills ||
      !interestedJob
    ) {
      setRegError("Please fill out all required fields marked with *");
      setIsSubmittingProfile(false);
      return;
    }

    if (!/^\d{10}$/.test(mobile)) {
      setRegError("Mobile Number must be exactly 10 digits");
      setIsSubmittingProfile(false);
      return;
    }

    if (!/^\d{4}$/.test(aadhaarLast4)) {
      setRegError("Aadhaar digits must be exactly 4 digits");
      setIsSubmittingProfile(false);
      return;
    }

    const createdProfile: UserProfile = {
      ...regForm,
      resumeName: regFile ? regFile.name : "my_resume.pdf",
    };

    try {
      const formData = new FormData();
      for (const [key, value] of Object.entries(regForm)) {
        formData.append(key, value);
      }
      formData.append("resumeName", createdProfile.resumeName);
      if (regFile) {
        formData.append("resume", regFile);
      }

      const response = await fetch("/api/profile", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        const data = (await response.json()) as { error?: string };
        throw new Error(data.error ?? "Unable to save profile");
      }

      const data = (await response.json()) as { profile?: UserProfile };
      setUserProfile(data.profile ?? createdProfile);
      setRegSuccess(true);
      setRegFile(null);
      await refreshApplications();
      setActiveTab("jobs");
      window.setTimeout(() => setRegSuccess(false), 2500);
    } catch (error) {
      setRegError(error instanceof Error ? error.message : "Unable to save profile");
    } finally {
      setIsSubmittingProfile(false);
    }
  };

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactForm.name || !contactForm.mobile || !contactForm.message) {
      alert("Please fill out your Name, Mobile, and Message.");
      return;
    }

    setIsSubmittingContact(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(contactForm),
      });

      if (!response.ok) {
        const data = (await response.json()) as { error?: string };
        throw new Error(data.error ?? "Unable to send message");
      }

      setContactSuccess(true);
      setContactForm({
        name: "",
        mobile: "",
        email: "",
        location: "",
        message: "",
      });
      window.setTimeout(() => setContactSuccess(false), 2500);
    } catch (error) {
      alert(error instanceof Error ? error.message : "Unable to send message");
    } finally {
      setIsSubmittingContact(false);
    }
  };

  return (
    <main className="min-h-screen bg-white font-open-sans text-slate-950 flex flex-col justify-between">
      {/* Dynamic Header */}
      <AppHeader
        isSignedIn={isSignedIn}
        userProfile={userProfile}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        appliedCount={appliedJobs.length}
        onSignOut={handleSignOutSession}
        onOpenRegister={() => {
          setRegError("");
          setActiveTab("register");
        }}
      />

      {/* ========================================================
          TABS AREA
          ======================================================== */}
      <div className="flex-grow animate-fade-in">
        
        {activeTab === "home" && (
          <HomeTab
            setSearchTerm={setSearchTerm}
            setFilterLocation={setFilterLocation}
            setActiveTab={setActiveTab}
          />
        )}

        {activeTab === "jobs" && (
          <BrowseJobsTab
            jobs={jobs}
            selectedJob={selectedJob}
            setSelectedJob={setSelectedJob}
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            filterLocation={filterLocation}
            setFilterLocation={setFilterLocation}
            selectedCategories={selectedCategories}
            setSelectedCategories={setSelectedCategories}
            selectedJobTypes={selectedJobTypes}
            setSelectedJobTypes={setSelectedJobTypes}
            selectedExperienceLevels={selectedExperienceLevels}
            setSelectedExperienceLevels={setSelectedExperienceLevels}
            selectedDatePosted={selectedDatePosted}
            setSelectedDatePosted={setSelectedDatePosted}
            salaryRange={salaryRange}
            setSalaryRange={setSalaryRange}
            sortBy={sortBy}
            setSortBy={setSortBy}
            jobsPage={jobsPage}
            setJobsPage={setJobsPage}
            handleApplyAction={handleApplyAction}
          />
        )}

        {activeTab === "applied" && (
          <AppliedTab
            isSignedIn={isSignedIn}
            appliedJobs={appliedJobs}
            jobs={jobs}
            setActiveTab={setActiveTab}
          />
        )}

        {activeTab === "register" && !isSignedIn && (
          <RegisterTab />
        )}

        {activeTab === "register" && isSignedIn && (
          <ProfileTab
            userProfile={userProfile}
            setActiveTab={setActiveTab}
            regForm={regForm}
            setRegForm={setRegForm}
            regError={regError}
            regSuccess={regSuccess}
            handleRegistrationSubmit={handleRegistrationSubmit}
            regFile={regFile}
            handleFormFileSelect={handleFormFileSelect}
            isSubmitting={isSubmittingProfile}
          />
        )}

        {activeTab === "about" && (
          <AboutUsTab
            aboutFaqOpen={aboutFaqOpen}
            setAboutFaqOpen={setAboutFaqOpen}
            setActiveTab={setActiveTab}
          />
        )}

        {activeTab === "contact" && (
          <ContactUsTab
            contactForm={contactForm}
            setContactForm={setContactForm}
            contactSuccess={contactSuccess}
            handleContactSubmit={handleContactSubmit}
            isSubmitting={isSubmittingContact}
          />
        )}
      </div>

      {/* ========================================================
          APPLICATION REVIEW MODAL
          ======================================================== */}
      {reviewJob && reviewProfile && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-6">
          <div
            onClick={() => {
              setReviewJob(null);
              setReviewProfile(null);
            }}
            className="absolute inset-0 bg-gray-900/60 backdrop-blur-sm transition-opacity duration-300 cursor-pointer"
          ></div>
          <div className="bg-white rounded-3xl w-full max-w-lg overflow-hidden shadow-2xl relative z-10 animate-fade-in flex flex-col max-h-full">
            <div className="px-6 py-5 border-b border-gray-100 flex items-center justify-between bg-gray-50/50">
              <h3 className="font-open-sans text-xl font-extrabold text-slate-950">Review Application</h3>
              <button
                onClick={() => {
                  setReviewJob(null);
                  setReviewProfile(null);
                }}
                className="w-8 h-8 flex items-center justify-center rounded-full bg-slate-100 hover:bg-slate-200 text-slate-950 transition-colors cursor-pointer"
              >
                ✕
              </button>
            </div>
            
            <div className="p-6 overflow-y-auto font-open-sans">
              <div className="mb-6 bg-purple-50 rounded-xl p-4 border border-purple-100">
                <p className="text-[10px] text-purple-600 uppercase tracking-wider font-bold mb-1">Applying for</p>
                <h4 className="font-open-sans text-lg font-extrabold text-slate-950">{reviewJob.title}</h4>
                <p className="text-xs text-purple-700 font-medium mt-0.5">{reviewJob.company}</p>
              </div>

              <h4 className="text-sm font-bold text-slate-950 mb-4">Confirm Registration Details</h4>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-[11px] font-bold text-slate-950 uppercase tracking-wider mb-1.5 ml-1">Full Name</label>
                  <input 
                    type="text" 
                    value={reviewProfile.name}
                    onChange={(e) => setReviewProfile({ ...reviewProfile, name: e.target.value })}
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm text-slate-950 focus:outline-none focus:border-[#0ca581] focus:ring-1 focus:ring-[#0ca581] transition-all"
                  />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-bold text-slate-950 uppercase tracking-wider mb-1.5 ml-1">Mobile Number</label>
                    <input 
                      type="text" 
                      value={reviewProfile.mobile}
                      onChange={(e) => setReviewProfile({ ...reviewProfile, mobile: e.target.value })}
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm text-slate-955 focus:outline-none focus:border-[#0ca581] focus:ring-1 focus:ring-[#0ca581] transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold text-slate-950 uppercase tracking-wider mb-1.5 ml-1">District</label>
                    <input 
                      type="text" 
                      value={reviewProfile.district}
                      onChange={(e) => setReviewProfile({ ...reviewProfile, district: e.target.value })}
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm text-slate-955 focus:outline-none focus:border-[#0ca581] focus:ring-1 focus:ring-[#0ca581] transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-slate-950 uppercase tracking-wider mb-1.5 ml-1">Resume / CV File Name</label>
                  <input 
                    type="text" 
                    value={reviewProfile.resumeName}
                    onChange={(e) => setReviewProfile({ ...reviewProfile, resumeName: e.target.value })}
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm text-slate-955 focus:outline-none focus:border-[#0ca581] focus:ring-1 focus:ring-[#0ca581] transition-all font-mono"
                  />
                  <p className="text-[10px] text-slate-950 mt-1.5 ml-1 font-bold">You can update the file name if you want to submit a differently named document.</p>
                </div>
              </div>
            </div>

            <div className="px-6 py-5 border-t border-gray-100 bg-gray-50/50 flex items-center justify-end gap-3 font-open-sans">
              <button
                onClick={() => {
                  setReviewJob(null);
                  setReviewProfile(null);
                }}
                className="px-5 py-2.5 rounded-xl text-xs font-bold text-slate-955 hover:text-black hover:bg-gray-200 transition-colors cursor-pointer"
              >
                Cancel
              </button>
              <button
                onClick={submitReviewedApplication}
                disabled={isSubmittingApplication}
                className="px-6 py-2.5 rounded-xl text-xs font-bold text-white bg-purple-600 hover:bg-purple-700 shadow-md hover:shadow-lg transition-all active:scale-95 cursor-pointer disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isSubmittingApplication ? "Submitting..." : "Confirm & Submit Application"}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================
          FOOTER AREA
          ======================================================== */}
      <footer className="bg-[#070b11] text-slate-300 select-none border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">

            {/* Company Branding & About */}
            <div className="md:col-span-4">
              <div
                onClick={() => setActiveTab("home")}
                className="flex items-center gap-3 cursor-pointer select-none mb-4"
              >
                <img
                  src="/MyJobSolution-removebg-preview.png"
                  alt="MyJobSolution"
                  className="h-10 w-auto"
                />
                <div>
                  <span className="text-white font-black text-lg leading-tight block">MyJobSolution</span>
                </div>
              </div>
              <p className="text-xs font-semibold text-[#0ca581] mb-3 italic">
                &ldquo;Connecting Talent With Opportunity&rdquo;
              </p>
              <p className="text-xs leading-relaxed text-slate-300 font-semibold mb-5">
                MyJobSolution is a growing recruitment and manpower consultancy company dedicated to helping job seekers find the right career opportunities and helping companies hire skilled candidates efficiently.
              </p>
              {/* Social Media Icons */}
              <div className="flex items-center gap-3">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-[#121824] border border-gray-700 flex items-center justify-center hover:bg-[#0ca581] hover:border-[#0ca581] transition-colors group">
                  <svg className="w-4 h-4 text-gray-400 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-[#121824] border border-gray-700 flex items-center justify-center hover:bg-[#0ca581] hover:border-[#0ca581] transition-colors group">
                  <svg className="w-4 h-4 text-gray-400 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-[#121824] border border-gray-700 flex items-center justify-center hover:bg-[#0ca581] hover:border-[#0ca581] transition-colors group">
                  <svg className="w-4 h-4 text-gray-400 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-[#121824] border border-gray-700 flex items-center justify-center hover:bg-[#0ca581] hover:border-[#0ca581] transition-colors group">
                  <svg className="w-4 h-4 text-gray-400 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                </a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-[#121824] border border-gray-700 flex items-center justify-center hover:bg-[#0ca581] hover:border-[#0ca581] transition-colors group">
                  <svg className="w-4 h-4 text-gray-400 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                </a>
                <a href="https://wa.me/919984433339" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-[#121824] border border-gray-700 flex items-center justify-center hover:bg-[#0ca581] hover:border-[#0ca581] transition-colors group">
                  <svg className="w-4 h-4 text-gray-400 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                </a>
                <a href="https://t.me/MyJobSolution" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-[#121824] border border-gray-700 flex items-center justify-center hover:bg-[#0ca581] hover:border-[#0ca581] transition-colors group">
                  <svg className="w-4 h-4 text-gray-400 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M11.944 0A12 12 0 000 12a12 12 0 0012 12 12 12 0 0012-12A12 12 0 0012 0a12 12 0 00-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 01.171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="md:col-span-2">
              <h4 className="font-open-sans font-bold text-sm text-white mb-4">Quick Links</h4>
              <ul className="space-y-2.5 text-xs font-semibold">
                <li>
                  <button onClick={() => setActiveTab("about")} className="hover:text-white transition-colors cursor-pointer">
                    About Us
                  </button>
                </li>
                <li>
                  <button onClick={() => setActiveTab("about")} className="hover:text-white transition-colors cursor-pointer">
                    Our Team
                  </button>
                </li>
                <li>
                  <button onClick={() => setActiveTab("about")} className="hover:text-white transition-colors cursor-pointer">
                    Services
                  </button>
                </li>
                <li>
                  <button onClick={() => setActiveTab("about")} className="hover:text-white transition-colors cursor-pointer">
                    Terms & Conditions
                  </button>
                </li>
                <li>
                  <button onClick={() => setActiveTab("about")} className="hover:text-white transition-colors cursor-pointer">
                    Privacy Policy
                  </button>
                </li>
              </ul>
            </div>

            {/* Our Services */}
            <div className="md:col-span-3">
              <h4 className="font-open-sans font-bold text-sm text-white mb-4">Our Services</h4>
              <ul className="space-y-2.5 text-xs font-semibold">
                {[
                  "Job Placement Services",
                  "Manpower Recruitment",
                  "Fresher Hiring",
                  "Experienced Hiring",
                  "Resume Support",
                  "Interview Guidance",
                ].map((item) => (
                  <li key={item}>
                    <button
                      onClick={() => {
                        setSearchTerm(item);
                        setFilterLocation("");
                        setActiveTab("jobs");
                      }}
                      className="hover:text-white transition-colors cursor-pointer text-left"
                    >
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="md:col-span-3">
              <h4 className="font-open-sans font-bold text-sm text-white mb-4">Contact Info</h4>
              <ul className="space-y-3 text-xs font-semibold">
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-[#0ca581] mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>MyJobSolution, Khalilabad, Sant Kabir Nagar, Uttar Pradesh, India</span>
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-[#0ca581] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <a href="tel:+919984433339" className="hover:text-white transition-colors">+91 9984433339</a>
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-[#0ca581] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <a href="mailto:myjobsolution@gmail.com" className="hover:text-white transition-colors break-all">myjobsolution@gmail.com</a>
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-[#0ca581] shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  <a href="https://wa.me/919984433339" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">+91 9984433339 (WhatsApp)</a>
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-[#0ca581] shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M11.944 0A12 12 0 000 12a12 12 0 0012 12 12 12 0 0012-12A12 12 0 0012 0a12 12 0 00-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 01.171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                  </svg>
                  <a href="https://t.me/MyJobSolution" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">@MyJobSolution</a>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-[#0ca581] mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Mon – Sat: 10:00 AM – 7:00 PM</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
