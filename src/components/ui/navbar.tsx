import { useEffect, useState } from "react";
import {
  Home,
  User,
  Briefcase,
  Mail,
  Sun,
  Moon
} from "lucide-react";
import { NavLink } from "react-router-dom";


export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);
  const navItems = [
    { path: "/", label: "Home", icon: Home },
    { path: "/project", label: "Projects", icon: Briefcase },
    { path: "/about", label: "About", icon: User },
    { path: "/contact", label: "Contact", icon: Mail },
  ];
  
useEffect(() => {
  if (darkMode) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
}, [darkMode]);

return (
  <>
      <nav className="fixed z-50 px-12 py-2 -translate-x-1/2 border border-gray-200 shadow-lg  top-4 left-1/2 bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg dark:border-gray-700 rounded-4xl w-fit">
        <div className="max-w-md mx-auto">
          <div className="flex items-center justify-around">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) => `flex flex-col items-center gap-1 px-3 py-2 rounded-lg transition-all ${
                  isActive
                    ? "text-black dark:text-white bg-gray-100 dark:bg-gray-800"
                    : "text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-700"
                }`}
              >
                  <Icon className={`h-5 w-5 transition-transform`}/>
                  <span className="text-xs font-medium">{item.label}</span>
                </NavLink>
                
              );
            })}
          </div>
        </div>
      </nav>
    
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="fixed z-50 p-3 text-black transition-all bg-gray-200 rounded-lg shadow-md bottom-8 right-2 dark:bg-gray-700 dark:text-white"
      >
        {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
      </button>
      </>
  );
}
export { Navbar };