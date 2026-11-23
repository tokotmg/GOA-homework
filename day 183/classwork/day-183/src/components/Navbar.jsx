import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <nav style={{ display: "flex", gap: "1rem", padding: "1rem", borderBottom: "1px solid #ccc" }}>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/counter">Counter</Link>
      <Link to="/menu">Menu</Link>
    </nav>
  );
}
