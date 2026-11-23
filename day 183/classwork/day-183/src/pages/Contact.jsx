import { Link } from "react-router-dom";
export default function Contact() {
  return (
    <div style={{ padding: "1rem" }}>
      <h1>Contact Page</h1>
      <p>Get in touch with us.</p>
      <p>
        Return <Link to="/">Home</Link> or read <Link to="/about">About</Link>.
      </p>
    </div>
  );
}
