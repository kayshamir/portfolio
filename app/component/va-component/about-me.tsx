"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import shamir from "@/public/shamir.jpg"
import { FaCalendarCheck, FaKeyboard, FaLaptopCode, FaHeadset, FaBolt, FaUserCog } from "react-icons/fa";

export default function AboutMe() {
  return (
    <section id="about-me" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="container mx-auto max-w-7xl">
        <motion.h2
          className="text-4xl font-bold mb-12 text-center text-gray-800"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <ul className="space-y-2">
            <li>Turning Ideas Into Digital Reality</li>
          </ul>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Image Section */}
          <motion.div
            className="flex justify-center items-center h-full"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="relative flex items-center justify-center">
              <div
                className="w-70 h-70 sm:w-84 sm:h-84 rounded-full flex items-center justify-center bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 p-1"
                style={{
                  background: "conic-gradient(from 180deg at 50% 50%, #f9ce34 0deg, #ee2a7b 120deg, #6228d7 240deg, #f9ce34 360deg)"
                }}
              >
                <div className="w-66 h-66 sm:w-82 sm:h-82 rounded-full flex items-center justify-center bg-white">
                <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden bg-white flex items-center justify-center">
                  <Image
                    src={shamir}
                    alt="About Me"
                    className="w-full h-full object-cover"
                    width={500}
                    height={500}
                    priority
                  />
                </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Text Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full flex flex-col justify-center"
          >
            <div className="w-full">
              <h3 className="text-2xl font-semibold mb-4 text-gray-900 flex items-center gap-2">
                Creative Innovator & Problem Solver
              </h3>
              <p className="text-gray-600 mb-4">
                Hi, I'm <span className="font-semibold">Kay Shamir Loregas Besin</span> from Cebu City, Philippines.
                A graduating student of <span className="font-medium">BSIT at CTU-Main</span> with a strong passion for technology, 
                design, and helping businesses operate efficiently.
              </p>

              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center gap-2">
                  <FaCalendarCheck className="text-blue-500" /> <span>8+ years in Appointment Setting & Data Entry</span>
                </li>
                <li className="flex items-center gap-2">
                  <FaHeadset className="text-green-500" /> <span>6 months of Customer & Technical Support</span>
                </li>
                <li className="flex items-center gap-2">
                  <FaLaptopCode className="text-purple-500" /> <span>2 years of Web Design & Coding experience</span>
                </li>
                <li className="flex items-center gap-2">
                  <FaBolt className="text-yellow-500" /> <span>Tech-savvy and quick to adapt to new tools & trends</span>
                </li>
                <li className="flex items-center gap-2">
                  <FaKeyboard className="text-pink-500" /> <span>Proficient in automation, workflow optimization, and digital tools</span>
                </li>
                <li className="flex items-center gap-2">
                  <FaUserCog className="text-red-500" /> <span>Strong problem-solving mindset and detail-oriented</span>
                </li>
              </ul>

              <p className="text-gray-600 mt-4">
                My goal is to combine technical expertise with creative thinking to deliver solutions 
                that help businesses thrive. I value efficiency, precision, and adaptability making sure 
                every project I handle brings real results.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
