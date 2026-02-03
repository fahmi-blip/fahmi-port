import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";


export default function HomePage() {
      const [activeSection, setActiveSection] = useState("home");
      const navigate =useNavigate();

return (
          <div className="flex flex-col items-center justify-center min-h-screen px-4 text-center ">
            <div className="max-w-4xl mx-auto">
              <img
                src="/20240814_173945.jpg"
                alt="Profile"
                className="object-cover w-32 h-32 m-8 mx-auto border-4 border-white rounded-full shadow-lg mb-18 scale-180"
              />
              <h1 className="mb-4 text-4xl font-bold md:text-6xl bg-gradient-to-bl">
                Fahmi Syihaab
              </h1>
              <p className="mb-8 text-xl text-gray-600 md:text-2xl dark:text-gray-300">
                Full Stack Developer & UI/UX Designer
              </p>
              <p className="max-w-2xl mx-auto mb-12 text-lg leading-relaxed text-gray-500 dark:text-gray-300">
                I create beautiful, functional, and user-centered digital
                experiences. With expertise in modern web technologies, I bring
                ideas to life through code.
              </p>
              <div className="flex justify-center gap-4">
                <Button
                  onClick={() => navigate("/project")}
                  size="lg"
                  className="to-black"
                >
                  View My Projects
                </Button>
                <Button variant="outline" size="lg"
                
                onClick={() => {
                  const link = document.createElement("a")
                  link.href = "/Fahmi-Syihaab-CV.pdf"
                  link.download = "Fahmi-Syihaab-CV.pdf" 
                  link.click()}}
                >
                  Download CV
                </Button>
              </div>
            </div>
          </div>
        );
    }