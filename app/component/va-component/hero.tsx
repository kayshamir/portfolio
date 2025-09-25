"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import heroImage from "@/public/me.png"
import { AuroraBackground } from "@/components/ui/aurora-background"
import { FaLinkedin, FaFacebookMessenger, FaXTwitter } from "react-icons/fa6"
import { FaEnvelope } from "react-icons/fa6"
import { TypewriterEffect } from "@/components/ui/typewriter-effect"

export default function Hero() {
  
  const words = [
    {
      text: "Hi!",
    },
    {
      text: "I'm",
    },
    {
      text: "Kay",
    },
    {
      text: "Shamir",
    },
  ];

  return (
    <AuroraBackground showRadialGradient={true} className="top-0">
      <div className="relative isolate overflow-hidden bg-background">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:flex lg:items-center lg:gap-x-10 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-lg lg:flex-shrink-0">
          <motion.h1
            className="mt-10 text-4xl font-bold tracking-tight text-foreground sm:text-6xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="flex flex-row mt-2 text-gradient text-2xl sm:text-3xl font-semibold">
              <TypewriterEffect
                words={words}
              />
            </span>
            <span className="block mt-2 text-gradient text-blue-800 text-2xl sm:text-3xl font-bold">Virtual Assistant</span>
            </motion.h1>
          <motion.p
            className="mt-6 text-lg leading-8 text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            I help clients stay organized and efficient with appointment setting, data entry, web design,
            and tech support while delivering excellent customer service and communication.
          </motion.p>
          <motion.div
            className="mt-8 flex gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
             <div className="mt-2 flex justify-center gap-4 text-lg">
        <a
          href="https://www.linkedin.com/in/kay-shamir"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="hover:text-foreground transition-colors"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://m.me/kxyshxmxr"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Messenger"
          className="hover:text-foreground transition-colors"
        >
          <FaFacebookMessenger />
        </a>
        <a
          href="https://x.com/shamirness"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="X (Twitter)"
          className="hover:text-foreground transition-colors"
        >
          <FaXTwitter />
        </a>
        <a
          href="mailto:kayshamirbesin04@gmail.com"
          aria-label="Gmail"
          className="hover:text-foreground transition-colors"
        >
          <FaEnvelope />
        </a>
      </div>
          </motion.div>
        </div>
        <motion.div
          className="mx-auto mt-16 lg:mt-0"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="relative rounded-2xl">
            <Image
              src={heroImage}
              alt="Kay Shamir - Virtual Assistant"
              width={700}
              height={700}
              priority
            />
          </div>
        </motion.div>
      </div>
    </div>
    </AuroraBackground>
  )
}
