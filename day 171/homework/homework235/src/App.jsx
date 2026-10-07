import React from 'react';
export default function OmeletteRecipe() {
  return (
    <div className="min-h-screen bg-[#f3e5d8] flex items-center justify-center p-4 font-sans antialiased text-[#5f5653]">
      <div className="max-w-2xl w-full bg-white rounded-2xl p-6 sm:p-10 shadow-sm my-8">
        <div className="w-full h-64 overflow-hidden rounded-xl mb-8">
          <img 
            src="src\assets\images\image-omelette.jpeg" 
            alt="Simple Omelette" 
            className="w-full h-full object-cover"
          />
        </div>
        <h1 className="text-3xl sm:text-4xl font-serif text-[#312e2c] mb-4">
          Simple Omelette Recipe
        </h1>
        <p className="leading-relaxed mb-8">
          An easy and quick dish, perfect for any meal. This classic omelette combines beaten eggs 
          cooked to perfection, optionally filled with your choice of cheese, vegetables, or meats.
        </p>
        <div className="bg-[#fff7fa] rounded-xl p-6 mb-8">
          <h3 className="text-[#a1476b] text-lg font-semibold mb-3">Preparation time</h3>
          <ul className="list-disc pl-5 space-y-2 marker:text-[#a1476b]">
            <li><strong className="text-[#5f5653]">Total:</strong> Approximately 10 minutes</li>
            <li><strong className="text-[#5f5653]">Preparation:</strong> 5 minutes</li>
            <li><strong className="text-[#5f5653]">Cooking:</strong> 5 minutes</li>
          </ul>
        </div>
        <div className="mb-8">
          <h2 className="text-2xl font-serif text-[#854632] mb-4">Ingredients</h2>
          <ul className="list-disc pl-5 space-y-2 marker:text-[#854632]">
            <li>2-3 large eggs</li>
            <li>Salt, to taste</li>
            <li>Pepper, to taste</li>
            <li>1 tablespoon of butter or oil</li>
            <li>Optional fillings: cheese, diced vegetables, cooked meats, herbs</li>
          </ul>
        </div>
        <hr className="border-stone-200 mb-8" />
        <div className="mb-8">
          <h2 className="text-2xl font-serif text-[#854632] mb-4">Instructions</h2>
          <ol className="list-decimal pl-5 space-y-4 marker:text-[#854632] marker:font-bold">
            <li className="pl-2">
              <strong className="text-[#312e2c]">Beat the eggs:</strong> In a bowl, beat the eggs with a pinch of salt and pepper until they are well mixed. You can add a tablespoon of water or milk for a fluffier texture.
            </li>
            <li className="pl-2">
              <strong className="text-[#312e2c]">Heat the pan:</strong> Place a non-stick frying pan over medium heat and add butter or oil.
            </li>
            <li className="pl-2">
              <strong className="text-[#312e2c]">Cook the omelette:</strong> Once the butter is melted and bubbling, pour in the eggs. Tilt the pan to ensure the eggs evenly coat the surface.
            </li>
            <li className="pl-2">
              <strong className="text-[#312e2c]">Add fillings (optional):</strong> When the eggs begin to set at the edges but are still slightly runny in the middle, sprinkle your chosen fillings over one half of the omelette.
            </li>
            <li className="pl-2">
              <strong className="text-[#312e2c]">Fold and serve:</strong> As the omelette continues to cook, carefully lift one edge and fold it over the fillings. Let it cook for another minute, then slide it onto a plate.
            </li>
            <li className="pl-2">
              <strong className="text-[#312e2c]">Enjoy:</strong> Serve hot, with additional salt and pepper if needed.
            </li>
          </ol>
        </div>
        <hr className="border-stone-200 mb-8" />
        <div>
          <h2 className="text-2xl font-serif text-[#854632] mb-4">Nutrition</h2>
          <p className="mb-6">The table below shows nutritional values per serving without the additional fillings.</p>
          <div className="divide-y divide-stone-200">
            <div className="flex justify-between py-3 px-8">
              <span className="text-[#5f5653]">Calories</span>
              <span className="font-bold text-[#854632]">277kcal</span>
            </div>
            <div className="flex justify-between py-3 px-8">
              <span className="text-[#5f5653]">Carbs</span>
              <span className="font-bold text-[#854632]">0g</span>
            </div>
            <div className="flex justify-between py-3 px-8">
              <span className="text-[#5f5653]">Protein</span>
              <span className="font-bold text-[#854632]">20g</span>
            </div>
            <div className="flex justify-between py-3 px-8">
              <span className="text-[#5f5653]">Fat</span>
              <span className="font-bold text-[#854632]">22g</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
