"use client";
import { useEffect, useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { ArrowUpRight, Briefcase, Cpu, FolderOpen, Mail, MapPin, StarHalf, Sun, User, AlertTriangle, Shield, AlertCircle, Cloud, Layers, Activity, Star, Award, Globe, Eye, Heart, Phone, Github, Linkedin, Facebook } from "lucide-react";
import { Moon } from "lucide-react";
import Image from "next/image";
import shamir from "@/public/images/shamir.jpg";
import { Badge } from "@/components/ui/badge";
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
import { Analytics } from "@vercel/analytics/react";
import Snowfall from 'react-snowfall'

export default function Home() {
  const [isDark, setIsDark] = useState(false);
  const [visitors, setVisitors] = useState(0);
  const [hearts, setHearts] = useState(0);
  const [flyingHearts, setFlyingHearts] = useState<Array<{ id: number; startX: number; startY: number; endX: number; endY: number; direction: 'left' | 'right' }>>([]);
  const [circles, setCircles] = useState<Array<{ id: number; x: number; y: number; size: number; color: string; angle: number; heartId: number }>>([]);
  const [clickCount, setClickCount] = useState(0);
  const now = new Date();
  const isChristmasMonths = now.getMonth() >= 9 && now.getMonth() <= 12;

  // Visitor and heart counters are temporarily disabled while Redis is offline.
  /*
  useEffect(() => {
    const fetchData = async () => {
      try {
        const visitorRes = await fetch("/api/visitor");
        if (visitorRes.ok) {
          const visitorData = await visitorRes.json();
          setVisitors(visitorData.visitors);
        } else {
          console.error("Failed to fetch visitors:", visitorRes.status);
        }
      } catch (error) {
        console.error("Error fetching visitors:", error);
      }

      try {
        const heartRes = await fetch("/api/heart");
        if (heartRes.ok) {
          const heartData = await heartRes.json();
          setHearts(heartData.hearts);
        } else {
          console.error("Failed to fetch hearts:", heartRes.status);
        }
      } catch (error) {
        console.error("Error fetching hearts:", error);
      }
    };

    fetchData();
  }, []);
  */
  
  /*
  const handleHeart = async () => {
    const buttonRect = document.getElementById("heart-button")?.getBoundingClientRect();
    const profileRect = document.querySelector('[alt="Kay Shamir"]')?.getBoundingClientRect();
    
    if (buttonRect && profileRect) {
      const heartId = Date.now();
      const startX = buttonRect.left + buttonRect.width / 2;
      const startY = buttonRect.top + buttonRect.height / 2;
      const endX = profileRect.left + profileRect.width / 2;
      const endY = profileRect.top + profileRect.height / 2;
      
      const currentClick = clickCount;
      setClickCount(prev => prev + 1);
      const direction = currentClick % 2 === 0 ? 'left' : 'right';
      
      setFlyingHearts(prev => [...prev, { id: heartId, startX, startY, endX, endY, direction }]);
      
      const colors = ['#FF6B6B', '#4ECDC4', '#FFE66D', '#95E1D3', '#F38181', '#AA96DA', '#FCBAD3', '#FFD93D'];
      const newCircles: Array<{ id: number; x: number; y: number; size: number; color: string; angle: number; heartId: number }> = [];
      
      for (let i = 0; i < 8; i++) {
        const circleId = heartId + i;
        const angle = (i * 45) * (Math.PI / 180); 
        const size = 8 + Math.random() * 12; 
        const color = colors[Math.floor(Math.random() * colors.length)];
        
        newCircles.push({
          id: circleId,
          x: startX,
          y: startY,
          size,
          color,
          angle,
          heartId,
        });
      }
      
      setCircles(prev => [...prev, ...newCircles]);
      
      setTimeout(() => {
        setCircles(prev => prev.filter(c => c.heartId !== heartId));
      }, 1000);
      
      setTimeout(() => {
        setFlyingHearts(prev => prev.filter(h => h.id !== heartId));
      }, 3500);
    }

    try {
      const res = await fetch("/api/heart", { method: "POST" });
      if (res.ok) {
        const data = await res.json();
        setHearts(data.hearts);
      } else {
        console.error("Failed to post heart:", res.status);
      }
    } catch (error) {
      console.error("Error posting heart:", error);
    }
  };
  */

  useEffect(() => {
    flyingHearts.forEach((heart) => {
      const deltaY = Math.abs(heart.endY - heart.startY); 
      const verticalMovement = heart.endY < heart.startY ? -deltaY : deltaY;
      const horizontalOffset = heart.direction === 'left' ? -60 : 60; 
      const animationName = `flyHeart${heart.id}`;
      const styleId = `heart-animation-${heart.id}`;
      
      if (!document.getElementById(styleId)) {
        const style = document.createElement('style');
        style.id = styleId;
        style.textContent = `
          @keyframes ${animationName} {
            0% {
              transform: translate(-50%, -50%) translate(0, 0) scale(1) rotate(0deg);
              opacity: 1;
            }
            50% {
              transform: translate(-50%, -50%) translate(${horizontalOffset * 0.5}px, ${verticalMovement * 0.5}px) scale(1.3) rotate(0deg);
              opacity: 0.9;
            }
            100% {
              transform: translate(-50%, -50%) translate(${horizontalOffset}px, ${verticalMovement}px) scale(0.4) rotate(0deg);
              opacity: 0;
            }
          }
        `;
        document.head.appendChild(style);
      }
    });

    return () => {
      const existingStyles = document.querySelectorAll('[id^="heart-animation-"]');
      existingStyles.forEach((styleEl) => {
        const styleId = styleEl.id;
        const heartId = parseInt(styleId.replace('heart-animation-', ''));
        if (!flyingHearts.some(h => h.id === heartId)) {
          styleEl.remove();
        }
      });
    };
  }, [flyingHearts]);

  useEffect(() => {
    circles.forEach((circle) => {
      const animationName = `circleAnimation${circle.id}`;
      const styleId = `circle-animation-${circle.id}`;
      
      if (!document.getElementById(styleId)) {
        const distance = 40 + Math.random() * 30; 
        const style = document.createElement('style');
        style.id = styleId;
        style.textContent = `
          @keyframes ${animationName} {
            0% {
              transform: translate(-50%, -50%) translate(0, 0) scale(1);
              opacity: 1;
            }
            100% {
              transform: translate(-50%, -50%) translate(${Math.cos(circle.angle) * distance}px, ${Math.sin(circle.angle) * distance}px) scale(0);
              opacity: 0;
            }
          }
        `;
        document.head.appendChild(style);
      }
    });

    return () => {
      const existingStyles = document.querySelectorAll('[id^="circle-animation-"]');
      existingStyles.forEach((styleEl) => {
        const styleId = styleEl.id;
        const circleId = parseInt(styleId.replace('circle-animation-', ''));
        if (!circles.some(c => c.id === circleId)) {
          styleEl.remove();
        }
      });
    };
  }, [circles]);

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
      date: "February 2026",
      title: "Intern",
      description:
        "Gained practical industry experience through an internship at Sprobe Inc.,",
    },
    {
      date: "November 2025",
      title: "DevFest 2025: Volunteer",
      description:
        "Volunteered as Technical Team at DevFest 2025: Google Developer Group - Cebu City",
    },
    
    {
      date: "February 2025",
      title: "Associate UI/UX Lead",
      description:
        "Google Developers Group - CTU Main Campus",
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
      date: "September 2022",
      title: "Hello World! 👋🏻",
      description:
        "Wrote my first line of code",
    },
  ];

  const experienceTimeline = [
    {
      date: "July 2026 – October 2026",
      title: "Software Engineer | Sprobe Inc.",
      description:
        "Experienced with Docker, AWS EC2, and GitHub Actions CI/CD, using them to deploy and maintain Puntos, a React Native/Expo mobile loyalty app with Laravel REST APIs and PostgreSQL.",
    },
    {
      date: "February 2026 – May 2026",
      title: "Software Engineer Intern | Sprobe Inc.",
      description:
        "Served as the technical lead for the group, coordinating implementation and supporting delivery across the team.",
    },
    {
      date: "August 2025 – July 2026",
      title: "Associate UI/UX Lead | Google Developers Group – CTU Main",
      description:
        "Led UI/UX initiatives for GDG CTU Main by guiding designers, organizing design activities, and mentoring junior members.",
    },
    {
      date: "August 2023 – January 2024",
      title: "Technical Support Representative | Amazon.com",
      description:
        "Provided remote technical support for account, platform, delivery, return, and replacement concerns.",
    },
  ];

  const portfolioTechStack = [
    { label: "Languages", items: ["JavaScript", "TypeScript", "PHP", "SQL", "Python", "Java", "C", "C#", "HTML/CSS"] },
    { label: "Frameworks & Runtimes", items: ["React", "React Native", "Expo", "Next.js", "Laravel", "Node.js", "Flask", "ASP.NET"] },
    { label: "Cloud & DevOps", items: ["AWS EC2", "Docker", "GitHub Actions", "CI/CD", "Render", "Vercel", "Netlify", "Railway"] },
    { label: "Testing & Automation", items: ["PHPUnit", "Playwright", "Maestro", "Testim"] },
    { label: "API Tools", items: ["Apidog", "Postman"] },
    { label: "Databases & Backend Platforms", items: ["PostgreSQL", "SQLite", "Supabase"] },
    { label: "Libraries & Integrations", items: ["Zustand", "React Query", "Mapbox", "Google Maps", "PayMongo"] },
    { label: "UI & Design", items: ["Tailwind CSS", "Bootstrap", "shadcn/ui", "TweakCN", "Aceternity UI", "Magic UI", "Figma"] },
    { label: "Development Tools", items: ["Git", "GitHub", "Vite", "VS Code", "Visual Studio", "PyCharm", "IntelliJ"] },
  ];

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
      title: "Puntos: Mobile Loyalty Application",
      technologies: "React Native, Expo, TypeScript, Laravel, PostgreSQL, Docker, AWS EC2, GitHub Actions, Mapbox, OneSignal, Google OAuth",
      image: "/images/puntos.png",
      imageAlt: "Puntos mobile loyalty application",
      description: "A mobile loyalty application for managing customer points, stamps, rewards, staff, and store branches. Built with automated testing and CI/CD workflows for reliable releases.",
      demoUrl: "#",
      githubUrl: "#",
      visitWebsite: false,
      viewProject: false,
      isFavorite: true,
      isMobile: true,
    },
    {
      title: "Qourt: Mobile Application",
      technologies: "React Native, Expo, TypeScript, SQLite",
      image: "/images/qourt.png",
      imageAlt: "Qourt mobile application",
      description: "A mobile court queue management app for organizing players, court rotations, and balanced game pairings.",
      demoUrl: "#",
      githubUrl: "#",
      visitWebsite: false,
      viewProject: false,
      isFavorite: false,
      isMobile: true,
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
    <div className="relative">
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
              
              {/* <div 
                className="absolute bottom-0 right-0 px-2 py-1 rounded-br-md rounded-tl-sm flex items-center gap-1 bg-secondary"
              >
                <Heart className="w-3 h-3 text-red-500" fill="red" />
                <span className="text-xs font-semibold text-primary">{hearts}</span>
              </div> */}
            </div>
            <div className="flex flex-col gap-2 justify-start items-center sm:items-start w-full">
              <div className="flex flex-row gap-1 items-center flex-wrap justify-center sm:justify-start">
                <h1 className="text-xl sm:text-2xl font-bold text-secondary-foreground text-center sm:text-left">
                  Kay Shamir L. Besin
                </h1>
                <Image src={verified} alt="Verified" width={50} height={50} className="w-4 h-4 object-cover" />
              </div>
              <div className="text-xs text-foreground flex items-center gap-2 justify-center sm:justify-start">
                {/* Temporarily hidden while Redis counters are disabled.
                <div className="flex items-center gap-1">
                  <Heart className="w-3.5 h-3.5 text-red-500" fill="red" />
                  <span className="text-primary font-semibold">{hearts}</span>
                </div>
                */}
                <div className="flex items-center gap-1">
                  <MapPin className="w-3 h-3" /> Cebu City, Philippines
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 justify-center sm:justify-start text-[11px] text-foreground/80">
                <a href="tel:+639129003381" className="flex items-center gap-1 hover:text-primary transition">
                  <Phone className="w-3 h-3" /> +63 912 900 3381
                </a>
                <a href="mailto:kayshamirbesin04@gmail.com" className="hover:text-primary transition">
                  kayshamirbesin04@gmail.com
                </a>
              </div>
              
              <div className="flex flex-wrap items-center gap-2 justify-center sm:justify-start">
                <Badge className="rounded-full bg-secondary text-secondary-foreground font-medium flex items-center gap-1">
                  <Briefcase className="w-3 h-3" /> Software Engineer
                </Badge>
                {/* <Badge className="rounded-full bg-secondary text-secondary-foreground font-medium flex items-center gap-1">
                  <Briefcase className="w-3 h-3" /> UI/UX Enthusiast
                </Badge> */}
                <Badge className="rounded-full bg-secondary text-secondary-foreground font-medium flex items-center gap-1">
                  <StarHalf className="w-3 h-3" /> Associate UI/UX Lead
                </Badge>
              </div>
              <div className="flex justify-center sm:justify-start w-full">
                <Badge className="rounded-full bg-secondary text-secondary-foreground font-medium flex items-center gap-1">
                  <Cloud className="w-3 h-3" /> Cloud & DevOps Enthusiast
                </Badge>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center md:items-end justify-between w-full gap-2 sm:gap-3 p-2">
            <div className="flex flex-col md:flex-row items-center justify-center md:justify-end gap-2 w-full">
              {/* Temporarily hidden while Redis counters are disabled.
              <Badge className="rounded-full bg-secondary text-secondary-foreground font-medium flex items-center gap-1">
                <span className="text-xs font-normal">Page visits: </span>
                <span className="text-xs font-medium flex flex-row items-center gap-1">  {visitors} <Eye className="w-3 h-3" /></span>
              </Badge>
              */}
              <div className="flex items-center gap-2">
                <Sun className="w-3 h-3 sm:w-4 sm:h-4 text-secondary-foreground" />
                <Switch checked={isDark} onCheckedChange={handleThemeToggle} aria-label="Toggle theme" />
                <Moon className="w-3 h-3 sm:w-4 sm:h-4 text-secondary-foreground" />
              </div>
            </div>
            <div className="flex flex-col md:flex-row justify-center md:justify-end gap-2 w-full">
              <Button 
                className="gap-2 w-full md:w-auto flex items-center justify-center cursor-pointer" 
                onClick={() => window.open("https://m.me/kxyshxmxr", "_blank")}
              >
                <Facebook /> Send a Message
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
                  I am a software engineer based in Cebu City, Philippines, focused on building reliable web and mobile products. I enjoy working across frontend, backend, and deployment layers—from designing interfaces to shipping APIs and production services.
                </p>
                <span className="opacity-60 text-xs"></span>
                <p>
                  At Sprobe Inc., I served as the primary developer for Puntos, a mobile loyalty application. I enjoy automation, especially CI/CD, and have had fun deploying and maintaining Dockerized services on AWS EC2 with GitHub Actions.
                </p>
                <span className="opacity-60 text-xs"></span>
                <p>
                  Beyond software engineering, I am a cloud and DevOps enthusiast who enjoys making development and release workflows more dependable. I keep learning, sharing knowledge, and turning feedback into products that are useful, maintainable, and ready to grow.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-2 border border-secondary rounded-lg p-4">
              <div className="flex flex-row items-center font-semibold text-secondary-foreground gap-1">
                <Cpu className="w-4 h-4 mr-1" /> Tech Stack
              </div>
              <div className="flex flex-col gap-2">
                {portfolioTechStack.map((category) => (
                  <div key={category.label} className="mb-2 last:mb-0">
                    <p className="font-semibold text-xs text-secondary-foreground mb-1">{category.label}</p>
                    <div className="flex flex-wrap gap-2">
                      {category.items.map((tech) => (
                        <Badge key={tech} className="rounded-full bg-secondary text-secondary-foreground font-medium text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2 border border-secondary rounded-lg p-4">
              <div className="flex flex-row items-center font-semibold text-secondary-foreground gap-1">
                <Briefcase className="w-4 h-4 mr-1" /> Experience & Leadership
              </div>
              <div className="mt-2">
                <ul className="space-y-3">
                  {experienceTimeline.map((item, idx) => (
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

            <div className="flex flex-col gap-2 border border-secondary rounded-lg p-4">
              <div className="flex flex-row items-center font-semibold text-secondary-foreground gap-1">
                <Globe className="w-4 h-4 mr-1" /> Connect with me
              </div>

              <div className="flex flex-col gap-3 text-secondary-foreground text-sm">
                <div className="flex flex-row p-3.5 border rounded-lg">
                  <a
                    href="https://github.com/kayshamir"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 hover:text-primary transition"
                  >
                    <Github className="h-5 w-5" /> <span className="ml-2">Follow me on Github</span>
                  </a>
                </div>
                <div className="flex flex-row p-3.5 border rounded-lg">
                  <a
                    href="https://www.linkedin.com/in/kay-shamir"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 hover:text-primary transition"
                  >
                    <Linkedin className="h-5 w-5" /> <span className="ml-2">Connect on LinkedIn</span>
                  </a>
                </div>
                <div className="flex flex-row p-3.5 border rounded-lg">
                  <a
                    href="https://facebook.com/kxyshxmxr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 hover:text-primary transition"
                  >
                    <Facebook className="h-5 w-5" /> <span className="ml-2">Add me on Facebook</span>
                  </a>
                </div>
              </div>
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
                    {project.image ? (
                      <img
                        src={project.image}
                        alt={project.imageAlt}
                        className={`rounded-md p-2 -mt-2 bg-secondary/50 w-full ${project.isMobile ? "object-contain h-60 sm:h-65" : "object-cover"}`}
                      />
                    ) : (
                      <div
                        className="relative flex h-60 sm:h-65 w-full items-center justify-center overflow-hidden rounded-md border border-dashed border-secondary bg-gradient-to-br from-secondary/40 via-background to-primary/10"
                        aria-label={project.imageAlt}
                      >
                        <div className="relative h-48 w-24 rounded-[1.25rem] border-4 border-secondary-foreground/30 bg-background/70 shadow-lg">
                          <div className="absolute left-1/2 top-2 h-1 w-8 -translate-x-1/2 rounded-full bg-secondary-foreground/30" />
                          <div className="absolute inset-x-2 top-7 bottom-5 rounded border border-dashed border-primary/30" />
                        </div>
                        <span className="absolute bottom-3 text-[11px] text-muted-foreground">Mobile mockup — image coming soon</span>
                      </div>
                    )}
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
      <Analytics />
      
      {/* Temporarily hidden while Redis heart reactions are disabled.
      <button
        id="heart-button"
        onClick={handleHeart}
        className="fixed bottom-6 right-5 md:bottom-15 md:right-10 z-50 rounded-full p-4 transition-all duration-300 hover:scale-110 active:scale-95 group"
        aria-label="Send a heart"
      >
        <span className="text-4xl block group-hover:scale-110 transition-transform duration-300">
          <Heart className="w-10 h-10 text-red-500" fill="red" />
        </span>
      </button>
      <div
        className="fixed bottom-[5px] right-2 md:bottom-[50px] md:right-[20px] z-50 bg-background text-primary font-semibold text-xs px-3 py-1"
        style={{
          minWidth: "100px",
        }}
      >
        Show support!
      </div>
      */}
      {/* <div
        className="fixed bottom-2 right-6 z-50 bg-background text-foreground text-xs md:text-sm px-3 py-2 rounded-lg shadow-lg border border-secondary select-none"
        style={{
          minWidth: "170px",
        }}
      >
        Show support
      </div> */}

      {flyingHearts.map((heart) => {
        const animationName = `flyHeart${heart.id}`;
        const heartCircles = circles.filter(c => c.heartId === heart.id);
        
        return (
          <div
            key={heart.id}
            className="fixed pointer-events-none z-50"
            style={{
              left: `${heart.startX}px`,
              top: `${heart.startY}px`,
              transform: 'translate(-50%, -50%)',
              animation: `${animationName} 3.5s ease-out forwards`,
            }}
          >
            <div className="text-3xl relative">
              <span className="block"><Heart className="w-6 h-6 text-red-500" fill="red" /></span>
            </div>
            
            {heartCircles.map((circle) => {
              const circleAnimationName = `circleAnimation${circle.id}`;
              
              return (
                <div
                  key={circle.id}
                  className="absolute rounded-full pointer-events-none"
                  style={{
                    left: '50%',
                    top: '50%',
                    width: `${circle.size}px`,
                    height: `${circle.size}px`,
                    backgroundColor: circle.color,
                    transform: 'translate(-50%, -50%)',
                    animation: `${circleAnimationName} 1s ease-out forwards`,
                  }}
                />
              );
            })}
          </div>
        );
      })}
    </main>
      {isChristmasMonths && (
        <Snowfall color={isDark ? undefined : "lightblue"} snowflakeCount={200}/>
      )}
    </div>
  )
}
