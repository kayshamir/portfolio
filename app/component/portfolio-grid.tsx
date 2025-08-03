"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"

const projects = [
    {
      id: 1,
      title: "Appointment Setting Assistant",
      description: "I handle all your scheduling and calendar needs, making sure you never double book or miss a meeting so your day runs smoothly and stress-free.",
      mediaType: "video",
      mediaUrl: "/appointment.mp4",
    },
    {
      id: 2,
      title: "Advanced Calendar Management",
      description: "I expertly manage multiple calendars for you, so you stay organized, never miss a beat, and can focus on what matters most.",
      mediaType: "image",
      mediaUrl: "/calendar.png",
    },
  {
    id: 3,
    title: "Data Entry & Organization Suite",
    description: "I make sure your data is entered quickly, accurately, and organized perfectly so your business records are always clean, reliable, and easy to use.",
    mediaType: "video",
    mediaUrl: "/data-entry.mp4",
  },
  {
    id: 4,
    title: "MS Office Automation",
    description: "I create polished reports, presentations, and data driven insights with my advanced Word, Excel, and PowerPoint skills making your business look sharp and run smarter.",
    mediaType: "image",
    mediaUrl: "/ms-office.png",
  },
  {
    id: 5,
    title: "Web Design & Coding Project",
    description: "I build clean, responsive websites that help small businesses shine online and connect with more customers.",
    mediaType: "video",
    mediaUrl: "/coding.mp4",
  },
  {
    id: 6,
    title: "Customer Service Workflow",
    description: "I handle every client interaction with warmth and care, making sure everyone feels heard, valued, and supported building trust that lasts.",
    mediaType: "image",
    mediaUrl: "/customer.png",
  },
  {
    id: 7,
    title: "Tech Support Solutions",
    description: "With my experience as a Tech Support in Amazon, I resolved technical issues quickly and provided effective solutions to keep businesses running smoothly.",
    mediaType: "image",
    mediaUrl: "/amazon.png",
  },
  {
    id: 8,
    title: "Inbox Management System",
    description: "I keep inboxes organized, make sure important messages stand out, and never let a critical email slip through the cracks.",
    mediaType: "image",
    mediaUrl: "/inbox.png", 
  },
  {
    id: 9,
    title: "Project Coordination Platform",
    description: "With Notion, I coordinated tasks, tracked deadlines, and ensured smooth project execution for teams and clients.",
    mediaType: "image",
    mediaUrl: "/notion.png",
  },
  {
    id: 10,
    title: "Online Research Dashboard",
    description: "I efficiently gather accurate data, market insights, and conduct competitor research to help your business grow.",
    mediaType: "image",
    mediaUrl: "/research.png",
  },
  {
    id: 11,
    title: "CRM Management Suite",
    description: "I keep customer data organized and pipelines moving smoothly using CRM tools like HubSpot and Salesforce.",
    mediaType: "image",
    mediaUrl: "/crm.png",
  },
  {
    id: 12,
    title: "Professional Communication Tools",
    description: "I deliver clear, proactive communication so you’re always in the loop every task, every update, every time.",
    mediaType: "image",
    mediaUrl: "/communication.png",
  },
]

export default function PortfolioGrid() {
  return (
    <section id="portfolio" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">Portfolio Showcase</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Real examples of how I help businesses streamline their operations
          </p>
        </motion.div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {projects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-background rounded-lg overflow-hidden hover-lift transition-all duration-300 ease-in-out border border-gray-300 hover:border-primary/10"
              >
                <div className="relative h-64 overflow-hidden rounded-t-lg bg-gray-100">
                  {project.mediaType === "video" ? (
                    <video
                      src={project.mediaUrl}
                      className="w-full h-full object-cover"
                      autoPlay
                      loop
                      muted
                      playsInline
                      ref={(el) => {
                        if (el) {
                          el.playbackRate = 3.0;
                        }
                      }}
                    />
                  ) : project.mediaType === "image" ? (
                    <Image
                      src={project.mediaUrl}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <div className="flex items-center justify-center h-full text-gray-400">
                      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-2">{project.title}</h3>
                  <p className="text-muted-foreground">{project.description}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
