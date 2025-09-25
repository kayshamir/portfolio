"use client"

import { motion, useInView, useScroll, useSpring, useTransform } from "framer-motion"
import { useState, useRef, useEffect } from "react"

const timelineEvents = [
  {
    year: 2017,
    yearDisplay: "2017 - Present",
    title: "Freelance Appointment Setter & Data Entry Specialist",
    description: "Started by assisting ph local seafearer with their documents for overseas work, online scheduling, and training certification.",
    details:
      "Began as a remote freelancer, mastering client communication and digital organization.",
  },
  {
    year: 2018,
    yearDisplay: "2018 - Present",
    title: "MS Office Enthusiast",
    description: "Became highly proficient in Word, Excel, and PowerPoint designing reports, automating spreadsheets, and crafting professional presentations for clients and personal projects.",
    details:
      "Developed a passion for mastering Microsoft Office tools, streamlining workflows and creating polished documents.",
  },
  {
    year: 2023,
    title: "Technical Support and Customer Service Representative",
    description: "Helped US-based Amazon customers resolve device issues, troubleshoot technical problems, and provided support for Prime subscription inquiries, ensuring a smooth and positive customer experience.",
    details:
      "Provided technical support and customer service for Amazon, assisting US customers with their Amazon devices and Prime subscriptions.",
  },
  {
    year: 2024,
    title: "Web Designing and Coding",
    description: "Dedicated time to mastering web design and coding, enabling me to build responsive websites and digital solutions for clients and personal projects.",
    details:
      "Learned web designing and coding to expand my skill set.",
  },
  {
    year: 2025,
    title: "Virtual Assistant",
    description: "I'm about to start working as a virtual assistant and am looking forward to gaining experience, building my skills, and helping clients however I can.",
    details:
      "Just beginning my journey as a virtual assistant, eager to learn and grow in this new role.",
  },
]

const FlowerIcon = ({ progress }: { progress: number }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    className="w-8 h-8 text-primary"
    style={{
      transform: `scale(${progress})`,
      transition: "transform 0.3s ease",
    }}
  >
    {/* Outer circle */}
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
    
    {/* Petals */}
    <path
      d="M12 6C12.8 7 13.8 8 12 9C10.2 8 11.2 7 12 6Z"
      fill="currentColor"
      opacity="0.6"
    />
    <path
      d="M12 18C12.8 17 13.8 16 12 15C10.2 16 11.2 17 12 18Z"
      fill="currentColor"
      opacity="0.6"
    />
    <path
      d="M6 12C7 12.8 8 13.8 9 12C8 10.2 7 11.2 6 12Z"
      fill="currentColor"
      opacity="0.6"
    />
    <path
      d="M18 12C17 12.8 16 13.8 15 12C16 10.2 17 11.2 18 12Z"
      fill="currentColor"
      opacity="0.6"
    />
    
    {/* Center dot */}
    <circle cx="12" cy="12" r="1.8" fill="currentColor" />
  </svg>
)

export default function Timeline() {
  const [expandedEvent, setExpandedEvent] = useState<number | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  // For positioning the event dots on the vertical line
  // We'll use refs to get the offsetTop of each event after render
  const eventRefs = useRef<(HTMLDivElement | null)[]>([])

  return (
    <section id="journey" ref={containerRef} className="relative py-20 min-h-[150vh] bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">My Journey</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            A look at how I&apos;ve grown, learned, and transformed over the years.
          </p>
        </motion.div>

        <div className="relative">
          {/* Vertical line */}
          {/* Background static line */}
          <div className="absolute left-1/2 transform rounded-full -translate-x-1/2 w-0.5 top-0 bottom-0 bg-gray-200" />

          {/* Dots on the vertical line for each event */}
          {timelineEvents.map((_, index) => (
            <EventDot
              key={index}
              eventIndex={index}
              eventRefs={eventRefs}
            />
          ))}

          {/* Animated progress line */}
          <motion.div
            className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-primary origin-top"
            style={{
              scaleY: scaleX,
            }}
          />

          {/* Flower icon */}
          <motion.div
            className="sticky top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 text-primary"
            style={{ y: useTransform(scrollYProgress, [0, 1], [0, 100]) }}
          >
            <FlowerIcon progress={useTransform(scrollYProgress, [0, 1], [0.5, 1]) as any} />
          </motion.div>

          {timelineEvents.map((event, index) => (
            <TimelineEvent
              key={event.year}
              event={event}
              index={index}
              isExpanded={expandedEvent === index}
              onToggle={() => setExpandedEvent(expandedEvent === index ? null : index)}
              eventRef={el => (eventRefs.current[index] = el)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

// New component for the event dot on the vertical line
function EventDot({
  eventIndex,
  eventRefs,
}: {
  eventIndex: number
  eventRefs: React.MutableRefObject<(HTMLDivElement | null)[]>
}) {
  // We'll use state to trigger a re-render after mount to get the correct position
  const [top, setTop] = useState<number | null>(null)

  // Use effect to update the top position after mount
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    const updateTop = () => {
      const el = eventRefs.current[eventIndex]
      if (el) {
        // Get the element's position relative to the parent with relative positioning
        // Find the closest parent with class 'relative'
        let parent = el.parentElement
        while (parent && !parent.classList.contains('relative')) {
          parent = parent.parentElement
        }
        if (parent) {
          const parentRect = parent.getBoundingClientRect()
          const elRect = el.getBoundingClientRect()
          setTop(elRect.top - parentRect.top + el.offsetHeight / 2)
        }
      }
    }
    updateTop()
    window.addEventListener('resize', updateTop)
    return () => window.removeEventListener('resize', updateTop)
  }, [eventIndex, eventRefs])

  return (
    <div
      className="absolute left-1/2 -translate-x-1/2 z-30"
      style={{
        top: top !== null ? `${top}px` : undefined,
        pointerEvents: "none",
      }}
    >      
    </div>
  )
}

function TimelineEvent({
  event,
  index,
  isExpanded,
  onToggle,
  eventRef,
}: {
  event: (typeof timelineEvents)[0]
  index: number
  isExpanded: boolean
  onToggle: () => void
  eventRef?: (el: HTMLDivElement | null) => void
}) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })

  // Attach both the local ref and the eventRef for dot positioning
  const setRefs = (el: HTMLDivElement | null) => {
    ref.current = el
    if (eventRef) eventRef(el)
  }

  return (
    <motion.div
      ref={setRefs}
      className={`mb-8 flex justify-between items-center w-full ${index % 2 === 0 ? "flex-row-reverse" : ""}`}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
    >
      <div className="w-5/12" />
      <div className="z-20">
        {/* Outer colored circle */}
        <div className="flex items-center justify-center w-7 h-7 bg-blue-950 rounded-full">
          {/* Middle white circle */}
          <div className="flex items-center justify-center w-5 h-5 bg-white rounded-full">
            {/* Inner solid circle */}
            <div className="w-3 h-3 bg-blue-950 rounded-full" />
          </div>
        </div>
      </div>
      <motion.div
        className="w-5/12 cursor-pointer"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={onToggle}
      >
        <div className="p-4 bg-background rounded-lg shadow-md border border-primary/10">
          <span className="font-bold text-primary">{event.year}</span>
          <h3 className="text-lg font-semibold mb-1">{event.title}</h3>
          <span className="text-muted-foreground">{event.yearDisplay}</span>
          <p className="text-muted-foreground">{event.description}</p>
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: isExpanded ? "auto" : 0, opacity: isExpanded ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="mt-2 text-sm text-muted-foreground">{event.details}</p>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  )
}
