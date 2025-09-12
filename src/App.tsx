"use client";

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

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home");
  const [activeProjectCategory, setActiveProjectCategory] = useState("all");

  const navItems = [
    { id: "home", label: "Home", icon: Home },
    { id: "projects", label: "Projects", icon: Briefcase },
    { id: "about", label: "About", icon: User },
    { id: "contact", label: "Contact", icon: Mail },
  ];

  const projectCategories = [
    { id: "all", label: "All Projects" },
    { id: "web", label: "Web Development" },
    { id: "uiux", label: "UI/UX Design" },
    // { id: "graphic", label: "Graphic Design" },
  ];

  const skills = [
    "JavaScript",
    "TypeScript",
    "React",
    "Python",
    "Java",
    "MongoDB",
    "Git",
    "Figma",
    "Adobe Creative Suite",
    "UI/UX Design",
    "Responsive Design",
    "Canva",
  ];
  
  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "E-commerce solution using html, css, javascript integrated payment",
      tech: ["HTML", "CSS", "JavaScript"],
      image: "/Screenshot 2025-08-17 160031.png",
      link: "https://fahmi-blip.github.io/e-commerce/",
      category: "web",
    },
    {
      title: "Empowerment Website",
      description:
        "Responsive empowerment website with online educational content.",
      tech: ["Webflow", "Figma"],
      image: "/Screenshot 2025-08-16 083122.png",
      link: "https://equivoice.webflow.io/",
      category: "web",
    },
    {
      title: "Bookshelf App",
      description:
        "A simple web application to manage book lists digitally with localStorage.",
      tech: ["HTML", "CSS", "JavaScript"],
      image: "/image.png",
      link: "https://fahmi-blip.github.io/Bookshelf-App/",
      category: "web",
    },
    {
      title: "ResQ: AI-based disaster preparedness",
      description:
        "Project from a national competition that won 3rd place",
      tech: ["Figma", "Prototyping", "User Research"],
      image: "/Screenshot 2025-08-17 161543.png",
      link: "https://www.figma.com/design/Ui7GPPP9ZH5XLfPFwUooEh/ResQ?node-id=912-66&t=gvV65VOxTb8avhhV-1",
      category: "uiux",
    },
    {
      title: "Pujasera: Pusat Jajanan Serba Ada application engine based",
      description:
      "College project about application for ordering food and drinks.",
      tech: ["Figma", "Prototyping", "User Research"],
      image: "/Iphone 16.png",
      link: "https://www.figma.com/design/pLUo5APZyVOZu6BeQtfal1/Pujasera?node-id=0-1&t=iyPabscMzHugHGA2-1",
      category: "uiux",
    },
    // {
    //   title: "Brand Identity Design",
    //   description:
    //     "Complete brand identity package including logo, color palette, and brand guidelines.",
    //   tech: ["Adobe Illustrator", "Photoshop", "Brand Strategy", "Typography"],
    //   image: "/brand-identity-design.png",
    //   link: "#",
    //   category: "graphic",
    // },
    // {
    //   title: "Music Festival Poster",
    //   description:
    //     "Eye-catching poster design for annual music festival with vibrant graphics.",
    //   tech: ["Adobe Photoshop", "Illustrator", "Typography", "Print Design"],
    //   image: "/music-festival-poster.png",
    //   link: "#",
    //   category: "graphic",
    // }
  ];

//dark moder
const [darkMode, setDarkMode] = useState(false);

useEffect(() => {
  if (darkMode) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
}, [darkMode]);

  const filteredProjects =
    activeProjectCategory === "all"
      ? projects
      : projects.filter(
          (project) => project.category === activeProjectCategory
        );
useEffect(()=>{
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  })
},[activeSection])
  const renderContent = () => {
    switch (activeSection) {
      case "home":
        return (
          <div className="flex flex-col items-center justify-center min-h-screen text-center px-4 ">
            <div className="max-w-4xl mx-auto">
              <img
                src="/20240814_173945.jpg"
                alt="Profile"
                className="w-32 h-32 rounded-full mx-auto mb-18 object-cover border-4 border-white shadow-lg scale-180 m-8"
              />
              <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-bl">
                Fahmi Syihaab
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8">
                Full Stack Developer & UI/UX Designer
              </p>
              <p className="text-lg text-gray-500 dark:text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
                I create beautiful, functional, and user-centered digital
                experiences. With expertise in modern web technologies, I bring
                ideas to life through code.
              </p>
              <div className="flex gap-4 justify-center">
                <Button
                  onClick={() => setActiveSection("projects")}
                  size="lg"
                  className="to-black"
                >
                  View My Projects
                </Button>
                {/* <Button variant="outline" size="lg"
                onClick={() => {
                  const link = document.createElement("a")
                  link.href = "/CV.pdf"
                  link.download = "CV.pdf" 
                  link.click()}}
                >
                  Download CV
                </Button> */}
              </div>
            </div>
          </div>
        );

      case "projects":
        return (
          <div className="py-20 px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 m-8">
                My Projects
              </h2>
              <p className="text-gray-600 dark:text-gray-300 text-center mb-8 max-w-2xl mx-auto">
                Here are some of my recent projects that showcase my skills and
                experience across different disciplines.
              </p>

              {/* Project Category Filter */}
              <div className="flex flex-wrap justify-center gap-2 mb-12">
                {projectCategories.map((category) => (
                  <Button
                    key={category.id}
                    variant={
                      activeProjectCategory === category.id
                        ? "default"
                        : "outline"
                    }
                    size="sm"
                    onClick={() => setActiveProjectCategory(category.id)}
                    className={`transition-all ${
                      activeProjectCategory === category.id
                        ? "to-black"
                        : "hover:bg-gray-50"
                    }`}
                  >
                    {category.label}
                  </Button>
                ))}
              </div>

              {/* Projects Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProjects.map((project, index) => (
                  <a 
                  key={index}
                  href={project.link}
                  target= "_blank">
                  <Card
                    key={index}
                    className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle className="flex items-center justify-between">
                        <span className="text-lg">{project.title}</span>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="h-8 w-8 p-0"
                        >
                          <ExternalLink className="h-4 w-4" />
                        </Button>
                      </CardTitle>
                      <CardDescription className="text-sm leading-relaxed">
                        {project.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-1">
                        {project.tech.map((tech, techIndex) => (
                          <Badge
                            key={techIndex}
                            variant="secondary"
                            className="text-xs"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                  </a>
                ))}
              </div>

              {/* No projects message */}
              {filteredProjects.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-gray-500 dark:text-gray-300">
                    No projects found in this category.
                  </p>
                </div>
              )}
            </div>
          </div>
        );

      case "about":
        return (
          <div className="py-20 px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 m-8">
                About Me
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <img
                    src="/20240814_173945.jpg"
                    alt="About me"
                    className="w-4xl h-fit rounded-lg shadow-lg"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-6">
                    Hello! I'm Fahmi Syihaab
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                    I'm a passionate full-stack developer with over 1 years of
                    experience creating digital solutions that make a
                    difference. I love turning complex problems into simple,
                    beautiful, and intuitive designs.
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                    When I'm not coding, you can find me exploring new
                    technologies, contributing to open-source projects, or
                    enjoying a good cup of coffee while reading about the latest
                    trends in web development and design.
                  </p>
                  <div className="mb-8">
                    <h4 className="text-lg font-semibold mb-4">
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
                      <Github className="h-4 w-6 mr-2"/>
                        GitHub
                    </Button>
                    <Button variant="outline" size="sm" onClick={() => window.open("https://www.linkedin.com/in/fahmi-syihaab-769918323/")}>
                      <Linkedin className="h-4 w-4 mr-2" />
                      LinkedIn
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case "contact":
        return (
          <div className="py-20 px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 m-8">
                Get In Touch
              </h2>
              <p className="text-gray-600 dark:text-gray-300 text-center mb-12 max-w-2xl mx-auto">
                I'm always interested in new opportunities and collaborations.
                Let's discuss how we can work together!
              </p>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-xl font-semibold mb-6">
                    Contact Information
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Mail className="h-5 w-5 text-black dark:text-zinc-200" />
                      <span>fahmisyhb9@gmail.com</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Github className="h-5 w-5 text-black dark:text-zinc-200" />
                      <span>github.com/fahmi-blip</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Linkedin className="h-5 w-5 text-black dark:text-zinc-200" />
                      <span>linkedin.com/in/fahmi-syihaab</span>
                    </div>
                  </div>
                  <div className="mt-8">
                    <h4 className="text-lg font-semibold mb-4">
                      Let's Connect
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      Whether you have a project in mind, want to collaborate,
                      or just want to say hello, I'd love to hear from you. Feel
                      free to reach out through any of the channels above or use
                      the contact form.
                    </p>
                  </div>
                </div>
                <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white dark:bg-gray-800">
                  <CardHeader>
                    <CardTitle>Send me a message</CardTitle>
                    <CardDescription>
                      Fill out the form below and I'll get back to you as soon
                      as possible.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="name"
                          className="text-sm font-medium mb-2 block"
                        >
                          Name
                        </label>
                        <Input id="name" placeholder="Your name" />
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="text-sm font-medium mb-2 block"
                        >
                          Email
                        </label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="subject"
                        className="text-sm font-medium mb-2 block"
                      >
                        Subject
                      </label>
                      <Input id="subject" placeholder="What's this about?" />
                    </div>
                    <div>
                      <label
                        htmlFor="message"
                        className="text-sm font-medium mb-2 block"
                      >
                        Message
                      </label>
                      <Textarea
                        id="message"
                        placeholder="Tell me about your project or just say hello!"
                        rows={5}
                      />
                    </div>
                    <Button className="w-full to-black">Send Message</Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-gray-100">
      {/* Main Content */}
      <main className="pb-20">{renderContent()}</main>

      
      <nav className="fixed top-4 left-1/2 -translate-x-1/2 bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg border border-gray-200 dark:border-gray-700 px-12 py-2 rounded-4xl shadow-lg w-fit">
        <div className="max-w-md mx-auto">
          <div className="flex justify-around items-center">
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
          <button
              onClick={() => setDarkMode(!darkMode)}
                className="fixed top-4 right-4 p-2 rounded-lg transition-all bg-gray-200 dark:bg-gray-700 text-black dark:text-white shadow-md"
              >
              {darkMode ? <Sun className="h-5 w-5"/> : <Moon className="h-5 w-5"/>}
          </button>
    </div>
  );
}


