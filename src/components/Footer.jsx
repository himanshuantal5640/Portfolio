// import React from 'react'

// export default function Footer() {
//   return (
//     <footer className="mt-8 border-t border-slate-200 dark:border-white/10">
//       <div className="container py-6 text-sm text-slate-600 dark:text-slate-400 text-center">
//         © <span>{new Date().getFullYear()}</span> Himanshu Antal. Built with React & Tailwind.
//       </div>
//     </footer>
//   )
// }
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
