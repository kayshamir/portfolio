"use client"

import { motion } from "framer-motion"

export default function WearYourStory() {
  return (
    <section className="bg-background py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6">Your Reliable Virtual Assistant Partner</h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
From scheduling appointments and managing calendars to accurate data entry, tech support, and MS Office expertise, I deliver efficient solutions that keep your workflow running smoothly. 
Need more than admin support? I also bring web design and basic coding skills to create user-friendly websites that elevate your online presence.

          </p>
          <motion.div
            className="mt-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <a
              href="https://www.flowersandsaints.com.au"
              target="_blank"
              rel="noopener noreferrer"
              className="apple-button inline-flex items-center"
            >
              Explore Collection
              <svg
                className="w-5 h-5 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
