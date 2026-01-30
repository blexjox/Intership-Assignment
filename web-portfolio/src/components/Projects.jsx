import React from 'react'

const sampleProjects = [
  {id:1, title:'Project One', desc:'A responsive web app built with React.', link:'#'},
  {id:2, title:'Project Two', desc:'An API-backed dashboard with charts.', link:'#'},
  {id:3, title:'Project Three', desc:'Tooling and automation scripts.', link:'#'}
]

export default function Projects(){
  return (
    <section className="projects">
      <h2>Projects</h2>
      <div className="grid">
        {sampleProjects.map(p=> (
          <article key={p.id} className="card">
            <div className="thumb"/>
            <h4>{p.title}</h4>
            <p>{p.desc}</p>
            <a className="link" href={p.link}>View</a>
          </article>
        ))}
      </div>
    </section>
  )
}
