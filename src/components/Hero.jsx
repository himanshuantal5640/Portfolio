
// import React, { useEffect, useState } from 'react'
// import { motion } from 'framer-motion'
// import { Link } from 'react-scroll'
// import { Download } from 'lucide-react'

// const titles = ['Frontend Developer', 'React Enthusiast', 'MERN Learner']

// export default function Hero() {
//   const [idx, setIdx] = useState(0)
//   const [display, setDisplay] = useState('')

//   useEffect(() => {
//     let i = 0
//     let timer = setInterval(() => {
//       setDisplay(titles[idx].slice(0, i++))
//       if (i > titles[idx].length) {
//         clearInterval(timer)
//         setTimeout(() => {
//           setIdx((idx + 1) % titles.length)
//           setDisplay('')
//         }, 1200)
//       }
//     }, 80)
//     return () => clearInterval(timer)
//   }, [idx])

//   return (
//     <section id="hero" className="section">
//       <div className="grid md:grid-cols-2 gap-10 items-center">
//         <motion.div
//           initial={{ opacity: 0, y: 24 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//         >
//           <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight text-black dark:text-white">
//             Hi, I'm <span className="text-sky-500">Himanshu Antal</span>
//           </h1>
//           <p className="mt-2 text-lg text-slate-700 dark:text-slate-300">
//             <span className="text-black dark:text-white">{display}</span><span className="animate-pulse">|</span>
//           </p>
//           <p className="mt-5 text-slate-700 dark:text-slate-300 leading-relaxed">
//             I craft elegant, accessible and high-performance web interfaces. Currently strengthening my MERN skills to build robust end-to-end products.
//           </p>

//           <div className="mt-6 flex flex-wrap gap-3">
//             <Link
//               to="projects"
//               smooth
//               duration={500}
//               className="px-5 py-2.5 rounded-xl bg-sky-500 hover:bg-sky-600 transition shadow-glow text-white cursor-pointer"
//             >
//               View Projects
//             </Link>
//             <Link
//               to="contact"
//               smooth
//               duration={500}
//               className="px-5 py-2.5 rounded-xl glass text-black dark:text-white cursor-pointer"
//             >
//               Contact
//             </Link> 
//             {/* Download CV Button */}
//             <a
//               href="/CV1.pdf"
//               download="Himanshu_Antal_CV.pdf"
//               className="px-5 py-2.5 rounded-xl glass flex items-center gap-2 text-black dark:text-white hover:bg-sky-500/10 transition cursor-pointer"
//             >
//               <Download size={18} /> Download CV
//             </a>
//           </div>
//         </motion.div>

//         <motion.div
//           initial={{ opacity: 0, scale: 0.95 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6, delay: 0.1 }}
//           className="rounded-3xl glass p-8 shadow-glow bg-grid bg-[length:var(--tw-bg-size-grid)]"
//         >
//           <div className="aspect-[4/3] rounded-2xl glass grid place-items-center">
//             <div className="text-center">
//               <p className="text-sm text-slate-600 dark:text-slate-300">Portfolio Snapshot</p>
//               <p className="text-xl font-semibold mt-2 text-black dark:text-white">Clean • Modern • Fast</p>
//             </div>
//             {/* <img src="./profile.jpg" alt="" className='h-3/4 w-3/4'/> */}
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   )
// }
import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-scroll'
import { Download } from 'lucide-react'

const titles = ['Frontend Developer', 'React Enthusiast', 'MERN Learner']

export default function Hero() {
  const [idx, setIdx] = useState(0)
  const [display, setDisplay] = useState('')

  useEffect(() => {
    let i = 0
    let timer = setInterval(() => {
      setDisplay(titles[idx].slice(0, i++))
      if (i > titles[idx].length) {
        clearInterval(timer)
        setTimeout(() => {
          setIdx((idx + 1) % titles.length)
          setDisplay('')
        }, 1200)
      }
    }, 80)
    return () => clearInterval(timer)
  }, [idx])

  return (
    <section id="hero" className="section">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight text-black dark:text-white">
            Hi, I'm <span className="text-sky-500">Himanshu Antal</span>
          </h1>

          <p className="mt-2 text-lg text-slate-700 dark:text-slate-300">
            <span className="text-black dark:text-white">{display}</span>
            <span className="animate-pulse">|</span>
          </p>

          <p className="mt-5 text-slate-700 dark:text-slate-300 leading-relaxed">
            I craft elegant, accessible and high-performance web interfaces. 
            Currently strengthening my MERN skills to build robust end-to-end products.
          </p>

          {/* Buttons */}
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              to="projects"
              smooth
              duration={500}
              className="px-5 py-2.5 rounded-xl bg-sky-500 hover:bg-sky-600 
                         transition shadow-glow text-white cursor-pointer"
            >
              View Projects
            </Link>

            <Link
              to="contact"
              smooth
              duration={500}
              className="px-5 py-2.5 rounded-xl glass text-black dark:text-white cursor-pointer"
            >
              Contact
            </Link>

            {/* Download CV Button */}
            <a
              href="/CV1.pdf"
              download="Himanshu_Antal_CV.pdf"
              className="px-5 py-2.5 rounded-xl glass flex items-center gap-2 
                         text-black dark:text-white hover:bg-sky-500/10 transition cursor-pointer"
            >
              <Download size={18} /> Download CV
            </a>
          </div>
        </motion.div>

<<<<<<< HEAD
        {/* Right Content with Circular Rotating Image */}
=======
          {/* Right Content with Circular Rotating Image */}
>>>>>>> 6c27c5f02aa33bfff22d16291783b8ecb8dae649
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex justify-center items-center"
        >
          <motion.div
            // animate={{ rotate: 360 }}
            // transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
            className="rounded-full p-2 bg-gradient-to-tr from-sky-400 to-indigo-500 shadow-lg"
          >
            <img
              src="/profile.jpg" 
              alt="Himanshu Antal"
              className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 object-cover rounded-full border-4 border-white dark:border-slate-800 shadow-lg"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
