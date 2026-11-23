import { Link } from "react-router-dom";
export default function Home() {
  return (
    <div style={{ padding: "1rem" }}>
      <h1>Home Page</h1>
      <p>Welcome to the application.</p>
      <p>
        Go to <Link to="/about">About</Link> or <Link to="/contact">Contact</Link>.
      </p>
    </div>
  );
}
