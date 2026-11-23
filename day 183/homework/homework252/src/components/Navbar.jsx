import { Link } from 'react-router-dom';
export default function Navbar() {
  return (
    <nav style={styles.nav}>
      <h2 style={styles.logo}>The Bistro</h2>
      <div style={styles.links}>
        <Link to="/" style={styles.link}>Main Menu</Link>
        <Link to="/breakfast" style={styles.link}>Breakfast</Link>
        <Link to="/dessert" style={styles.link}>Dessert</Link>
      </div>
    </nav>
  );
}
const styles = {
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem 2rem',
    backgroundColor: '#222',
    color: '#fff',
  },
  logo: { margin: 0 },
  links: { display: 'flex', gap: '1.5rem' },
  link: {
    color: '#fff',
    textDecoration: 'none',
    fontWeight: 'bold',
    fontSize: '1.1rem',
  },
};
