import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
  Link,
  Outlet,
} from 'react-router-dom';

// --- Mock Product Data ---
const PHONES = [
  { id: 1, name: 'Pixel 9 Pro', price: '$999', specs: '6.3" OLED • 256GB' },
  { id: 2, name: 'iPhone 16 Pro', price: '$1,099', specs: '6.3" Super Retina • 256GB' },
  { id: 3, name: 'Galaxy S25 Ultra', price: '$1,199', specs: '6.8" AMOLED • 512GB' },
];

const LAPTOPS = [
  { id: 1, name: 'MacBook Pro 14"', price: '$1,599', specs: 'M4 Chip • 16GB RAM • 512GB SSD' },
  { id: 2, name: 'Dell XPS 13', price: '$1,299', specs: 'Core Ultra 7 • 16GB RAM • 512GB SSD' },
  { id: 3, name: 'ThinkPad X1 Carbon', price: '$1,449', specs: 'Core Ultra 7 • 32GB RAM • 1TB SSD' },
];

// --- Persistent Layout with Top Navigation ---
function Layout() {
  return (
    <div>
      <header>
        <Link to="/">
          TechStore
        </Link>
        <nav>
          <NavLink to="/" end>
            Home
          </NavLink>
          <NavLink
            to="/phones">
            Phones
          </NavLink>
          <NavLink
            to="/laptops">
            Laptops
          </NavLink>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
function HomePage() {
  return (
    <section>
      <div>
        <h1>Welcome to TechStore</h1>
        <p>Your one-stop shop for flagship smartphones and high-performance laptops.</p>
        <div>
          <Link to="/phones">Shop Phones</Link>
          <Link to="/laptops">Shop Laptops</Link>
        </div>
      </div>
    </section>
  );
}

function PhonesPage() {
  return (
    <section>
      <h2>Smartphones</h2>
      <div>
        {PHONES.map((phone) => (
          <div key={phone.id}>
            <h3>{phone.name}</h3>
            <p>{phone.specs}</p>
            <p>{phone.price}</p>
            <button>Add to Cart</button>
          </div>
        ))}
      </div>
    </section>
  );
}
function LaptopsPage() {
  return (
    <section>
      <h2>Laptops</h2>
      <div>
        {LAPTOPS.map((laptop) => (
          <div key={laptop.id}>
            <h3>{laptop.name}</h3>
            <p>{laptop.specs}</p>
            <p>{laptop.price}</p>
            <button>Add to Cart</button>
          </div>
        ))}
      </div>
    </section>
  );
}
export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="phones" element={<PhonesPage />} />
          <Route path="laptops" element={<LaptopsPage />} />
        </Route>
      </Routes>
    </Router>
  );
}