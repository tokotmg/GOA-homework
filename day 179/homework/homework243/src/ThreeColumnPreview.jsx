import React from 'react';
const cardData = [
  {
    id: 1,
    title: 'Sedans',
    description: 'Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.',
    icon: (
        <img src="src/assets/icon-sedans.svg"/>
    ),
    bgColor: 'bg-amber-500',
    btnColor: 'text-amber-500 hover:bg-amber-500 hover:text-white',
  },
  {
    id: 2,
    title: 'SUVs',
    description: 'Take an SUV for its spacious interior, power, and versatility. Perfect for family vacations and off-road adventures.',
    icon: (
        <img src="src/assets/icon-suvs.svg"/>
    ),
    bgColor: 'bg-teal-700',
    btnColor: 'text-teal-700 hover:bg-teal-700 hover:text-white',
  },
  {
    id: 3,
    title: 'Luxury',
    description: 'Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style.',
    icon: (
        <img src="src/assets/icon-luxury.svg"/>
    ),
    bgColor: 'bg-emerald-950',
    btnColor: 'text-emerald-950 hover:bg-emerald-950 hover:text-white',
  },
];
export default function ThreeColumnPreview() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4 sm:p-6 lg:p-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 max-w-4xl w-full rounded-xl overflow-hidden shadow-2xl">
        {cardData.map((card) => (
          <div
            key={card.id}
            className={`${card.bgColor} text-white p-8 sm:p-12 flex flex-col justify-between transition-transform duration-300`}
          >
            <div>
              {card.icon}
              <h2 className="text-3xl font-bold uppercase tracking-wider mb-6">
                {card.title}
              </h2>
              <p className="text-white/75 text-sm sm:text-base leading-relaxed mb-8">
                {card.description}
              </p>
            </div>
            <button
              className={`mt-auto bg-white ${card.btnColor} font-medium px-8 py-3 rounded-full transition-colors duration-200 w-max shadow-md`}
            >
              Learn More
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
