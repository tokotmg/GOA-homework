import { Link } from "react-router-dom";
import { courses } from "../data/courses";
function Home() {
  return (
    <div className="home-page">
      <header className="hero">
        <h1>Launch Your Tech Career</h1>
        <p>
          Hands-on, project-based courses in Web Development, Game Design, and
          Cybersecurity.
        </p>
      </header>
      <section className="courses-section">
        <h2>Explore Our Courses</h2>
        <div className="course-grid">
          {courses.map((course) => (
            <div key={course.id} className="course-card">
              <span className="badge">{course.category}</span>
              <h3>{course.title}</h3>
              <p className="card-desc">{course.shortDescription}</p>

              <div className="card-meta">
                <span>⏱ {course.duration}</span>
                <span>📊 {course.level}</span>
              </div>

              <div className="card-footer">
                <span className="price">{course.price}</span>
                <Link to={`/courses/${course.id}`} className="btn-primary">
                  View Course
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
export default Home;
