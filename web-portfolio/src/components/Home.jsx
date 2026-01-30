import React from 'react'

export default function Home(){
  return (
    <section className="home">
      <div className="hero">
        <h1>Hi, I'm Blessen.</h1>
        <p>Frontend Developer — building accessible, performant web apps. — Blessen</p>
        <div className="cta-row">
          <a className="btn" href="#" onClick={(e)=>{e.preventDefault(); window.location.hash='contact';}}>Work With Me</a>
          <a className="btn ghost" href="#" onClick={(e)=>{e.preventDefault(); window.location.hash='projects';}}>See Projects</a>
        </div>
      </div>
      <div className="skills">
        <h3>Skills</h3>
        <ul>
          <li>React</li>
          <li>TypeScript / JavaScript</li>
          <li>HTML &amp; CSS</li>
          <li>Vite / Tooling</li>
        </ul>
      </div>
    </section>
  )
}
