import React from 'react';
import CarCard from './CarCard';
import { carData } from './CarData';

export default function CarList() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <header className="mb-10 text-center">
          <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
            Available Vehicles
          </h1>
          <p className="mt-3 max-w-2xl mx-auto text-sm text-gray-500">
            Browse our current selection of premium vehicles. Filtered, inspected, and ready to drive.
          </p>
        </header>

        {/* Responsive Grid Map */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {carData.map((car) => (
            <CarCard
              key={car.id}
              make={car.make}
              model={car.model}
              year={car.year}
              price={car.price}
              category={car.category}
              description={car.description}
              available={car.available}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
