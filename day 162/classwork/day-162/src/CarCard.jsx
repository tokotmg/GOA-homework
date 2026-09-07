import React from 'react';

export default function CarCard({ make, model, year, price, category, description, available }) {
  const handleBuyClick = () => {
    alert(`Thank you for your interest in the ${year} ${make} ${model}!`);
  };

  return (
    <div className="flex flex-col justify-between p-6 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200">
      <div>
        {/* Category Badge */}
        <span className="inline-block px-2.5 py-0.5 text-xs font-semibold tracking-wide uppercase bg-blue-50 text-blue-600 rounded-full mb-3">
          {category}
        </span>
        
        {/* Title */}
        <h2 className="text-xl font-bold text-gray-900 mb-1">
          {make} <span className="text-gray-600 font-medium">{model}</span>
        </h2>
        
        {/* Year */}
        <p className="text-xs text-gray-400 font-medium mb-3">Year: {year}</p>
        
        {/* Description */}
        <p className="text-sm text-gray-600 leading-relaxed mb-6">
          {description}
        </p>
      </div>

      <div>
        {/* Price & Status */}
        <div className="flex items-baseline justify-between mb-4">
          <span className="text-2xl font-extrabold text-gray-900">
            ${price.toLocaleString()}
          </span>
          <span className={`text-xs font-bold ${available ? 'text-green-600' : 'text-red-500'}`}>
            {available ? '● In Stock' : '○ Out of Stock'}
          </span>
        </div>

        {/* Action Button */}
        <button
          onClick={handleBuyClick}
          disabled={!available}
          className={`w-full py-2.5 px-4 rounded-lg font-medium text-sm transition-colors duration-150 ${
            available
              ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-sm'
              : 'bg-gray-100 text-gray-400 cursor-not-allowed'
          }`}
        >
          {available ? 'Buy Now' : 'Join Waitlist'}
        </button>
      </div>
    </div>
  );
}
