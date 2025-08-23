import React from 'react'

export default function Footer() {
  return (
    <footer className="mt-8 border-t border-slate-200 dark:border-white/10">
      <div className="container py-6 text-sm text-slate-600 dark:text-slate-400 text-center">
        © <span>{new Date().getFullYear()}</span> Himanshu Antal. Built with React & Tailwind.
      </div>
    </footer>
  )
}
