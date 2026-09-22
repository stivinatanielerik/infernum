import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import Footer from './components/Footer'

import Home from './pages/Home'
import Rave from './pages/Rave'
import GenrePage from './components/GenrePage'

import { bochka } from './data/genres/bochka'
import { hardtekk } from './data/genres/hardtekk'
import { hardcore } from './data/genres/hardcore'
import { hardstyle } from './data/genres/hardstyle'
import { industrial } from './data/genres/industrial'
import { hardtechno } from './data/genres/hardtechno'
import { frenchcore } from './data/genres/frenchcore'

function App() {
  return (
    <BrowserRouter basename="/infernum">
      <div className="min-h-screen bg-black text-white">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/rave" element={<Rave />} />

          <Route
            path="/bochka"
            element={<GenrePage genre={bochka} />}
          />

          <Route
            path="/hardtekk"
            element={<GenrePage genre={hardtekk} />}
          />

          <Route
            path="/hardcore"
            element={<GenrePage genre={hardcore} />}
          />

          <Route
            path="/hardstyle"
            element={<GenrePage genre={hardstyle} />}
          />

          <Route
            path="/industrial"
            element={<GenrePage genre={industrial} />}
          />

          <Route
            path="/hardtechno"
            element={<GenrePage genre={hardtechno} />}
          />

          <Route
            path="/frenchcore"
            element={<GenrePage genre={frenchcore} />}
          />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App