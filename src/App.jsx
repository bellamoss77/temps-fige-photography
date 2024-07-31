import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import About from './components/About';
import Contact from './components/Contact';
import LandscapePortfolio from './components/LandscapePortfolio';
import NaturePortfolio from './components/NaturePortfolio';
import PetsPortfolio from './components/PetsPortfolio';
import RuinsPortfolio from './components/RuinsPortfolio';
import Footer from './components/Footer';
import './App.css'

function App() {
  return (
    <Router>
      <div className='App'>
        <Navbar />
        <header className='App-header'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/landscape' element={<LandscapePortfolio />} />
            <Route path='/nature' element={<NaturePortfolio />} />
            <Route path='/pets' element={<PetsPortfolio />} />
            <Route path='/ruins' element={<RuinsPortfolio />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='*' element={<Home />} />
          </Routes>
        </header>
        <Footer />
      </div>
    </Router>
  )
}

export default App
