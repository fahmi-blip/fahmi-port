import { Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function AboutPage() {
  const skills = [
    "JavaScript", "TypeScript", "React", "Python", "Laravel", 
    "Java", "MySql", "Git", "Figma",
    "UI/UX Design", "Responsive Design", "Canva",
  ];

  return (
    <div className="min-h-screen px-4 py-20">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8 text-center lg:text-left">
          <h2 className="m-8 mb-4 text-3xl font-bold md:text-4xl">About Me</h2>
        </div>

        <div className="grid items-start grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5 xl:col-span-4">
            <div className="relative group max-w-[300px] mx-auto lg:max-w-none">
              <div className="absolute transition-transform duration-300 translate-x-1 translate-y-1 border-2 border-gray-200 -inset-2 md:-inset-4 dark:border-gray-800 rounded-2xl -z-10 md:translate-x-2 md:translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0"></div>
              
              <div className="overflow-hidden rounded-2xl shadow-2xl aspect-[3/4] lg:aspect-[2/3]">
                <img
                  src="/20240814_173945.jpg"
                  alt="Fahmi Syihaab"
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center lg:col-span-7 xl:col-span-8">
            <h3 className="mb-6 text-3xl font-semibold">
              I'm <span className="text-primary">Fahmi Syihaab</span>
            </h3>
            
            <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
              <p>
                I'm a  <span className="font-medium text-foreground">Full Stack Developer</span> and 
                <span className="font-medium text-foreground"> UI/UX Designer</span> focused on creating meaningful digital solutions. I'm passionate about 
                transforming complex problems into simple and intuitive designs.
              </p>
              <p>
                With over a year of experience, I'm accustomed to working 
                with modern web technologies to bring ideas to life through code. 
                I believe that every line of code should deliver tangible value to its users.
              </p>
            </div>

            <div className="mt-12">
              <h4 className="flex items-center gap-2 mb-6 text-xl font-bold">
                Skills & Technologies
              </h4>
              <div className="flex flex-wrap gap-2.5">
                {skills.map((skill, index) => (
                  <Badge
                    key={index}
                    variant="secondary"
                    className="px-3 py-1 text-sm font-normal transition-colors border border-border/50 hover:border-primary/50"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Social & Action Section */}
            <div className="flex flex-wrap gap-4 mt-12">
              <Button 
                onClick={() => window.open("https://github.com/fahmi-blip")}
                className="px-6 rounded-full"
              >
                <Github className="w-4 h-4 mr-2" />
                GitHub
              </Button>
              <Button 
                variant="outline" 
                onClick={() => window.open("https://www.linkedin.com/in/fahmi-syihaab-769918323/")}
                className="px-6 rounded-full"
              >
                <Linkedin className="w-4 h-4 mr-2" />
                LinkedIn
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}