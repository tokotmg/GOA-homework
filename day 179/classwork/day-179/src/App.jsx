import React from 'react';
export default function App({
  image = 'src/assets/image-product-desktop.jpg',
  title = 'Gabrielle Essence Eau De Parfum',
  category = 'Perfume',
  description = 'A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL',
  price = '$149.99',
  originalPrice = '$169.99',
  onAddToCart = () => {}
}) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#f2ebe3] p-4 font-sans">
      <div className="flex max-w-[600px] flex-col overflow-hidden rounded-xl bg-white shadow-xl md:flex-row">
        <div className="relative h-[240px] w-full md:h-auto md:w-1/2">
          <img src={image} alt={title} className="h-full w-full object-cover" />
        </div>
        <div className="flex flex-col justify-between p-6 md:w-1/2 md:p-8">
          <div>
            <span className="text-xs font-medium uppercase tracking-[0.3em] text-[#6c7289]">
              {category}
            </span>
            <h1 className="mt-3 font-serif text-3xl font-bold leading-none text-[#1c232b] md:text-4xl">
              {title}
            </h1>
            <p className="mt-4 text-sm leading-relaxed text-[#6c7289]">
              {description}
            </p>
          </div>
          <div className="mt-6">
            <div className="flex items-center gap-6">
              <span className="font-serif text-3xl font-bold text-[#3c8067]">{price}</span>
              <span className="text-xs text-[#6c7289] line-through">{originalPrice}</span>
            </div>
            <button
              onClick={onAddToCart}
              className="mt-5 flex w-full items-center justify-center gap-3 rounded-lg bg-[#3c8067] py-3.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-[#1a4031]"
            >
              <img src="src/assets/icon-cart.svg"/>
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
