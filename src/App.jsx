import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

import Navbar  from './components/Navbar.jsx'
import HeroSection  from './components/HeroSection.jsx'
import SquareCard  from './components/SquareCard.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <main style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '3rem', paddingBottom: '4rem' }}>
        <HeroSection />
        <SquareCard />
      </main>
    </>
  )
}

export default App
