export default function Dessert() {
  const items = [
    { name: 'Tiramisu', price: '$9', desc: 'Espresso-soaked ladyfingers layered with mascarpone cream.' },
    { name: 'Chocolate Lava Cake', price: '$10', desc: 'Warm dark chocolate cake with vanilla bean ice cream.' },
    { name: 'New York Cheesecake', price: '$8', desc: 'Graham cracker crust topped with strawberry compote.' },
  ];
  return (
    <div style={{ padding: '2rem' }}>
      <h1>Dessert Menu</h1>
      <p>Sweet treats made in-house daily.</p>
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
