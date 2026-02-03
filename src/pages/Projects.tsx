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
import { Badge } from "@/components/ui/badge";

export default function ProjectPage() {
     const [activeProjectCategory, setActiveProjectCategory] = useState("all");

     const projectCategories = [
    { id: "all", label: "All Projects" },
    { id: "web", label: "Web Development" },
    { id: "uiux", label: "UI/UX Design" },
    // { id: "graphic", label: "Graphic Design" },
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
      title: "Admin Dashboard Storage and Sales of goods",
      description:
        "Website for managing and selling items.",
      tech: ["MySql", "TypeScript", "React","Express.js"],
      image: "/Screenshot 2025-12-25 215524.png",
      link: "#",
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
      image: "/iPhone 16.png",
      link: "https://www.figma.com/design/pLUo5APZyVOZu6BeQtfal1/Pujasera?node-id=0-1&t=iyPabscMzHugHGA2-1",
      category: "uiux",
    },
    {
      title: "LUMINA: An AI-Based Digital Solution for Mental Health Management in Indonesian Youth",
      description:
        "Individual project from course assignments.",
      tech: ["Figma", "Prototyping", "User Research"],
      image: "/iPhone 15 Pro.png",
      link: "https://www.figma.com/design/dlG0CXnWZeJH1ggSGnyJxZ/Project-UIUX-Prak?node-id=51-14&t=UTsPSfDeoHuCsORm-1",
      category: "uiux",
    },
  ];
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
    },[]);

  return (
          <div className="px-4 py-20">
            <div className="max-w-6xl mx-auto">
              <h2 className="m-8 mb-4 text-3xl font-bold text-center md:text-4xl">
                My Projects
              </h2>
              <p className="max-w-2xl mx-auto mb-8 text-center text-gray-600 dark:text-gray-300">
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
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                {filteredProjects.map((project, index) => (
                  <a 
                  key={index}
                  href={project.link}
                  target= "_blank">
                  <Card
                    key={index}
                    className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                  >
                    <div className="overflow-hidden aspect-video">
                      <img
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle className="flex items-center justify-between">
                        <span className="text-lg">{project.title}</span>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="w-8 h-8 p-0"
                        >
                          <ExternalLink className="w-4 h-4" />
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
                <div className="py-12 text-center">
                  <p className="text-gray-500 dark:text-gray-300">
                    No projects found in this category.
                  </p>
                </div>
              )}
            </div>
          </div>
        );
        };
export { ProjectPage }