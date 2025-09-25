"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export default function Header() {
  const [activeSection, setActiveSection] = useState("")

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      {
        rootMargin: "-50% 0px -50% 0px" // Trigger when section is in the middle of viewport
      }
    )

    const sections = ["about-me", "services", "tools", "portfolio", "journey"]
    sections.forEach((section) => {
      const element = document.getElementById(section)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [])
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <motion.header
      className="sticky top-0 z-50 bg-background/80 backdrop-blur-md"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link 
            href="/" 
            className="-m-1.5 p-1.5"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({
                top: 0,
                behavior: "smooth"
              });
            }}
          >
            <span className="sr-only">Kay Shamir</span>
            <h1 className="text-xl font-bold text-foreground">Kay<span className="text-primary">Shamir</span></h1>
          </Link>
        </div>
        <div className="flex gap-x-12">
          {[
            { id: 'about-me', label: 'About Me' },
            { id: 'services', label: 'Services' },
            { id: 'tools', label: 'Tools' },
            { id: 'portfolio', label: 'Portfolio' },
            { id: 'journey', label: 'Journey' }
          ].map((item) => (
            <div key={item.id} className="relative">
              <Link
                href={`#${item.id}`}
                className="text-sm font-semibold leading-6 text-foreground hover:text-primary transition-colors"
                onClick={(e) => handleScroll(e, item.id)}
              >
                {item.label}
              </Link>
              {activeSection === item.id && (
                <motion.div
                  layoutId="activeSection"
                  className="absolute top-7 left-0 right-0 h-1.5 bg-blue-950 rounded-full"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </div>
          ))}
        </div>
        
      </nav>
    </motion.header>
  )
}
