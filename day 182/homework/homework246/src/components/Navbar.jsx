import { NavLink } from 'react-router-dom';
export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">LensCraft</div>
      <div className="nav-links">
        <NavLink 
          to="/" 
          className={({ isActive }) => (isActive ? 'active-link' : '')}
        >
          Home
        </NavLink>
        <NavLink 
          to="/gallery" 
          className={({ isActive }) => (isActive ? 'active-link' : '')}
        >
          Gallery
        </NavLink>
      </div>
    </nav>
  );
}
