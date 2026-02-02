import { useEffect, useState } from "react";
import {
  Home,
  User,
  Briefcase,
  Mail,
} from "lucide-react";


export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [darkMode, setDarkMode] = useState(false);
  const navItems = [
    { id: "home", label: "Home", icon: Home },
    { id: "projects", label: "Projects", icon: Briefcase },
    { id: "about", label: "About", icon: User },
    { id: "contact", label: "Contact", icon: Mail },
  ];
useEffect(() => {
  if (darkMode) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
}, [darkMode]);

return (
    <div className="min-h-screen text-gray-900 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 dark:text-gray-100">
      {/* Main Content */}
      <nav className="fixed px-12 py-2 -translate-x-1/2 border border-gray-200 shadow-lg top-4 left-1/2 bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg dark:border-gray-700 rounded-4xl w-fit">
        <div className="max-w-md mx-auto">
          <div className="flex items-center justify-around">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;
              return (
                <button
                key={item.id}
                onClick={() => setActiveSection(item.id)}
                className={`flex flex-col items-center gap-1 px-3 py-2 rounded-lg transition-all ${
                  isActive
                    ? "text-black dark:text-white bg-gray-100 dark:bg-gray-800"
                    : "text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-700"
                }`}
              >
                  <Icon
                    className={`h-5 w-5 ${
                      isActive ? "scale-110" : ""
                    } transition-transform`}
                  />
                  <span className="text-xs font-medium">{item.label}</span>
                </button>
                
              );
            })}
          </div>
        </div>
      </nav>
    </div>
  );
}
export { Navbar }