import React from 'react'

export default function Header({route, onNavigate}){
  return (
    <header className="site-header">
      <div className="brand" onClick={()=>onNavigate('home')}>Dev Portfolio</div>
      <nav>
        <button className={route==='home'? 'active':''} onClick={()=>onNavigate('home')}>Home</button>
        <button className={route==='about'? 'active':''} onClick={()=>onNavigate('about')}>About</button>
        <button className={route==='projects'? 'active':''} onClick={()=>onNavigate('projects')}>Projects</button>
        <button className={route==='contact'? 'active':''} onClick={()=>onNavigate('contact')}>Contact</button>
      </nav>
    </header>
  )
}
