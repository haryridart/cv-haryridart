"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { FiAward, FiBook, FiBriefcase, FiGlobe } from "react-icons/fi"
import Image from "next/image"

export function AboutSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="about" className="section">
      <div className="container mx-auto px-4 py-16">
        
        <div className="flex flex-col md:flex-row gap-12 items-center mb-16">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px] rounded-full overflow-hidden border-4 border-primary-500 shadow-xl">
              <Image 
                src="/images/hary-ridart-profile.jpg" 
                alt="Hary Ridart" 
                fill
                className="object-cover"
              />
            </div>
          </motion.div>

          {/* About Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold mb-4">Hary Ridart</h3>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              I'm a Backend Developer with expertise in enterprise solutions, cloud technologies, and system architecture. With a background in Computer Engineering from Universitas Indonesia, I've built my career developing high-performance applications for major organizations in Indonesia.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-lg bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center text-primary-600 dark:text-primary-400 mr-4">
                  <FiBook size={20} />
                </div>
                <div>
                  <h4 className="font-semibold">Education</h4>
                  <p className="text-gray-700 dark:text-gray-300">Computer Engineering, Universitas Indonesia</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-10 h-10 rounded-lg bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center text-primary-600 dark:text-primary-400 mr-4">
                  <FiBriefcase size={20} />
                </div>
                <div>
                  <h4 className="font-semibold">Current Position</h4>
                  <p className="text-gray-700 dark:text-gray-300">Backend Developer at PT Astragraphia Information Technology</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-10 h-10 rounded-lg bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center text-primary-600 dark:text-primary-400 mr-4">
                  <FiGlobe size={20} />
                </div>
                <div>
                  <h4 className="font-semibold">International Experience</h4>
                  <p className="text-gray-700 dark:text-gray-300">Research Intern at National Taiwan University of Science and Technology</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-10 h-10 rounded-lg bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center text-primary-600 dark:text-primary-400 mr-4">
                  <FiAward size={20} />
                </div>
                <div>
                  <h4 className="font-semibold">Entrepreneurship</h4>
                  <p className="text-gray-700 dark:text-gray-300">Founder of Tersalur, a COVID-19 relief crowdfunding platform</p>
                </div>
              </div>
            </div>

            <p className="text-gray-700 dark:text-gray-300 mb-6">
              My professional journey spans enterprise development, entrepreneurship, research, and academic leadership. I'm passionate about building scalable backend systems and solving complex technical challenges.
            </p>
          </motion.div>
        </div>

        {/* Education & Background Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-20 max-w-4xl mx-auto"
        >
          <h3 className="text-2xl font-bold mb-8 text-center">Education & Background</h3>
          
          <div className="space-y-8">
            <div className="timeline-item">
              <div className="timeline-dot" />
              <div>
                <h4 className="text-xl font-bold text-primary-600 dark:text-primary-400">Computer Engineering</h4>
                <p className="text-gray-600 dark:text-gray-400">Universitas Indonesia | Aug 2017 - Sep 2021</p>
                <p className="mt-2 text-gray-700 dark:text-gray-300">
                  Graduated with a degree in Computer Engineering. Completed thesis on "System Design and Comparative Analysis of Honeynet Implementation Based on Open Source in Demilitarized Zone (DMZ) and Untrusted Network."
                </p>
              </div>
            </div>
            
            <div className="timeline-item">
              <div className="timeline-dot" />
              <div>
                <h4 className="text-xl font-bold text-primary-600 dark:text-primary-400">Network Laboratory Assistant Coordinator</h4>
                <p className="text-gray-600 dark:text-gray-400">Universitas Indonesia | Dec 2019 - Aug 2021</p>
                <p className="mt-2 text-gray-700 dark:text-gray-300">
                  Led a team of laboratory assistants and taught courses on Computer Networks, Computer Security, Database Systems, and Object-Oriented Programming (Java).
                </p>
              </div>
            </div>
            
            <div className="timeline-item">
              <div className="timeline-dot" />
              <div>
                <h4 className="text-xl font-bold text-primary-600 dark:text-primary-400">Research Internship</h4>
                <p className="text-gray-600 dark:text-gray-400">National Taiwan University of Science and Technology | July 2020</p>
                <p className="mt-2 text-gray-700 dark:text-gray-300">
                  Conducted research on OpenRAN Central Unit (O-CU) technologies and telecommunications infrastructure.
                </p>
              </div>
            </div>
            
            <div className="timeline-item">
              <div className="timeline-dot" />
              <div>
                <h4 className="text-xl font-bold text-primary-600 dark:text-primary-400">Founder of Tersalur</h4>
                <p className="text-gray-600 dark:text-gray-400">April 2020 - December 2021</p>
                <p className="mt-2 text-gray-700 dark:text-gray-300">
                  Founded a crowdfunding platform to help people impacted by COVID-19, built using PHP CodeIgniter 3 and Bootstrap.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
