function App() {
  return (
    <div className="flex justify-center items-center w-full h-screen bg-amber-50">
      <img src="./src/assets/image-product-desktop.jpg" className="flex justify-center align-center w-80 h-80 rounded-lg"></img>
      <div className="flex-col justify-center items-center w-80 h-80 bg-white rounded-lg">
        <h1 className="mt-5 ml-5 text-xl">Perfume</h1>
        <h1 className="mt-5 ml-5 font-bold text-3xl">Gabrielle Essence Eau De Parfum</h1>
        <p className="mt-5 ml-5 text-gray-500">A floral, solar and voluptuous interpretation composed by Olivier Polge, 
  Perfumer-Creator for the House of CHANEL.</p>
    <div className="flex-row justify-center items-center">
      <h1 className="mt-5 ml-5 text-4xl text-green-700 font-bold">$149.99</h1>
      <p className="mt-5 ml-5 text-gray-500 line-through">$169.99</p>
      </div>
      <div className="m-5 pr-30">
        <button className="p-5 bg-green-700 text-white font-bold rounded-lg">Add to Cart</button>
      </div>
      </div>
    </div>
  )
}

export default App
