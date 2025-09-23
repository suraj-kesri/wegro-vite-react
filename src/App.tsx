import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="container">
      <h1>About Wegro</h1>
      <p>
        At <span className="highlight">Wegro</span>, we believe city living shouldn’t mean losing touch with nature. Our mission is simple: bring farming back into urban homes, not as a chore, but as a lifestyle upgrade.
      </p>
      <p>
        We design and build smart indoor gardening products that make it possible for anyone to grow fresh, chemical-free food right where they live. From compact microgreens kits to intelligent appliances that manage water, light, and nutrition for you, <span className="highlight">Wegro</span> is about creating green corners that thrive in modern spaces.
      </p>
      <p className="notice">
        Our website is currently under repair. Meanwhile, you can connect with us directly on WhatsApp.
      </p>

      <div className="cta">
        <a href="https://wa.me/YOUR_NUMBER_HERE" target="_blank" rel="noopener noreferrer">
          <span>Connect on WhatsApp</span>
        </a>
      </div>
    </div>
    </>
  )
}

export default App
