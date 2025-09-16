import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white dark:bg-gray-800 shadow-md px-6 py-3 flex justify-between items-center sticky top-0 z-50">
      <Link to="/dashboard" className="text-xl font-bold text-gray-900 dark:text-white">
        AI Platform
      </Link>
      <div className="flex space-x-4">
        <NavLink to="/dashboard" className={({ isActive }) => isActive ? "text-blue-600 dark:text-blue-400 font-semibold" : "text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"}>
          Dashboard
        </NavLink>
        <NavLink to="/dashboard/resume-matcher" className={({ isActive }) => isActive ? "text-blue-600 dark:text-blue-400 font-semibold" : "text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"}>
          Resume Matcher
        </NavLink>
        <NavLink to="/dashboard/code-reviewer" className={({ isActive }) => isActive ? "text-blue-600 dark:text-blue-400 font-semibold" : "text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"}>
          Code Reviewer
        </NavLink>
        <NavLink to="/dashboard/learning-assistant" className={({ isActive }) => isActive ? "text-blue-600 dark:text-blue-400 font-semibold" : "text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"}>
          Learning Assistant
        </NavLink>
      </div>
      <div className="relative">
        {/* Profile Dropdown Placeholder */}
        <Link to="/dashboard/profile" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
          Profile
        </Link>
        {/* Add dropdown logic for settings and logout here */}
      </div>
    </nav>
  );
};

export default Navbar;
