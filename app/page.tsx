"use client";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { BookOpenText, Briefcase, Cpu, Mail, MapPin, StarHalf, Sun } from "lucide-react";
import { Moon } from "lucide-react";
import Image from "next/image";
import shamir from "@/public/shamir.jpg";
import { Badge } from "@/components/ui/badge";
import { FaEnvelope, FaFacebook } from "react-icons/fa";
import verified from "@/public/verified.png";

export default function Home() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const hour = new Date().getHours();
    const darkNow = hour >= 18 || hour < 6;
    setIsDark(darkNow);
    document.documentElement.classList.toggle("dark", darkNow);
  }, []);

  const handleThemeToggle = (val: boolean) => {
    setIsDark(val);
    document.documentElement.classList.toggle("dark", val);
  };

  const timeline = [
    {
      date: "February 2025",
      title: "Associate UI/UX Lead",
      description:
        "Google Developers Group - CTU Main Campus",
    },
    {
      date: "August 2024",
      title: "UI/UX Enthusiast",
      description:
        "Built concept apps, practiced wireframing, and ran quick user tests.",
    },
    {
      date: "August 2023",
      title: "Technical Support at Amazon.com",
      description:
        "Contributed to campus projects and refined visual design fundamentals.",
    },
    {
      date: "May 2023",
      title: "Student Projects",
      description:
        "Contributed to campus projects and refined visual design fundamentals.",
    },
    {
      date: "September 2022",
      title: "Hello World! 👋🏻",
      description:
        "Wrote my first line of code",
    },
  ];

  const techStack = [
    "React", "Next.js", "TypeScript", "Tailwind CSS", "Figma", "Notion", "ShadCN", "TweakCN", 
    "JavaScript", "HTML", "CSS", "Node.js", "Git", "VS Code", "Aceternity", "Magic UI", "PHP", "Laravel", 
    "MySQL", "XML", "Github", "React Native", "Firebase", "PostgreSQL", "ASP.NET", "Vite", "Prettier", "Tailwind CSS",
    "Postman", 
  ];

  return (
    <main className="min-h-screen flex items-start md:items-start justify-center px-4 sm:px-6">
      <div className="w-full max-w-5xl flex flex-col p-6 sm:p-8 md:p-10 rounded-lg gap-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          <div className="flex flex-row gap-4 sm:gap-4">
            <div>
              <Image
                src={shamir}
                alt="Kay Shamir"
                width={150}
                height={150}
                sizes="(max-width: 640px) 80px, (max-width: 768px) 96px, 128px"
                className="rounded-md w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 object-cover"
              />
            </div>
            <div className="flex flex-col gap-2 justify-start items-start">
              <div className="flex flex-row gap-2 items-center">
                <h1 className="text-2xl font-bold text-secondary-foreground">Kay Shamir L. Besin </h1>
                <Image src={verified} alt="Verified" width={50} height={50} className="w-4 h-4 object-cover" />
              </div>
              <div className="text-xs text-foreground flex items-center gap-1"><MapPin className="w-3 h-3"/> Cebu City, Philippines</div>
              <div className="flex items-center gap-2">
                <Badge className="rounded-full bg-secondary text-secondary-foreground font-medium"><BookOpenText className="w-3 h-3"/> Student</Badge>
                <Badge className="rounded-full bg-secondary text-secondary-foreground font-medium"><Briefcase className="w-3 h-3"/> UI/UX Enthusiast</Badge>
              </div>
              <div>
                <Badge className="rounded-full bg-secondary text-secondary-foreground font-medium"><StarHalf className="w-3 h-3"/> Associate UI/UX Lead</Badge>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-end justify-between w-full gap-2 sm:gap-3 p-2">
            <div className="flex items-start justify-start gap-2">
              <Sun className="w-3 h-3 sm:w-4 sm:h-4 text-secondary-foreground" />
              <Switch checked={isDark} onCheckedChange={handleThemeToggle} aria-label="Toggle theme" />
              <Moon className="w-3 h-3 sm:w-4 sm:h-4 text-secondary-foreground" />
            </div>
            <div className="flex justify-start gap-2">
              <Button className="gap-2"><FaFacebook/> Send a Message</Button>
              <Button variant="secondary" className="gap-2"><Mail/> Send Email</Button>
            </div>
          </div>
        </div>
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-4 sm:gap-6">
          {/* Left Column - About Me & Tech Stack */}
          <div className="flex flex-col gap-4">
            {/* About Me */}
            <div className="flex flex-col gap-2 border border-secondary rounded-lg p-4">
              <div className="flex flex-row items-center font-semibold text-secondary-foreground gap-1">
                <Briefcase className="w-4 h-4 mr-1" /> About Me
              </div>
              <div className="text-xs text-foreground flex flex-col space-y-1 leading-relaxed">
                <p>
                  I am a UI/UX design, web, and mobile development enthusiast based in Cebu City, Philippines. As a student and Associate UI/UX Lead, I enjoy turning complex problems into simple, beautiful solutions for both web and mobile platforms.
                  I am passionate about continuous learning and always seek opportunities to expand my skill set.
                </p>
                <span className="opacity-60 text-xs"></span>
                <p>
                  My experience includes user research, wireframing, prototyping, and front-end development. I value empathy and usability, believing that great products are built through collaboration and a focus on user experience.
                  I strive to bridge the gap between design and development to create seamless digital experiences.
                </p>
                <span className="opacity-60 text-xs"></span>
                <p>
                  Outside of work, I love exploring new design trends, joining hackathons, and sharing knowledge with others. My goal is to contribute to meaningful projects and keep pushing my creative and technical boundaries.
                  In my free time, I also enjoy connecting with like-minded individuals and participating in community events.
                </p>
              </div>
            </div>
            {/* Tech Stack */}
            <div className="flex flex-col gap-2 border border-secondary rounded-lg p-4">
              <div className="flex flex-row items-center font-semibold text-secondary-foreground gap-1">
                <Cpu className="w-4 h-4 mr-1" /> Tech Stack
              </div>
              <div className="flex flex-wrap gap-2">
                {techStack.map((tech, idx) => (
                  <Badge key={idx} className="rounded-full bg-secondary text-secondary-foreground font-medium text-xs">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
          {/* Right Column - Experience */}
          <div className="flex flex-col gap-2 border border-secondary rounded-lg p-4">
            <div className="flex flex-row items-center font-semibold text-secondary-foreground gap-1">
              <Briefcase className="w-4 h-4 mr-1" /> Experience
            </div>
            <div className="">
              <ul className="space-y-3">
                {timeline.map((item, idx) => (
                  <li key={idx} className="group grid grid-cols-[16px_1fr] gap-3 relative">
                    <div className="relative">
                      <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px sm:w-0.5 bg-secondary" />
                      <span
                        className={
                          `absolute left-1/2 -translate-x-1/2 top-1.5 w-3 h-3 rounded-full ring-2 z-10 ` +
                          (idx === 0 ? "bg-primary" : "bg-secondary") +
                          " ring-background group-hover:bg-primary group-hover:ring-secondary"
                        }
                      />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-secondary-foreground">{item.title}</div>
                      <div className="text-xs text-foreground/80">{item.date}</div>
                      <div className="text-xs text-foreground/80 mt-1">{item.description}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
