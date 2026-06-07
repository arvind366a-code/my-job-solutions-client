"use client";

import React from "react";
import { UserProfile } from "./types";

type ProfileFormState = Omit<UserProfile, "resumeName" | "altMobile"> & {
  altMobile: string;
};

interface ProfileTabProps {
  userProfile: UserProfile | null;
  setActiveTab: (tab: string) => void;
  regForm: ProfileFormState;
  setRegForm: React.Dispatch<React.SetStateAction<ProfileFormState>>;
  regError: string;
  regSuccess: boolean;
  handleRegistrationSubmit: (e: React.FormEvent) => void;
  regFile: File | null;
  handleFormFileSelect: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isSubmitting: boolean;
}

export function ProfileTab({
  userProfile,
  setActiveTab,
  regForm,
  setRegForm,
  regError,
  regSuccess,
  handleRegistrationSubmit,
  regFile,
  handleFormFileSelect,
  isSubmitting,
}: ProfileTabProps) {
  if (!userProfile) {
    return (
      <div className="w-full bg-[#fafbfc] min-h-screen font-open-sans">
        <div className="bg-gradient-to-r from-[#0ca581] to-[#098265] text-white py-16 px-6 text-center relative overflow-hidden select-none border-b border-[#076850]">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:3rem_3rem]" />
          <div className="relative z-10 max-w-4xl mx-auto">
            <div className="w-16 h-16 rounded-full bg-white/20 mx-auto mb-4 flex items-center justify-center text-2xl font-bold">👤</div>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight font-open-sans">
              Complete Your Profile
            </h1>
            <p className="text-white/80 mt-2 text-sm font-semibold">
              Fill in your details to start applying for jobs
            </p>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-6 py-12 animate-fade-in font-open-sans">
          <div className="bg-white border border-slate-100 rounded-3xl shadow-sm max-w-4xl mx-auto overflow-hidden">
            <div className="p-6 md:p-8 bg-white">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <form
                  onSubmit={handleRegistrationSubmit}
                  className="lg:col-span-2 flex flex-col gap-6"
                >
                  <div>
                    <h2 className="font-open-sans text-lg font-bold text-slate-950 mb-1 border-l-4 border-[#0ca581] pl-3">
                      Seeker Information Form
                    </h2>
                    <p className="text-xs text-slate-600 font-medium mt-1">
                      All fields marked with <span className="text-red-500 font-extrabold">*</span> are compulsory for review.
                    </p>
                  </div>

                  {regError && (
                    <div className="bg-red-50 border border-red-100 text-red-600 rounded-xl p-3 text-xs font-bold">
                      ⚠️ {regError}
                    </div>
                  )}

                  {regSuccess && (
                    <div className="bg-emerald-50 border border-emerald-100 text-emerald-700 rounded-xl p-3 text-xs font-bold">
                      Profile saved successfully.
                    </div>
                  )}

                  <div>
                    <h3 className="text-xs uppercase tracking-wider font-extrabold text-[#0ca581] border-b border-emerald-100/30 pb-2 mb-4">
                      Personal Details
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-slate-950 mb-1.5">Full Name <span className="text-red-500">*</span></label>
                        <input type="text" placeholder="Your complete name" value={regForm.name} onChange={(e) => setRegForm({ ...regForm, name: e.target.value })} className="w-full bg-white border border-slate-200 focus:border-[#0ca581] focus:ring-1 focus:ring-[#0ca581] focus:outline-none rounded-xl px-4 py-2.5 text-xs md:text-sm text-slate-700 font-medium transition-all placeholder-slate-400" />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-slate-950 mb-1.5">Father&apos;s Name <span className="text-red-500">*</span></label>
                        <input type="text" placeholder="Father's complete name" value={regForm.fatherName} onChange={(e) => setRegForm({ ...regForm, fatherName: e.target.value })} className="w-full bg-white border border-slate-200 focus:border-[#0ca581] focus:ring-1 focus:ring-[#0ca581] focus:outline-none rounded-xl px-4 py-2.5 text-xs md:text-sm text-slate-700 font-medium transition-all placeholder-slate-400" />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-slate-950 mb-1.5">Mobile Number <span className="text-red-500">*</span></label>
                        <input type="tel" maxLength={10} placeholder="10-digit mobile number" value={regForm.mobile} onChange={(e) => setRegForm({ ...regForm, mobile: e.target.value.replace(/\D/g, "") })} className="w-full bg-white border border-slate-200 focus:border-[#0ca581] focus:ring-1 focus:ring-[#0ca581] focus:outline-none rounded-xl px-4 py-2.5 text-xs md:text-sm text-slate-700 font-medium transition-all placeholder-slate-400" />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-slate-600 mb-1.5">Alternate Contact <span className="text-slate-600 font-normal">(Optional)</span></label>
                        <input type="tel" maxLength={10} placeholder="Backup contact number" value={regForm.altMobile} onChange={(e) => setRegForm({ ...regForm, altMobile: e.target.value.replace(/\D/g, "") })} className="w-full bg-white border border-slate-200 focus:border-[#0ca581] focus:ring-1 focus:ring-[#0ca581] focus:outline-none rounded-xl px-4 py-2.5 text-xs md:text-sm text-slate-700 font-medium transition-all placeholder-slate-400" />
                      </div>
                    </div>
                    <div className="mt-4">
                      <label className="block text-xs font-semibold text-slate-950 mb-1.5">Full Address <span className="text-red-500">*</span></label>
                      <textarea rows={2} placeholder="House no., Street, Colony, Landmark or Village" value={regForm.address} onChange={(e) => setRegForm({ ...regForm, address: e.target.value })} className="w-full bg-white border border-slate-200 focus:border-[#0ca581] focus:ring-1 focus:ring-[#0ca581] focus:outline-none rounded-xl px-4 py-2.5 text-xs md:text-sm text-slate-700 font-medium resize-none transition-all placeholder-slate-400" />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                      <div>
                        <label className="block text-xs font-semibold text-slate-950 mb-1.5">District Division <span className="text-red-500">*</span></label>
                        <select value={regForm.district} onChange={(e) => setRegForm({ ...regForm, district: e.target.value })} className="w-full bg-white border border-slate-200 focus:outline-none rounded-xl px-3 py-2.5 text-xs md:text-sm text-slate-700 font-medium transition-all cursor-pointer">
                          <option value="">Select district</option>
                          <option value="Kanpur Nagar">Kanpur Nagar</option>
                          <option value="Kanpur Dehat">Kanpur Dehat</option>
                          <option value="Lucknow">Lucknow</option>
                          <option value="Agra">Agra</option>
                          <option value="Varanasi">Varanasi</option>
                          <option value="Allahabad (Prayagraj)">Prayagraj (Allahabad)</option>
                          <option value="Unnao">Unnao</option>
                          <option value="Fatehpur">Fatehpur</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-slate-950 mb-1.5">Aadhaar Last 4 Digits <span className="text-red-500">*</span></label>
                        <input type="text" maxLength={4} placeholder="Last 4 digits only" value={regForm.aadhaarLast4} onChange={(e) => setRegForm({ ...regForm, aadhaarLast4: e.target.value.replace(/\D/g, "") })} className="w-full bg-white border border-slate-200 focus:border-[#0ca581] focus:ring-1 focus:ring-[#0ca581] focus:outline-none rounded-xl px-4 py-2.5 text-xs md:text-sm text-slate-700 font-medium transition-all placeholder-slate-400" />
                        <span className="text-[10px] text-slate-600 block mt-1 leading-tight font-medium">For verification checks. We store only these 4 digits.</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xs uppercase tracking-wider font-extrabold text-[#0ca581] border-b border-emerald-100/30 pb-2 mb-4">
                      Academic &amp; Professional Qualifications
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-slate-950 mb-1.5">Highest Qualification <span className="text-red-500">*</span></label>
                        <select value={regForm.qualification} onChange={(e) => setRegForm({ ...regForm, qualification: e.target.value })} className="w-full bg-white border border-slate-200 focus:outline-none rounded-xl px-3 py-2.5 text-xs md:text-sm text-slate-700 font-medium transition-all cursor-pointer">
                          <option value="">Select qualification</option>
                          <option value="10th Pass">10th Pass</option>
                          <option value="12th Pass">12th Pass</option>
                          <option value="Graduate">Graduate (B.A. / B.Sc. / B.Com etc.)</option>
                          <option value="ITI / Diploma">ITI / Diploma</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-slate-950 mb-1.5">Work Experience <span className="text-red-500">*</span></label>
                        <select value={regForm.experience} onChange={(e) => setRegForm({ ...regForm, experience: e.target.value })} className="w-full bg-white border border-slate-200 focus:outline-none rounded-xl px-3 py-2.5 text-xs md:text-sm text-slate-700 font-medium transition-all cursor-pointer">
                          <option value="">Select experience</option>
                          <option value="Fresher (No experience)">Fresher (No experience)</option>
                          <option value="Less than 1 year">Less than 1 year</option>
                          <option value="1–2 years">1–2 years</option>
                          <option value="2–5 years">2–5 years</option>
                          <option value="5+ years">5+ years</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-slate-950 mb-1.5">Top Skills / Expertise <span className="text-red-500">*</span></label>
                        <input type="text" placeholder="e.g. Tally, Excel, Driving, Computer, Sewing" value={regForm.skills} onChange={(e) => setRegForm({ ...regForm, skills: e.target.value })} className="w-full bg-white border border-slate-200 focus:border-[#0ca581] focus:ring-1 focus:ring-[#0ca581] focus:outline-none rounded-xl px-4 py-2.5 text-xs md:text-sm text-slate-700 font-medium transition-all placeholder-slate-400" />
                        <span className="text-[10px] text-slate-600 block mt-1 font-medium">Separate skills using standard commas.</span>
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-slate-950 mb-1.5">Interested Job Post <span className="text-red-500">*</span></label>
                        <input type="text" placeholder="e.g. Accountant, Sales, Driver, Receptionist" value={regForm.interestedJob} onChange={(e) => setRegForm({ ...regForm, interestedJob: e.target.value })} className="w-full bg-white border border-slate-200 focus:border-[#0ca581] focus:ring-1 focus:ring-[#0ca581] focus:outline-none rounded-xl px-4 py-2.5 text-xs md:text-sm text-slate-700 font-medium transition-all placeholder-slate-400" />
                        <span className="text-[10px] text-slate-600 block mt-1 font-medium">The target job role you want us to match you for.</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xs uppercase tracking-wider font-extrabold text-[#0ca581] border-b border-emerald-100/30 pb-2 mb-4">CV / Resume Attachment</h3>
                    <div className="border-2 border-dashed border-slate-200 hover:border-[#0ca581] bg-slate-50 hover:bg-[#F1F7F6]/30 rounded-2xl py-7 px-4 text-center cursor-pointer transition-all relative">
                      <input type="file" accept=".pdf,.doc,.docx" onChange={handleFormFileSelect} className="absolute inset-0 opacity-0 cursor-pointer w-full h-full" />
                      <span className="text-3xl block mb-2 select-none">📄</span>
                      <p className="text-xs font-medium text-slate-950 leading-snug">
                        {regFile ? (
                          <span className="text-[#0ca581]">Selected file: {regFile.name} ({(regFile.size / 1024).toFixed(1)} KB)</span>
                        ) : (
                          <span>Click here to upload your Resume or drag &amp; drop</span>
                        )}
                      </p>
                      <p className="text-[10px] text-slate-600 mt-1 font-medium">Accepts PDF, DOC, DOCX formats. Maximum limit: 2MB.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 bg-[#F1F7F6]/40 border border-emerald-100/30 rounded-xl p-4 select-none">
                    <input type="checkbox" id="consentCheck" className="mt-1 accent-[#0ca581] cursor-pointer w-4 h-4 rounded border-gray-300 text-[#0ca581] focus:ring-[#0ca581]" required />
                    <label htmlFor="consentCheck" className="text-[11px] leading-relaxed text-slate-600 cursor-pointer font-medium">
                      I agree to share my registration credentials with MyJobSolution and their verified company clients to facilitate recruitment. I confirm the details are true.
                    </label>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#0ca581] hover:bg-[#0a8769] text-white font-extrabold text-xs md:text-sm py-3.5 rounded-xl transition-all shadow-md active:scale-95 cursor-pointer mt-2 disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {isSubmitting ? "Saving Profile..." : "Activate Profile & Match Jobs"}
                  </button>
                </form>

                <div className="flex flex-col gap-6">
                  <div className="bg-[#F1F7F6]/60 border border-emerald-100/60 rounded-3xl p-6 shadow-sm">
                    <h3 className="font-open-sans text-sm font-semibold text-slate-600 border-b border-emerald-100/30 pb-2.5 mb-5 select-none">✅ Seeker Core Benefits</h3>
                    <ul className="flex flex-col gap-4">
                      <li className="flex items-start gap-3">
                        <span className="w-5 h-5 rounded-full bg-white border border-emerald-100/40 text-[#0ca581] flex items-center justify-center text-[10px] font-bold mt-0.5 shrink-0 select-none shadow-sm">✓</span>
                        <p className="text-xs leading-relaxed text-slate-600 font-medium"><strong>100% Free Placement:</strong> We never charge candidate fees before or after joining.</p>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-5 h-5 rounded-full bg-white border border-emerald-100/40 text-[#0ca581] flex items-center justify-center text-[10px] font-bold mt-0.5 shrink-0 select-none shadow-sm">✓</span>
                        <p className="text-xs leading-relaxed text-slate-600 font-medium"><strong>Vetted Listings:</strong> Avoid scams. Every company undergo strict verification reviews.</p>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-5 h-5 rounded-full bg-white border border-emerald-100/40 text-[#0ca581] flex items-center justify-center text-[10px] font-bold mt-0.5 shrink-0 select-none shadow-sm">✓</span>
                        <p className="text-xs leading-relaxed text-slate-600 font-medium"><strong>Local Placements:</strong> Placements in your nearby division matching expectations.</p>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-5 h-5 rounded-full bg-white border border-emerald-100/40 text-[#0ca581] flex items-center justify-center text-[10px] font-bold mt-0.5 shrink-0 select-none shadow-sm">✓</span>
                        <p className="text-xs leading-relaxed text-slate-600 font-medium"><strong>Active Support:</strong> Follow-ups at days 3, 7, and 15 post-joining to verify package conditions.</p>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-white border border-slate-100 rounded-3xl p-6 shadow-sm">
                    <h3 className="font-open-sans text-sm font-semibold text-slate-600 border-b border-slate-100/80 pb-2.5 mb-5 select-none">📋 Next Actions Sequence</h3>
                    <ul className="flex flex-col gap-4">
                      {["Submit this Seeker Form", "Placement managers analyze profiles", "Consultants coordinate suitable openings", "Interview briefing scheduled", "Attend, get placed, and start!"].map((step, idx) => (
                        <li key={idx} className="flex items-center gap-3">
                          <span className="w-6 h-6 rounded-full bg-[#F1F7F6] text-[#0ca581] font-bold text-xs flex items-center justify-center select-none shadow-sm shrink-0">{idx + 1}</span>
                          <span className="text-xs text-slate-600 font-medium">{step}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const details = [
    { label: "Full Name", value: userProfile.name },
    { label: "Father's Name", value: userProfile.fatherName },
    { label: "Mobile Number", value: userProfile.mobile },
    { label: "Alternate Contact", value: userProfile.altMobile || "—" },
    { label: "Full Address", value: userProfile.address },
    { label: "District", value: userProfile.district },
    { label: "Aadhaar (Last 4 Digits)", value: userProfile.aadhaarLast4 },
    { label: "Highest Qualification", value: userProfile.qualification },
    { label: "Work Experience", value: userProfile.experience },
    { label: "Top Skills", value: userProfile.skills },
    { label: "Interested Job Role", value: userProfile.interestedJob },
    { label: "Resume", value: userProfile.resumeName },
  ];

  return (
    <div className="w-full bg-[#fafbfc] min-h-screen font-open-sans">
      <div className="bg-gradient-to-r from-[#0ca581] to-[#098265] text-white py-16 px-6 text-center relative overflow-hidden select-none border-b border-[#076850]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:3rem_3rem]" />
        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="w-16 h-16 rounded-full bg-white/20 mx-auto mb-4 flex items-center justify-center text-2xl font-bold">
            {(userProfile.name || "JS").split(/\s+/).map(s => s[0]).join("").toUpperCase().slice(0, 2)}
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight font-open-sans">
            My Profile
          </h1>
          <p className="text-white/80 mt-2 text-sm font-semibold">
            Your registered details with MyJobSolution
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-12 animate-fade-in">
        <div className="bg-white border border-slate-100 rounded-3xl shadow-sm overflow-hidden">
          <div className="px-6 md:px-10 py-6 border-b border-slate-100 bg-slate-50/50 flex items-center justify-between">
            <h2 className="text-lg font-bold text-slate-950">Personal Information</h2>
            <span className="text-xs text-[#0ca581] font-semibold bg-emerald-50 px-3 py-1 rounded-full">
              Verified Seeker
            </span>
          </div>

          <div className="p-6 md:p-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
              {details.map((detail) => (
                <div key={detail.label}>
                  <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1.5">
                    {detail.label}
                  </label>
                  <p className="text-sm font-semibold text-slate-950 bg-slate-50 border border-slate-100 rounded-xl px-4 py-3">
                    {detail.value}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-10 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-xs text-slate-500 font-medium">
                Last updated: {new Date().toLocaleDateString()}
              </p>
              <div className="flex gap-3">
                <button
                  onClick={() => setActiveTab("jobs")}
                  className="bg-[#0ca581] hover:bg-[#0a8769] text-white font-bold text-sm px-6 py-3 rounded-xl transition-all cursor-pointer"
                >
                  Browse Jobs
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
