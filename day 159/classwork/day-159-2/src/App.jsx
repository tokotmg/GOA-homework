function App() {
  const products = [
    { name: "Bread", price: 10.95, quantity: 2 },
    { name: "Butter", price: 7.20, quantity: 4 },
    { name: "Salmon", price: 8.10, quantity: 1 },
    { name: "Apple", price: 2.30, quantity: 7 },
  ];

  return (
    <div>
      {products.map((product, index) => (
        <ul key={index}>
          <li>Name: {product.name}</li>
          <li>Price: ${product.price}</li>
          <li>Quantity: {product.quantity}</li>
        </ul>
      ))}
    </div>
  );
}

export default App;
