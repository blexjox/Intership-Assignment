import React, {useState} from 'react'

export default function Contact(){
  const [message, setMessage] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Message sent (demo): ' + message)
    setMessage('')
  }
  return (
    <section className="contact">
      <h2>Contact</h2>
      <form onSubmit={handleSubmit} className="contact-form">
        <label>
          Message
          <textarea value={message} onChange={(e)=>setMessage(e.target.value)} required />
        </label>
        <div>
          <button className="btn" type="submit">Send</button>
        </div>
      </form>
    </section>
  )
}
