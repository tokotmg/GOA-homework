import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import QuestionDetail from './QuestionDetail';
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/faq/:id" element={<QuestionDetail />} />
      </Routes>
    </BrowserRouter>
  );
}
