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

export default function ContactPage() {
    
return (
          <div className="px-4 py-20">
            <div className="max-w-4xl mx-auto">
              <h2 className="m-8 mb-4 text-3xl font-bold text-center md:text-4xl">
                Get In Touch
              </h2>
              <p className="max-w-2xl mx-auto mb-12 text-center text-gray-600 dark:text-gray-300">
                I'm always interested in new opportunities and collaborations.
                Let's discuss how we can work together!
              </p>
              <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
                <div>
                  <h3 className="mb-6 text-xl font-semibold">
                    Contact Information
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Mail className="w-5 h-5 text-black dark:text-zinc-200" />
                      <span>fahmisyhb9@gmail.com</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Github className="w-5 h-5 text-black dark:text-zinc-200" />
                      <span>github.com/fahmi-blip</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Linkedin className="w-5 h-5 text-black dark:text-zinc-200" />
                      <span>linkedin.com/in/fahmi-syihaab</span>
                    </div>
                  </div>
                  <div className="mt-8">
                    <h4 className="mb-4 text-lg font-semibold">
                      Let's Connect
                    </h4>
                    <p className="leading-relaxed text-gray-600 dark:text-gray-300">
                      Whether you have a project in mind, want to collaborate,
                      or just want to say hello, I'd love to hear from you. Feel
                      free to reach out through any of the channels above or use
                      the contact form.
                    </p>
                  </div>
                </div>
                <Card className="overflow-hidden transition-all duration-300 bg-white hover:shadow-lg hover:-translate-y-1 dark:bg-gray-800">
                  <CardHeader>
                    <CardTitle>Send me a message</CardTitle>
                    <CardDescription>
                      Fill out the form below and I'll get back to you as soon
                      as possible.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                      <div>
                        <label
                          htmlFor="name"
                          className="block mb-2 text-sm font-medium"
                        >
                          Name
                        </label>
                        <Input id="name" placeholder="Your name" />
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block mb-2 text-sm font-medium"
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
                        className="block mb-2 text-sm font-medium"
                      >
                        Subject
                      </label>
                      <Input id="subject" placeholder="What's this about?" />
                    </div>
                    <div>
                      <label
                        htmlFor="message"
                        className="block mb-2 text-sm font-medium"
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
  };