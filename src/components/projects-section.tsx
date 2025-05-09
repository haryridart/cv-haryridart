"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { FiExternalLink, FiGithub, FiTag } from "react-icons/fi"
import Image from "next/image"

type Project = {
  title: string
  description: string
  image: string
  tags: string[]
  category: string
  links?: {
    live?: string
    github?: string
  }
}

type ProjectCardProps = {
  project: Project
  index: number
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="card overflow-hidden"
    >
      <div className="relative h-48 bg-gray-200 dark:bg-dark-300">
        {project.image ? (
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary-400 to-secondary-500 text-white">
            {project.title}
          </div>
        )}
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-primary-600 dark:text-primary-400">{project.title}</h3>
        <p className="text-gray-700 dark:text-gray-300 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag, i) => (
            <span
              key={i}
              className="inline-flex items-center px-3 py-1 text-xs bg-gray-100 dark:bg-dark-300 text-gray-700 dark:text-gray-300 rounded-full"
            >
              <FiTag className="mr-1" size={12} /> {tag}
            </span>
          ))}
        </div>
        <div className="flex space-x-3">
          {project.links?.live && (
            <a
              href={project.links.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-sm text-primary-600 dark:text-primary-400 hover:underline"
            >
              <FiExternalLink className="mr-1" size={14} /> Live Demo
            </a>
          )}
          {project.links?.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-sm text-primary-600 dark:text-primary-400 hover:underline"
            >
              <FiGithub className="mr-1" size={14} /> GitHub
            </a>
          )}
        </div>
      </div>
    </motion.div>
  )
}

export function ProjectsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [filter, setFilter] = useState("all")

  const projects: Project[] = [
    {
      title: "Manulife Financial Billing System",
      description: "Enterprise billing system with WhatsApp notification integration and host-to-host payment processing with BRI bank.",
      image: "",
      tags: ["Java", "Spring Boot", "Azure", "Oracle"],
      category: "enterprise",
    },
    {
      title: "PGN Billing System",
      description: "High-performance billing system for Pertamina Gas Negara with containerized deployment using Docker and Kubernetes.",
      image: "",
      tags: ["Java", "Spring Boot", "Docker", "Kubernetes"],
      category: "enterprise",
    },
    {
      title: "Tersalur Crowdfunding Platform",
      description: "Social impact platform developed during COVID-19 to connect donors with people in need through a transparent crowdfunding system.",
      image: "",
      tags: ["PHP", "CodeIgniter", "Bootstrap", "MySQL"],
      category: "personal",
      links: {
        live: "https://example.com/tersalur",
      },
    },
    {
      title: "ESDC 4.1 for SKK Migas",
      description: "Content Management System and Reporting Web with data analysis capabilities using Python Pandas for validation.",
      image: "",
      tags: ["Java", "Spring Boot", "Python", "Pandas"],
      category: "enterprise",
    },
    {
      title: "Honeynet Implementation Research",
      description: "Bachelor thesis project on system design and comparative analysis of honeynet implementation in DMZ and untrusted networks.",
      image: "",
      tags: ["Network Security", "Honeynet", "DMZ", "Research"],
      category: "research",
    },
    {
      title: "OpenRAN Central Unit Study",
      description: "Research project conducted at NTUST focusing on OpenRAN Central Unit architecture and implementation.",
      image: "",
      tags: ["OpenRAN", "Telecommunications", "5G", "Research"],
      category: "research",
    },
  ]

  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(project => project.category === filter)

  return (
    <section id="projects" className="section">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Project Showcase</h2>
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            A selection of my professional, personal, and research projects demonstrating my technical capabilities.
          </p>
          
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            <button
              onClick={() => setFilter("all")}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                filter === "all"
                  ? "bg-primary-600 text-white"
                  : "bg-gray-100 dark:bg-dark-100 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-dark-200"
              }`}
            >
              All Projects
            </button>
            <button
              onClick={() => setFilter("enterprise")}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                filter === "enterprise"
                  ? "bg-primary-600 text-white"
                  : "bg-gray-100 dark:bg-dark-100 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-dark-200"
              }`}
            >
              Enterprise
            </button>
            <button
              onClick={() => setFilter("personal")}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                filter === "personal"
                  ? "bg-primary-600 text-white"
                  : "bg-gray-100 dark:bg-dark-100 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-dark-200"
              }`}
            >
              Personal
            </button>
            <button
              onClick={() => setFilter("research")}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                filter === "research"
                  ? "bg-primary-600 text-white"
                  : "bg-gray-100 dark:bg-dark-100 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-dark-200"
              }`}
            >
              Research
            </button>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
