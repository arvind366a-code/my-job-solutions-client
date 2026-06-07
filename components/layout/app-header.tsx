"use client";

interface AppHeaderProps {
  isSignedIn: boolean;
  userProfile: {
    name: string;
    mobile: string;
    qualification: string;
    experience: string;
    resumeName: string;
  } | null;
  activeTab: string;
  setActiveTab: (tab: string) => void;
  appliedCount: number;
  onSignOut: () => void;
  onOpenLogin: () => void;
  onOpenSignup: () => void;
}

export function AppHeader({
  isSignedIn,
  userProfile,
  activeTab,
  setActiveTab,
  appliedCount,
  onSignOut,
  onOpenLogin,
  onOpenSignup,
}: AppHeaderProps) {
  // Extract initials from name (e.g. "Ankit Verma" -> "AV")
  const getInitials = (name: string) => {
    if (!name) return "JS";
    const parts = name.trim().split(/\s+/);
    if (parts.length >= 2) {
      return (parts[0][0] + parts[1][0]).toUpperCase();
    }
    return parts[0].substring(0, 2).toUpperCase();
  };

  return (
    <nav className="w-full bg-white border-b border-gray-150 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-1.5 flex items-center justify-between">
        {/* Restored Original Logo */}
        <div 
          onClick={() => setActiveTab("home")} 
          className="flex items-center gap-2 cursor-pointer select-none"
        >
          <img 
            src="/MyJobSolution-removebg-preview.png" 
            alt="MyJobSolution Logo" 
            className="h-14 w-auto object-contain"
          />
        </div>

        {/* Navigation Links */}
        <ul className="hidden md:flex items-center gap-6 text-sm font-semibold select-none">
          <li>
            <button
              onClick={() => setActiveTab("home")}
              className={`py-1.5 px-3 rounded-lg transition-all duration-200 cursor-pointer ${
                activeTab === "home"
                  ? "bg-gray-100 text-gray-900 font-bold"
                  : "text-gray-500 hover:bg-gray-50 hover:text-gray-900"
              }`}
            >
              Home
            </button>
          </li>
          <li>
            <button
              onClick={() => setActiveTab("jobs")}
              className={`py-1.5 px-3 rounded-lg transition-all duration-200 cursor-pointer ${
                activeTab === "jobs"
                  ? "bg-gray-100 text-gray-900 font-bold"
                  : "text-gray-500 hover:bg-gray-50 hover:text-gray-900"
              }`}
            >
              Browse Jobs
            </button>
          </li>

          {/* Conditional Applied Jobs Section */}
          {isSignedIn && (
            <li>
              <button
                onClick={() => setActiveTab("applied")}
                className={`py-1.5 px-3 rounded-lg transition-all duration-200 flex items-center gap-1.5 cursor-pointer ${
                  activeTab === "applied"
                    ? "bg-gray-100 text-gray-900 font-bold"
                    : "text-gray-500 hover:bg-gray-50 hover:text-gray-900"
                }`}
              >
                Applied
                <span className="inline-flex items-center justify-center w-5 h-5 text-xs font-bold bg-[#0D1F3C] text-white rounded-full">
                  {appliedCount}
                </span>
              </button>
            </li>
          )}

          <li>
            <button
              onClick={() => setActiveTab("about")}
              className={`py-1.5 px-3 rounded-lg transition-all duration-200 cursor-pointer ${
                activeTab === "about"
                  ? "bg-gray-100 text-gray-900 font-bold"
                  : "text-gray-500 hover:bg-gray-50 hover:text-gray-900"
              }`}
            >
              About
            </button>
          </li>
          <li>
            <button
              onClick={() => setActiveTab("contact")}
              className={`py-1.5 px-3 rounded-lg transition-all duration-200 cursor-pointer ${
                activeTab === "contact"
                  ? "bg-gray-100 text-gray-900 font-bold"
                  : "text-gray-500 hover:bg-gray-50 hover:text-gray-900"
              }`}
            >
              Contact Us
            </button>
          </li>
        </ul>

        {/* Right side Actions */}
        <div className="flex items-center gap-3">
          {!isSignedIn ? (
            <div className="flex items-center gap-3">
              <button
                onClick={onOpenLogin}
                className="text-sm font-bold text-gray-600 hover:text-gray-900 hover:bg-gray-50 px-4 py-2 rounded-xl transition-all cursor-pointer"
              >
                Sign In
              </button>
              <button
                onClick={onOpenSignup}
                className="bg-gray-900 text-white text-xs md:text-sm font-bold px-5 py-2.5 rounded-full hover:bg-gray-700 active:scale-95 transition-all shadow-md hover:shadow-lg cursor-pointer"
              >
                Register Free
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-3 bg-gray-50 border border-gray-200 pl-2 pr-3 py-1.5 rounded-full select-none">
              {/* User Avatar */}
              <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-gray-900 to-gray-700 text-white flex items-center justify-center text-xs font-bold tracking-wide shadow-inner">
                {getInitials(userProfile?.name || "")}
              </div>
              <div className="hidden sm:block text-left mr-1">
                <p className="text-xs font-bold text-gray-900 leading-none line-clamp-1">
                  {userProfile?.name || "Job Seeker"}
                </p>
                <p className="text-[10px] text-gray-400 leading-none mt-0.5 font-medium">
                  Verified Seeker
                </p>
              </div>
              <button
                onClick={onSignOut}
                className="text-xs font-semibold text-red-500 hover:text-red-700 hover:bg-red-50 px-2.5 py-1 rounded-full transition-all cursor-pointer border border-transparent hover:border-red-100"
              >
                Sign Out
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
