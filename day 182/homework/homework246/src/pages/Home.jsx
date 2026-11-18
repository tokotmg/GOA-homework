import { Link } from 'react-router-dom';
export default function Home() {
  return (
    <section className="home-container">
      <h1>Home</h1>
      <Link to="/gallery" className="cta-button">
      </Link>
    </section>
  );
}
