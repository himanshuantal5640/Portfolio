
import React from 'react'
import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mt-12 border-t border-white/10"
    >
      <div className="container py-6 text-sm text-slate-500 dark:text-slate-400 text-center">
        © <span>{new Date().getFullYear()}</span> Himanshu Antal. Built with{" "}
        <span className="text-indigo-500 dark:text-indigo-400 font-semibold">React</span> &{" "}
        <span className="text-indigo-500 dark:text-indigo-400 font-semibold">Tailwind</span>.
      </div>
    </motion.footer>
  )
}
