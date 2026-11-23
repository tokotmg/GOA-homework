export default function Breakfast() {
  const items = [
    { name: 'Buttermilk Pancakes', price: '$12', desc: 'Stack of three served with maple syrup and berries.' },
    { name: 'Avocado Toast', price: '$11', desc: 'Sourdough, smashed avocado, poached egg, and chili flakes.' },
    { name: 'Classic Omelette', price: '$13', desc: 'Three eggs with spinach, feta, and sourdough toast.' },
  ];
  return (
    <div style={{ padding: '2rem' }}>
      <h1>Breakfast Menu</h1>
      <p>Served fresh every morning until 11:00 AM.</p>
      <ul>
        {items.map((item) => (
          <li key={item.name} style={{ marginBottom: '1rem' }}>
            <strong>{item.name}</strong> — {item.price}
            <p style={{ margin: '0.25rem 0', color: '#555' }}>{item.desc}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
