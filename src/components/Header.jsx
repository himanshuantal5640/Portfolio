// import React, { useEffect, useState } from 'react'
// import { Menu, X } from 'lucide-react'


// const nav = [
//   { id: 'about', label: 'About' },
//   { id: 'skills', label: 'Skills' },
//   { id: 'projects', label: 'Projects' },
//   { id: 'education', label: 'Education' },
//   { id: 'contact', label: 'Contact' },
// ]

// export default function Header() {
//   const [open, setOpen] = useState(false)
//   const [active, setActive] = useState('about')

//   useEffect(() => {
//     const sections = nav.map(n => document.getElementById(n.id))
//     const obs = new IntersectionObserver(
//       entries => {
//         entries.forEach(e => {
//           if (e.isIntersecting) setActive(e.target.id)
//         })
//       },
//       { rootMargin: '-40% 0px -55% 0px', threshold: 0.01 }
//     )
//     sections.forEach(s => s && obs.observe(s))
//     return () => obs.disconnect()
//   }, [])

//   return (
//     <header className="sticky top-0 z-50 glass">
//       <div className="container">
//         <div className="flex items-center justify-between h-16">
//           <a href="#" className="text-xl font-bold tracking-tight">
//             <span className="text-sky-400">Himanshu</span> Antal
//           </a>
//           <nav className="hidden md:flex items-center gap-6">
//             {nav.map(item => (
//               <a
//                 key={item.id}
//                 href={`#${item.id}`}
//                 className={`text-sm transition ${active===item.id ? 'text-white' : 'text-slate-300 hover:text-white'}`}
//               >
//                 {item.label}
//               </a>
//             ))}
//             <span className="ml-4 text-xs rounded-full border border-white/10 px-3 py-1 text-slate-200">
//               Frontend Developer
//             </span>
//           </nav>
//           <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu">
//             {open ? <X /> : <Menu />}
//           </button>
//         </div>
//       </div>
//       {open && (
//         <div className="md:hidden border-t border-white/10">
//           <div className="px-4 py-3 space-y-2">
//             {nav.map(item => (
//               <a key={item.id} href={`#${item.id}`} className="block text-slate-200" onClick={() => setOpen(false)}>
//                 {item.label}
//               </a>
//             ))}
//           </div>
//         </div>
//       )}
   
//     </header>
//   )
// }
import React, { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Link } from 'react-scroll'
import ThemeToggle from './ThemeToggle.jsx'

const nav = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('about')

  useEffect(() => {
    const sections = nav.map(n => document.getElementById(n.id))
    const obs = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) setActive(e.target.id)
        })
      },
      { rootMargin: '-40% 0px -55% 0px', threshold: 0.01 }
    )
    sections.forEach(s => s && obs.observe(s))
    return () => obs.disconnect()
  }, [])

  return (
    <header className="sticky top-0 z-50 glass">
      <div className="container">
        <div className="flex items-center justify-between h-16">
          <Link to="hero" smooth duration={500} className="cursor-pointer text-xl font-bold tracking-tight">
            <span className="text-sky-500">Himanshu</span> Antal
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            {nav.map(item => (
              <Link
                key={item.id}
                to={item.id}
                smooth
                duration={500}
                className={`text-sm transition cursor-pointer ${
                  active === item.id
                    ? 'text-black dark:text-white'
                    : 'text-slate-700 dark:text-slate-300 hover:text-black dark:hover:text-white'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <span className="ml-4 text-xs rounded-full border border-slate-300 dark:border-white/10 px-3 py-1 text-slate-700 dark:text-slate-200">
              Frontend Developer
            </span>
            <ThemeToggle />
          </nav>
          <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden border-t border-slate-200 dark:border-white/10">
          <div className="px-4 py-3 space-y-3">
            {nav.map(item => (
              <Link
                key={item.id}
                to={item.id}
                smooth
                duration={500}
                className="block text-slate-700 dark:text-slate-200 cursor-pointer"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <ThemeToggle />
          </div>
        </div>
      )}
    </header>
  )
}
