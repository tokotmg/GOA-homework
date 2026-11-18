import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { courses } from "../data/courses";
function CourseDetail() {
  const { courseId } = useParams();
  const [enrolled, setEnrolled] = useState(false);
  const course = courses.find((item) => item.id === courseId);
  if (!course) {
    return (
      <div className="not-found">
        <h2>Course Not Found</h2>
        <p>Sorry, the course you are looking for does not exist.</p>
        <Link to="/" className="btn-primary">
          Back to All Courses
        </Link>
      </div>
    );
  }
  return (
    <div className="course-detail">
      <Link to="/" className="back-link">
        ← Back to All Courses
      </Link>
      <div className="detail-header">
        <span className="badge">{course.category}</span>
        <h1>{course.title}</h1>
        <p className="detail-intro">{course.fullDescription}</p>
        <div className="detail-meta">
          <div>
            <strong>Instructor:</strong> {course.instructor}
          </div>
          <div>
            <strong>Duration:</strong> {course.duration}
          </div>
          <div>
            <strong>Level:</strong> {course.level}
          </div>
          <div>
            <strong>Price:</strong> {course.price}
          </div>
        </div>
      </div>
      <div className="syllabus-box">
        <h2>Course Syllabus</h2>
        <ul className="syllabus-list">
          {course.syllabus.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>

      <div className="enroll-section">
        {enrolled ? (
          <div className="enroll-success">
            🎉 You are enrolled in <strong>{course.title}</strong>! Check your
            dashboard to start Module 1.
          </div>
        ) : (
          <button
            className="btn-primary btn-large"
            onClick={() => setEnrolled(true)}
          >
            Enroll Now for {course.price}
          </button>
        )}
      </div>
    </div>
  );
}
export default CourseDetail;
