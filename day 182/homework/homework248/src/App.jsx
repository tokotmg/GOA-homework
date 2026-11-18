import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import CourseDetail from "./pages/CourseDetail";
import "./App.css";
function App() {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Navbar />
        <main className="main-content">
          <Routes>
            {/* Main Page Route */}
            <Route path="/" element={<Home />} />

            {/* Dynamic Route for Each Dedicated Course Page */}
            <Route path="/courses/:courseId" element={<CourseDetail />} />

            {/* Fallback Route for Unknown URLs */}
            <Route
              path="*"
              element={
                <div className="not-found">
                  <h2>404 - Page Not Found</h2>
                </div>
              }
            />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}
export default App;
