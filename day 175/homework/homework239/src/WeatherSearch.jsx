import React, { useRef, useState } from 'react';
export default function WeatherSearch() {
  const cityInputRef = useRef(null);
  const [temperature, setTemperature] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const handleSearch = async (e) => {
    e.preventDefault();
    const cityName = cityInputRef.current.value.trim();
    if (!cityName) {
      setError("გთხოვთ ჩაწეროთ ქალაქის სახელი");
      return;
    }
    setLoading(true);
    setError(null);
    setTemperature(null);
    try {
      const response = await fetch(`https://wttr.in/${cityName}?format=j1`);
      if (!response.ok) {
        throw new Error("ქალაქი ვერ მოიძებნა");
      }
      const data = await response.json();
      const tempC = data.current_condition[0].temp_C;
      setTemperature(tempC);
    } catch (err) {
      setError("მონაცემების წამოღება ვერ მოხერხდა. სცადეთ თავიდან.");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h2>ამინდის ძებნა</h2>
      <form onSubmit={handleSearch} style={{ marginBottom: '20px' }}>
        <input
          type="text"
          ref={cityInputRef}
          placeholder="ჩაწერეთ ქალაქი (მაგ: Tbilisi)"
          style={{ padding: '8px', marginRight: '10px', fontSize: '16px' }}
        />
        <button type="submit" style={{ padding: '8px 15px', fontSize: '16px', cursor: 'pointer' }}>
          Search
        </button>
      </form>
      {loading && <p>იტვირთება...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {temperature !== null && (
        <div style={{ marginTop: '15px', fontSize: '18px' }}>
          <strong>Temperature:</strong> {temperature}°C
        </div>
      )}
    </div>
  );
}
