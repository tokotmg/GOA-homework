import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import MainMenu from './pages/MainMenu';
import Breakfast from './pages/Breakfast';
import Dessert from './pages/Dessert';
export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<MainMenu />} />
        <Route path="/breakfast" element={<Breakfast />} />
        <Route path="/dessert" element={<Dessert />} />
      </Routes>
    </BrowserRouter>
  );
}
