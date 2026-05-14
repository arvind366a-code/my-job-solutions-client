export function AppHeader() {
  return (
    <nav className="w-full bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-2 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img src="/MyJobSolution-removebg-preview.png" alt="MyJobSolution" className="h-16 w-auto" />
        </div>

        <ul className="hidden md:flex items-center gap-7 text-sm text-gray-600 font-medium">
          <li><a href="#" className="hover:text-gray-900 transition-colors">Home</a></li>
          <li><a href="#" className="hover:text-gray-900 transition-colors">Jobs</a></li>
          <li><a href="#" className="hover:text-gray-900 transition-colors">Blogs</a></li>
          <li><a href="#" className="hover:text-gray-900 transition-colors">Contact Us</a></li>
        </ul>

        <div className="hidden md:flex items-center gap-3">
          <button className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors">
            Sign in
          </button>
          <button className="flex items-center gap-2 bg-gray-900 text-white text-sm font-medium px-4 py-2 rounded-full hover:bg-gray-700 transition-colors">
            Post a Job
            <span className="w-5 h-5 bg-white rounded-full flex items-center justify-center">
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                <path d="M2 5H8M8 5L5.5 2.5M8 5L5.5 7.5" stroke="#111" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </button>
        </div>

        <button className="md:hidden">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>
      </div>
    </nav>
  );
}
