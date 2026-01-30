import React from 'react'

export default function Footer(){
  return (
    <footer className="site-footer">
      <div>© {new Date().getFullYear()} Dev Name — Built with React + Vite</div>
      <div className="footer-links">
        <a href="https://github.com/" target="_blank" rel="noreferrer">GitHub</a>
        <a href="https://linkedin.com/" target="_blank" rel="noreferrer">LinkedIn</a>
      </div>
    </footer>
  )
}
