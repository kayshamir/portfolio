"use client";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { ArrowUpRight, BookOpenText, Briefcase, Cpu, FolderOpen, Mail, MapPin, StarHalf, Sun, User, AlertTriangle, Shield, AlertCircle, Cloud, Layers, Activity, Star, Award } from "lucide-react";
import { Moon } from "lucide-react";
import Image from "next/image";
import shamir from "@/public/images/shamir.jpg";
import { Badge } from "@/components/ui/badge";
import { FaFacebook } from "react-icons/fa";
import verified from "@/public/images/verified.png";
import { 
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger, 
} from "@/components/ui/dialog";
import { 
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "@/components/ui/tabs";

export default function Home() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const isDarkMode = savedTheme === "dark";
    setIsDark(isDarkMode);
    document.documentElement.classList.toggle("dark", isDarkMode);

    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === "theme") {
        const newTheme = e.newValue === "dark";
        setIsDark(newTheme);
        document.documentElement.classList.toggle("dark", newTheme);
      }
    };

    const handleThemeChange = (e: Event) => {
      const customEvent = e as CustomEvent;
      const newTheme = customEvent.detail as boolean;
      setIsDark(newTheme);
      document.documentElement.classList.toggle("dark", newTheme);
    };

    window.addEventListener("storage", handleStorageChange);
    window.addEventListener("themeChange", handleThemeChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
      window.removeEventListener("themeChange", handleThemeChange);
    };
  }, []);

  const handleThemeToggle = (val: boolean) => {
    setIsDark(val);
    document.documentElement.classList.toggle("dark", val);
    localStorage.setItem("theme", val ? "dark" : "light");
    
    window.dispatchEvent(new CustomEvent("themeChange", { detail: val }));
  };

  const timeline = [
    {
      date: "January 2026",
      title: "UI/UX Workshop Speaker",
      description:
        "Presented UI/UX design strategies and prototyping tools. Google Developers Group - CTU Main Campus.",
    },
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
      date: "March 2024",
      title: "Friends of the Frame: Community Kickoff 2024",
      description:
        "Participated in The Frame: Breaking into UI/UX Design.",
    },
    {
      date: "August 2023",
      title: "Communications Officer",
      description:
        "PSITS - CTU Main Campus",
    },
    {
      date: "August 2023",
      title: "Technical Support",
      description:
        "Amazon.com",
    },
    {
      date: "May 2023",
      title: "Student Projects",
      description:
        "Worked on various course projects and refined visual design fundamentals.",
    },
    {
      date: "September 2022",
      title: "Hello World! 👋🏻",
      description:
        "Wrote my first line of code",
    },
  ];

  const lang = ["JS", "TS", "HTML", "CSS", "PHP", "XML", "Java", "C", "C#", "Python"];
  const frame = ["Node", "Laravel", "ASP.NET", "React", "React Native", "Next", "Vite", "Django", "jQuery"];
  const db = ["MySQL", "Postgres", "Firebase", "Supabase", "Railway"];
  const ui = ["Tailwind", "Bootstrap", "ShadCN", "TweakCN", "Aceternity", "Magic UI"];
  const api = ["OpenMeteo", "Open Router", "Gemini", "Mistral", "Windy.com"];
  const design = ["Figma", "Canva"];
  const tool = ["Git", "Github", "VS Code", "Notion", "Prettier", "Postman", "Discord", "Teams", "Expo", "Mapbox", "Expo", "PyCharm", "Webstorm", "Visual Studio 2019", "Vercel"];

  const projects = [
    {
      title: "Disaster and Risk Management System",
      technologies: "React, TypeScript, Python, Flask, BeautifulSoup4, PostgreSQL, Windy.com, Gemini, Mapbox",
      image: "/images/drms.png",
      imageAlt: "Disaster and Risk Management System Demo",
      description: "A web application for disaster and risk management. Features Hazard, Risk, Disaster, Evacuation Sites, Weather, and more.",
      demoUrl: "/drms",
      githubUrl: "#",
      visitWebsite: false,
      viewProject: true,
      isFavorite: true,
      isMobile: false,
    },
    {
      title: "Philippines Earthquake Monitoring Map",
      technologies: "React, TypeScript, Tailwind, Python, Flask, BeautifulSoup4",
      image: "/images/eq.png",
      imageAlt: "Philippines Earthquake Monitoring Map Demo",
      description: "A map visualization of earthquake data in the Philippines. Features real-time earthquake data and a search function.",
      githubUrl: "https://github.com/KayShamir/seismic-map",
      websiteUrl: "https://seismic-map-pink.vercel.app/",
      visitWebsite: true,
      viewProject: false,
      isFavorite: true,
      isMobile: false,
    },
    {
      title: "K&T Movers: Moving Services",
      technologies: "ReactJS, TypeScript, TailwindCSS, Vite, Supabase, Mapbox",
      image: "/images/ktm.png",
      imageAlt: "K&T Movers Web Application",
      description: "A web application for K&T Movers. Features Moving, Storage, pick up and drop off with map routes, and more.",
      demoUrl: "/ktm",
      githubUrl: "#",
      visitWebsite: false,
      viewProject: false,
      isFavorite: false,
      isMobile: false,
    },
    {
      title: "CTU Attendance and Course Management System",
      technologies: "HTML, CSS, Javascript, ASP.NET, C#, MySQL",
      image: "/images/attendance.png",
      imageAlt: "CTU Attendance and Course Management System Web Application",
      description: "A web application for CTU Attendance and Course Management System. Features Attendance, Course, and more.",
      demoUrl: "/attendance",
      githubUrl: "#",
      visitWebsite: false,
      viewProject: false,
      isFavorite: false,
      isMobile: false,
    },
    {
      title: "Shoes Store: Online Shoe Shopping Platform",
      technologies: "HTML, CSS, Javascript, ASP.NET, C#, MySQL, Bootstrap, jQuery",
      image: "/images/shoes.png",
      imageAlt: "Shoes Store Web Application",
      description: "A web application for Shoes Store. Features Shoes, Cart, Checkout, and more.",
      demoUrl: "/shoes",
      githubUrl: "#",
      visitWebsite: false,
      viewProject: false,
      isFavorite: false,
      isMobile: false,
    },
    {
      title: "Cinephil: Movie Ticket Booking System",
      technologies: "Java",
      image: "/images/cinephil.png",
      imageAlt: "Cinephil Desktop Application",
      description: "A descktop application for cinephil. Features Movie, Theater, and more.",
      demoUrl: "/cinephil",
      githubUrl: "#",
      visitWebsite: false,
      viewProject: false,
      isFavorite: false,
      isMobile: false,
    },
    {
      title: "BarangMI: Resident Request Management System",
      technologies: "React Native, TypeScript, TailwindCSS, PostgreSQL",
      image: "/images/phon1.png",
      imageAlt: "BarangMI Mobile Application",
      description: "A mobile application of BarangMI to manage request of the residents in a barangay.",
      demoUrl: "/hagoc",
      githubUrl: "#",
      visitWebsite: false,
      viewProject: false,
      isFavorite: false,
      isMobile: true,
    },
    {
      title: "Hagoc: Sleeping Hours Tracker",
      technologies: "React Native, TypeScript, TailwindCSS, Expo, Supabase",
      image: "/images/phon2.png",
      imageAlt: "Hagoc Mobile Application",
      description: "A mobile application for sleeping hours tracking and analysis.",
      demoUrl: "/hagoc",
      githubUrl: "#",
      visitWebsite: false,
      viewProject: false,
      isFavorite: false,
      isMobile: true,
    },
  ];

  const drmsModules = [
    {
      title: "Hazard",
      defaultValue: "hazard",
      icon: AlertTriangle,
      description: "Identify and monitor potential hazards in real-time. Track natural and man-made threats.",
      image: "/images/hazard.png",
    },
    {
      title: "Risk",
      defaultValue: "risk",
      icon: Shield,
      description: "Comprehensive risk assessment and management system. Evaluate vulnerability and exposure to various threats.",
      image: "/images/risk1.png",
    },
    {
      title: "Disaster",
      defaultValue: "disaster",
      icon: AlertCircle,
      description: "Handle disaster recording and keep track of affected residents. Monitor disasters and resident impact with detailed analytics.",
      image: "/images/affecteds.png",
    },
    {
      title: "Evacuation Sites",
      defaultValue: "evacuation",
      icon: MapPin,
      description: "Record keeping of evacuation sites and their locations, with the ability to add evacuees during a disaster.",
      image: "/images/evacuees.png",
    },
    {
      title: "Weather",
      defaultValue: "weather",
      icon: Cloud,
      description: "Live weather updates and forecasts powered by the embedded Windy.com API.",
      image: "/images/weather.png",
    },
    {
      title: "Heatmap",
      defaultValue: "heatmap",
      icon: Layers,
      description: "Shows heatmaps of disaster and risk across barangays to easily identify vulnerable areas.",
      image: "/images/heatmap.png",
    },
    {
      title: "Seismic",
      defaultValue: "seismic",
      icon: Activity,
      description: "Monitor earthquake activity and seismic events by using BeautifulSoup4 to scrape data from the Philippine Institute of Volcanology and Seismology (PHIVOLCS).",
      image: "/images/seismic.png",
    },
  ];

  const certifications = [
    {
      title: "Friend of the Frame: Community Kickoff 2024",
      image: "/images/frame.png",
      description: "Participated in The Frame: Breaking into UI/UX Design.",
    },
    {
      title: "Penetration Testing and Red Team Training",
      image: "/images/sec.png",
      description: "Completed the Penetration Testing and Red Team Training conducted by Streetlevel Ministries.",
    },
  ];

  return (
    <main className="min-h-screen flex items-start md:items-start justify-center px-4 sm:px-6">
      <div className="w-full max-w-5xl flex flex-col p-4 sm:p-6 md:p-10 rounded-lg gap-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-4 items-center sm:items-start">
            <div
              className="flex-shrink-0 flex justify-center sm:justify-start group relative"
            >
              <Image
                src={shamir}
                alt="Kay Shamir"
                width={150}
                height={150}
                sizes="(max-width: 640px) 80px, (max-width: 768px) 96px, 128px"
                className="rounded-md border w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 object-cover transition-opacity duration-300 group-hover:opacity-0"
              />
              <Image
                src="/hover.png"
                alt="Kay Shamir (Hover)"
                width={150}
                height={150}
                sizes="(max-width: 640px) 80px, (max-width: 768px) 96px, 128px"
                className="rounded-md border w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 object-cover absolute top-0 left-0 transition-opacity duration-300 opacity-0 group-hover:opacity-100 pointer-events-none"
              />
            </div>
            <div className="flex flex-col gap-2 justify-start items-center sm:items-start w-full">
              <div className="flex flex-row gap-1 items-center flex-wrap justify-center sm:justify-start">
                <h1 className="text-xl sm:text-2xl font-bold text-secondary-foreground text-center sm:text-left">
                  Kay Shamir L. Besin
                </h1>
                <Image src={verified} alt="Verified" width={50} height={50} className="w-4 h-4 object-cover" />
              </div>
              <div className="text-xs text-foreground flex items-center gap-1 justify-center sm:justify-start">
                <MapPin className="w-3 h-3" /> Cebu City, Philippines
              </div>
              <div className="flex flex-wrap items-center gap-2 justify-center sm:justify-start">
                <Badge className="rounded-full bg-secondary text-secondary-foreground font-medium flex items-center gap-1">
                  <BookOpenText className="w-3 h-3" /> Student
                </Badge>
                <Badge className="rounded-full bg-secondary text-secondary-foreground font-medium flex items-center gap-1">
                  <Briefcase className="w-3 h-3" /> UI/UX Enthusiast
                </Badge>
              </div>
              <div className="flex justify-center sm:justify-start w-full">
                <Badge className="rounded-full bg-secondary text-secondary-foreground font-medium flex items-center gap-1">
                  <StarHalf className="w-3 h-3" /> Associate UI/UX Lead
                </Badge>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center md:items-end justify-between w-full gap-2 sm:gap-3 p-2">
            <div className="flex items-center justify-center md:justify-end gap-2 w-full">
              <Sun className="w-3 h-3 sm:w-4 sm:h-4 text-secondary-foreground" />
              <Switch checked={isDark} onCheckedChange={handleThemeToggle} aria-label="Toggle theme" />
              <Moon className="w-3 h-3 sm:w-4 sm:h-4 text-secondary-foreground" />
            </div>
            <div className="flex flex-col md:flex-row justify-center md:justify-end gap-2 w-full">
              <Button 
                className="gap-2 w-full md:w-auto flex items-center justify-center cursor-pointer" 
                onClick={() => window.open("https://m.me/kxyshxmxr", "_blank")}
              >
                <FaFacebook /> Send a Message
              </Button>
              <Button 
                variant="secondary" 
                className="gap-2 w-full md:w-auto flex items-center justify-center cursor-pointer"
                onClick={() =>
                  window.open(
                    "https://mail.google.com/mail/?view=cm&fs=1&to=kayshamirbesin04@gmail.com&su=Hello&body=This%20is%20a%20test%20email",
                    "_blank"
                  )
                }
                >
                <Mail /> Send Email
              </Button>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-4 sm:gap-6">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2 border border-secondary rounded-lg p-4">
              <div className="flex flex-row items-center font-semibold text-secondary-foreground gap-1">
                <User className="w-4 h-4 mr-1" /> About Me
              </div>
              <div className="text-xs text-foreground flex flex-col space-y-1 leading-relaxed">
                <p>
                  I am a UI/UX designer, web, and mobile development enthusiast based in Cebu City, Philippines. As a student and Associate UI/UX Lead, I enjoy turning complex problems into simple, beautiful solutions for both web and mobile platforms.
                  I am passionate about continuous learning and always seek opportunities to expand my skill set.
                </p>
                <span className="opacity-60 text-xs"></span>
                <p>
                  My experience includes user research, wireframing, prototyping, and front-end development. I value empathy and usability, believing that great products are built through collaboration and a focus on user experience.
                  I strive to bridge the gap between design and development to create seamless digital experiences.
                </p>
                <span className="opacity-60 text-xs"></span>
                <p>
                  I love exploring new design trends and sharing knowledge with others. My goal is to contribute to meaningful projects and keep pushing my creative and technical boundaries.
                  In my free time, I also enjoy connecting with like minded individuals and participating in community events.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-2 border border-secondary rounded-lg p-4">
              <div className="flex flex-row items-center font-semibold text-secondary-foreground gap-1">
                <Cpu className="w-4 h-4 mr-1" /> Tech Stack
              </div>
              <div className="flex flex-col gap-2">
                <p className="font-semibold text-xs text-secondary-foreground mb-1">Languages</p>
                <div className="flex flex-wrap gap-2 mb-2">
                  {lang.map((tech, idx) => (
                    <Badge key={idx} className="rounded-full bg-secondary text-secondary-foreground font-medium text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <p className="font-semibold text-xs text-secondary-foreground mb-1">Frameworks</p>
                <div className="flex flex-wrap gap-2 mb-2">
                  {frame.map((tech, idx) => (
                    <Badge key={idx} className="rounded-full bg-secondary text-secondary-foreground font-medium text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <p className="font-semibold text-xs text-secondary-foreground mb-1">Databases</p>
                <div className="flex flex-wrap gap-2 mb-2">
                  {db.map((tech, idx) => (
                    <Badge key={idx} className="rounded-full bg-secondary text-secondary-foreground font-medium text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <p className="font-semibold text-xs text-secondary-foreground mb-1">UI & Design</p>
                <div className="flex flex-wrap gap-2 mb-2">
                  {ui.map((tech, idx) => (
                    <Badge key={idx} className="rounded-full bg-secondary text-secondary-foreground font-medium text-xs">
                      {tech}
                    </Badge>
                  ))}
                  {design.map((tech, idx) => (
                    <Badge key={idx} className="rounded-full bg-secondary text-secondary-foreground font-medium text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <p className="font-semibold text-xs text-secondary-foreground mb-1">APIs & Tools</p>
                <div className="flex flex-wrap gap-2">
                  {api.map((tech, idx) => (
                    <Badge key={idx} className="rounded-full bg-secondary text-secondary-foreground font-medium text-xs">
                      {tech}
                    </Badge>
                  ))}
                  {tool.map((tech, idx) => (
                    <Badge key={idx} className="rounded-full bg-secondary text-secondary-foreground font-medium text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2 border border-secondary rounded-lg p-4">
            <div className="flex flex-row items-center font-semibold text-secondary-foreground gap-1">
              <Briefcase className="w-4 h-4 mr-1" /> Engagements
            </div>
            <div className="mt-2">
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
        <div className="flex flex-col gap-2 border border-secondary rounded-lg p-4">
          <div className="flex flex-col gap-2">
            <div className="flex flex-row items-center font-semibold text-secondary-foreground gap-1">
              <FolderOpen className="w-4 h-4 mr-1" /> Projects
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-4">
              {projects.map((project, idx) => (
                <div key={idx} className="flex flex-col border border-secondary rounded-lg p-4 transition-all space-y-3">
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold text-secondary-foreground text-sm leading-tight">
                        {project.title}
                      </h3>
                      {project.isFavorite && (
                        <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                      )}
                    </div>
                  </div>
                  <div className="flex w-full justify-center mt-2">
                    <img 
                      src={project.image}
                      alt={project.imageAlt}
                      className={`rounded-md p-2 -mt-2 bg-secondary/50 w-full ${project.isMobile ? "object-contain h-60 sm:h-65" : "object-cover"}`}
                    />
                  </div>
                  <div className="text-xs text-muted-foreground mb-2 line-clamp-2 leading-relaxed">
                    {project.description}
                  </div>
                  <div className="flex flex-wrap gap-2 mb-2">
                    {project.technologies.split(", ").map((tech, techIdx) => (
                      <Badge key={techIdx} className="rounded-full bg-secondary text-secondary-foreground font-medium text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex flex-row gap-2 items-center mt-auto">
                    {project.visitWebsite && (
                      <a
                        href={project.websiteUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-row items-center text-xs p-1 text-secondary-foreground cursor-pointer"
                        aria-label="Visit website"
                      >
                        Visit Website <ArrowUpRight className="w-4 h-4 ml-1" />
                      </a>
                    )}
                    {project.viewProject && (
                      <Dialog>
                        <DialogTrigger asChild>
                          <button className="flex flex-row items-center text-xs p-1 text-secondary-foreground cursor-pointer">
                            View Project <ArrowUpRight className="w-4 h-4 ml-1" />
                          </button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[700px] max-h-[90vh] overflow-y-auto">
                          <DialogHeader>
                            <DialogTitle>Disaster and Risk Management System</DialogTitle>
                            <DialogDescription>
                              Comprehensive platform for disaster preparedness and response
                            </DialogDescription>
                          </DialogHeader>
                          <Tabs defaultValue={drmsModules[0].defaultValue} className="w-full">
                            <TabsList>
                              {drmsModules.map((module) => {
                                return (
                                  <TabsTrigger 
                                    key={module.defaultValue} 
                                    value={module.defaultValue}
                                    className="p-2"
                                  >
                                    <span className="hidden sm:inline p-1">{module.title}</span>
                                  </TabsTrigger>
                                );
                              })}
                            </TabsList>
                            {drmsModules.map((module) => {
                              const IconComponent = module.icon;
                              return (
                                <TabsContent key={module.defaultValue} value={module.defaultValue} className="space-y-4 border rounded-md p-4">
                                  <div className="flex items-center gap-3">
                                    <div className={`p-2 rounded-lg bg-secondary`}>
                                      <IconComponent className="w-5 h-5" />
                                    </div>
                                    <div>
                                      <h3 className="text-lg font-semibold text-secondary-foreground">
                                        {module.title}
                                      </h3>
                                    </div>
                                  </div>
                                  <div className="relative w-full aspect-video rounded-lg overflow-hidden border border-secondary bg-secondary/30">
                                    <Image
                                      src={module.image}
                                      alt={`${module.title} Module`}
                                      fill
                                      className="object-cover w-full h-full"
                                    />
                                  </div>
                                  <p className="text-sm text-foreground leading-relaxed">
                                    {module.description}
                                  </p>
                                </TabsContent>
                              );
                            })}
                          </Tabs>
                        </DialogContent>
                      </Dialog>
                    )}
                  </div>
                </div>
              ))}
            </div>



            {/* 
            <div className="flex flex-col items-center justify-center py-8">
              <div className="text-4xl mb-2">💜</div>
              <div className="text-md font-bold text-secondary-foreground flex items-center gap-2">
                Still cooking something awesome...
              </div>
              <div className="text-xs text-foreground/70 text-center">
                Hold tight! I’m still working on my capstone right now 🧠💻<br />
                All projects will be posted once it’s finally done (and I survive it 😅).
              </div>
            </div>
            */}
          </div>
        </div>
        <div className="flex flex-col gap-2 border border-secondary rounded-lg p-4">
          <div className="flex flex-col gap-2">
            <div className="flex flex-row items-center font-semibold text-secondary-foreground gap-1">
              <Award className="w-4 h-4 mr-1" /> Certifications
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-4">
              {certifications.map((certification, idx) => (
                <div key={idx} className="flex flex-col border border-secondary rounded-lg p-4 transition-all space-y-3">
                  <div className="flex flex-col gap-2">
                    <h3 className="font-semibold text-secondary-foreground text-sm leading-tight">
                      {certification.title}
                    </h3>
                  </div>
                  <div className="flex w-full justify-center mt-2">
                    <img 
                      src={certification.image}
                      alt={certification.title}
                      className="rounded-md p-2 -mt-2 bg-secondary/50 w-full object-contain h-60 sm:h-65"
                    />
                  </div>
                  <div className="text-xs text-muted-foreground mb-2 leading-relaxed">
                    {certification.description}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        
      </div>
    </main>
  )
}
