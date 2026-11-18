import Header from '../components/Header';
function Menu() {
  return (
    <div>
      <Header />
      <main className="page-content">
        <h1>Our Menu</h1>
        <p>
          Discover our most popular selections crafted fresh daily:
        </p>
        <ul>
          <li><strong>Classic Espresso</strong> — Rich, bold, and freshly brewed.</li>
          <li><strong>Artisan Sandwich</strong> — Sourdough bread with seasonal fillings.</li>
          <li><strong>Berry Pastry</strong> — Flaky crust topped with sweet organic berries.</li>
        </ul>
      </main>
    </div>
  );
}
export default Menu;
