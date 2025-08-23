
import React from 'react'
import { motion } from 'framer-motion'
import { Hammer, Github } from 'lucide-react'

export default function Projects() {
  return (
    <section id="projects" className="section">
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold mb-8 text-black dark:text-white">Projects</motion.h2>

      <div className="grid md:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="group rounded-2xl glass p-6 shadow-glow hover:bg-sky-500/10 hover:shadow-lg hover:shadow-sky-500/20 transition"
        >
          <div className="flex items-center gap-3">
            <Hammer className="text-sky-500 group-hover:scale-110 transition" />
            <h3 className="text-lg font-semibold text-black dark:text-white">Currently working</h3>
          </div>
          <p className="mt-3 text-slate-700 dark:text-slate-300">
            I'm actively building new projects. This section will be updated with live demos and GitHub links.
          </p>
          <a href="https://github.com/himanshuantal5640" target="_blank" rel="noreferrer"
             className="inline-flex items-center gap-2 mt-4 text-sky-500 hover:underline">
            <Github size={18} /> View GitHub
          </a>
        </motion.div>
      </div>
    </section>
  )
}
