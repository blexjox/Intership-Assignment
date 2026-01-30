import React, {useState} from 'react'
import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App(){
  const [route, setRoute] = useState('home')
  return (
    <div className="app">
      <Header route={route} onNavigate={setRoute} />
      <main className="container">
        {route === 'home' && <Home />}
        {route === 'about' && <About />}
        {route === 'projects' && <Projects />}
        {route === 'contact' && <Contact />}
      </main>
      <Footer />
    </div>
  )
}
