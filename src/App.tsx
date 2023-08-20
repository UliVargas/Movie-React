import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { MovieDetails } from './pages/MovieDetails'
import { LandingPage } from './pages/LandingPage'
import { Nav } from './components/molecules/Nav'

export default function App() {
  return (
    <BrowserRouter>
      <header>
        <Nav />
      </header>
      <main>
        <Routes>
          <Route path="/movie/:movieId" element={<MovieDetails />} />
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}
