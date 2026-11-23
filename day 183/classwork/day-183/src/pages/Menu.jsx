import { useState, useEffect } from 'react';
function Menu() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => {
        if (!res.ok) {
          throw new Error('Failed to fetch products');
        }
        return res.json();
      })
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);
  if (loading) return <div className="status-message">Loading products...</div>;
  if (error) return <div className="status-message error">Error: {error}</div>;
  return (
    <div className="menu-container">
      <h2>Product Menu</h2>
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <div className="image-wrapper">
              <img src={product.image} alt={product.title} />
            </div>
            <div className="product-info">
              <span className="category-badge">{product.category}</span>
              <h3 className="product-title">{product.title}</h3>
              <p className="product-price">${product.price.toFixed(2)}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Menu;
