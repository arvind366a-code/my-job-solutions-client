export interface UserProfile {
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

export interface Application {
  jobId: string;
  appliedAt: string;
  status: "Under Review" | "Interview Scheduled" | "Placed" | "Rejected";
  resumeName: string;
}

export interface JobOpening {
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

export const CAREER_BRIDGE_JOBS: JobOpening[] = [
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

export const getJobCategory = (jobId: string) => {
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

export const getJobExperienceMockup = (jobId: string) => {
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

export const getJobMaxSalaryNum = (salaryStr: string) => {
  const clean = salaryStr.replace(/[^0-9-]/g, "");
  const parts = clean.split("-");
  if (parts.length > 1) {
    return parseInt(parts[1], 10);
  }
  return parseInt(parts[0], 10) || 0;
};

export const getJobMinSalaryNum = (salaryStr: string) => {
  const clean = salaryStr.replace(/[^0-9-]/g, "");
  const parts = clean.split("-");
  return parseInt(parts[0], 10) || 0;
};
