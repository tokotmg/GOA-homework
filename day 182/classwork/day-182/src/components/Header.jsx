import { NavLink } from 'react-router-dom';
function Header() {
  return (
    <header className="site-header">
      <h2>My Website</h2>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/menu">Menu</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/register">Register</NavLink>
      </nav>
    </header>
  );
}
export default Header;
