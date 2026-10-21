import React, { useState, useEffect } from 'react';
export default function ProductFilter() {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        return response.json();
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
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  if (loading) return <p>Loading products...</p>;
  if (error) return <p>Error: {error}</p>;
  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h2>Product Catalog</h2>
      <input
        type="text"
        placeholder="Filter products by name..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{
          padding: '10px',
          width: '100%',
          maxWidth: '400px',
          marginBottom: '20px',
          fontSize: '16px'
        }}
      />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '20px' }}>
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div key={product.id} style={{ border: '1px solid #ccc', padding: '10px', borderRadius: '4px' }}>
              <img src={product.image} alt={product.title} style={{ width: '100%', height: '150px', objectFit: 'contain' }} />
              <h4 style={{ fontSize: '14px', margin: '10px 0' }}>{product.title}</h4>
              <p style={{ fontWeight: 'bold' }}>${product.price}</p>
            </div>
          ))
        ) : (
          <p>No products found matching "{searchTerm}"</p>
        )}
      </div>
    </div>
  );
}
