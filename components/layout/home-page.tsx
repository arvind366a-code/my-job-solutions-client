"use client";

import React, { useState, useEffect, Suspense } from "react";
import { AppHeader } from "./app-header";

// --- Profile & Application Interface Types ---
interface UserProfile {
  name: string;
  fatherName: string;
  mobile: string;
  altMobile?: string;
  address: string;
  district: string;
  aadhaarLast4: string;
  qualification: string;
  experience: string;
  skills: string;
  interestedJob: string;
  resumeName: string;
}

interface Application {
  jobId: string;
  appliedAt: string;
  status: "Under Review" | "Interview Scheduled" | "Placed" | "Rejected";
  resumeName: string;
}

interface JobOpening {
  id: string;
  title: string;
  company: string;
  location: string;
  salary: string;
  salaryLabel: string;
  jobType: string;
  experience: string;
  qualification: string;
  joining: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
  skills: string[];
  badge?: "featured" | "new" | "urgent" | "open";
}

// --- 8 Verified MyJobSolution Vacancies ---
const CAREER_BRIDGE_JOBS: JobOpening[] = [
  {
    id: "forward-security-director",
    title: "Forward Security Director",
    company: "Bauch, Schuppe and Schulist Co",
    location: "New-York, USA",
    salary: "$40000-$42000",
    salaryLabel: "per year",
    jobType: "Full time",
    experience: "Fresher / Experienced (0–3 Years)",
    qualification: "Graduate",
    joining: "Immediate",
    badge: "featured",
    skills: ["Security Operations", "Vigilance", "Team Coordination", "Safety Protocols"],
    description: "Responsibility for overseeing local security networks, ensuring access protocols, and directing threat mitigation teams at multiple client corporate facilities.",
    responsibilities: [
      "Supervise daily gate access security logs.",
      "Direct rapid response teams for perimeter alarms.",
      "Conduct safety drills and report weekly logs to district heads."
    ],
    requirements: [
      "Any Graduate with physical fitness.",
      "2+ years security experience preferred.",
      "Strong leadership and command fluency."
    ]
  },
  {
    id: "regional-creative-facilitator",
    title: "Regional Creative Facilitator",
    company: "Wiszack - Becker Co",
    location: "Los-Angeles, USA",
    salary: "$28000-$32000",
    salaryLabel: "per year",
    jobType: "Part time",
    experience: "Fresher (No experience)",
    qualification: "Graduate",
    joining: "Immediate",
    badge: "open",
    skills: ["Creative Design", "Concept Facilitation", "Adobe Suite", "Visual Communications"],
    description: "Support creative workshops, coordinate visual drafts, and facilitate regional client presentations for advertising briefs.",
    responsibilities: [
      "Organize asset libraries for design teams.",
      "Assist layout managers with draft iterations.",
      "Coordinate client meeting schedules."
    ],
    requirements: [
      "Graduate in Fine Arts or Graphic Design.",
      "Basic Figma and Illustrator knowledge.",
      "Portfolio of creative visual works."
    ]
  },
  {
    id: "internal-integration-planner",
    title: "Internal Integration Planner",
    company: "Mraz, Quigley and Feest Inc",
    location: "Texas, USA",
    salary: "$48000-$50000",
    salaryLabel: "per year",
    jobType: "Full time",
    experience: "Experienced (1–3 Years)",
    qualification: "Graduate",
    joining: "Within 7 Days",
    badge: "new",
    skills: ["Planning", "System Integration", "Operations", "Project Management"],
    description: "Plan and integrate internal departmental workflows to optimize production and resource allocation across regional branches.",
    responsibilities: [
      "Analyze workflow bottlenecks and propose automation tools.",
      "Conduct integration meetings across product divisions.",
      "Document project milestones and deliverables."
    ],
    requirements: [
      "Degree in Business Administration or Engineering.",
      "Strong project coordination experience.",
      "Excellent communication and mapping skills."
    ]
  },
  {
    id: "district-intranet-director",
    title: "District Intranet Director",
    company: "VonRueden - Weber Co",
    location: "Florida, USA",
    salary: "$42000-$48000",
    salaryLabel: "per year",
    jobType: "Full time",
    experience: "Experienced (2–5 Years)",
    qualification: "Graduate",
    joining: "Within 7 Days",
    badge: "new",
    skills: ["Network Security", "Intranet Administration", "Database Management"],
    description: "Direct the district intranet services, ensuring robust internal communications portals and database integrity.",
    responsibilities: [
      "Monitor internal server access logs.",
      "Direct firewall maintenance operations.",
      "Implement user credentials and access permissions."
    ],
    requirements: [
      "B.Tech/B.Sc in Computer Science or IT.",
      "Certifications in Cisco or Microsoft networking.",
      "Proven team leadership experience."
    ]
  },
  {
    id: "corporate-tactics-facilitator",
    title: "Corporate Tactics Facilitator",
    company: "Cormier, Turner and Flatley Inc",
    location: "Boston, USA",
    salary: "$38000-$40000",
    salaryLabel: "per year",
    jobType: "Full time",
    experience: "Fresher / Experienced (0–3 Years)",
    qualification: "Graduate",
    joining: "Immediate",
    badge: "featured",
    skills: ["Corporate Strategy", "Facilitation", "Analysis", "Data Review"],
    description: "Facilitate cross-departmental tactical syncs, review campaign metrics, and support administrative operations planning.",
    responsibilities: [
      "Compile performance data from departments.",
      "Design sync agendas and moderate weekly meetings.",
      "Track tactical goals against corporate indicators."
    ],
    requirements: [
      "Excellent presentation and analysis capabilities.",
      "Proficient in Microsoft Excel and presentation tools.",
      "Adaptable, professional demeanor."
    ]
  },
  {
    id: "forward-accounts-consultant",
    title: "Forward Accounts Consultant",
    company: "Miller Group",
    location: "Boston, USA",
    salary: "$45000-$48000",
    salaryLabel: "per year",
    jobType: "Full time",
    experience: "Experienced (1–3 Years)",
    qualification: "Graduate",
    joining: "Immediate",
    badge: "open",
    skills: ["Accounts Consultation", "Audit", "Tally", "Tax Filing"],
    description: "Provide strategic financial consulting, check accounts books, and support GST / corporate tax filing structures.",
    responsibilities: [
      "Audit accounts ledgers and double-entry files.",
      "Prepare tax returns and corporate compliance drafts.",
      "Consult management on cost reduction avenues."
    ],
    requirements: [
      "B.Com/M.Com or Professional Finance certification.",
      "Experience with standard accounting frameworks.",
      "High precision and analytical skills."
    ]
  },
  {
    id: "direct-operations-coordinator",
    title: "Direct Operations Coordinator",
    company: "Larkin - Nienow",
    location: "San-Francisco, USA",
    salary: "$35000-$38000",
    salaryLabel: "per year",
    jobType: "Full time",
    experience: "Fresher (No experience)",
    qualification: "Graduate",
    joining: "Immediate",
    badge: "open",
    skills: ["Operations", "Logistics Coordination", "Punctuality", "Office Tools"],
    description: "Coordinate supply chains, process delivery schedules, and manage administrative invoices for operational vendor units.",
    responsibilities: [
      "Verify shipping manifests against inventory registers.",
      "Liaise with local dispatch teams.",
      "Maintain delivery tracker logs."
    ],
    requirements: [
      "Graduate in any discipline.",
      "Basic math skills and data input efficiency.",
      "Energetic and detail-oriented approach."
    ]
  },
  {
    id: "national-quality-representative",
    title: "National Quality Representative",
    company: "Feest - Klocko",
    location: "Chicago, USA",
    salary: "$41000-$44000",
    salaryLabel: "per year",
    jobType: "Full time",
    experience: "Experienced (2–5 Years)",
    qualification: "ITI / Diploma",
    joining: "Immediate",
    badge: "new",
    skills: ["Quality Control", "Audit Checks", "Compliance", "Precision Testing"],
    description: "Establish and enforce strict quality check guidelines, inspect product batches, and prepare national certification reports.",
    responsibilities: [
      "Run standard tests on finished batch iterations.",
      "Log failure points and coordinate with assembly managers.",
      "Ensure adherence to national safety regulations."
    ],
    requirements: [
      "ITI/Diploma in Quality Systems or Industrial Production.",
      "2+ years experience in plant quality control operations.",
      "Eye for minor defects."
    ]
  },
  {
    id: "district-web-developer",
    title: "District Web Developer",
    company: "Parisian - Runolfsdottir",
    location: "Austin, USA",
    salary: "$55000-$60000",
    salaryLabel: "per year",
    jobType: "Full time",
    experience: "Fresher / Experienced (0–3 Years)",
    qualification: "Graduate",
    joining: "Immediate",
    badge: "open",
    skills: ["HTML/CSS/React", "Javascript", "Web Design", "Git Control"],
    description: "Develop responsive web portals, manage local client sites, and update technical contents for regional administrative databases.",
    responsibilities: [
      "Code clean, interactive landing pages.",
      "Maintain databases and resolve technical bugs.",
      "Optimize sites for high performance."
    ],
    requirements: [
      "Graduate or self-taught web developer with portfolio.",
      "Expertise in HTML5, CSS3, and modern Javascript.",
      "Basic familiarity with Next.js is preferred."
    ]
  },
  {
    id: "human-security-assistant",
    title: "Human Security Assistant",
    company: "Kling - Pacocha",
    location: "Denver, USA",
    salary: "$32000-$34000",
    salaryLabel: "per year",
    jobType: "Part time",
    experience: "Fresher (No experience)",
    qualification: "10th Pass",
    joining: "Immediate",
    badge: "urgent",
    skills: ["Facility Vigilance", "Access Logging", "Emergency Contacts"],
    description: "Monitor visitor exits/entries, patrol corporate complexes, and assist facilities staff in safety evacuations.",
    responsibilities: [
      "Patrol indoor corridors.",
      "Log identity proofs of incoming guests.",
      "Support standard front-desk safety measures."
    ],
    requirements: [
      "10th pass qualification.",
      "Alert, active, and disciplined nature.",
      "Polite communication with visitors."
    ]
  }
];

interface Testimonial {
  name: string;
  role: string;
  company: string;
  wage: string;
  text: string;
  district: string;
  avatar: string;
}

const REGIONAL_TESTIMONIALS: Record<string, Testimonial[]> = {
  all: [
    { name: "Sunil Rajput", role: "Sales Executive", company: "Sharma Enterprises", wage: "₹16,500/mo", text: "I completed my free MyJobSolution profile on Monday. Within 24 hours, their district coordinator matched me with Sharma Enterprises. After clearing the Wednesday interview, I joined on Friday! An absolutely amazing, direct, and completely free service.", district: "Kanpur Nagar", avatar: "SR" },
    { name: "Kajal Dwivedi", role: "Accounts Assistant", company: "Gupta & Co. Financials", wage: "₹19,000/mo", text: "Being a B.Com graduate, I struggled to find genuine accounting jobs. My counselor, Shalini, checked my details and prepped me for my Tally ledger rounds. I cleared Gupta & Co. in Lucknow easily. Not a single rupee was charged!", district: "Lucknow", avatar: "KD" },
    { name: "Aman Siddiqui", role: "Delivery Executive", company: "QuickMart Logistics", wage: "₹13,500/mo", text: "Immediate joining was my main priority. I uploaded my driving documents, and they matched me to a verified logistics role in Agra the next day. Transparent packages and no middleman deductions.", district: "Agra", avatar: "AS" },
    { name: "Ravi Dwivedi", role: "Warehouse Incharge", company: "Arora Textile Mills", wage: "₹22,000/mo", text: "They verified my ITI certificate and matched me to Arora Mills factory supervisor role in Kanpur. They even did follow-ups at days 3 and 15 post-joining to verify standard hours. Very reliable agency.", district: "Kanpur Nagar", avatar: "RD" }
  ],
  "Kanpur Nagar": [
    { name: "Sunil Rajput", role: "Sales Executive", company: "Sharma Enterprises", wage: "₹16,500/mo", text: "I completed my free MyJobSolution profile on Monday. Within 24 hours, their district coordinator matched me with Sharma Enterprises. After clearing the Wednesday interview, I joined on Friday! An absolutely amazing, direct, and completely free service.", district: "Kanpur Nagar", avatar: "SR" },
    { name: "Ravi Dwivedi", role: "Warehouse Incharge", company: "Arora Textile Mills", wage: "₹22,000/mo", text: "They verified my ITI certificate and matched me to Arora Mills factory supervisor role in Kanpur. They even did follow-ups at days 3 and 15 post-joining to verify standard hours. Very reliable agency.", district: "Kanpur Nagar", avatar: "RD" }
  ],
  Lucknow: [
    { name: "Kajal Dwivedi", role: "Accounts Assistant", company: "Gupta & Co. Financials", wage: "₹19,000/mo", text: "Being a B.Com graduate, I struggled to find genuine accounting jobs. My counselor, Shalini, checked my details and prepped me for my Tally ledger rounds. I cleared Gupta & Co. in Lucknow easily. Not a single rupee was charged!", district: "Lucknow", avatar: "KD" },
    { name: "Shalini Verma", role: "Office Assistant", company: "Raj Enterprises", wage: "₹10,000/mo", text: "Very straightforward platform. I registered and within 6 hours got matched to Raj Enterprises in Lucknow. Secured my office coordinator position smoothly. Recommended to all local job seekers!", district: "Lucknow", avatar: "SV" }
  ],
  Agra: [
    { name: "Aman Siddiqui", role: "Delivery Executive", company: "QuickMart Logistics", wage: "₹13,500/mo", text: "Immediate joining was my main priority. I uploaded my driving documents, and they matched me to a verified logistics role in Agra the next day. Transparent packages and no middleman deductions.", district: "Agra", avatar: "AS" },
    { name: "Vikram Tomar", role: "Back Office Exec", company: "TechServe Solutions", wage: "₹12,000/mo", text: "Highly transparent process. TechServe Solutions in Agra had immediate requirements. Checked my typing speed test on MyJobSolution. Placed smoothly in back office.", district: "Agra", avatar: "VT" }
  ]
};

export function HomePage({}: { isSignedIn?: boolean }) {
  return (
    <Suspense fallback={<div className="min-h-screen bg-white flex items-center justify-center font-bold text-gray-500">Loading MyJobSolution...</div>}>
      <HomePageClient />
    </Suspense>
  );
}

function HomePageClient() {
  // --- Client Stateful Variables ---
  const [activeTab, setActiveTabState] = useState<string>("home");
  const [isSignedIn, setIsSignedIn] = useState<boolean>(false);
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  const [appliedJobs, setAppliedJobs] = useState<Application[]>([]);
  const [selectedJob, setSelectedJob] = useState<JobOpening | null>(null);
  const [reviewJob, setReviewJob] = useState<JobOpening | null>(null);
  const [reviewProfile, setReviewProfile] = useState<UserProfile | null>(null);

  // Authentication Switch (Login vs Signup)
  const [authMode, setAuthMode] = useState<"login" | "signup">("signup");
  
  // Registered Seeker local database
  const [registeredProfiles, setRegisteredProfiles] = useState<UserProfile[]>([]);

  // Browse Jobs filtering states
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [filterLocation, setFilterLocation] = useState<string>("");
  const [filterType, setFilterType] = useState<string>("");
  const [filterQual, setFilterQual] = useState<string>("");

  // Advanced Jobs Page Redesign filters
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedJobTypes, setSelectedJobTypes] = useState<string[]>([]);
  const [selectedExperienceLevels, setSelectedExperienceLevels] = useState<string[]>([]);
  const [selectedDatePosted, setSelectedDatePosted] = useState<string>("All");
  const [salaryRange, setSalaryRange] = useState<number>(99999);
  const [sortBy, setSortBy] = useState<string>("latest");
  const [jobsPage, setJobsPage] = useState<number>(1);
  const [aboutFaqOpen, setAboutFaqOpen] = useState<number | null>(0);


  // Temporary Resume swap on Applying
  const [tempResumeName, setTempResumeName] = useState<string>("");

  // Login Form States
  const [loginMobile, setLoginMobile] = useState<string>("");
  const [loginPassword, setLoginPassword] = useState<string>("");
  const [loginError, setLoginError] = useState<string>("");
  const [loginSuccess, setLoginSuccess] = useState<boolean>(false);

  // Signup Registration Form States
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

  // Contact Form State
  const [contactForm, setContactForm] = useState({
    name: "",
    mobile: "",
    email: "",
    location: "",
    message: "",
  });
  const [contactSuccess, setContactSuccess] = useState(false);

  // Simple Centered Search input
  const [homeSearchQuery, setHomeSearchQuery] = useState("");
  const [homeSearchLocation, setHomeSearchLocation] = useState("");
  const [homeSearchCategory, setHomeSearchCategory] = useState("");

  // Testimonial District Filter State
  const [testimonialDistrict, setTestimonialDistrict] = useState<string>("all");

  // Quiety Redesign Interactive States
  const [expandedFaqIndex, setExpandedFaqIndex] = useState<number | null>(0);
  const [talentActiveTab, setTalentActiveTab] = useState<"developer" | "designer" | "manager">("developer");
  const [reviewActiveIndex, setReviewActiveIndex] = useState<number>(0);


  // Sync state with URL Query parameters (e.g. ?tab=jobs)
  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const tabParam = params.get("tab");
      if (tabParam && ["home", "jobs", "applied", "about", "contact", "register"].includes(tabParam)) {
        setActiveTabState(tabParam);
      }
    }
  }, []);

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

  // Initialize and Sync profiles list on mount
  useEffect(() => {
    const cachedAuth = localStorage.getItem("cb_is_signed_in");
    const cachedProfile = localStorage.getItem("cb_user_profile");
    const cachedProfilesList = localStorage.getItem("cb_registered_profiles");

    let activeProfiles: UserProfile[] = [];
    if (cachedProfilesList) {
      activeProfiles = JSON.parse(cachedProfilesList);
    } else {
      const defaultDemoProfile: UserProfile = {
        name: "Ankit Verma",
        fatherName: "Rajesh Verma",
        mobile: "9876543210",
        altMobile: "8765432109",
        address: "12, Civil Lines, Kanpur Nagar",
        district: "Kanpur Nagar",
        aadhaarLast4: "4321",
        qualification: "Graduate",
        experience: "1–2 years",
        skills: "Tally, Excel, Typing",
        interestedJob: "Accountant",
        resumeName: "ankit_verma_resume.pdf",
      };
      activeProfiles = [defaultDemoProfile];
      localStorage.setItem("cb_registered_profiles", JSON.stringify(activeProfiles));

      const sampleApplications: Application[] = [
        {
          jobId: "forward-security-director",
          appliedAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 2).toLocaleDateString(),
          status: "Interview Scheduled",
          resumeName: "ankit_verma_resume.pdf",
        }
      ];
      localStorage.setItem("cb_applied_jobs_9876543210", JSON.stringify(sampleApplications));
    }
    setRegisteredProfiles(activeProfiles);

    if (cachedAuth === "true" && cachedProfile) {
      const parsedProfile = JSON.parse(cachedProfile) as UserProfile;
      setIsSignedIn(true);
      setUserProfile(parsedProfile);

      const userApplied = localStorage.getItem(`cb_applied_jobs_${parsedProfile.mobile}`);
      if (userApplied) {
        setAppliedJobs(JSON.parse(userApplied));
      } else {
        setAppliedJobs([]);
      }
    }
  }, []);

  // Login Session Handlers
  const handleSignInSession = (profile: UserProfile) => {
    localStorage.setItem("cb_is_signed_in", "true");
    localStorage.setItem("cb_user_profile", JSON.stringify(profile));
    setIsSignedIn(true);
    setUserProfile(profile);

    const userApplied = localStorage.getItem(`cb_applied_jobs_${profile.mobile}`);
    if (userApplied) {
      setAppliedJobs(JSON.parse(userApplied));
    } else {
      setAppliedJobs([]);
    }
  };

  const handleSignOutSession = () => {
    localStorage.removeItem("cb_is_signed_in");
    localStorage.removeItem("cb_user_profile");
    setIsSignedIn(false);
    setUserProfile(null);
    setAppliedJobs([]);
    setLoginMobile("");
    setLoginPassword("");
    setActiveTab("home");
  };

  // --- Real-time Filter Handlers ---
  const getJobCategory = (jobId: string) => {
    switch (jobId) {
      case "forward-security-director":
        return "Hotels & Tourism";
      case "district-web-developer":
      case "district-intranet-director":
        return "Telecommunications";
      case "national-quality-representative":
      case "human-security-assistant":
        return "Education";
      case "forward-accounts-consultant":
        return "Financial Services";
      default:
        return "Commerce";
    }
  };

  const getJobExperienceMockup = (jobId: string) => {
    switch (jobId) {
      case "national-quality-representative":
      case "district-intranet-director":
        return "Expert";
      case "internal-integration-planner":
      case "forward-accounts-consultant":
        return "Intermediate";
      case "forward-security-director":
      case "corporate-tactics-facilitator":
      case "district-web-developer":
        return "Fresher";
      default:
        return "No-experience";
    }
  };

  const getJobMaxSalaryNum = (salaryStr: string) => {
    const clean = salaryStr.replace(/[^0-9-]/g, "");
    const parts = clean.split("-");
    if (parts.length > 1) {
      return parseInt(parts[1], 10);
    }
    return parseInt(parts[0], 10) || 0;
  };

  const getJobMinSalaryNum = (salaryStr: string) => {
    const clean = salaryStr.replace(/[^0-9-]/g, "");
    const parts = clean.split("-");
    return parseInt(parts[0], 10) || 0;
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

  const handleFormFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setRegFile(e.target.files[0]);
    }
  };

  // --- Seeker Applying Submission Action ---
  const handleApplyAction = (job: JobOpening) => {
    if (!isSignedIn) {
      setRegForm({
        ...regForm,
        interestedJob: job.title,
      });
      setAuthMode("signup");
      setActiveTab("register");
      setSelectedJob(null);
      return;
    }

    if (appliedJobs.some((a) => a.jobId === job.id)) {
      return;
    }

    setReviewJob(job);
    if (userProfile) {
      setReviewProfile({ ...userProfile });
    }
  };

  const submitReviewedApplication = () => {
    if (!reviewJob || !reviewProfile) return;

    setUserProfile(reviewProfile);
    
    const updatedProfiles = registeredProfiles.map(p => 
      p.mobile === reviewProfile.mobile ? reviewProfile : p
    );
    setRegisteredProfiles(updatedProfiles);
    localStorage.setItem("cb_registered_profiles", JSON.stringify(updatedProfiles));
    localStorage.setItem("cb_active_profile", JSON.stringify(reviewProfile));

    const activeResume = tempResumeName || reviewProfile.resumeName || "default_resume.pdf";
    
    const newApplication: Application = {
      jobId: reviewJob.id,
      appliedAt: new Date().toLocaleDateString(),
      status: "Under Review",
      resumeName: activeResume,
    };

    const updated = [newApplication, ...appliedJobs];
    setAppliedJobs(updated);
    
    localStorage.setItem(`cb_applied_jobs_${reviewProfile.mobile}`, JSON.stringify(updated));

    setTempResumeName("");
    setReviewJob(null);
    setReviewProfile(null);
    setSelectedJob(null);
    setActiveTab("applied");
  };

  // --- Centered Search Execution ---
  const handleHomeSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setSearchTerm(homeSearchQuery);
    setFilterLocation("");
    setFilterType("");
    setFilterQual("");
    setActiveTab("jobs");
  };

  // --- Quick Suggestion Click ---
  const handleQuickSearch = (keyword: string) => {
    setSearchTerm(keyword);
    setFilterLocation("");
    setFilterType("");
    setFilterQual("");
    setActiveTab("jobs");
  };

  // --- Candidate Login Submission ---
  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError("");

    if (!loginMobile) {
      setLoginError("Please enter your registered Mobile Number.");
      return;
    }

    if (!/^\d{10}$/.test(loginMobile)) {
      setLoginError("Mobile Number must be exactly 10 digits.");
      return;
    }

    const matchedProfile = registeredProfiles.find((p) => p.mobile === loginMobile);
    if (!matchedProfile) {
      setLoginError("Account not found. Please click 'New Seeker Registration' to register free!");
      return;
    }

    setLoginSuccess(true);
    setTimeout(() => {
      setLoginSuccess(false);
      handleSignInSession(matchedProfile);
      setLoginMobile("");
      setLoginPassword("");
      setActiveTab("jobs");
    }, 1800);
  };

  // --- Candidate Registration / Signup Submission ---
  const handleRegistrationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setRegError("");

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
      return;
    }

    if (!/^\d{10}$/.test(mobile)) {
      setRegError("Mobile Number must be exactly 10 digits");
      return;
    }

    if (!/^\d{4}$/.test(aadhaarLast4)) {
      setRegError("Aadhaar digits must be exactly 4 digits");
      return;
    }

    if (registeredProfiles.some((p) => p.mobile === mobile)) {
      setRegError("This Mobile Number is already registered! Please select 'Sign In / Login'.");
      return;
    }

    const createdProfile: UserProfile = {
      ...regForm,
      resumeName: regFile ? regFile.name : "my_resume.pdf",
    };

    const updatedProfilesList = [...registeredProfiles, createdProfile];
    setRegisteredProfiles(updatedProfilesList);
    localStorage.setItem("cb_registered_profiles", JSON.stringify(updatedProfilesList));

    handleSignInSession(createdProfile);
    setRegSuccess(true);

    setTimeout(() => {
      setRegSuccess(false);
      setRegForm({
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
      setRegFile(null);
      setActiveTab("jobs");
    }, 2000);
  };

  // Inquiry message submit
  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactForm.name || !contactForm.mobile || !contactForm.message) {
      alert("Please fill out your Name, Mobile, and Message.");
      return;
    }
    setContactSuccess(true);
    setTimeout(() => {
      setContactSuccess(false);
      setContactForm({
        name: "",
        mobile: "",
        email: "",
        location: "",
        message: "",
      });
    }, 2500);
  };

  // Developer status modifier
  const handleModifyStatus = (jobId: string, status: Application["status"]) => {
    const updated = appliedJobs.map((app) => {
      if (app.jobId === jobId) {
        return { ...app, status };
      }
      return app;
    });
    setAppliedJobs(updated);
    if (userProfile) {
      localStorage.setItem(`cb_applied_jobs_${userProfile.mobile}`, JSON.stringify(updated));
    }
  };

  return (
    <main className="min-h-screen bg-white font-open-sans text-gray-900 flex flex-col justify-between">
      {/* Dynamic Header */}
      <AppHeader
        isSignedIn={isSignedIn}
        userProfile={userProfile}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        appliedCount={appliedJobs.length}
        onSignOut={handleSignOutSession}
        onOpenLogin={() => {
          setAuthMode("login");
          setLoginError("");
          setActiveTab("register");
        }}
        onOpenSignup={() => {
          setAuthMode("signup");
          setRegError("");
          setActiveTab("register");
        }}
      />

      {/* ========================================================
          TABS AREA
          ======================================================== */}
      <div className="flex-grow animate-fade-in">
        
        {activeTab === "home" && (
          <div className="relative overflow-hidden bg-white text-[#0D1F3C]">
            
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
                      className="w-full bg-transparent text-sm font-semibold outline-none text-gray-900 placeholder-gray-405"
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
                      className="w-full bg-transparent text-sm font-semibold text-gray-800 outline-none cursor-pointer"
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
                      className="w-full bg-transparent text-sm font-semibold text-gray-800 outline-none cursor-pointer"
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
                      setFilterQual(homeSearchCategory);
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
                      <p className="text-[10px] text-gray-400 font-extrabold uppercase tracking-wider">Jobs</p>
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
                      <p className="text-[10px] text-gray-400 font-extrabold uppercase tracking-wider">Candidates</p>
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
                      <p className="text-[10px] text-gray-400 font-extrabold uppercase tracking-wider">Companies</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* 2. BRAND LOGOS STRIP */}
            <section className="bg-[#090d14] py-8 select-none border-y border-gray-800">
              <div className="max-w-7xl mx-auto px-6 flex flex-wrap items-center justify-center gap-12 md:gap-24">
                {/* Spotify */}
                <div className="flex items-center gap-2 text-white font-extrabold text-lg opacity-85 hover:opacity-100 transition-opacity">
                  <svg className="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm4.586 14.424c-.18.295-.565.387-.86.207-2.377-1.454-5.37-1.783-8.893-.982-.336.076-.67-.135-.746-.47-.077-.337.135-.67.472-.747 3.847-.878 7.143-.5 9.82 1.14.296.18.387.563.207.86zm1.226-2.723c-.227.367-.707.487-1.074.26-2.72-1.672-6.87-2.157-10.08-1.182-.413.125-.847-.107-.972-.52-.125-.413.107-.847.52-.972 3.676-1.116 8.243-.574 11.347 1.33.368.228.488.708.26 1.075zm.106-2.833C14.492 8.892 8.7 8.7 5.354 9.716c-.512.155-1.046-.134-1.202-.647-.155-.513.135-1.047.647-1.202 3.856-1.17 10.23-.953 14.218 1.413.46.273.61.87.337 1.33-.273.46-.87.61-1.33.337z"/>
                  </svg>
                  <span>Spotify</span>
                </div>
                {/* Slack */}
                <div className="flex items-center gap-2 text-white font-extrabold text-lg opacity-85 hover:opacity-100 transition-opacity">
                  <svg className="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523 2.528 2.528 0 0 1-2.522-2.523 2.528 2.528 0 0 1 2.522-2.52h2.52v2.52zm1.261 0a2.528 2.528 0 0 1 2.52-2.52h5.043a2.528 2.528 0 0 1 2.522 2.52v5.042a2.528 2.528 0 0 1-2.522 2.52H8.823a2.528 2.528 0 0 1-2.52-2.52v-5.042zM8.823 5.043a2.528 2.528 0 0 1-2.52-2.52A2.528 2.528 0 0 1 8.823 0a2.528 2.528 0 0 1 2.52 2.52v2.52h-2.52zm0 1.261a2.528 2.528 0 0 1 2.52 2.52v5.043a2.528 2.528 0 0 1-2.52 2.522H3.78a2.528 2.528 0 0 1-2.52-2.522V8.824a2.528 2.528 0 0 1 2.52-2.52h5.043zm10.135 3.78a2.528 2.528 0 0 1 2.52-2.52 2.528 2.528 0 0 1 2.522 2.52 2.528 2.528 0 0 1-2.522 2.52h-2.52v-2.52zm-1.262 0a2.528 2.528 0 0 1-2.52 2.52h-5.043a2.528 2.528 0 0 1-2.522-2.52V3.78a2.528 2.528 0 0 1 2.522-2.52h5.043a2.528 2.528 0 0 1 2.52 2.52v5.043zm-3.78 10.135a2.528 2.528 0 0 1 2.52 2.52 2.528 2.528 0 0 1-2.52-2.522 2.528 2.528 0 0 1-2.522-2.522v-2.52h2.522zm0-1.262a2.528 2.528 0 0 1-2.522-2.52v-5.043a2.528 2.528 0 0 1 2.522-2.52h5.043a2.528 2.528 0 0 1 2.52 2.52v5.043h-5.043z"/>
                  </svg>
                  <span>slack</span>
                </div>
                {/* Adobe */}
                <div className="flex items-center gap-2 text-white font-extrabold text-lg opacity-85 hover:opacity-100 transition-opacity">
                  <svg className="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M13.966 22.624h6.12L12.562 2.007h-4.91L.126 22.624h6.12l2.45-6.134h5.27zm-4.14-10.228l1.656-4.14 1.656 4.14z"/>
                  </svg>
                  <span>Adobe</span>
                </div>
                {/* Asana */}
                <div className="flex items-center gap-2 text-white font-extrabold text-lg opacity-85 hover:opacity-100 transition-opacity">
                  <svg className="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <circle cx="12" cy="7" r="2.5" />
                    <circle cx="7.5" cy="15" r="2.5" />
                    <circle cx="16.5" cy="15" r="2.5" />
                  </svg>
                  <span>asana</span>
                </div>
                {/* Linear */}
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
                <h2 className="text-3xl sm:text-4xl font-black text-[#0D1F3C] tracking-tight mb-2">
                  Browse by Category
                </h2>
                <p className="text-sm md:text-base text-gray-500 max-w-2xl mx-auto mb-16 font-semibold">
                  Choose from a wide variety of industries and find the job that fits your skills and experience.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {/* Category cards */}
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
                        setFilterQual("");
                        setActiveTab("jobs");
                      }}
                      className="bg-white border border-gray-100 rounded-2xl p-8 flex flex-col items-center justify-center gap-4 cursor-pointer hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
                    >
                      <div className="w-16 h-16 rounded-full bg-emerald-50 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        {cat.icon}
                      </div>
                      <h3 className="font-open-sans text-lg font-bold text-[#0D1F3C]">{cat.name}</h3>
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
                  <h2 className="text-3xl sm:text-4.5xl font-black text-[#0D1F3C] leading-tight mb-6">
                    Good Life Begins With<br />A Good Company
                  </h2>
                  <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-8 font-medium">
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
                      className="text-gray-505 hover:text-[#0ca581] font-bold text-sm ml-6 hover:underline flex items-center gap-1 cursor-pointer"
                    >
                      Learn More ➔
                    </button>
                  </div>

                  {/* Stats columns */}
                  <div className="grid grid-cols-3 gap-6 w-full border-t border-gray-150 pt-8">
                    <div>
                      <p className="text-3xl font-black text-[#0ca581] tracking-tight">12k+</p>
                      <p className="text-xs text-gray-400 font-bold uppercase mt-1 tracking-wider">Clients worldwide</p>
                      <p className="text-[10px] text-gray-400 mt-0.5 font-semibold">Active businesses matching weekly</p>
                    </div>
                    <div>
                      <p className="text-3xl font-black text-[#0ca581] tracking-tight">20k+</p>
                      <p className="text-xs text-gray-400 font-bold uppercase mt-1 tracking-wider">Active resumes</p>
                      <p className="text-[10px] text-gray-400 mt-0.5 font-semibold">Vetted profiles on stand-by</p>
                    </div>
                    <div>
                      <p className="text-3xl font-black text-[#0ca581] tracking-tight">18k+</p>
                      <p className="text-xs text-gray-400 font-bold uppercase mt-1 tracking-wider">Companies</p>
                      <p className="text-[10px] text-gray-400 mt-0.5 font-semibold">Hub cooperating coordinates</p>
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
                    <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-8 max-w-xl font-medium">
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
                <h2 className="text-3xl sm:text-4xl font-black text-[#0D1F3C] tracking-tight mb-2">
                  Testimonials from Our Customers
                </h2>
                <p className="text-sm md:text-base text-gray-500 max-w-2xl mx-auto mb-16 font-semibold">
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
                      <h4 className="text-base font-extrabold text-[#0D1F3C] mb-2">Amazing services</h4>
                      <p className="text-gray-500 text-xs md:text-sm leading-relaxed mb-8 font-semibold">
                        "I completed my profile and coordinators immediately matched me with Sharma Enterprises in Kanpur. Very transparent packages and direct support, charging absolutely nothing."
                      </p>
                    </div>
                    <div className="flex items-center justify-between border-t border-gray-50 pt-6">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-emerald-500 text-white font-extrabold flex items-center justify-center text-xs shadow">
                          AV
                        </div>
                        <div>
                          <h5 className="text-xs font-black text-[#0D1F3C]">Ankit Verma</h5>
                          <p className="text-[10px] text-gray-400 font-bold uppercase mt-0.5">Placed Seeker</p>
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
                      <h4 className="text-base font-extrabold text-[#0D1F3C] mb-2">Everything simple</h4>
                      <p className="text-gray-500 text-xs md:text-sm leading-relaxed mb-8 font-semibold">
                        "Being a graduate, I struggled to find genuine accounting jobs. Shalini checked my details and matching was instant. Highly recommended to all local job seekers."
                      </p>
                    </div>
                    <div className="flex items-center justify-between border-t border-gray-50 pt-6">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-emerald-600 text-white font-extrabold flex items-center justify-center text-xs shadow">
                          KD
                        </div>
                        <div>
                          <h5 className="text-xs font-black text-[#0D1F3C]">Kajal Dwivedi</h5>
                          <p className="text-[10px] text-gray-400 font-bold uppercase mt-0.5">Placed Seeker</p>
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
                      <h4 className="text-base font-extrabold text-[#0D1F3C] mb-2">Awesome, thank you!</h4>
                      <p className="text-gray-500 text-xs md:text-sm leading-relaxed mb-8 font-semibold">
                        "Direct coordination was my main priority. I uploaded my driving documentation and matched to QuickMart Logistics the next day. Zero middleman deductions."
                      </p>
                    </div>
                    <div className="flex items-center justify-between border-t border-gray-50 pt-6">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-teal-600 text-white font-extrabold flex items-center justify-center text-xs shadow">
                          SR
                        </div>
                        <div>
                          <h5 className="text-xs font-black text-[#0D1F3C]">Sunil Rajput</h5>
                          <p className="text-[10px] text-gray-400 font-bold uppercase mt-0.5">Placed Seeker</p>
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
                    <h2 className="text-2xl sm:text-3xl font-black text-[#0D1F3C] tracking-tight mb-2">
                      News and Blog
                    </h2>
                    <p className="text-xs sm:text-sm text-gray-550 font-semibold">
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
                  {/* Blog Card 1 */}
                  <div className="group cursor-pointer">
                    <div className="aspect-[16/10] overflow-hidden rounded-2xl mb-4 shadow-sm border border-gray-100">
                      <img 
                        src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=85&w=800" 
                        alt="Workplace Engagement"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="flex items-center gap-3 text-[11px] text-gray-400 font-bold uppercase tracking-wider mb-2 select-none">
                      <span className="bg-[#edf5f3] text-[#0ca581] px-2.5 py-0.5 rounded-full font-black">News</span>
                      <span>18 March 2026</span>
                    </div>
                    <h3 className="font-open-sans text-base md:text-lg font-extrabold text-[#0D1F3C] leading-snug mb-2 group-hover:text-[#0ca581] transition-colors duration-200">
                      Revitalizing Workplace Morale: Innovative Tactics For Boosting Employee Engagement in 2026
                    </h3>
                    <button onClick={() => setActiveTab("about")} className="text-xs font-black text-[#0D1F3C] group-hover:text-[#0ca581] flex items-center gap-1 hover:underline cursor-pointer">
                      Read More ➔
                    </button>
                  </div>

                  {/* Blog Card 2 */}
                  <div className="group cursor-pointer">
                    <div className="aspect-[16/10] overflow-hidden rounded-2xl mb-4 shadow-sm border border-gray-100">
                      <img 
                        src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=85&w=800" 
                        alt="Job Interview Advice"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="flex items-center gap-3 text-[11px] text-gray-400 font-bold uppercase tracking-wider mb-2 select-none">
                      <span className="bg-[#edf5f3] text-[#0ca581] px-2.5 py-0.5 rounded-full font-black">Jobs</span>
                      <span>18 March 2026</span>
                    </div>
                    <h3 className="font-open-sans text-base md:text-lg font-extrabold text-[#0D1F3C] leading-snug mb-2 group-hover:text-[#0ca581] transition-colors duration-200">
                      How To Avoid The Top Six Most Common Job Interview Mistakes
                    </h3>
                    <button onClick={() => setActiveTab("about")} className="text-xs font-black text-[#0D1F3C] group-hover:text-[#0ca581] flex items-center gap-1 hover:underline cursor-pointer">
                      Read More ➔
                    </button>
                  </div>

                  {/* Blog Card 3 */}
                  <div className="group cursor-pointer">
                    <div className="aspect-[16/10] overflow-hidden rounded-2xl mb-4 shadow-sm border border-gray-100">
                      <img 
                        src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=85&w=800" 
                        alt="CV and Resume Advice"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="flex items-center gap-3 text-[11px] text-gray-400 font-bold uppercase tracking-wider mb-2 select-none">
                      <span className="bg-[#edf5f3] text-[#0ca581] px-2.5 py-0.5 rounded-full font-black">Advice</span>
                      <span>18 March 2026</span>
                    </div>
                    <h3 className="font-open-sans text-base md:text-lg font-extrabold text-[#0D1F3C] leading-snug mb-2 group-hover:text-[#0ca581] transition-colors duration-200">
                      Top 3 Formatting Rules for Regional CV Submissions to Attract Recruiters
                    </h3>
                    <button onClick={() => setActiveTab("about")} className="text-xs font-black text-[#0D1F3C] group-hover:text-[#0ca581] flex items-center gap-1 hover:underline cursor-pointer">
                      Read More ➔
                    </button>
                  </div>
                </div>
              </div>
            </section>


          </div>
        )}

        {/* ==================== BROWSE JOBS TAB ==================== */}
        {activeTab === "jobs" && (() => {
          // Dynamic Counts computation
          const getJobCategory = (jobId: string) => {
            switch (jobId) {
              case "forward-security-director":
                return "Hotels & Tourism";
              case "district-web-developer":
              case "district-intranet-director":
                return "Telecommunications";
              case "national-quality-representative":
              case "human-security-assistant":
                return "Education";
              case "forward-accounts-consultant":
                return "Financial Services";
              default:
                return "Commerce";
            }
          };

          const getJobExperienceMockup = (jobId: string) => {
            switch (jobId) {
              case "national-quality-representative":
              case "district-intranet-director":
                return "Expert";
              case "internal-integration-planner":
              case "forward-accounts-consultant":
                return "Intermediate";
              case "forward-security-director":
              case "corporate-tactics-facilitator":
              case "district-web-developer":
                return "Fresher";
              default:
                return "No-experience";
            }
          };

          const getJobRelativeTime = (jobId: string) => {
            switch (jobId) {
              case "forward-security-director": return "10 min ago";
              case "regional-creative-facilitator": return "12 min ago";
              case "internal-integration-planner": return "15 min ago";
              case "district-intranet-director": return "24 min ago";
              case "corporate-tactics-facilitator": return "26 min ago";
              case "forward-accounts-consultant": return "30 min ago";
              case "direct-operations-coordinator": return "35 min ago";
              case "national-quality-representative": return "40 min ago";
              case "district-web-developer": return "45 min ago";
              case "human-security-assistant": return "50 min ago";
              default: return "10 min ago";
            }
          };

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
            "Seasonal": CAREER_BRIDGE_JOBS.filter(j => j.jobType.toLowerCase() === "seasonal" || j.jobType.toLowerCase() === "shift based" || j.jobType.toLowerCase() === "part time").length, // map for display counts
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

          const paginatedJobs = filteredJobs.slice((jobsPage - 1) * 6, jobsPage * 6);

          if (selectedJob) {
            const relatedJobs = CAREER_BRIDGE_JOBS
              .filter(j => j.id !== selectedJob.id && (getJobCategory(j.id) === getJobCategory(selectedJob.id) || j.location === selectedJob.location))
              .slice(0, 3);

            return (
              <div className="w-full bg-[#fafbfc] min-h-screen">
                {/* Header Banner */}
                <div className="bg-black text-white py-16 px-6 text-center relative overflow-hidden select-none border-b border-gray-900">
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:3rem_3rem]" />
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
                      className="flex items-center gap-1.5 text-xs font-bold text-[#0ca581] hover:underline cursor-pointer"
                    >
                      ← Back to listings
                    </button>
                    <span className="text-slate-400 text-xs font-medium">Home / Jobs / Job Details</span>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    
                    {/* LEFT COLUMN: Main Details */}
                    <div className="lg:col-span-2 flex flex-col gap-6">
                      
                      {/* Job Header Info */}
                      <div className="bg-white border border-slate-100 rounded-3xl p-6 md:p-8 flex flex-col gap-5 relative shadow-sm">
                        <div className="flex gap-4 items-start pr-12">
                          {renderGeometricLogo(selectedJob.id)}
                          <div>
                            <h2 className="font-open-sans text-xl md:text-2xl font-bold text-slate-800 leading-tight">
                              {selectedJob.title}
                            </h2>
                            <p className="text-xs md:text-sm text-slate-400 font-medium mt-1">
                              {selectedJob.company}
                            </p>
                          </div>
                        </div>

                        <div className="flex flex-wrap items-center gap-x-5 gap-y-3.5 border-t border-slate-50 pt-5 mt-1 select-none text-xs text-slate-500 font-semibold">
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
                        <h3 className="text-lg font-bold text-slate-800 border-l-4 border-[#0ca581] pl-3 select-none">Job Description</h3>
                        <p className="text-sm text-slate-600 leading-relaxed">
                          {selectedJob.description}
                        </p>
                      </div>

                      {/* Key Responsibilities */}
                      <div className="bg-white border border-slate-100 rounded-3xl p-6 md:p-8 flex flex-col gap-4 shadow-sm">
                        <h3 className="text-lg font-bold text-slate-800 border-l-4 border-[#0ca581] pl-3 select-none">Key Responsibilities</h3>
                        <ul className="flex flex-col gap-3">
                          {selectedJob.responsibilities.map((resp, i) => (
                            <li key={i} className="flex items-start gap-3 text-sm text-slate-600 leading-relaxed font-medium">
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
                        <h3 className="text-lg font-bold text-slate-800 border-l-4 border-[#0ca581] pl-3 select-none">Professional Skills</h3>
                        <ul className="flex flex-col gap-3">
                          {selectedJob.skills.map((skill, i) => (
                            <li key={i} className="flex items-start gap-3 text-sm text-slate-600 leading-relaxed font-medium">
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
                          <h3 className="text-2xl font-black text-slate-800 font-open-sans">Related Jobs</h3>
                          <p className="text-xs text-slate-400 mt-1 select-none">At eu lobortis pretium tincidunt amet lacus ut aenean aliquet</p>
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
                                  <h4 className="text-base font-bold text-slate-800 leading-snug group-hover:text-[#0ca581] transition-colors">{rJob.title}</h4>
                                  <p className="text-xs text-slate-400 font-medium mt-0.5">{rJob.company}</p>
                                </div>
                              </div>
                              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-slate-50 pt-4 mt-1 select-none text-[11px] text-slate-500 font-semibold">
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
                        <h4 className="text-sm font-bold text-slate-800 border-b border-emerald-100/30 pb-2.5 mb-1 select-none">Job Overview</h4>
                        
                        <div className="flex flex-col gap-4 select-none">
                          <div className="flex items-start gap-3">
                            <span className="w-8 h-8 rounded-lg bg-white border border-emerald-100/40 flex items-center justify-center text-[#0ca581] shrink-0 shadow-sm">
                              <svg className="w-4.5 h-4.5 text-[#0ca581]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                              </svg>
                            </span>
                            <div>
                              <p className="text-[10px] text-slate-400 font-bold leading-none">Job Title</p>
                              <p className="text-xs font-bold text-slate-700 mt-1 leading-snug">{selectedJob.title}</p>
                            </div>
                          </div>

                          <div className="flex items-start gap-3">
                            <span className="w-8 h-8 rounded-lg bg-white border border-emerald-100/40 flex items-center justify-center text-[#0ca581] shrink-0 shadow-sm">
                              <svg className="w-4.5 h-4.5 text-[#0ca581]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                            </span>
                            <div>
                              <p className="text-[10px] text-slate-400 font-bold leading-none">Job Type</p>
                              <p className="text-xs font-bold text-slate-700 mt-1 leading-snug">{selectedJob.jobType}</p>
                            </div>
                          </div>

                          <div className="flex items-start gap-3">
                            <span className="w-8 h-8 rounded-lg bg-white border border-emerald-100/40 flex items-center justify-center text-[#0ca581] shrink-0 shadow-sm">
                              <svg className="w-4.5 h-4.5 text-[#0ca581]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                              </svg>
                            </span>
                            <div>
                              <p className="text-[10px] text-slate-400 font-bold leading-none">Category</p>
                              <p className="text-xs font-bold text-slate-700 mt-1 leading-snug">{getJobCategory(selectedJob.id)}</p>
                            </div>
                          </div>

                          <div className="flex items-start gap-3">
                            <span className="w-8 h-8 rounded-lg bg-white border border-emerald-100/40 flex items-center justify-center text-[#0ca581] shrink-0 shadow-sm">
                              <svg className="w-4.5 h-4.5 text-[#0ca581]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                              </svg>
                            </span>
                            <div>
                              <p className="text-[10px] text-slate-400 font-bold leading-none">Experience</p>
                              <p className="text-xs font-bold text-slate-700 mt-1 leading-snug">{selectedJob.experience}</p>
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
                              <p className="text-[10px] text-slate-400 font-bold leading-none">Degree</p>
                              <p className="text-xs font-bold text-slate-700 mt-1 leading-snug">{selectedJob.qualification}</p>
                            </div>
                          </div>

                          <div className="flex items-start gap-3">
                            <span className="w-8 h-8 rounded-lg bg-white border border-emerald-100/40 flex items-center justify-center text-[#0ca581] shrink-0 shadow-sm">
                              <svg className="w-4.5 h-4.5 text-[#0ca581]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                              </svg>
                            </span>
                            <div>
                              <p className="text-[10px] text-slate-400 font-bold leading-none">Offered Salary</p>
                              <p className="text-xs font-bold text-slate-700 mt-1 leading-snug">{selectedJob.salary}</p>
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
                              <p className="text-[10px] text-slate-400 font-bold leading-none">Location</p>
                              <p className="text-xs font-bold text-slate-700 mt-1 leading-snug">{selectedJob.location}</p>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Send Us Message Form */}
                      <div className="bg-[#F1F7F6]/60 border border-emerald-100/60 rounded-3xl p-6 flex flex-col gap-4 shadow-sm">
                        <h4 className="text-sm font-bold text-slate-800 border-b border-emerald-100/30 pb-2.5 mb-1 select-none">Send Us Message</h4>
                        
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
              <div className="bg-black text-white py-16 px-6 text-center relative overflow-hidden select-none border-b border-gray-900">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:3rem_3rem]" />
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
                      <h4 className="text-sm font-bold text-slate-800 mb-2">Search by Job Title</h4>
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
                          className="w-full bg-transparent border-none outline-none text-xs text-slate-800 placeholder-slate-400"
                        />
                      </div>
                    </div>

                    {/* Location Field */}
                    <div>
                      <h4 className="text-sm font-bold text-slate-800 mb-2">Location</h4>
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
                          className="w-full bg-transparent border-none outline-none text-xs text-slate-605 cursor-pointer appearance-none"
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
                      <h4 className="text-sm font-bold text-slate-800 mb-3">Category</h4>
                      <div className="flex flex-col gap-2.5">
                        {Object.entries(categoryCounts).map(([cat]) => (
                          <label key={cat} className="flex items-center gap-2 text-xs text-slate-600 font-medium cursor-pointer select-none">
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
                      <h4 className="text-sm font-bold text-slate-800 mb-3">Job Type</h4>
                      <div className="flex flex-col gap-2.5">
                        {Object.entries(jobTypeCounts).map(([type]) => (
                          <label key={type} className="flex items-center gap-2 text-xs text-slate-600 font-medium cursor-pointer select-none">
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
                      <h4 className="text-sm font-bold text-slate-800 mb-3">Experience Level</h4>
                      <div className="flex flex-col gap-2.5">
                        {Object.entries(experienceCounts).map(([exp]) => (
                          <label key={exp} className="flex items-center gap-2 text-xs text-slate-600 font-medium cursor-pointer select-none">
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
                      <h4 className="text-sm font-bold text-slate-800 mb-3">Date Posted</h4>
                      <div className="flex flex-col gap-2.5">
                        {Object.entries(dateCounts).map(([date]) => (
                          <label key={date} className="flex items-center gap-2 text-xs text-slate-600 font-medium cursor-pointer select-none">
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
                      <h4 className="text-sm font-bold text-slate-800 mb-1">Salary</h4>
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
                      <div className="flex items-center justify-between text-xs text-slate-500 font-bold mt-2">
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
                      <p className="text-sm text-slate-500 font-medium">
                        Showing <strong className="text-slate-800">{Math.min((jobsPage - 1) * 6 + 1, filteredJobs.length)}-{Math.min(jobsPage * 6, filteredJobs.length)}</strong> of <strong className="text-slate-800">{filteredJobs.length}</strong> results
                      </p>
                      
                      {/* Sort dropdown */}
                      <div className="flex items-center gap-2">
                        <select
                          value={sortBy}
                          onChange={(e) => {
                            setSortBy(e.target.value);
                            setJobsPage(1);
                          }}
                          className="bg-white border border-gray-200 rounded-xl px-3.5 py-2 text-xs font-bold text-slate-700 cursor-pointer outline-none focus:border-[#0ca581] transition-all"
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
                        <h3 className="font-open-sans text-lg font-bold text-slate-800 mb-2">No Matching Vacancies Found</h3>
                        <p className="text-xs text-slate-400 max-w-sm mx-auto mb-6 leading-relaxed">
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
                                  <h3 className="font-open-sans text-lg md:text-xl font-bold text-slate-800 leading-tight group-hover:text-[#0ca581] transition-colors">
                                    {job.title}
                                  </h3>
                                  {/* Company Name */}
                                  <p className="text-xs md:text-sm text-slate-450 font-medium mt-1 select-none">
                                    {job.company}
                                  </p>
                                </div>
                              </div>

                              {/* Metadata Icons Row */}
                              <div className="flex flex-wrap items-center gap-x-5 gap-y-3.5 border-t border-slate-50 pt-5 mt-1 select-none">
                                {/* Category */}
                                <div className="flex items-center gap-1.5 text-xs text-slate-500 font-semibold">
                                  <svg className="w-4 h-4 text-[#0ca581] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                  </svg>
                                  <span>{getJobCategory(job.id)}</span>
                                </div>

                                {/* Job Type */}
                                <div className="flex items-center gap-1.5 text-xs text-slate-500 font-semibold">
                                  <svg className="w-4 h-4 text-[#0ca581] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                  </svg>
                                  <span>{job.jobType}</span>
                                </div>

                                {/* Salary */}
                                <div className="flex items-center gap-1.5 text-xs text-slate-500 font-semibold">
                                  <svg className="w-4 h-4 text-[#0ca581] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                                  </svg>
                                  <span>{job.salary}</span>
                                </div>

                                {/* Location */}
                                <div className="flex items-center gap-1.5 text-xs text-slate-500 font-semibold">
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
                              : "bg-white border-slate-200 text-slate-600 hover:bg-slate-50 cursor-pointer"
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
        })()}

        {/* ==================== APPLIED DASHBOARD TAB ==================== */}
        {activeTab === "applied" && (
          <div className="max-w-6xl mx-auto px-6 py-10 animate-fade-in">
            <div className="mb-8 pb-5">
              <h1 className="font-open-sans text-2xl md:text-3.5xl font-extrabold text-gray-900">
                Your Applications
              </h1>
              
                <p className="text-gray-400 text-xs md:text-sm mt-1.5 font-medium">
                  Track your real-time interviewing schedules and onboarding updates. Keep your CV ready for recruitment checks.
                </p>
            </div>

            {!isSignedIn ? (
              <div className="border border-gray-250 rounded-2xl py-12 px-6 text-center max-w-lg mx-auto bg-white shadow-sm">
                <span className="text-4xl select-none">🔒</span>
                <h3 className="font-open-sans text-lg font-bold text-gray-900 mt-4 mb-2">Authenticated Session Required</h3>
                <p className="text-xs md:text-sm text-gray-505 mb-6 leading-relaxed">
                  Please register or log in to view your applications pipeline.
                </p>
                <button
                  onClick={() => {
                    setAuthMode("login");
                    setActiveTab("register");
                  }}
                  className="bg-gray-900 hover:bg-gray-700 text-white text-xs font-bold px-5 py-2.5 rounded-xl cursor-pointer"
                >
                  Sign In
                </button>
              </div>
            ) : appliedJobs.length === 0 ? (
              <div className="border border-dashed border-gray-300 rounded-2xl py-16 px-6 text-center max-w-lg mx-auto">
                <span className="text-4xl select-none">📝</span>
                <h3 className="font-open-sans text-lg font-bold text-gray-900 mt-4 mb-2">No Active Applications</h3>
                <p className="text-xs md:text-sm text-gray-500 mb-6 leading-relaxed">
                  You have not submitted applications yet. Once you apply, they will show up here along with progress pipelines.
                </p>
                <button
                  onClick={() => setActiveTab("jobs")}
                  className="bg-gray-900 hover:bg-gray-700 text-white text-xs font-bold px-5 py-2.5 rounded-xl cursor-pointer"
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
                          <h3 className="font-open-sans text-lg md:text-xl font-bold text-slate-800 leading-tight group-hover:text-[#0ca581] transition-colors">
                            {job.title}
                          </h3>
                          <p className="text-xs md:text-sm text-slate-450 font-medium mt-1 select-none">{job.company}</p>
                        </div>

                        {/* Status badge top-right */}
                        <span className={`shrink-0 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wide border select-none ${
                          app.status === "Placed"              ? "bg-emerald-50 text-emerald-700 border-emerald-200"
                          : app.status === "Interview Scheduled" ? "bg-blue-50 text-blue-700 border-blue-200"
                          : app.status === "Rejected"           ? "bg-red-50 text-red-700 border-red-200"
                          : "bg-amber-50 text-amber-700 border-amber-200"
                        }`}>{app.status}</span>
                      </div>

                      {/* ── Metadata Icons Row (same as Browse Jobs) ── */}
                      <div className="flex flex-wrap items-center gap-x-5 gap-y-3 border-t border-slate-50 pt-4 select-none">
                        {/* Salary */}
                        <div className="flex items-center gap-1.5 text-xs text-slate-500 font-semibold">
                          <svg className="w-4 h-4 text-[#0ca581] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                          </svg>
                          <span>{job.salary}</span>
                        </div>
                        {/* Location */}
                        <div className="flex items-center gap-1.5 text-xs text-slate-500 font-semibold">
                          <svg className="w-4 h-4 text-[#0ca581] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          <span>{job.location}</span>
                        </div>
                        {/* Job Type */}
                        <div className="flex items-center gap-1.5 text-xs text-slate-500 font-semibold">
                          <svg className="w-4 h-4 text-[#0ca581] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span>{job.jobType}</span>
                        </div>
                        {/* Applied date */}
                        <div className="flex items-center gap-1.5 text-xs text-slate-500 font-semibold">
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
                        <p className="text-xs text-slate-500 leading-relaxed font-medium">
                          {app.status === "Placed"              ? "🎉 Congratulations! Our team will reach out with your onboarding details soon."
                            : app.status === "Interview Scheduled" ? "📅 Your interview is scheduled. We'll contact you via WhatsApp with timing and venue details."
                            : app.status === "Rejected"           ? "❌ Your profile was not shortlisted for this role. Don't give up — keep applying!"
                            : "🔍 Your application is under review by our team. We'll respond within 24–48 hours."}
                        </p>
                      </div>

                      {/* ── Admin controls (absolutely positioned bottom-right, matching Browse Jobs button style) ── */}
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
        )}

        {activeTab === "register" && (
          <div className="max-w-6xl mx-auto px-6 py-10 animate-fade-in">
            <div className="bg-white border border-gray-200 rounded-2xl shadow-sm max-w-4xl mx-auto overflow-hidden">
              
              {/* Auth Mode Toggle Bar */}
              <div className="flex border-b border-gray-200 select-none">
                <button
                  type="button"
                  onClick={() => {
                    setAuthMode("login");
                    setLoginError("");
                  }}
                  className={`flex-1 text-center py-4 text-xs md:text-sm font-bold border-b-2 transition-all cursor-pointer ${
                    authMode === "login"
                      ? "border-gray-900 text-gray-900 bg-gray-50"
                      : "border-transparent text-gray-400 hover:text-gray-900 hover:bg-gray-50"
                  }`}
                >
                  Seeker Sign In / Login
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setAuthMode("signup");
                    setRegError("");
                  }}
                  className={`flex-1 text-center py-4 text-xs md:text-sm font-bold border-b-2 transition-all cursor-pointer ${
                    authMode === "signup"
                      ? "border-gray-900 text-gray-900 bg-gray-50"
                      : "border-transparent text-gray-400 hover:text-gray-900 hover:bg-gray-50"
                  }`}
                >
                  New Seeker Registration (Free)
                </button>
              </div>

              <div className="p-6 md:p-8">
                {/* ==================== 1. LOGIN MODE ==================== */}
                {authMode === "login" && (
                  <div>
                    {loginSuccess ? (
                      <div className="border border-emerald-100 bg-emerald-50/50 rounded-2xl p-10 max-w-lg mx-auto text-center animate-bounce-short">
                        <span className="text-5xl select-none">🎉</span>
                        <h2 className="font-open-sans text-2xl font-bold text-emerald-800 mt-4 mb-2">
                          Sign In Successful!
                        </h2>
                        <p className="text-xs md:text-sm text-emerald-700 leading-relaxed max-w-md mx-auto mb-6">
                          Welcome back to MyJobSolution. We are compiling your personalized job matches...
                        </p>
                        <div className="inline-flex items-center gap-2 text-xs font-bold text-emerald-600">
                          <span className="w-2.5 h-2.5 bg-emerald-500 rounded-full animate-ping"></span>
                          Loading matching vacancies...
                        </div>
                      </div>
                    ) : (
                      <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
                        {/* Login Form */}
                        <form onSubmit={handleLoginSubmit} className="md:col-span-3 flex flex-col gap-5">
                          <div>
                            <h2 className="font-open-sans text-lg font-bold text-gray-900 mb-1">Seeker Login</h2>
                            <p className="text-xs text-gray-400 font-medium">
                              Type your registered Mobile Number to log in and restore your applications tracker.
                            </p>
                          </div>

                          {loginError && (
                            <div className="bg-red-50 border border-red-100 text-red-600 rounded-xl p-3 text-xs font-bold">
                              ⚠️ {loginError}
                            </div>
                          )}

                          <div>
                            <label className="block text-xs font-bold text-gray-905 mb-1.5">
                              Registered Mobile Number <span className="text-red-500">*</span>
                            </label>
                            <input
                              type="tel"
                              maxLength={10}
                              placeholder="10-digit mobile number"
                              value={loginMobile}
                              onChange={(e) => setLoginMobile(e.target.value.replace(/\D/g, ""))}
                              className="w-full bg-white border border-gray-200 focus:border-gray-900 focus:outline-none rounded-xl px-4 py-2.5 text-xs md:text-sm text-gray-950"
                            />
                          </div>

                          <div>
                            <label className="block text-xs font-bold text-gray-905 mb-1.5">
                              Password / OTP Verification <span className="text-red-500">*</span>
                            </label>
                            <input
                              type="password"
                              placeholder="Type any password or OTP to test"
                              value={loginPassword}
                              onChange={(e) => setLoginPassword(e.target.value)}
                              className="w-full bg-white border border-gray-200 focus:border-gray-900 focus:outline-none rounded-xl px-4 py-2.5 text-xs md:text-sm text-gray-950"
                            />
                          </div>

                          <button
                            type="submit"
                            className="bg-gray-900 hover:bg-gray-700 text-white font-extrabold text-xs md:text-sm py-3.5 rounded-xl transition-all shadow active:scale-95 cursor-pointer mt-2"
                          >
                            Verify &amp; Sign In
                          </button>
                        </form>

                        {/* Test Guidance Sidebar */}
                        <div className="md:col-span-2 bg-gray-50 border border-gray-200 rounded-2xl p-5 flex flex-col gap-4">
                          <h3 className="text-xs uppercase tracking-wider font-extrabold text-gray-800">
                            💡 Seeker Testing Details
                          </h3>
                          <p className="text-xs text-gray-505 leading-relaxed">
                            For convenient verification without filling forms, use our default registered seeker profile:
                          </p>
                          <div className="bg-white border border-gray-200 rounded-xl p-3 flex flex-col gap-1 select-all font-mono text-[10px] md:text-xs">
                            <p className="text-gray-900 font-bold">Mobile: <span className="text-gray-900 underline font-black">9876543210</span></p>
                            <p className="text-gray-400">Password: <span className="text-gray-505">Any password</span></p>
                          </div>
                          <p className="text-[10px] text-gray-400 leading-relaxed font-medium">
                            Alternatively, select **New Seeker Registration**, complete a new profile, and sign in using your custom mobile number instantly!
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {/* ==================== 2. SIGNUP/REGISTRATION MODE ==================== */}
                {authMode === "signup" && (
                  <div>
                    {regSuccess ? (
                      <div className="border border-emerald-100 bg-emerald-50/50 rounded-2xl p-10 max-w-xl mx-auto text-center animate-bounce-short">
                        <span className="text-5xl select-none">🎉</span>
                        <h2 className="font-open-sans text-2xl font-bold text-emerald-800 mt-4 mb-2">
                          Registration Successful!
                        </h2>
                        <p className="text-xs md:text-sm text-emerald-700 leading-relaxed max-w-md mx-auto mb-6">
                          Thank you for registering with MyJobSolution. Your session is now active.
                        </p>
                        <div className="inline-flex items-center gap-2 text-xs font-bold text-emerald-600">
                          <span className="w-2.5 h-2.5 bg-emerald-500 rounded-full animate-ping"></span>
                          Transitioning to matching vacancies...
                        </div>
                      </div>
                    ) : (
                      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Registration Form Card */}
                        <form
                          onSubmit={handleRegistrationSubmit}
                          className="lg:col-span-2 flex flex-col gap-6"
                        >
                          <div>
                            <h2 className="font-open-sans text-lg font-bold text-gray-900 mb-1">Seeker Information Form</h2>
                            <p className="text-xs text-gray-400 font-medium">
                              All fields marked with <span className="text-red-505 font-extrabold">*</span> are compulsory for review.
                            </p>
                          </div>

                          {regError && (
                            <div className="bg-red-50 border border-red-100 text-red-600 rounded-xl p-3 text-xs font-bold">
                              ⚠️ {regError}
                            </div>
                          )}

                          {/* Section: Personal Info */}
                          <div>
                            <h3 className="text-xs uppercase tracking-wider font-extrabold text-gray-805 border-b border-gray-100 pb-2 mb-4">
                              Personal Details
                            </h3>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                              <div>
                                <label className="block text-xs font-bold text-gray-905 mb-1.5">
                                  Full Name <span className="text-red-500">*</span>
                                </label>
                                <input
                                  type="text"
                                  placeholder="Your complete name"
                                  value={regForm.name}
                                  onChange={(e) => setRegForm({ ...regForm, name: e.target.value })}
                                  className="w-full bg-white border border-gray-200 focus:border-gray-900 focus:outline-none rounded-xl px-4 py-2.5 text-xs md:text-sm text-gray-950"
                                />
                              </div>
                              <div>
                                <label className="block text-xs font-bold text-gray-905 mb-1.5">
                                  Father&apos;s Name <span className="text-red-500">*</span>
                                </label>
                                <input
                                  type="text"
                                  placeholder="Father's complete name"
                                  value={regForm.fatherName}
                                  onChange={(e) => setRegForm({ ...regForm, fatherName: e.target.value })}
                                  className="w-full bg-white border border-gray-200 focus:border-gray-900 focus:outline-none rounded-xl px-4 py-2.5 text-xs md:text-sm text-gray-950"
                                />
                              </div>
                              <div>
                                <label className="block text-xs font-bold text-gray-905 mb-1.5">
                                  Mobile Number <span className="text-red-500">*</span>
                                </label>
                                <input
                                  type="tel"
                                  maxLength={10}
                                  placeholder="10-digit mobile number"
                                  value={regForm.mobile}
                                  onChange={(e) => setRegForm({ ...regForm, mobile: e.target.value.replace(/\D/g, "") })}
                                  className="w-full bg-white border border-gray-200 focus:border-gray-900 focus:outline-none rounded-xl px-4 py-2.5 text-xs md:text-sm text-gray-950"
                                />
                              </div>
                              <div>
                                <label className="block text-xs font-bold text-gray-905 mb-1.5">
                                  Alternate Contact <span className="text-gray-400 font-normal">(Optional)</span>
                                </label>
                                <input
                                  type="tel"
                                  maxLength={10}
                                  placeholder="Backup contact number"
                                  value={regForm.altMobile}
                                  onChange={(e) => setRegForm({ ...regForm, altMobile: e.target.value.replace(/\D/g, "") })}
                                  className="w-full bg-white border border-gray-200 focus:border-gray-900 focus:outline-none rounded-xl px-4 py-2.5 text-xs md:text-sm text-gray-950"
                                />
                              </div>
                            </div>

                            <div className="mt-4">
                              <label className="block text-xs font-bold text-gray-905 mb-1.5">
                                Full Address <span className="text-red-500">*</span>
                              </label>
                              <textarea
                                rows={2}
                                placeholder="House no., Street, Colony, Landmark or Village"
                                value={regForm.address}
                                onChange={(e) => setRegForm({ ...regForm, address: e.target.value })}
                                className="w-full bg-white border border-gray-200 focus:border-gray-900 focus:outline-none rounded-xl px-4 py-2.5 text-xs md:text-sm text-gray-950 resize-none"
                              />
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                              <div>
                                <label className="block text-xs font-bold text-gray-905 mb-1.5">
                                  District Division <span className="text-red-505">*</span>
                                </label>
                                <select
                                  value={regForm.district}
                                  onChange={(e) => setRegForm({ ...regForm, district: e.target.value })}
                                  className="w-full bg-white border border-gray-200 focus:border-gray-900 focus:outline-none rounded-xl px-3 py-2.5 text-xs md:text-sm text-gray-650"
                                >
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
                                <label className="block text-xs font-bold text-gray-905 mb-1.5">
                                  Aadhaar Last 4 Digits <span className="text-red-500">*</span>
                                </label>
                                <input
                                  type="text"
                                  maxLength={4}
                                  placeholder="Last 4 digits only"
                                  value={regForm.aadhaarLast4}
                                  onChange={(e) => setRegForm({ ...regForm, aadhaarLast4: e.target.value.replace(/\D/g, "") })}
                                  className="w-full bg-white border border-gray-200 focus:border-gray-900 focus:outline-none rounded-xl px-4 py-2.5 text-xs md:text-sm text-gray-95"
                                />
                                <span className="text-[10px] text-gray-400 block mt-1 leading-tight font-medium font-medium">
                                  For verification checks. We store only these 4 digits.
                                </span>
                              </div>
                            </div>
                          </div>

                          {/* Section: Qualification Info */}
                          <div>
                            <h3 className="text-xs uppercase tracking-wider font-extrabold text-gray-805 border-b border-gray-100 pb-2 mb-4">
                              Academic &amp; Professional Qualifications
                            </h3>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                              <div>
                                <label className="block text-xs font-bold text-gray-905 mb-1.5">
                                  Highest Qualification <span className="text-red-500">*</span>
                                </label>
                                <select
                                  value={regForm.qualification}
                                  onChange={(e) => setRegForm({ ...regForm, qualification: e.target.value })}
                                  className="w-full bg-white border border-gray-200 focus:border-gray-900 focus:outline-none rounded-xl px-3 py-2.5 text-xs md:text-sm text-gray-650"
                                >
                                  <option value="">Select qualification</option>
                                  <option value="10th Pass">10th Pass</option>
                                  <option value="12th Pass">12th Pass</option>
                                  <option value="Graduate">Graduate (B.A. / B.Sc. / B.Com etc.)</option>
                                  <option value="ITI / Diploma">ITI / Diploma</option>
                                </select>
                              </div>
                              <div>
                                <label className="block text-xs font-bold text-gray-905 mb-1.5">
                                  Work Experience <span className="text-red-500">*</span>
                                </label>
                                <select
                                  value={regForm.experience}
                                  onChange={(e) => setRegForm({ ...regForm, experience: e.target.value })}
                                  className="w-full bg-white border border-gray-200 focus:border-gray-900 focus:outline-none rounded-xl px-3 py-2.5 text-xs md:text-sm text-gray-655"
                                >
                                  <option value="">Select experience</option>
                                  <option value="Fresher (No experience)">Fresher (No experience)</option>
                                  <option value="Less than 1 year">Less than 1 year</option>
                                  <option value="1–2 years">1–2 years</option>
                                  <option value="2–5 years">2–5 years</option>
                                  <option value="5+ years">5+ years</option>
                                </select>
                              </div>
                              <div>
                                <label className="block text-xs font-bold text-gray-905 mb-1.5">
                                  Top Skills / Expertise <span className="text-red-500">*</span>
                                </label>
                                <input
                                  type="text"
                                  placeholder="e.g. Tally, Excel, Driving, Computer, Sewing"
                                  value={regForm.skills}
                                  onChange={(e) => setRegForm({ ...regForm, skills: e.target.value })}
                                  className="w-full bg-white border border-gray-200 focus:border-gray-900 focus:outline-none rounded-xl px-4 py-2.5 text-xs md:text-sm text-gray-95"
                                />
                                <span className="text-[10px] text-gray-400 block mt-1 font-medium">
                                  Separate skills using standard commas.
                                </span>
                              </div>
                              <div>
                                <label className="block text-xs font-bold text-gray-905 mb-1.5">
                                  Interested Job Post <span className="text-red-500">*</span>
                                </label>
                                <input
                                  type="text"
                                  placeholder="e.g. Accountant, Sales, Driver, Receptionist"
                                  value={regForm.interestedJob}
                                  onChange={(e) => setRegForm({ ...regForm, interestedJob: e.target.value })}
                                  className="w-full bg-white border border-gray-200 focus:border-gray-900 focus:outline-none rounded-xl px-4 py-2.5 text-xs md:text-sm text-gray-95"
                                />
                                <span className="text-[10px] text-gray-400 block mt-1 font-medium font-medium">
                                  The target job role you want us to match you for.
                                </span>
                              </div>
                            </div>
                          </div>

                          {/* Section: CV Upload */}
                          <div>
                            <h3 className="text-xs uppercase tracking-wider font-extrabold text-[#0d1f3c] border-b border-gray-100 pb-2 mb-4">
                              CV / Resume Attachment
                            </h3>

                            <div className="border-2 border-dashed border-gray-200 hover:border-gray-900 bg-gray-50 hover:bg-gray-100 rounded-2xl py-7 px-4 text-center cursor-pointer transition-all relative">
                              <input
                                type="file"
                                accept=".pdf,.doc,.docx"
                                onChange={handleFormFileSelect}
                                className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                              />
                              <span className="text-3xl block mb-2 select-none">📄</span>
                              <p className="text-xs font-bold text-gray-905">
                                {regFile ? (
                                  <span className="text-emerald-650">Selected file: {regFile.name} ({(regFile.size / 1024).toFixed(1)} KB)</span>
                                ) : (
                                  <span>Click here to upload your Resume or drag &amp; drop</span>
                                )}
                              </p>
                              <p className="text-[10px] text-gray-400 mt-1 font-medium">
                                Accepts PDF, DOC, DOCX formats. Maximum limit: 2MB.
                              </p>
                            </div>
                          </div>

                          {/* Consent row */}
                          <div className="flex items-start gap-3 bg-gray-50 border border-gray-200 rounded-xl p-4 select-none">
                            <input
                              type="checkbox"
                              id="consentCheck"
                              className="mt-1 accent-gray-900 cursor-pointer"
                              required
                            />
                            <label htmlFor="consentCheck" className="text-[11px] leading-relaxed text-gray-500 cursor-pointer font-medium">
                              I agree to share my registration credentials with MyJobSolution and their verified company clients to facilitate recruitment. I confirm the details are true.
                            </label>
                          </div>

                          {/* Action button */}
                          <button
                            type="submit"
                            className="w-full bg-gray-900 hover:bg-gray-700 text-white font-extrabold text-xs md:text-sm py-3.5 rounded-xl transition-all shadow-md active:scale-95 cursor-pointer mt-2"
                          >
                            Activate Profile &amp; Match Jobs
                          </button>
                        </form>

                        {/* Sidebar Benefits */}
                        <div className="flex flex-col gap-6">
                          <div className="bg-gray-900 text-white rounded-2xl p-6 shadow-sm">
                            <h3 className="font-open-sans text-base font-bold mb-5 select-none">✅ Seeker Core Benefits</h3>
                            <ul className="flex flex-col gap-4">
                              <li className="flex items-start gap-3">
                                <span className="w-5 h-5 rounded-full bg-white text-gray-900 flex items-center justify-center text-[10px] font-bold mt-0.5 shrink-0 select-none">✓</span>
                                <p className="text-xs leading-relaxed text-gray-350">
                                  <strong>100% Free Placement:</strong> We never charge candidate fees before or after joining.
                                </p>
                              </li>
                              <li className="flex items-start gap-3">
                                <span className="w-5 h-5 rounded-full bg-white text-gray-900 flex items-center justify-center text-[10px] font-bold mt-0.5 shrink-0 select-none">✓</span>
                                <p className="text-xs leading-relaxed text-gray-350">
                                  <strong>Vetted Listings:</strong> Avoid scams. Every company undergo strict verification reviews.
                                </p>
                              </li>
                              <li className="flex items-start gap-3">
                                <span className="w-5 h-5 rounded-full bg-white text-gray-900 flex items-center justify-center text-[10px] font-bold mt-0.5 shrink-0 select-none">✓</span>
                                <p className="text-xs leading-relaxed text-gray-355">
                                  <strong>Local Placements:</strong> Placements in your nearby division matching expectations.
                                </p>
                              </li>
                              <li className="flex items-start gap-3">
                                <span className="w-5 h-5 rounded-full bg-white text-gray-900 flex items-center justify-center text-[10px] font-bold mt-0.5 shrink-0 select-none">✓</span>
                                <p className="text-xs leading-relaxed text-gray-355">
                                  <strong>Active Support:</strong> Follow-ups at days 3, 7, and 15 post-joining to verify package conditions.
                                </p>
                              </li>
                            </ul>
                          </div>

                          <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 shadow-sm">
                            <h3 className="font-open-sans text-base font-bold text-gray-900 mb-5 select-none">📋 Next Actions Sequence</h3>
                            <ul className="flex flex-col gap-4">
                              <li className="flex items-center gap-3">
                                <span className="w-6 h-6 rounded-full bg-gray-200 text-gray-800 font-bold text-xs flex items-center justify-center select-none">1</span>
                                <span className="text-xs text-gray-500 font-medium font-medium">Submit this Seeker Form</span>
                              </li>
                              <li className="flex items-center gap-3">
                                <span className="w-6 h-6 rounded-full bg-gray-200 text-gray-800 font-bold text-xs flex items-center justify-center select-none">2</span>
                                <span className="text-xs text-gray-500 font-medium font-medium font-medium">Placement managers analyze profiles</span>
                              </li>
                              <li className="flex items-center gap-3">
                                <span className="w-6 h-6 rounded-full bg-gray-200 text-gray-800 font-bold text-xs flex items-center justify-center select-none">3</span>
                                <span className="text-xs text-gray-500 font-medium font-medium">Consultants coordinate suitable openings</span>
                              </li>
                              <li className="flex items-center gap-3">
                                <span className="w-6 h-6 rounded-full bg-gray-200 text-gray-800 font-bold text-xs flex items-center justify-center select-none">4</span>
                                <span className="text-xs text-gray-500 font-medium font-medium">Interview briefing scheduled</span>
                              </li>
                              <li className="flex items-center gap-3">
                                <span className="w-6 h-6 rounded-full bg-gray-200 text-gray-800 font-bold text-xs flex items-center justify-center select-none">5</span>
                                <span className="text-xs text-gray-500 font-medium font-medium">Attend, get placed, and start!</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {activeTab === "about" && (
          <div className="animate-fade-in font-open-sans bg-white min-h-screen">
            {/* Header Banner */}
            <div className="bg-black text-white py-16 px-6 text-center relative overflow-hidden select-none border-b border-gray-900">
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:3rem_3rem]" />
              <div className="relative z-10 max-w-4xl mx-auto">
                <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight font-open-sans">
                  About Us
                </h1>
              </div>
            </div>

            {/* 1. Title & Paragraph & Wide Image */}
            <section className="bg-white py-16 px-6">
              <div className="max-w-7xl mx-auto flex flex-col gap-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
                  <h2 className="text-3.5xl md:text-4xl font-black text-[#0D1F3C] leading-tight font-open-sans">
                    Connecting Talent With Opportunity Across India
                  </h2>
                  <p className="text-gray-500 text-sm md:text-base leading-relaxed font-medium mt-1">
                    MyJobSolution is a growing recruitment and manpower consultancy dedicated to helping job seekers find the right career opportunities and supporting companies in hiring skilled candidates efficiently. We work with candidates across multiple regions of India with full transparency and professionalism.
                  </p>
                </div>
                
                {/* Wide Image Banner */}
                <div className="w-full aspect-[21/9] overflow-hidden rounded-3xl shadow-lg border border-slate-100">
                  <img 
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=85&w=1200&h=500" 
                    alt="Our Team Workspace" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </section>

            {/* 2. How it works */}
            <section className="bg-white py-16 px-6 border-t border-slate-50">
              <div className="max-w-7xl mx-auto text-center flex flex-col gap-12">
                <div>
                  <h2 className="text-3xl sm:text-4xl font-black text-[#0D1F3C] tracking-tight font-open-sans">
                    How It Works
                  </h2>
                  <p className="text-sm md:text-base text-gray-500 max-w-2xl mx-auto mt-3 font-semibold leading-relaxed">
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
                    <h3 className="font-open-sans text-base font-bold text-slate-800">Create Account</h3>
                    <p className="text-xs text-slate-400 leading-relaxed font-semibold">
                      Sign up for free and create your candidate profile in minutes.
                    </p>
                  </div>

                  {/* Card 2: Upload Resume */}
                  <div className="bg-white border border-slate-100 rounded-3xl p-8 flex flex-col items-center text-center gap-5 shadow-sm hover:shadow-md transition-all duration-300 group">
                    <div className="w-14 h-14 rounded-2xl bg-[#F1F7F6] flex items-center justify-center text-[#0ca581] group-hover:scale-105 transition-transform duration-300">
                      <svg className="w-7 h-7 text-[#0ca581]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <h3 className="font-open-sans text-base font-bold text-slate-800">Upload Resume</h3>
                    <p className="text-xs text-slate-400 leading-relaxed font-semibold">
                      Upload your resume and share your skills and work experience.
                    </p>
                  </div>

                  {/* Card 3: Find Job */}
                  <div className="bg-white border border-slate-100 rounded-3xl p-8 flex flex-col items-center text-center gap-5 shadow-sm hover:shadow-md transition-all duration-300 group">
                    <div className="w-14 h-14 rounded-2xl bg-[#F1F7F6] flex items-center justify-center text-[#0ca581] group-hover:scale-105 transition-transform duration-300">
                      <svg className="w-7 h-7 text-[#0ca581]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <h3 className="font-open-sans text-base font-bold text-slate-800">Find Job</h3>
                    <p className="text-xs text-slate-400 leading-relaxed font-semibold">
                      Browse verified job openings matched to your qualifications.
                    </p>
                  </div>

                  {/* Card 4: Apply Job */}
                  <div className="bg-white border border-slate-100 rounded-3xl p-8 flex flex-col items-center text-center gap-5 shadow-sm hover:shadow-md transition-all duration-300 group">
                    <div className="w-14 h-14 rounded-2xl bg-[#F1F7F6] flex items-center justify-center text-[#0ca581] group-hover:scale-105 transition-transform duration-300">
                      <svg className="w-7 h-7 text-[#0ca581]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                      </svg>
                    </div>
                    <h3 className="font-open-sans text-base font-bold text-slate-800">Apply Job</h3>
                    <p className="text-xs text-slate-400 leading-relaxed font-semibold">
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
                      src="https://images.unsplash.com/photo-1542744094-3a31f103e35f?auto=format&fit=crop&q=85&w=400&h=600" 
                      alt="Professional recruitment" 
                      className="w-full h-full object-cover rounded-3xl shadow-sm aspect-[2/3]"
                    />
                  </div>
                  <div className="col-span-1 flex flex-col gap-4 justify-between">
                    <img 
                      src="https://images.unsplash.com/photo-1531538606174-0f90ff5dce83?auto=format&fit=crop&q=85&w=400&h=300" 
                      alt="Team interview session" 
                      className="w-full object-cover rounded-3xl shadow-sm aspect-[4/3]"
                    />
                    <img 
                      src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=85&w=400&h=300" 
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
                    <h2 className="text-3xl sm:text-4xl font-black text-[#0D1F3C] leading-tight font-open-sans">
                      We Work Only With<br />Trusted Partners
                    </h2>
                    <p className="text-gray-500 text-sm md:text-base leading-relaxed mt-4 font-medium">
                      At MyJobSolution, we partner exclusively with verified companies and carefully screened candidates. Every placement is genuine, transparent, and built on trust — so both employers and job seekers get the best outcomes.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 w-full mt-2">
                    {/* Verified Placements */}
                    <div className="flex gap-3.5">
                      <div className="w-10 h-10 rounded-xl bg-[#F1F7F6] flex items-center justify-center shrink-0">
                        <svg className="w-5 h-5 text-[#0ca581]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-open-sans text-sm font-bold text-slate-800">Verified Placements</h4>
                        <p className="text-xs text-slate-500 mt-1 font-medium leading-relaxed">Every job listing is verified for authenticity and fair wages before we share it with candidates.</p>
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
                        <h4 className="font-open-sans text-sm font-bold text-slate-800">100% Free for Job Seekers</h4>
                        <p className="text-xs text-slate-500 mt-1 font-medium leading-relaxed">We never charge candidates for registration, resume support, or placement — our service is completely free.</p>
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
                        <h4 className="font-open-sans text-sm font-bold text-slate-800">Trusted Company Network</h4>
                        <p className="text-xs text-slate-500 mt-1 font-medium leading-relaxed">We work with reputed companies across Uttar Pradesh and major cities in India.</p>
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
                        <h4 className="font-open-sans text-sm font-bold text-slate-800">Fast Hiring Support</h4>
                        <p className="text-xs text-slate-500 mt-1 font-medium leading-relaxed">From profile submission to interview in as little as 3 working days — we move fast for you.</p>
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
                  <h2 className="text-3xl sm:text-4xl font-black text-[#0D1F3C] tracking-tight font-open-sans">
                    Our Team
                  </h2>
                  <p className="text-sm text-gray-500 mt-3 font-semibold max-w-xl mx-auto leading-relaxed">
                    The dedicated professionals behind MyJobSolution helping connect talent with opportunity.
                  </p>
                </div>

                {/* Centered 3-column grid */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 justify-items-center">
                  {/* Member 1 */}
                  <div className="w-full max-w-[320px] bg-white border border-slate-100 rounded-3xl p-6 flex flex-col gap-4 shadow-sm hover:shadow-lg hover:-translate-y-1.5 transition-all duration-300 group text-center">
                    <div className="aspect-[4/5] w-full rounded-2xl overflow-hidden shadow-inner bg-slate-50 border border-slate-100/50">
                      <img 
                        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=85&w=400&h=500" 
                        alt="Abhishek Pandey" 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="flex flex-col items-center gap-1">
                      <h4 className="font-open-sans text-lg font-bold text-slate-800 leading-snug group-hover:text-[#0ca581] transition-colors">Abhishek Pandey</h4>
                      <p className="text-xs text-[#0ca581] font-bold uppercase tracking-wider">Founder &amp; Managing Director</p>
                      <p className="text-xs text-slate-500 font-medium leading-relaxed mt-2">
                        Leading company operations, recruitment management, and client coordination.
                      </p>
                    </div>
                  </div>

                  {/* Member 2 */}
                  <div className="w-full max-w-[320px] bg-white border border-slate-100 rounded-3xl p-6 flex flex-col gap-4 shadow-sm hover:shadow-lg hover:-translate-y-1.5 transition-all duration-300 group text-center">
                    <div className="aspect-[4/5] w-full rounded-2xl overflow-hidden shadow-inner bg-slate-50 border border-slate-100/50">
                      <img 
                        src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=85&w=400&h=500" 
                        alt="Shalini Verma" 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="flex flex-col items-center gap-1">
                      <h4 className="font-open-sans text-lg font-bold text-slate-800 leading-snug group-hover:text-[#0ca581] transition-colors">Shalini Verma</h4>
                      <p className="text-xs text-[#0ca581] font-bold uppercase tracking-wider">HR Manager</p>
                      <p className="text-xs text-slate-500 font-medium leading-relaxed mt-2">
                        Handling candidate interviews, documentation, and the end-to-end recruitment process.
                      </p>
                    </div>
                  </div>

                  {/* Member 3 */}
                  <div className="w-full max-w-[320px] bg-white border border-slate-100 rounded-3xl p-6 flex flex-col gap-4 shadow-sm hover:shadow-lg hover:-translate-y-1.5 transition-all duration-300 group text-center">
                    <div className="aspect-[4/5] w-full rounded-2xl overflow-hidden shadow-inner bg-slate-50 border border-slate-100/50">
                      <img 
                        src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=85&w=400&h=500" 
                        alt="Rohan Das" 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="flex flex-col items-center gap-1">
                      <h4 className="font-open-sans text-lg font-bold text-slate-800 leading-snug group-hover:text-[#0ca581] transition-colors">Rohan Das</h4>
                      <p className="text-xs text-[#0ca581] font-bold uppercase tracking-wider">Recruitment Executive</p>
                      <p className="text-xs text-slate-500 font-medium leading-relaxed mt-2">
                        Managing candidate sourcing, outreach, and job application support.
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
                  <h2 className="text-3xl sm:text-4xl font-black text-[#0D1F3C] tracking-tight font-open-sans">
                    Frequently Asked Questions
                  </h2>
                  <p className="text-sm text-gray-500 mt-3 font-semibold max-w-xl mx-auto leading-relaxed">
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
                            <span className={`text-sm sm:text-base font-bold font-open-sans ${isOpen ? "text-[#0ca581]" : "text-slate-400"}`}>
                              {indexStr}
                            </span>
                            <span className="text-sm sm:text-base font-bold text-slate-800 leading-snug">
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
                          <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-slate-500 leading-relaxed font-semibold border-t border-emerald-100/30">
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
        )}

        {/* ==================== CONTACT TAB ==================== */}
        {activeTab === "contact" && (
          <div className="max-w-6xl mx-auto px-6 py-12 animate-fade-in">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 animate-fade-in">
              {/* Left coordinates info */}
              <div>
                <span className="bg-gray-150 text-gray-800 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-widest select-none">
                  Get In Touch
                </span>
                <h1 className="font-open-sans text-2.5xl md:text-4xl font-extrabold text-gray-900 mt-3 mb-4 leading-snug">
                  Contact Information
                </h1>
                <p className="text-xs md:text-sm text-gray-505 leading-relaxed mb-10 max-w-md">
                  Have a question regarding active vacancies or our vetting checks? Reach out to our central office coordinates.
                </p>

                <div className="flex flex-col gap-6">
                  {/* Item 1 */}
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-xl bg-gray-100 text-gray-800 flex items-center justify-center text-xl shrink-0 select-none">📞</div>
                    <div>
                      <h4 className="font-open-sans text-xs font-extrabold text-gray-900 uppercase tracking-wide">Phone / WhatsApp</h4>
                      <p className="text-xs md:text-sm text-gray-500 mt-1 font-medium">+91 9984433339</p>
                      <p className="text-xs md:text-sm text-gray-500 mt-0.5 font-medium">+91 9984433339</p>
                    </div>
                  </div>
                  {/* Item 2 */}
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-xl bg-gray-100 text-gray-800 flex items-center justify-center text-xl shrink-0 select-none">📍</div>
                    <div>
                      <h4 className="font-open-sans text-xs font-extrabold text-gray-900 uppercase tracking-wide">Office Address</h4>
                      <p className="text-xs md:text-sm text-gray-555 mt-1 leading-relaxed">
                        MyJobSolution<br />Khalilabad, Sant Kabir Nagar, Uttar Pradesh, India
                      </p>
                    </div>
                  </div>
                  {/* Item 3 */}
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-xl bg-gray-100 text-gray-800 flex items-center justify-center text-xl shrink-0 select-none">✉️</div>
                    <div>
                      <h4 className="font-open-sans text-xs font-extrabold text-gray-900 uppercase tracking-wide">Email &amp; Telegram</h4>
                      <p className="text-xs md:text-sm text-gray-500 mt-1 font-medium">myjobsolution@gmail.com</p>
                      <p className="text-xs md:text-sm text-gray-500 mt-0.5 font-medium">@MyJobSolution</p>
                    </div>
                  </div>
                  {/* Item 4 */}
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-xl bg-gray-100 text-gray-800 flex items-center justify-center text-xl shrink-0 select-none">🕐</div>
                    <div>
                      <h4 className="font-open-sans text-xs font-extrabold text-gray-900 uppercase tracking-wide">Working Hours</h4>
                      <p className="text-xs md:text-sm text-gray-500 mt-1 font-medium">
                        Monday – Saturday: 10:00 AM – 7:00 PM
                      </p>
                      <p className="text-xs md:text-sm text-red-500 mt-0.5 font-bold">Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right form inquiry */}
              <div className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8 shadow-sm">
                <h3 className="font-open-sans text-lg font-bold text-gray-900 mb-5 animate-pulse">Send Us a Message</h3>

                {contactSuccess ? (
                  <div className="bg-emerald-50 border border-emerald-100 text-emerald-800 rounded-xl p-8 text-center animate-pulse animate-fade-in animate-bounce-short">
                    <span className="text-4xl block mb-2 select-none">✉️</span>
                    <h4 className="font-bold text-sm">Message Sent Successfully!</h4>
                    <p className="text-xs mt-1.5 opacity-90 leading-relaxed font-medium">
                      Thank you for writing. Our customer managers will review your query and reply within a few hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleContactSubmit} className="flex flex-col gap-4">
                    <div>
                      <label className="block text-xs font-bold text-gray-905 mb-1.5 font-semibold">
                        Your Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="Full name"
                        value={contactForm.name}
                        onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                        className="w-full bg-white border border-gray-200 focus:border-gray-950 focus:outline-none rounded-xl px-4 py-2.5 text-xs md:text-sm text-gray-95 animate-fade-in"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-905 mb-1.5 font-semibold">
                        Mobile Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        maxLength={10}
                        placeholder="10-digit mobile number"
                        value={contactForm.mobile}
                        onChange={(e) => setContactForm({ ...contactForm, mobile: e.target.value.replace(/\D/g, "") })}
                        className="w-full bg-white border border-gray-200 focus:border-gray-950 focus:outline-none rounded-xl px-4 py-2.5 text-xs md:text-sm text-gray-95 animate-fade-in"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-905 mb-1.5 font-semibold">
                        Email Address <span className="text-gray-400 font-normal">(Optional)</span>
                      </label>
                      <input
                        type="email"
                        placeholder="yourname@gmail.com"
                        value={contactForm.email}
                        onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                        className="w-full bg-white border border-gray-200 focus:border-gray-950 focus:outline-none rounded-xl px-4 py-2.5 text-xs md:text-sm text-gray-95 animate-fade-in"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-905 mb-1.5 font-semibold">
                        Your Location <span className="text-gray-400 font-normal">(Optional)</span>
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Kanpur, Lucknow, Unnao"
                        value={contactForm.location}
                        onChange={(e) => setContactForm({ ...contactForm, location: e.target.value })}
                        className="w-full bg-white border border-gray-200 focus:border-gray-950 focus:outline-none rounded-xl px-4 py-2.5 text-xs md:text-sm text-gray-95 animate-fade-in"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-905 mb-1.5 font-semibold">
                        Query Message <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        rows={3}
                        placeholder="Describe your inquiry or vacancy support requirements..."
                        value={contactForm.message}
                        onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                        className="w-full bg-white border border-gray-200 focus:border-gray-950 focus:outline-none rounded-xl px-4 py-2.5 text-xs md:text-sm text-gray-95 resize-none animate-fade-in"
                        required
                      />
                    </div>

                    <button
                      type="submit"
                      className="bg-gray-900 hover:bg-gray-700 text-white font-extrabold text-xs md:text-sm py-3 rounded-xl transition-all shadow active:scale-95 cursor-pointer mt-2"
                    >
                      Send Message
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
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
              <h3 className="font-open-sans text-xl font-extrabold text-gray-900">Review Application</h3>
              <button
                onClick={() => {
                  setReviewJob(null);
                  setReviewProfile(null);
                }}
                className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-200 hover:bg-gray-300 text-gray-700 transition-colors cursor-pointer"
              >
                ✕
              </button>
            </div>
            
            <div className="p-6 overflow-y-auto">
              <div className="mb-6 bg-purple-50 rounded-xl p-4 border border-purple-100">
                <p className="text-[10px] text-purple-600 uppercase tracking-wider font-bold mb-1">Applying for</p>
                <h4 className="font-open-sans text-lg font-extrabold text-gray-900">{reviewJob.title}</h4>
                <p className="text-xs text-purple-700 font-medium mt-0.5">{reviewJob.company}</p>
              </div>

              <h4 className="text-sm font-bold text-gray-900 mb-4">Confirm Registration Details</h4>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-1.5 ml-1">Full Name</label>
                  <input 
                    type="text" 
                    value={reviewProfile.name}
                    onChange={(e) => setReviewProfile({ ...reviewProfile, name: e.target.value })}
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all"
                  />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-1.5 ml-1">Mobile Number</label>
                    <input 
                      type="text" 
                      value={reviewProfile.mobile}
                      onChange={(e) => setReviewProfile({ ...reviewProfile, mobile: e.target.value })}
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-1.5 ml-1">District</label>
                    <input 
                      type="text" 
                      value={reviewProfile.district}
                      onChange={(e) => setReviewProfile({ ...reviewProfile, district: e.target.value })}
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-1.5 ml-1">Resume / CV File Name</label>
                  <input 
                    type="text" 
                    value={reviewProfile.resumeName}
                    onChange={(e) => setReviewProfile({ ...reviewProfile, resumeName: e.target.value })}
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all font-mono"
                  />
                  <p className="text-[10px] text-gray-400 mt-1.5 ml-1">You can update the file name if you want to submit a differently named document.</p>
                </div>
              </div>
            </div>

            <div className="px-6 py-5 border-t border-gray-100 bg-gray-50/50 flex items-center justify-end gap-3">
              <button
                onClick={() => {
                  setReviewJob(null);
                  setReviewProfile(null);
                }}
                className="px-5 py-2.5 rounded-xl text-xs font-bold text-gray-600 hover:text-gray-900 hover:bg-gray-200 transition-colors cursor-pointer"
              >
                Cancel
              </button>
              <button
                onClick={submitReviewedApplication}
                className="px-6 py-2.5 rounded-xl text-xs font-bold text-white bg-purple-600 hover:bg-purple-700 shadow-md hover:shadow-lg transition-all active:scale-95 cursor-pointer"
              >
                Confirm & Submit Application
              </button>
            </div>
          </div>
        </div>
      )}


      {/* ========================================================
          FOOTER AREA
          ======================================================== */}
      <footer className="bg-[#070b11] text-gray-400 select-none border-t border-gray-800">
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
                  <span className="text-white font-black text-lg leading-tight block">CALL ME</span>
                  <span className="text-white font-black text-lg leading-tight block">JOB SOLUTION</span>
                </div>
              </div>
              <p className="text-xs font-semibold text-[#0ca581] mb-3 italic">
                &ldquo;Connecting Talent With Opportunity&rdquo;
              </p>
              <p className="text-xs leading-relaxed text-gray-400 font-semibold mb-5">
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
                        setFilterQual("");
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
