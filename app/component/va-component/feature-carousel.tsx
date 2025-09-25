"use client"

import { useRef, useEffect, useState } from "react"
import { motion, useAnimation, useMotionValue } from "framer-motion"

const features = [
  { title: "Appointment Setting", description: "8+ years of experience ensuring seamless scheduling and calendar management for busy professionals, eliminating double bookings and missed meetings.", icon: "📅" },
  { title: "Calendar Management", description: "Proven expertise in managing multiple calendars efficiently, keeping clients organized and focused on what truly matters.", icon: "🗓️" },
  { title: "Data Entry & Organization", description: "8+ years delivering accurate, fast, and well-structured data entry to maintain clean, reliable, and error-free business records.", icon: "📊" },
  { title: "MS Office Expertise", description: "Advanced skills in Word, Excel, and PowerPoint to create polished reports, presentations, and data-driven insights that impress clients.", icon: "📑" },
  { title: "Web Design & Coding", description: "Crafting clean, responsive websites that help small businesses build their online presence and attract more customers.", icon: "💻" },
  { title: "Customer Service", description: "Strong background in handling client interactions with professionalism, ensuring a positive experience that builds long-term trust.", icon: "🤝" },
  { title: "Tech Support", description: "Quickly resolving technical issues and providing simple, effective solutions to keep your business running smoothly.", icon: "🔧" },
  { title: "Email & Inbox Management", description: "Skilled in organizing inboxes, prioritizing important messages, and ensuring no critical communication is ever missed.", icon: "📧" },
  { title: "Project Coordination", description: "Coordinating tasks, tracking deadlines, and ensuring smooth project execution for both teams and individual clients.", icon: "📋" },
  { title: "Online Research", description: "Efficiently gathering accurate data, market insights, and competitor research to support business growth and informed decisions.", icon: "🔍" },
  { title: "CRM Management", description: "Experienced in maintaining customer data and managing pipelines using CRM tools like HubSpot and Salesforce.", icon: "👥" },
  { title: "Communication Skills", description: "Clear, professional, and proactive communication to ensure every task and update is delivered with full transparency.", icon: "💬" },
  { title: "And Many More…", description: "A highly adaptable virtual assistant who goes above and beyond to fit your unique business needs.", icon: "💼" },
]


export default function FeatureCarousel() {
  const [width, setWidth] = useState(0)
  const carousel = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const controls = useAnimation()

  useEffect(() => {
    const updateWidth = () => {
      if (carousel.current) {
        const scrollWidth = carousel.current.scrollWidth;
        const offsetWidth = carousel.current.offsetWidth;
        setWidth(Math.max(0, scrollWidth - offsetWidth));
      }
    };

    // Initial calculation with a small delay to ensure DOM is fully rendered
    const timeoutId = setTimeout(updateWidth, 100);

    // Handle window resize
    window.addEventListener('resize', updateWidth);

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('resize', updateWidth);
    };
  }, [])

  const handleDragEnd = () => {
    const currentX = x.get()
    if (currentX > 0) {
      controls.start({ x: 0, transition: { type: "spring", stiffness: 300, damping: 30 } })
    } else if (currentX < -width) {
      controls.start({ x: -width, transition: { type: "spring", stiffness: 300, damping: 30 } })
    }
  }

  return (
    <div className="py-20 bg-gradient-to-b from-background to-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-5xl font-bold text-center mb-12 text-foreground">What can I offer</h2>
        <motion.div ref={carousel} className="cursor-grab overflow-hidden">
          <motion.div
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
            whileTap={{ cursor: "grabbing" }}
            animate={controls}
            style={{ x }}
            onDragEnd={handleDragEnd}
            className="flex"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="min-w-[300px] h-[350px] p-8 m-4 bg-background rounded-lg flex-col justify-between hover-lift transition-all duration-300 ease-in-out border-gray-300 border hover:border-primary/10"
              >
                <div>
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>

              </motion.div>
            ))}
          </motion.div>
        </motion.div>
        <div className="mt-8 flex justify-center items-center gap-2">
          <div className="h-1.5 w-32 bg-muted rounded-full overflow-hidden">
            <div className="h-full w-1/3 bg-gray-400 rounded-full animate-scroll-hint"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
