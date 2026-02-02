import { useEffect, useState } from "react";
import {
  Home,
  User,
  Briefcase,
  Mail,
  Github,
  Linkedin,
  ExternalLink,
  Sun,
  Moon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function AboutPage() {
    const skills = [
    "JavaScript",
    "TypeScript",
    "React",
    "Python",
    "Laravel",
    "Java",
    "MySql",
    "Git",
    "Figma",
    "Adobe Creative Suite",
    "UI/UX Design",
    "Responsive Design",
    "Canva",
  ];
  

return (
          <div className="px-4 py-20">
            <div className="max-w-4xl mx-auto">
              <h2 className="m-8 mb-12 text-3xl font-bold text-center md:text-4xl">
                About Me
              </h2>
              <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
                <div>
                  <img
                    src="/20240814_173945.jpg"
                    alt="About me"
                    className="rounded-lg shadow-lg w-4xl h-fit"
                  />
                </div>
                <div>
                  <h3 className="mb-6 text-2xl font-semibold">
                    Hello! I'm Fahmi Syihaab
                  </h3>
                  <p className="mb-6 leading-relaxed text-gray-600 dark:text-gray-300">
                    I'm a passionate full-stack developer with over 1 years of
                    experience creating digital solutions that make a
                    difference. I love turning complex problems into simple,
                    beautiful, and intuitive designs.
                  </p>
                  <p className="mb-8 leading-relaxed text-gray-600 dark:text-gray-300">
                    When I'm not coding, you can find me exploring new
                    technologies, contributing to open-source projects, or
                    enjoying a good cup of coffee while reading about the latest
                    trends in web development and design.
                  </p>
                  <div className="mb-8">
                    <h4 className="mb-4 text-lg font-semibold">
                      Skills & Technologies
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {skills.map((skill, index) => (
                        <Badge
                          key={index}
                          variant="outline"
                          className="text-sm"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <Button variant="outline" size="sm" onClick={() => window.open("https://github.com/fahmi-blip")}> 
                      <Github className="w-6 h-4 mr-2"/>
                        GitHub
                    </Button>
                    <Button variant="outline" size="sm" onClick={() => window.open("https://www.linkedin.com/in/fahmi-syihaab-769918323/")}>
                      <Linkedin className="w-4 h-4 mr-2" />
                      LinkedIn
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
    };