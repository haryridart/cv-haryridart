"use client"

import { Navbar } from "@/components/navbar"
import { ExperienceSection } from "@/components/experience-section"
import { ProjectsSection } from "@/components/projects-section"
import { SkillsSection } from "@/components/skills-section"
import { AboutSection } from "@/components/about-section"
import { FiArrowDown, FiGithub, FiLinkedin, FiMail } from "react-icons/fi"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Image from "next/image"

export default function Home() {
  const [heroRef, heroInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="min-h-screen flex items-center pt-20 bg-gradient-to-br from-primary-50 to-primary-100 dark:from-dark-200 dark:to-dark-300"
      >
        <div className="container px-4">
          <div className="flex flex-col md:grid md:grid-cols-2 gap-8 items-center">
            {/* Profile Image - Shows first on mobile, second on desktop */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={heroInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="md:order-2 mb-8 md:mb-0"
            >
              {/* Profile image */}
              <div className="relative rounded-full w-[250px] h-[250px] md:w-[400px] md:h-[400px] mx-auto overflow-hidden border-4 border-primary-400 shadow-xl p-1 bg-gradient-to-r from-primary-300 to-secondary-300">
                <Image 
                  src="/images/hary-ridart-profile.jpg" 
                  alt="Hary Ridart" 
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </motion.div>

            {/* Text Content - Shows second on mobile, first on desktop */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="md:order-1"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                <span className="text-primary-600 dark:text-primary-400">Hary Ridart</span>
                <br />
                Backend Developer
              </h1>
              <p className="text-xl text-gray-700 dark:text-gray-300 mb-8">
                Building enterprise solutions with Java, Spring Boot, and cloud technologies.
                Specializing in high-performance backend systems and API development.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="#experience" className="btn btn-primary bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700">
                  View My Work
                </a>
                <a href="#skills" className="btn btn-outline border-primary-400 text-primary-600 hover:bg-primary-50 hover:border-primary-500">
                  View My Skills
                </a>
              </div>
              <div className="flex mt-8 space-x-4">
                <a 
                  href="https://github.com/haryridart" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-primary-100 text-primary-600 hover:bg-primary-200 dark:bg-dark-300 dark:text-primary-400 dark:hover:bg-dark-400 transition-colors"
                  aria-label="GitHub"
                >
                  <FiGithub size={24} />
                </a>
                <a 
                  href="https://linkedin.com/in/haryridart" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-primary-100 text-primary-600 hover:bg-primary-200 dark:bg-dark-300 dark:text-primary-400 dark:hover:bg-dark-400 transition-colors"
                  aria-label="LinkedIn"
                >
                  <FiLinkedin size={24} />
                </a>
                <a 
                  href="mailto:ridarth@gmail.com" 
                  className="p-2 rounded-full bg-primary-100 text-primary-600 hover:bg-primary-200 dark:bg-dark-300 dark:text-primary-400 dark:hover:bg-dark-400 transition-colors"
                  aria-label="Email"
                >
                  <FiMail size={24} />
                </a>
              </div>
            </motion.div>
          </div>
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
            <a href="#experience" aria-label="Scroll down">
              <FiArrowDown size={24} className="text-primary-600 dark:text-primary-400" />
            </a>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <ExperienceSection />

      {/* Projects Section */}
      <ProjectsSection />

      {/* Skills Section */}
      <SkillsSection />

      {/* About Section */}
      <AboutSection />


      {/* Footer */}
      <footer className="py-8 bg-dark-200 text-white">
        <div className="container text-center">
          <p>© {new Date().getFullYear()} Hary Ridart. All rights reserved.</p>
        </div>
      </footer>
    </main>
  )
}
