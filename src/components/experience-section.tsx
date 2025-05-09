"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { FiCalendar, FiBriefcase, FiCode } from "react-icons/fi"

type ExperienceItemProps = {
  title: string
  company: string
  duration: string
  description: string[]
  technologies: string[]
  index: number
}

const ExperienceItem = ({ title, company, duration, description, technologies, index }: ExperienceItemProps) => {
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
      className="timeline-item"
    >
      <div className="timeline-dot" />
      <div className="card p-6">
        <div className="flex flex-wrap justify-between items-start mb-2">
          <h3 className="text-xl font-bold text-primary-600 dark:text-primary-400">{title}</h3>
          <span className="inline-flex items-center text-sm text-gray-600 dark:text-gray-400">
            <FiCalendar className="mr-1" /> {duration}
          </span>
        </div>
        <div className="mb-4 flex items-center text-gray-700 dark:text-gray-300">
          <FiBriefcase className="mr-2" /> {company}
        </div>
        <div className="mb-4">
          <ul className="space-y-2">
            {description.map((item, i) => (
              <li key={i} className="text-gray-700 dark:text-gray-300">
                • {item}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className="flex items-center mb-2 text-gray-700 dark:text-gray-300">
            <FiCode className="mr-2" /> Technologies:
          </div>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, i) => (
              <span
                key={i}
                className="px-3 py-1 text-sm bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export function ExperienceSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const experiences = [
    {
      title: "Backend Developer",
      company: "PT Astragraphia Information Technology (AGIT)",
      duration: "Aug 2024 - Present",
      description: [
        "Developed Restful Webservice API for Billing System application using Java Springboot for Manulife Financial",
        "Developed Whatsapp Notification Feature using Java Springboot, Azure Databricks, Azure Data Factory, and Azure Key Vault",
        "Developed Host to Host payment transaction with bank BRI to Manulife",
        "Developed Oracle Forms application for tracking Whatsapp History Notification",
        "Developed Restful Webservice API for PGN Billing System using Java Springboot",
        "Set up deployment environment on Docker and Kubernetes",
        "Tuned application performance for optimal operation"
      ],
      technologies: ["Java", "Spring Boot", "Oracle Database", "Docker", "Kubernetes", "Azure Databricks", "Azure Data Factory", "Azure Key Vault", "Oracle Forms", "Jenkins", "Bitbucket"],
    },
    {
      title: "Fullstack Developer",
      company: "Deltadata Mandiri",
      duration: "Feb 2022 - Sep 2023",
      description: [
        "Developed Restful Webservice API for CV Application using Java Springboot for PT PLN Persero",
        "Developed Content Management System and Reporting Web using Java Spring Boot and Thymeleaf for SKK Migas",
        "Used Python Pandas for report validation (data analysis) by set of rules",
        "Developed Content Management System with a low-code environment for Bappenas (Satu Data Indonesia)",
        "Developed REST API to handle data analytics and visualization from Elastic Kibana for APM Deltadatash",
        "Refactored legacy code to improve reliability, scalability, and maintainability"
      ],
      technologies: ["Java", "Spring Boot", "Hibernate", "PostgreSQL", "Python", "Pandas", "JavaScript", "Thymeleaf", "PostGIS", "Redis Queue", "Elasticsearch", "Kibana", "Swagger", "Wavemaker", "Maven"],
    },
    {
      title: "Founder",
      company: "Tersalur",
      duration: "Apr 2020 - Dec 2021",
      description: [
        "Founded a crowdfunding platform to help people impacted by COVID-19",
        "Built the entire platform using PHP CodeIgniter 3 and Bootstrap",
        "Managed the development process and coordinated platform operations",
        "Created a user-friendly interface for donors and beneficiaries"
      ],
      technologies: ["PHP", "CodeIgniter 3", "Bootstrap", "MySQL", "JavaScript", "HTML/CSS"],
    },
    {
      title: "Research Intern",
      company: "National Taiwan University of Science and Technology (NTUST)",
      duration: "Jul 2020 - Sep 2020",
      description: [
        "Conducted deep study about OpenRAN Central Unit (O-CU)",
        "Researched advanced telecommunications infrastructure and open radio access networks",
        "Collaborated with international research team",
        "Documented research findings and methodologies"
      ],
      technologies: ["OpenRAN", "Telecommunications", "Network Architecture", "5G Technologies"],
    },
    {
      title: "Network Laboratory Assistant Coordinator",
      company: "Universitas Indonesia",
      duration: "Dec 2019 - Jul 2021",
      description: [
        "Led team of network laboratory assistants",
        "Taught laboratory sessions on Computer Network, Computer Security, Database System, and Object Oriented Programming (Java)",
        "Coordinated teaching schedules and materials",
        "Mentored junior laboratory assistants"
      ],
      technologies: ["Computer Networks", "Network Security", "Database Systems", "Java", "Object-Oriented Programming"],
    },
  ]

  return (
    <section id="experience" className="section bg-gray-50 dark:bg-dark-100">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Professional Experience</h2>
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            My professional journey spans enterprise development, entrepreneurship, research, and academic leadership.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((experience, index) => (
            <ExperienceItem
              key={index}
              index={index}
              title={experience.title}
              company={experience.company}
              duration={experience.duration}
              description={experience.description}
              technologies={experience.technologies}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
