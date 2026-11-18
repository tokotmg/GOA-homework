//React Router არის ბიბლიოთეკა, რომელიც React-აპლიკაციებისთვის მარშრუტიზაციის შესაძლებლობებს უზრუნველყოფს.
//<link> თეგი HTML დოკუმენტს გარე რესურსებს ფარულად უკავშირებს, ხოლო <a> ტეგი ქმნის ისეთ ჰიპერბმულებს, რომლებზეც მომხმარებლებს შეუძლიათ დაწკაპუნება და გვერდებს შორის გადასვლა.
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Gallery from './pages/Gallery';
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App
