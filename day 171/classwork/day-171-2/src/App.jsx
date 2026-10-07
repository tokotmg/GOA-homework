function App() {
  return (
    <div className="flex justify-center items-center w-full h-screen bg-blue-100 bg-[url(/src/assets/pattern-background-desktop.svg)] bg-no-repeat">
      <div className="flex-col justify-center items-center w-100 h-140 bg-white rounded-2xl">
        <img src="./src/assets/illustration-hero.svg" className="rounded-t-2xl"></img>
        <h1 className="flex justify-center items-center font-bold text-3xl">Order Summary</h1>
        <p className="flex justify-center items-center">You can now listen to millions of songs, audiobooks, and podcasts on any device anywhere you like!</p>
        <div className="flex justify-center items-center gap-5 bg-gray-100">
        <img src="./src/assets/icon-music.svg" className="flex justify-center items-center"></img>
        <h3 className="flex justify-center items-center font-bold">Annual Plan</h3>
        <h3 className="flex justify-center items-center">$59.99/year</h3>
        <h3 className="flex justify-center items-center text-indigo-700 underline font-bold">Change</h3>
        </div>
        <button className="flex justify-center items-center p-6 rounded-2xl bg-indigo-700 text-white font-bold shadow-2xl">Proceed to Payment</button>
        <h3 className="flex justify-center items-center text-gray-400 font-bold">Cancel Order</h3>
      </div>
    </div>
  )
}

export default App
