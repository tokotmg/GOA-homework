import { Link } from "react-router-dom";
import { courses } from "../data/courses";
function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          TechForge Academy
        </Link>

        <ul className="nav-links">
          <li>
            <Link to="/">All Courses</Link>
          </li>
          {courses.map((course) => (
            <li key={course.id}>
              <Link to={`/courses/${course.id}`}>{course.category}</Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
export default Navbar;
