
import React from 'react'
import { motion } from 'framer-motion'
import { Mail, Linkedin, Github,Phone } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="section">
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold mb-8 text-black dark:text-white">Contact</motion.h2>

      <div className="grid md:grid-cols-4 gap-6">
        {/* Email */}
            <a
              target="_blank"
              rel="noreferrer"
              href="https://mail.google.com/mail/?view=cm&to=himanshuantal26@gmail.com"
              className="group rounded-2xl glass p-6 flex flex-col items-start justify-center 
                        hover:bg-sky-500/10 hover:shadow-lg hover:shadow-sky-500/20 
                        transition cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <Mail className="text-sky-500 group-hover:scale-110 transition" />
                <p className="text-sm text-slate-500 dark:text-slate-400">Email</p>
              </div>
              <p className="mt-2 font-medium text-black dark:text-white break-all">
                himanshuantal26@gmail.com
              </p>
            </a>


        {/* LinkedIn */}
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/himanshu-antal/"
          className="group rounded-2xl glass p-6 flex flex-col items-start justify-center 
                     hover:bg-sky-500/10 hover:shadow-lg hover:shadow-sky-500/20 
                     transition cursor-pointer"
        >
          <div className="flex items-center gap-3">
            <Linkedin className="text-sky-500 group-hover:scale-110 transition" />
            <p className="text-sm text-slate-500 dark:text-slate-400">LinkedIn</p>
          </div>
          <p className="mt-2 font-medium text-black dark:text-white break-all">
            /in/himanshu-antal/
          </p>
        </a>

        {/* GitHub */}
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/himanshuantal5640"
          className="group rounded-2xl glass p-6 flex flex-col items-start justify-center 
                     hover:bg-sky-500/10 hover:shadow-lg hover:shadow-sky-500/20 
                     transition cursor-pointer"
        >
          <div className="flex items-center gap-3">
            <Github className="text-sky-500 group-hover:scale-110 transition" />
            <p className="text-sm text-slate-500 dark:text-slate-400">GitHub</p>
          </div>
          <p className="mt-2 font-medium text-black dark:text-white break-all">
            github.com/himanshuantal5640
          </p>
        </a>
         {/* Mobile No. */}
        <a
          href="tel:+917351206107"
          className="group rounded-2xl glass p-6 flex flex-col items-start justify-center 
                     hover:bg-sky-500/10 hover:shadow-lg hover:shadow-sky-500/20 
                     transition cursor-pointer"
        >
          <div className="flex items-center gap-3">
            <Phone className="text-sky-500 group-hover:scale-110 transition" />
            <p className="text-sm text-slate-500 dark:text-slate-400">Mobile No.</p>
          </div>
          <p className="mt-2 font-medium text-black dark:text-white break-all">
            +91-7351206107
          </p>
        </a>
      </div>
    </section>
  )
}

