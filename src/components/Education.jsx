
import React from 'react'
import { motion } from 'framer-motion'
import { GraduationCap } from 'lucide-react'

export default function Education() {
  return (
    <section id="education" className="section">
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold mb-8 text-black dark:text-white">Education</motion.h2>

      <div className="group rounded-2xl glass p-8 shadow-glow hover:bg-sky-500/10 hover:shadow-lg hover:shadow-sky-500/20 transition">
        <div className="flex items-center gap-3">
          <GraduationCap className="text-sky-500 group-hover:scale-110 transition" />
          <p className="text-slate-800 dark:text-slate-200 font-medium">
            B.Tech in Computer Science & Engineering — 3rd Year
          </p>
        </div>
        <p className="text-slate-600 dark:text-slate-400 mt-2">
          Currently pursuing.
        </p>
      </div>
    </section>
  )
}
