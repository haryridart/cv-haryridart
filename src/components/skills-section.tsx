"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { 
  FiCode, 
  FiDatabase, 
  FiServer, 
  FiCloud, 
  FiTool, 
  FiGlobe 
} from "react-icons/fi"

type Skill = {
  name: string
  level: number // 1-5
}

type SkillCategoryProps = {
  title: string
  icon: React.ReactNode
  skills: Skill[]
  index: number
}

const SkillCategory = ({ title, icon, skills, index }: SkillCategoryProps) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="card p-6"
    >
      <div className="flex items-center mb-6">
        <div className="w-12 h-12 rounded-lg bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center text-primary-600 dark:text-primary-400 mr-4">
          {icon}
        </div>
        <h3 className="text-xl font-bold">{title}</h3>
      </div>
      <div className="space-y-4">
        {skills.map((skill, i) => (
          <div key={i}>
            <div className="flex justify-between mb-1">
              <span className="text-gray-700 dark:text-gray-300">{skill.name}</span>
              <span className="text-gray-500 dark:text-gray-400 text-sm">
                {["Beginner", "Basic", "Intermediate", "Advanced", "Expert"][skill.level - 1]}
              </span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-dark-300 rounded-full h-2">
              <motion.div
                initial={{ width: 0 }}
                animate={inView ? { width: `${skill.level * 20}%` } : {}}
                transition={{ duration: 0.8, delay: i * 0.1 + index * 0.2 }}
                className="h-2 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500"
              />
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  )
}

export function SkillsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <FiCode size={24} />,
      skills: [
        { name: "Java", level: 5 },
        { name: "JavaScript", level: 4 },
        { name: "Python", level: 3 },
        { name: "PHP", level: 3 },
        { name: "SQL", level: 4 },
      ],
    },
    {
      title: "Frameworks & Libraries",
      icon: <FiServer size={24} />,
      skills: [
        { name: "Spring Boot", level: 5 },
        { name: "Hibernate", level: 4 },
        { name: "Thymeleaf", level: 4 },
        { name: "CodeIgniter", level: 3 },
        { name: "Bootstrap", level: 4 },
      ],
    },
    {
      title: "Databases",
      icon: <FiDatabase size={24} />,
      skills: [
        { name: "Oracle Database", level: 4 },
        { name: "PostgreSQL", level: 4 },
        { name: "MySQL", level: 4 },
        { name: "Elasticsearch", level: 3 },
        { name: "Redis", level: 3 },
      ],
    },
    {
      title: "Cloud & DevOps",
      icon: <FiCloud size={24} />,
      skills: [
        { name: "Docker", level: 4 },
        { name: "Kubernetes", level: 3 },
        { name: "Jenkins", level: 3 },
        { name: "Azure Services", level: 3 },
        { name: "Git/Bitbucket", level: 4 },
      ],
    },
    {
      title: "Tools & Platforms",
      icon: <FiTool size={24} />,
      skills: [
        { name: "Kibana", level: 3 },
        { name: "Swagger", level: 4 },
        { name: "Wavemaker", level: 3 },
        { name: "Maven", level: 4 },
        { name: "Oracle Forms", level: 3 },
      ],
    },
    {
      title: "Specialized Knowledge",
      icon: <FiGlobe size={24} />,
      skills: [
        { name: "REST API Design", level: 5 },
        { name: "Network Security", level: 4 },
        { name: "OpenRAN", level: 3 },
        { name: "Performance Tuning", level: 4 },
        { name: "System Architecture", level: 4 },
      ],
    },
  ]

  return (
    <section id="skills" className="section bg-gray-50 dark:bg-dark-100">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Skills</h2>
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            A comprehensive overview of my technical expertise and proficiency levels across various technologies.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <SkillCategory
              key={index}
              index={index}
              title={category.title}
              icon={category.icon}
              skills={category.skills}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
