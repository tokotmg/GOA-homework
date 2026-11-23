import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Counter from './pages/Counter'
import Menu from './pages/Menu'
import './App.css';
function App() {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/menu" element={<Menu />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
