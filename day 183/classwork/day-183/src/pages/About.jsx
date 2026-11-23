import { Link } from "react-router-dom";
export default function About() {
  return (
    <div style={{ padding: "1rem" }}>
      <h1>About Page</h1>
      <p>Learn more about what we do.</p>
      <p>
        Return <Link to="/">Home</Link> or visit <Link to="/contact">Contact</Link>.
      </p>
    </div>
  );
}
