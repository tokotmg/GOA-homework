export default function MainMenu() {
  const items = [
    { name: 'Grilled Salmon', price: '$22', desc: 'Served with asparagus and lemon butter.' },
    { name: 'Classic Cheeseburger', price: '$15', desc: 'Brioche bun, cheddar, lettuce, tomato, and fries.' },
    { name: 'Mushroom Risotto', price: '$18', desc: 'Creamy arborio rice with wild mushrooms and parmesan.' },
  ];
  return (
    <div style={{ padding: '2rem' }}>
      <h1>Main Menu</h1>
      <p>Available daily from 11:00 AM to 10:00 PM.</p>
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
