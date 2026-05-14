type HomePageProps = {
  isSignedIn: boolean;
};

export function HomePage({}: HomePageProps) {
  return (
    <main className="min-h-screen bg-white">
      {/* ==================== HERO ==================== */}
      <section className="bg-white pt-16 pb-0 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
              Find your dream job<br />with MyJobSolution.
            </h1>
            <p className="text-gray-500 text-sm md:text-base mb-8 max-w-md mx-auto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, eiusmod sed do eiusmod
            </p>
            <div className="sm:flex sm:items-center sm:justify-between bg-white border border-gray-200 rounded-2xl sm:rounded-full px-5 py-3 shadow-sm max-w-xl mx-auto gap-3">
              <div className="flex items-center gap-3">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="text-gray-400 flex-shrink-0">
                  <circle cx="8" cy="8" r="5.5" stroke="#9ca3af" strokeWidth="1.5" />
                  <path d="M12.5 12.5L16 16" stroke="#9ca3af" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
                <input
                  type="text"
                  placeholder="Job Title, keywords..."
                  className="w-full sm:w-80 text-sm text-gray-500 bg-transparent focus:outline-none"
                />
              </div>
              <button className="w-full sm:w-auto mt-3 sm:mt-0 bg-gray-900 text-white text-sm font-medium px-6 py-2 rounded-full hover:bg-gray-700 transition-colors">
                Search
              </button>
            </div>
          </div>

          <div className="mt-2 flex justify-center items-end relative">
            <div className="absolute left-0 bottom-0 hidden lg:block">
              <svg width="160" height="240" viewBox="0 0 120 190" fill="none">
                <path d="M28 150 L34 185 L54 185 L60 150Z" fill="#78350f" opacity="0.8" />
                <rect x="26" y="140" width="36" height="12" rx="2" fill="#78350f" opacity="0.7" />
                <line x1="44" y1="140" x2="44" y2="60" stroke="#15803d" strokeWidth="2.5" strokeLinecap="round" />
                <path d="M44 80 Q58 55 72 65 Q62 75 44 80Z" fill="#22c55e" opacity="0.85" />
                <path d="M44 92 Q24 68 12 78 Q22 90 44 92Z" fill="#4ade80" opacity="0.75" />
                <path d="M44 105 Q62 85 74 92 Q64 108 44 105Z" fill="#22c55e" opacity="0.65" />
                <path d="M44 115 Q28 98 18 106 Q26 120 44 115Z" fill="#4ade80" opacity="0.55" />
                <path d="M44 65 Q56 48 66 54 Q58 68 44 65Z" fill="#22c55e" opacity="0.75" />
              </svg>
            </div>
            <div className="absolute right-0 bottom-0 hidden lg:block">
              <svg width="160" height="240" viewBox="0 0 120 190" fill="none">
                <path d="M60 150 L66 185 L86 185 L92 150Z" fill="#78350f" opacity="0.8" />
                <rect x="58" y="140" width="36" height="12" rx="2" fill="#78350f" opacity="0.7" />
                <line x1="78" y1="140" x2="78" y2="60" stroke="#15803d" strokeWidth="2.5" strokeLinecap="round" />
                <path d="M78 80 Q64 55 50 65 Q60 75 78 80Z" fill="#22c55e" opacity="0.85" />
                <path d="M78 92 Q98 68 110 78 Q100 90 78 92Z" fill="#4ade80" opacity="0.75" />
                <path d="M78 105 Q60 85 48 92 Q58 108 78 105Z" fill="#22c55e" opacity="0.65" />
                <path d="M78 115 Q94 98 104 106 Q96 120 78 115Z" fill="#4ade80" opacity="0.55" />
                <path d="M78 65 Q66 48 56 54 Q64 68 78 65Z" fill="#22c55e" opacity="0.75" />
              </svg>
            </div>

            <svg width="750" height="320" viewBox="0 0 750 320" fill="none" xmlns="http://www.w3.org/2000/svg">
              <line x1="100" y1="315" x2="650" y2="315" stroke="#e5e7eb" strokeWidth="1" strokeDasharray="4 4" />
              <rect x="130" y="237" width="490" height="14" rx="3" fill="#374151" />
              <rect x="130" y="251" width="490" height="4" rx="1" fill="#d1d5db" opacity="0.3" />
              <rect x="150" y="255" width="10" height="55" rx="2" fill="#9ca3af" />
              <rect x="600" y="255" width="10" height="55" rx="2" fill="#9ca3af" />
              <rect x="190" y="255" width="10" height="55" rx="2" fill="#9ca3af" />
              <rect x="560" y="255" width="10" height="55" rx="2" fill="#9ca3af" />
              <rect x="148" y="310" width="14" height="6" rx="2" fill="#6b7280" />
              <rect x="598" y="310" width="14" height="6" rx="2" fill="#6b7280" />
              <rect x="188" y="310" width="14" height="6" rx="2" fill="#6b7280" />
              <rect x="558" y="310" width="14" height="6" rx="2" fill="#6b7280" />
              <rect x="260" y="110" width="230" height="130" rx="10" fill="#1a1a1a" />
              <rect x="265" y="115" width="220" height="118" rx="6" fill="#f9fafb" />
              <rect x="265" y="115" width="220" height="32" rx="6" fill="#f3f4f6" />
              <rect x="272" y="122" width="60" height="18" rx="4" fill="#22c55e" />
              <text x="278" y="134" fontSize="8" fill="white" fontFamily="system-ui" fontWeight="600">Hiring</text>
              <line x1="340" y1="131" x2="475" y2="131" stroke="#d1d5db" strokeWidth="1" />
              <circle cx="348" cy="131" r="3" fill="#d1d5db" />
              <circle cx="362" cy="131" r="3" fill="#d1d5db" />
              <circle cx="376" cy="131" r="3" fill="#d1d5db" />
              <rect x="272" y="155" width="100" height="5" rx="2" fill="#d1d5db" />
              <rect x="272" y="165" width="75" height="5" rx="2" fill="#e5e7eb" />
              <rect x="272" y="175" width="85" height="5" rx="2" fill="#e5e7eb" />
              <rect x="272" y="185" width="65" height="5" rx="2" fill="#e5e7eb" />
              <rect x="272" y="200" width="105" height="24" rx="5" fill="#22c55e" opacity="0.8" />
              <text x="282" y="215" fontSize="8" fill="white" fontFamily="system-ui" fontWeight="600">Apply Now</text>
              <rect x="272" y="228" width="45" height="4" rx="2" fill="#d1d5db" />
              <rect x="272" y="234" width="32" height="3" rx="1.5" fill="#e5e7eb" />
              <rect x="395" y="155" width="75" height="73" rx="5" fill="white" stroke="#e5e7eb" strokeWidth="1" />
              <rect x="400" y="160" width="65" height="18" rx="3" fill="#f3f4f6" />
              <text x="406" y="172" fontSize="7" fill="#6b7280" fontFamily="system-ui" fontWeight="500">Applications</text>
              <rect x="405" y="183" width="8" height="18" rx="1.5" fill="#22c55e" opacity="0.7" />
              <rect x="417" y="177" width="8" height="24" rx="1.5" fill="#fbbf24" opacity="0.7" />
              <rect x="429" y="185" width="8" height="16" rx="1.5" fill="#f87171" opacity="0.7" />
              <rect x="441" y="180" width="8" height="21" rx="1.5" fill="#22c55e" opacity="0.7" />
              <line x1="403" y1="205" x2="451" y2="205" stroke="#e5e7eb" strokeWidth="1" />
              <path d="M407 210 L415 203 L420 208 L428 198 L435 204 L443 195" stroke="#22c55e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
              <circle cx="430" cy="200" r="5" fill="#22c55e" opacity="0.15" />
              <line x1="428.5" y1="200" x2="431.5" y2="200" stroke="#22c55e" strokeWidth="1" strokeLinecap="round" />
              <line x1="430" y1="198.5" x2="430" y2="201.5" stroke="#22c55e" strokeWidth="1" strokeLinecap="round" />
              <rect x="195" y="140" width="55" height="55" rx="6" fill="white" stroke="#e5e7eb" strokeWidth="1.5" />
              <rect x="199" y="144" width="47" height="47" rx="4" fill="#f9fafb" />
              <circle cx="222" cy="156" r="7" fill="#22c55e" opacity="0.15" />
              <path d="M218 156 L221 159 L226 153" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
              <rect x="203" y="169" width="38" height="3" rx="1.5" fill="#d1d5db" />
              <rect x="203" y="175" width="28" height="2" rx="1" fill="#e5e7eb" />
              <rect x="203" y="180" width="32" height="2" rx="1" fill="#e5e7eb" />
              <rect x="203" y="185" width="18" height="2" rx="1" fill="#e5e7eb" />
              <rect x="500" y="140" width="55" height="55" rx="6" fill="white" stroke="#e5e7eb" strokeWidth="1.5" />
              <rect x="504" y="144" width="47" height="47" rx="4" fill="#f9fafb" />
              <circle cx="527" cy="156" r="7" fill="#fbbf24" opacity="0.15" />
              <path d="M527 160 V152 M524 156 H530" stroke="#fbbf24" strokeWidth="2" strokeLinecap="round" />
              <rect x="508" y="169" width="38" height="3" rx="1.5" fill="#d1d5db" />
              <rect x="508" y="175" width="28" height="2" rx="1" fill="#e5e7eb" />
              <rect x="508" y="180" width="32" height="2" rx="1" fill="#e5e7eb" />
              <rect x="508" y="185" width="18" height="2" rx="1" fill="#e5e7eb" />
            </svg>
          </div>
        </div>
      </section>

      {/* ==================== FEATURED JOBS ==================== */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8 flex-nowrap">
            <h2 className="text-2xl font-bold text-gray-900 whitespace-nowrap">Our Featured Jobs</h2>
            <a href="#" className="flex items-center gap-1.5 bg-gray-900 text-white text-xs font-medium px-4 py-2 rounded-full hover:bg-gray-700 transition-colors whitespace-nowrap flex-shrink-0">
              View All
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M3 7H11M11 7L8 4M11 7L8 10" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {/* Job Card 1 */}
            <div className="rounded-2xl border border-gray-100 p-5 flex flex-col gap-4 bg-white hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200">
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium px-2.5 py-1 rounded-full border bg-green-50 text-green-700 border-green-200">Full Time</span>
                <span className="text-xs text-gray-400">Sandiego, CA</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                  <span className="text-xs font-bold text-green-700">PM</span>
                </div>
                <div>
                  <h3 className="font-semibold text-sm text-gray-900">Product Manager</h3>
                  <p className="text-xs mt-0.5 text-gray-400">Marketing</p>
                </div>
              </div>
              <p className="text-xs text-gray-500">$2,000 - 5,000 / Monthly</p>
              <button className="w-full py-2.5 rounded-full text-sm font-medium border transition-all bg-gray-900 text-white border-gray-900 hover:bg-green-600 hover:border-green-600">
                Apply Now
              </button>
            </div>

            {/* Job Card 2 */}
            <div className="rounded-2xl border border-gray-100 p-5 flex flex-col gap-4 bg-white hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200">
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium px-2.5 py-1 rounded-full border bg-yellow-50 text-yellow-700 border-yellow-200">Part Time</span>
                <span className="text-xs text-gray-400">Frisco west, CA</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                  <span className="text-xs font-bold text-red-600">PD</span>
                </div>
                <div>
                  <h3 className="font-semibold text-sm text-gray-900">Product Designer</h3>
                  <p className="text-xs mt-0.5 text-gray-400">Designer</p>
                </div>
              </div>
              <p className="text-xs text-gray-500">$2,063 - 5,030 / Weekly</p>
              <button className="w-full py-2.5 rounded-full text-sm font-medium border transition-all bg-gray-900 text-white border-gray-900 hover:bg-green-600 hover:border-green-600">
                Apply Now
              </button>
            </div>

            {/* Job Card 3 */}
            <div className="rounded-2xl border border-gray-100 p-5 flex flex-col gap-4 bg-white hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200">
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium px-2.5 py-1 rounded-full border bg-yellow-50 text-yellow-700 border-yellow-200">Part Time</span>
                <span className="text-xs text-gray-400">Virginia, CA</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                  <span className="text-xs font-bold text-blue-600">RC</span>
                </div>
                <div>
                  <h3 className="font-semibold text-sm text-gray-900">Recruiting Coordinator</h3>
                  <p className="text-xs mt-0.5 text-gray-400">Customers Service</p>
                </div>
              </div>
              <p className="text-xs text-gray-500">$2,900 - 5,900 / Monthly</p>
              <button className="w-full py-2.5 rounded-full text-sm font-medium border transition-all bg-gray-900 text-white border-gray-900 hover:bg-green-600 hover:border-green-600">
                Apply Now
              </button>
            </div>

            {/* Job Card 4 */}
            <div className="rounded-2xl border border-gray-100 p-5 flex flex-col gap-4 bg-white hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200">
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium px-2.5 py-1 rounded-full border bg-green-50 text-green-700 border-green-200">Full Time</span>
                <span className="text-xs text-gray-400">Stoneview, CA</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
                  <span className="text-xs font-bold text-purple-600">SE</span>
                </div>
                <div>
                  <h3 className="font-semibold text-sm text-gray-900">Software Engineer</h3>
                  <p className="text-xs mt-0.5 text-gray-400">Developer</p>
                </div>
              </div>
              <p className="text-xs text-gray-500">$2,063 - 5,903 / Monthly</p>
              <button className="w-full py-2.5 rounded-full text-sm font-medium border transition-all bg-gray-900 text-white border-gray-900 hover:bg-green-600 hover:border-green-600">
                Apply Now
              </button>
            </div>

            {/* Job Card 5 */}
            <div className="rounded-2xl border border-gray-100 p-5 flex flex-col gap-4 bg-white hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200">
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium px-2.5 py-1 rounded-full border bg-yellow-50 text-yellow-700 border-yellow-200">Part Time</span>
                <span className="text-xs text-gray-400">Broadlyme, CA</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                  <span className="text-xs font-bold text-green-700">CS</span>
                </div>
                <div>
                  <h3 className="font-semibold text-sm text-gray-900">Customer Support</h3>
                  <p className="text-xs mt-0.5 text-gray-400">Support</p>
                </div>
              </div>
              <p className="text-xs text-gray-500">$2,063 - 5,030 / Weekly</p>
              <button className="w-full py-2.5 rounded-full text-sm font-medium border transition-all bg-gray-900 text-white border-gray-900 hover:bg-green-600 hover:border-green-600">
                Apply Now
              </button>
            </div>

            {/* Job Card 6 */}
            <div className="rounded-2xl border border-gray-100 p-5 flex flex-col gap-4 bg-white hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200">
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium px-2.5 py-1 rounded-full border bg-green-50 text-green-700 border-green-200">Full Time</span>
                <span className="text-xs text-gray-400">Charleston, CA</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0">
                  <span className="text-xs font-bold text-orange-600">UX</span>
                </div>
                <div>
                  <h3 className="font-semibold text-sm text-gray-900">UI / UX Designer</h3>
                  <p className="text-xs mt-0.5 text-gray-400">Designer</p>
                </div>
              </div>
              <p className="text-xs text-gray-500">$2,200 - 5,903 / Monthly</p>
              <button className="w-full py-2.5 rounded-full text-sm font-medium border transition-all bg-gray-900 text-white border-gray-900 hover:bg-green-600 hover:border-green-600">
                Apply Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== CATEGORIES ==================== */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-10">Our Categories</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="flex flex-col items-center justify-center gap-2 w-28 h-28 rounded-xl border text-sm font-medium transition-all bg-white text-gray-600 border-gray-200 hover:bg-gray-900 hover:text-white hover:border-gray-900">
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none" className="text-gray-500">
                <rect x="3" y="5" width="22" height="16" rx="2" stroke="currentColor" strokeWidth="1.5" />
                <line x1="3" y1="10" x2="25" y2="10" stroke="currentColor" strokeWidth="1.5" />
                <line x1="14" y1="21" x2="14" y2="25" stroke="currentColor" strokeWidth="1.5" />
                <line x1="9" y1="25" x2="19" y2="25" stroke="currentColor" strokeWidth="1.5" />
                <circle cx="6.5" cy="7.5" r="1" fill="currentColor" />
                <circle cx="9.5" cy="7.5" r="1" fill="currentColor" />
                <circle cx="12.5" cy="7.5" r="1" fill="currentColor" />
              </svg>
              <span className="text-xs text-center leading-tight px-2">Web Design</span>
            </button>

            <button className="flex flex-col items-center justify-center gap-2 w-28 h-28 rounded-xl border text-sm font-medium transition-all bg-gray-900 text-white border-gray-900">
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                <path d="M10 9L6 14L10 19" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M18 9L22 14L18 19" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M15 7L13 21" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
              <span className="text-xs text-center leading-tight px-2">Web Development</span>
            </button>

            <button className="flex flex-col items-center justify-center gap-2 w-28 h-28 rounded-xl border text-sm font-medium transition-all bg-white text-gray-600 border-gray-200 hover:bg-gray-900 hover:text-white hover:border-gray-900">
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none" className="text-gray-500">
                <path d="M5 14C5 14 8 8 14 8C20 8 23 14 23 14C23 14 20 20 14 20C8 20 5 14 5 14Z" stroke="currentColor" strokeWidth="1.5" />
                <circle cx="14" cy="14" r="3" stroke="currentColor" strokeWidth="1.5" />
                <path d="M14 4V6M14 22V24M4 14H6M22 14H24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
              <span className="text-xs text-center leading-tight px-2">Marketing</span>
            </button>

            <button className="flex flex-col items-center justify-center gap-2 w-28 h-28 rounded-xl border text-sm font-medium transition-all bg-white text-gray-600 border-gray-200 hover:bg-gray-900 hover:text-white hover:border-gray-900">
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none" className="text-gray-500">
                <rect x="4" y="4" width="20" height="20" rx="2" stroke="currentColor" strokeWidth="1.5" />
                <line x1="4" y1="11" x2="24" y2="11" stroke="currentColor" strokeWidth="1.5" />
                <line x1="4" y1="17" x2="24" y2="17" stroke="currentColor" strokeWidth="1.5" />
                <line x1="10" y1="4" x2="10" y2="24" stroke="currentColor" strokeWidth="1.5" />
                <line x1="18" y1="4" x2="18" y2="24" stroke="currentColor" strokeWidth="1.5" />
              </svg>
              <span className="text-xs text-center leading-tight px-2">Data Entry</span>
            </button>

            <button className="flex flex-col items-center justify-center gap-2 w-28 h-28 rounded-xl border text-sm font-medium transition-all bg-white text-gray-600 border-gray-200 hover:bg-gray-900 hover:text-white hover:border-gray-900">
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none" className="text-gray-500">
                <rect x="3" y="6" width="22" height="16" rx="2" stroke="currentColor" strokeWidth="1.5" />
                <path d="M9 12L7 14L9 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M19 12L21 14L19 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <line x1="13" y1="11" x2="15" y2="17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
              <span className="text-xs text-center leading-tight px-2">Software Engineer</span>
            </button>

            <button className="flex flex-col items-center justify-center gap-2 w-28 h-28 rounded-xl border text-sm font-medium transition-all bg-white text-gray-600 border-gray-200 hover:bg-gray-900 hover:text-white hover:border-gray-900">
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none" className="text-gray-500">
                <circle cx="14" cy="14" r="9" stroke="currentColor" strokeWidth="1.5" />
                <circle cx="14" cy="14" r="3" fill="currentColor" opacity="0.3" />
                <path d="M14 5V9M14 19V23M5 14H9M19 14H23" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M7.93 7.93L10.76 10.76M17.24 17.24L20.07 20.07" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
              <span className="text-xs text-center leading-tight px-2">Graphic Designer</span>
            </button>
          </div>
        </div>
      </section>

      {/* ==================== BLOGS ==================== */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Our Blogs</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Blog 1 */}
            <div className="rounded-2xl overflow-hidden border border-gray-100 group">
              <div className="overflow-hidden">
                <svg width="100%" height="180" viewBox="0 0 360 180" fill="none" style={{ background: "#e0f2fe" }} className="group-hover:scale-105 transition-transform duration-300">
                  <rect x="60" y="115" width="240" height="10" rx="2" fill="#bfdbfe" />
                  <rect x="80" y="124" width="8" height="30" rx="2" fill="#bfdbfe" />
                  <rect x="272" y="124" width="8" height="30" rx="2" fill="#bfdbfe" />
                  <rect x="120" y="75" width="120" height="80" rx="4" fill="#1a1a1a" />
                  <rect x="124" y="79" width="112" height="70" rx="3" fill="#374151" />
                  <rect x="134" y="90" width="55" height="5" rx="2" fill="#93c5fd" />
                  <rect x="134" y="100" width="80" height="4" rx="2" fill="#4b5563" />
                  <rect x="134" y="109" width="65" height="4" rx="2" fill="#4b5563" />
                  <rect x="110" y="152" width="140" height="6" rx="2" fill="#374151" />
                  <rect x="275" y="98" width="24" height="22" rx="3" fill="white" />
                  <path d="M299 105 Q308 105 308 111 Q308 117 299 117" stroke="#bfdbfe" strokeWidth="2" fill="none" />
                  <path d="M282 93 Q284 88 282 84" stroke="#bfdbfe" strokeWidth="1.5" fill="none" strokeLinecap="round" />
                  <path d="M287 93 Q289 88 287 84" stroke="#bfdbfe" strokeWidth="1.5" fill="none" strokeLinecap="round" />
                  <rect x="55" y="98" width="18" height="20" rx="3" fill="#92400e" opacity="0.4" />
                  <ellipse cx="64" cy="90" rx="16" ry="12" fill="#22c55e" opacity="0.7" />
                  <ellipse cx="58" cy="83" rx="11" ry="8" fill="#16a34a" opacity="0.8" />
                  <ellipse cx="70" cy="85" rx="10" ry="7" fill="#4ade80" opacity="0.6" />
                  <rect x="240" y="108" width="40" height="30" rx="2" fill="white" stroke="#bfdbfe" strokeWidth="1" />
                  <line x1="248" y1="117" x2="272" y2="117" stroke="#bfdbfe" strokeWidth="1" />
                  <line x1="248" y1="123" x2="270" y2="123" stroke="#bfdbfe" strokeWidth="1" />
                  <line x1="248" y1="129" x2="265" y2="129" stroke="#bfdbfe" strokeWidth="1" />
                </svg>
              </div>
              <div className="p-5">
                <h3 className="text-sm font-semibold text-gray-900 leading-snug mb-2">Lorem ipsum is placeholder text commonly used in the graphic...</h3>
                <p className="text-xs text-gray-500 leading-relaxed mb-4">Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web...</p>
                <a href="#" className="flex items-center gap-1.5 text-xs font-semibold text-gray-900 hover:text-green-600 transition-colors">
                  READ MORE
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M2 6H10M10 6L7 3M10 6L7 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Blog 2 */}
            <div className="rounded-2xl overflow-hidden border border-gray-100 group">
              <div className="overflow-hidden">
                <svg width="100%" height="180" viewBox="0 0 360 180" fill="none" style={{ background: "#f0fdf4" }} className="group-hover:scale-105 transition-transform duration-300">
                  <rect x="60" y="115" width="240" height="10" rx="2" fill="#bbf7d0" />
                  <rect x="80" y="124" width="8" height="30" rx="2" fill="#bbf7d0" />
                  <rect x="272" y="124" width="8" height="30" rx="2" fill="#bbf7d0" />
                  <rect x="120" y="75" width="120" height="80" rx="4" fill="#1a1a1a" />
                  <rect x="124" y="79" width="112" height="70" rx="3" fill="#374151" />
                  <rect x="134" y="90" width="55" height="5" rx="2" fill="#86efac" />
                  <rect x="134" y="100" width="80" height="4" rx="2" fill="#4b5563" />
                  <rect x="134" y="109" width="65" height="4" rx="2" fill="#4b5563" />
                  <rect x="110" y="152" width="140" height="6" rx="2" fill="#374151" />
                  <rect x="275" y="98" width="24" height="22" rx="3" fill="white" />
                  <path d="M299 105 Q308 105 308 111 Q308 117 299 117" stroke="#bbf7d0" strokeWidth="2" fill="none" />
                  <path d="M282 93 Q284 88 282 84" stroke="#bbf7d0" strokeWidth="1.5" fill="none" strokeLinecap="round" />
                  <path d="M287 93 Q289 88 287 84" stroke="#bbf7d0" strokeWidth="1.5" fill="none" strokeLinecap="round" />
                  <rect x="55" y="98" width="18" height="20" rx="3" fill="#92400e" opacity="0.4" />
                  <ellipse cx="64" cy="90" rx="16" ry="12" fill="#22c55e" opacity="0.7" />
                  <ellipse cx="58" cy="83" rx="11" ry="8" fill="#16a34a" opacity="0.8" />
                  <ellipse cx="70" cy="85" rx="10" ry="7" fill="#4ade80" opacity="0.6" />
                  <rect x="240" y="108" width="40" height="30" rx="2" fill="white" stroke="#bbf7d0" strokeWidth="1" />
                  <line x1="248" y1="117" x2="272" y2="117" stroke="#bbf7d0" strokeWidth="1" />
                  <line x1="248" y1="123" x2="270" y2="123" stroke="#bbf7d0" strokeWidth="1" />
                  <line x1="248" y1="129" x2="265" y2="129" stroke="#bbf7d0" strokeWidth="1" />
                </svg>
              </div>
              <div className="p-5">
                <h3 className="text-sm font-semibold text-gray-900 leading-snug mb-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do...</h3>
                <p className="text-xs text-gray-500 leading-relaxed mb-4">The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled...</p>
                <a href="#" className="flex items-center gap-1.5 text-xs font-semibold text-gray-900 hover:text-green-600 transition-colors">
                  READ MORE
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M2 6H10M10 6L7 3M10 6L7 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Blog 3 */}
            <div className="rounded-2xl overflow-hidden border border-gray-100 group">
              <div className="overflow-hidden">
                <svg width="100%" height="180" viewBox="0 0 360 180" fill="none" style={{ background: "#fef3c7" }} className="group-hover:scale-105 transition-transform duration-300">
                  <rect x="60" y="115" width="240" height="10" rx="2" fill="#fde68a" />
                  <rect x="80" y="124" width="8" height="30" rx="2" fill="#fde68a" />
                  <rect x="272" y="124" width="8" height="30" rx="2" fill="#fde68a" />
                  <rect x="120" y="75" width="120" height="80" rx="4" fill="#1a1a1a" />
                  <rect x="124" y="79" width="112" height="70" rx="3" fill="#374151" />
                  <rect x="134" y="90" width="55" height="5" rx="2" fill="#fcd34d" />
                  <rect x="134" y="100" width="80" height="4" rx="2" fill="#4b5563" />
                  <rect x="134" y="109" width="65" height="4" rx="2" fill="#4b5563" />
                  <rect x="110" y="152" width="140" height="6" rx="2" fill="#374151" />
                  <rect x="275" y="98" width="24" height="22" rx="3" fill="white" />
                  <path d="M299 105 Q308 105 308 111 Q308 117 299 117" stroke="#fde68a" strokeWidth="2" fill="none" />
                  <path d="M282 93 Q284 88 282 84" stroke="#fde68a" strokeWidth="1.5" fill="none" strokeLinecap="round" />
                  <path d="M287 93 Q289 88 287 84" stroke="#fde68a" strokeWidth="1.5" fill="none" strokeLinecap="round" />
                  <rect x="55" y="98" width="18" height="20" rx="3" fill="#92400e" opacity="0.4" />
                  <ellipse cx="64" cy="90" rx="16" ry="12" fill="#22c55e" opacity="0.7" />
                  <ellipse cx="58" cy="83" rx="11" ry="8" fill="#16a34a" opacity="0.8" />
                  <ellipse cx="70" cy="85" rx="10" ry="7" fill="#4ade80" opacity="0.6" />
                  <rect x="240" y="108" width="40" height="30" rx="2" fill="white" stroke="#fde68a" strokeWidth="1" />
                  <line x1="248" y1="117" x2="272" y2="117" stroke="#fde68a" strokeWidth="1" />
                  <line x1="248" y1="123" x2="270" y2="123" stroke="#fde68a" strokeWidth="1" />
                  <line x1="248" y1="129" x2="265" y2="129" stroke="#fde68a" strokeWidth="1" />
                </svg>
              </div>
              <div className="p-5">
                <h3 className="text-sm font-semibold text-gray-900 leading-snug mb-2">Excepteur sint occaecat cupidatat non proident, sunt in...</h3>
                <p className="text-xs text-gray-500 leading-relaxed mb-4">Parts of Cicero&apos;s De Finibus Bonorum et Malorum did he use for his typeset. It usually begins with: Lorem ipsum dolor sit amet...</p>
                <a href="#" className="flex items-center gap-1.5 text-xs font-semibold text-gray-900 hover:text-green-600 transition-colors">
                  READ MORE
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M2 6H10M10 6L7 3M10 6L7 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== TESTIMONIALS ==================== */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-10">What our Client say</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
            {/* Testimonial 1 */}
            <div className="rounded-2xl border border-gray-100 p-5 bg-white">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-xs font-semibold text-gray-700 flex-shrink-0">R</div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">Reeves</p>
                  <p className="text-xs text-gray-400">Manager</p>
                </div>
              </div>
              <StarRating filled={2} />
              <p className="mt-3 text-xs text-gray-500 leading-relaxed line-clamp-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled...</p>
            </div>

            {/* Testimonial 2 */}
            <div className="rounded-2xl border border-gray-100 p-5 bg-white">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-orange-200 flex items-center justify-center text-xs font-semibold text-gray-700 flex-shrink-0">FG</div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">Francis Guzman</p>
                  <p className="text-xs text-gray-400">Developer</p>
                </div>
              </div>
              <StarRating filled={4} />
              <p className="mt-3 text-xs text-gray-500 leading-relaxed line-clamp-4">Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter designer...</p>
            </div>

            {/* Testimonial 3 */}
            <div className="rounded-2xl border border-gray-100 p-5 bg-white">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-green-200 flex items-center justify-center text-xs font-semibold text-gray-700 flex-shrink-0">WT</div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">Wilma Taylor</p>
                  <p className="text-xs text-gray-400">Designer</p>
                </div>
              </div>
              <StarRating filled={3} />
              <p className="mt-3 text-xs text-gray-500 leading-relaxed line-clamp-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled...</p>
            </div>

            {/* Testimonial 4 */}
            <div className="rounded-2xl border border-gray-100 p-5 bg-white">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-purple-200 flex items-center justify-center text-xs font-semibold text-gray-700 flex-shrink-0">MO</div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">Mandy Owens</p>
                  <p className="text-xs text-gray-400">Analyst</p>
                </div>
              </div>
              <StarRating filled={4} />
              <p className="mt-3 text-xs text-gray-500 leading-relaxed line-clamp-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt...</p>
            </div>
          </div>

          <div className="flex justify-center">
            <a href="#" className="flex items-center gap-2 border border-gray-300 text-gray-700 text-sm font-medium px-7 py-2.5 rounded-full hover:bg-gray-900 hover:text-white hover:border-gray-900 transition-all">
              See More
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M3 7H11M11 7L8 4M11 7L8 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* ==================== CONTACT US ==================== */}
      <section className="py-16 px-6 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Contact Us</h2>
            <p className="mt-3 text-gray-500 max-w-lg mx-auto">Have a question or want to work with us? Drop us a message and we&apos;ll get back to you.</p>
          </div>
          <div className="relative flex flex-col items-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full max-w-3xl">
              <div className="border-b border-gray-300 pb-2">
                <input type="text" placeholder="First Name*" className="w-full text-sm text-gray-600 placeholder-gray-400 bg-transparent focus:outline-none" />
              </div>
              <div className="border-b border-gray-300 pb-2">
                <input type="text" placeholder="Last Name*" className="w-full text-sm text-gray-600 placeholder-gray-400 bg-transparent focus:outline-none" />
              </div>
              <div className="border-b border-gray-300 pb-2">
                <input type="email" placeholder="Email Address*" className="w-full text-sm text-gray-600 placeholder-gray-400 bg-transparent focus:outline-none" />
              </div>
              <div className="border-b border-gray-300 pb-2">
                <input type="text" placeholder="Location*" className="w-full text-sm text-gray-600 placeholder-gray-400 bg-transparent focus:outline-none" />
              </div>
              <div className="md:col-span-2 border-b border-gray-300 pb-2">
                <textarea placeholder="Message" rows={4} className="w-full text-sm text-gray-600 placeholder-gray-400 bg-transparent focus:outline-none resize-none" />
              </div>
            </div>
            <div className="mt-6 w-full max-w-3xl flex justify-center">
              <button className="bg-gray-900 text-white text-sm font-medium px-10 py-3 rounded-full hover:bg-green-600 transition-colors">Send Message</button>
            </div>
            <div className="absolute bottom-0 right-0 opacity-20 hidden lg:block">
              <svg width="200" height="180" viewBox="0 0 200 180" fill="none">
                <path d="M20 160 L180 20 L160 180 L100 130 L60 170 L80 110 L20 160Z" stroke="#9ca3af" strokeWidth="2" fill="none" />
                <line x1="180" y1="20" x2="80" y2="110" stroke="#9ca3af" strokeWidth="1.5" />
                <path d="M60 170 L80 110 L100 130" stroke="#9ca3af" strokeWidth="1.5" fill="none" />
              </svg>
            </div>
            <div className="absolute -bottom-8 left-0 opacity-15 hidden lg:block">
              <svg width="80" height="120" viewBox="0 0 80 120" fill="none">
                <circle cx="40" cy="45" r="28" stroke="#9ca3af" strokeWidth="2" />
                <path d="M28 70 Q40 85 52 70" stroke="#9ca3af" strokeWidth="2" fill="none" />
                <line x1="40" y1="98" x2="40" y2="115" stroke="#9ca3af" strokeWidth="2" />
                <line x1="30" y1="5" x2="40" y2="17" stroke="#9ca3af" strokeWidth="1.5" strokeLinecap="round" />
                <line x1="50" y1="5" x2="40" y2="17" stroke="#9ca3af" strokeWidth="1.5" strokeLinecap="round" />
                <line x1="10" y1="30" x2="22" y2="36" stroke="#9ca3af" strokeWidth="1.5" strokeLinecap="round" />
                <line x1="70" y1="30" x2="58" y2="36" stroke="#9ca3af" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== PARTNERS ==================== */}
      <section className="py-10 px-6 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap items-center justify-center gap-10 md:gap-16">
            <div className="flex items-center gap-1.5">
              <div className="w-7 h-7 bg-gray-900 rounded-md flex items-center justify-center">
                <span className="text-white text-xs font-bold">I</span>
              </div>
              <span className="font-bold text-gray-700 text-base tracking-wide">IROKO<span className="text-green-600">Y</span></span>
            </div>

            <div className="flex items-center gap-1.5">
              <div className="w-7 h-7 bg-blue-600 rounded-md flex items-center justify-center">
                <span className="text-white text-xs font-bold">L</span>
              </div>
              <span className="font-semibold text-gray-700 text-base">lendsqr</span>
            </div>

            <div className="flex items-center gap-1.5">
              <div className="flex gap-0.5">
                <div className="w-3 h-6 bg-orange-500 rounded-sm"></div>
                <div className="w-3 h-6 bg-red-600 rounded-sm"></div>
              </div>
              <span className="font-bold text-gray-700 text-base">Interswitch</span>
              <span className="text-orange-500 text-sm">✦</span>
            </div>

            <div className="flex items-center gap-1.5">
              <div className="w-7 h-7 bg-purple-600 rounded-md flex items-center justify-center">
                <span className="text-white text-xs font-bold">k</span>
              </div>
              <span className="font-bold text-gray-700 text-base">kuda.</span>
            </div>

            <div className="flex items-center gap-1.5">
              <div className="w-7 h-7 bg-green-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-bold">G</span>
              </div>
              <span className="font-semibold text-gray-700 text-base">Gloopro</span>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== FOOTER ==================== */}
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
            <div>
              <h4 className="font-semibold text-sm text-gray-200 mb-4">Company</h4>
              <ul className="space-y-2.5">
                <li><a href="#" className="text-xs text-gray-400 hover:text-white transition-colors">Jobs</a></li>
                <li><a href="#" className="text-xs text-gray-400 hover:text-white transition-colors">Categories</a></li>
                <li><a href="#" className="text-xs text-gray-400 hover:text-white transition-colors">Blogs</a></li>
                <li><a href="#" className="text-xs text-gray-400 hover:text-white transition-colors">Testimonials</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-sm text-gray-200 mb-4">Help</h4>
              <ul className="space-y-2.5">
                <li><a href="#" className="text-xs text-gray-400 hover:text-white transition-colors">Customer Support</a></li>
                <li><a href="#" className="text-xs text-gray-400 hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="#" className="text-xs text-gray-400 hover:text-white transition-colors">Terms &amp; Conditions</a></li>
                <li><a href="#" className="text-xs text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-sm text-gray-200 mb-4">Resources</h4>
              <ul className="space-y-2.5">
                <li><a href="#" className="text-xs text-gray-400 hover:text-white transition-colors">Info</a></li>
                <li><a href="#" className="text-xs text-gray-400 hover:text-white transition-colors">Categories</a></li>
                <li><a href="#" className="text-xs text-gray-400 hover:text-white transition-colors">Blogs</a></li>
                <li><a href="#" className="text-xs text-gray-400 hover:text-white transition-colors">Testimonials</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-sm text-gray-200 mb-4">Resources</h4>
              <ul className="space-y-2.5">
                <li><a href="#" className="text-xs text-gray-400 hover:text-white transition-colors">Customer Support</a></li>
                <li><a href="#" className="text-xs text-gray-400 hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="#" className="text-xs text-gray-400 hover:text-white transition-colors">Terms &amp; Conditions</a></li>
                <li><a href="#" className="text-xs text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <img src="/MyJobSolution-removebg-preview.png" alt="MyJobSolution" className="h-8 w-auto" />
            </div>
            <p className="text-xs text-gray-400 text-center">&copy; Copyright 2024. All Rights Reserved by MyJobSolution</p>
            <div className="flex items-center gap-3">
              <a href="#" className="w-7 h-7 rounded-full bg-gray-700 flex items-center justify-center hover:bg-gray-500 transition-colors">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M7.5 1H9V3H7.5C7.22 3 7 3.22 7 3.5V5H9L8.5 7H7V11H5V7H4V5H5V3.5C5 2.12 6.12 1 7.5 1Z" fill="white" />
                </svg>
              </a>
              <a href="#" className="w-7 h-7 rounded-full bg-gray-700 flex items-center justify-center hover:bg-gray-500 transition-colors">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M1 1L5 6.5L1 11H2.5L5.7 7.5L8.5 11H11L6.8 5.2L10.5 1H9L6.1 4.3L3.5 1H1Z" fill="white" />
                </svg>
              </a>
              <a href="#" className="w-7 h-7 rounded-full bg-gray-700 flex items-center justify-center hover:bg-gray-500 transition-colors">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <rect x="1" y="1" width="10" height="10" rx="3" stroke="white" strokeWidth="1.2" />
                  <circle cx="6" cy="6" r="2.5" stroke="white" strokeWidth="1.2" />
                  <circle cx="9" cy="3" r="0.8" fill="white" />
                </svg>
              </a>
              <a href="#" className="w-7 h-7 rounded-full bg-gray-700 flex items-center justify-center hover:bg-gray-500 transition-colors">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <rect x="1" y="4" width="2.5" height="7" fill="white" />
                  <circle cx="2.25" cy="2" r="1.25" fill="white" />
                  <path d="M5 4H7.5V5C8 4.2 8.8 3.8 9.5 4C10.8 4.3 11 5.5 11 6.5V11H8.5V7C8.5 6.2 8.3 5.5 7.5 5.5C6.7 5.5 6.5 6.2 6.5 7V11H5V4Z" fill="white" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}

function StarRating({ filled }: { filled: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg key={star} width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path
            d="M7 1L8.545 5.18L13 5.635L9.85 8.54L10.795 13L7 10.795L3.205 13L4.15 8.54L1 5.635L5.455 5.18L7 1Z"
            fill={star <= filled ? "#fbbf24" : "#e5e7eb"}
            stroke={star <= filled ? "#fbbf24" : "#e5e7eb"}
            strokeWidth="0.5"
          />
        </svg>
      ))}
    </div>
  );
}
