import React from 'react'
import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <section id="contact" className="section">
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold mb-8">Contact</motion.h2>
      <div className="grid md:grid-cols-3 gap-6">
        <a target="_blank" rel="noreferrer"
           href="mailto:himanshuantal26@gmail.com"
           className="rounded-2xl glass p-6 hover:shadow-glow transition">
          <p className="text-sm text-slate-400">Email</p>
          <p className="mt-1">himanshuantal26@gmail.com</p>
        </a>
        <a target="_blank" rel="noreferrer"
           href="https://www.linkedin.com/in/himanshu-antal/"
           className="rounded-2xl glass p-6 hover:shadow-glow transition">
          <p className="text-sm text-slate-400">LinkedIn</p>
          <p className="mt-1 break-all">/in/himanshu-antal /</p>
        </a>
        <a target="_blank" rel="noreferrer"
           href="https://github.com/himanshuantal5640"
           className="rounded-2xl glass p-6 hover:shadow-glow transition">
          <p className="text-sm text-slate-400">GitHub</p>
          <p className="mt-1 break-all">github.com/himanshuantal5640</p>
        </a>
      </div>
    </section>
  )
}
