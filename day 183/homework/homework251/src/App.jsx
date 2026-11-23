import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
function CourseMenu() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Course Lesson Menu</h1>
      <p>Select a lesson to begin:</p>
      <ul>
        <li>
          <Link to="/lesson-1">Lesson 1: Introduction to React</Link>
        </li>
        <li>
          <Link to="/lesson-2">Lesson 2: Components and Props</Link>
        </li>
      </ul>
    </div>
  );
}
function LessonNav({ nextPath, nextLabel }) {
  return (
    <nav style={{ marginTop: '30px', display: 'flex', gap: '15px' }}>
      <Link to="/">← Back to Menu</Link>
      {nextPath && <Link to={nextPath}>{nextLabel} →</Link>}
    </nav>
  );
}
function LessonOne() {
  return (
    <div style={{ padding: '20px' }}>
      <h2>Lesson 1: Introduction to React</h2>
      <p>Welcome to the first lesson! Here you learn the basics of JSX and rendering.</p>
      <LessonNav nextPath="/lesson-2" nextLabel="Next Lesson" />
    </div>
  );
}
function LessonTwo() {
  return (
    <div style={{ padding: '20px' }}>
      <h2>Lesson 2: Components and Props</h2>
      <p>You have reached the final lesson. Great job completing the course!</p>
      <LessonNav />
    </div>
  );
}
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CourseMenu />} />
        <Route path="/lesson-1" element={<LessonOne />} />
        <Route path="/lesson-2" element={<LessonTwo />} />
      </Routes>
    </BrowserRouter>
  );
}