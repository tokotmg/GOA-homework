import React from 'react';
function App() {
  return (
    <div className="min-h-screen bg-slate-900 text-white font-sans flex flex-col justify-between">
      <nav className="p-6 max-w-6xl mx-auto w-full flex justify-between items-center">
        <h1 className="text-xl font-bold tracking-wider text-red-500">GT-R</h1>
        <a href="#specs" className="text-sm bg-red-600 hover:bg-red-700 px-4 py-2 rounded-full transition">Specs</a>
      </nav>
      <main className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <span className="text-red-500 font-semibold text-sm tracking-widest uppercase">Legendary Supercar</span>
          <h2 className="text-4xl md:text-6xl font-extrabold mt-2 mb-4 leading-tight">Nissan GT-R Nismo</h2>
          <p className="text-slate-400 mb-6">
            The ultimate expression of Japanese engineering. Blending twin-turbo V6 power with unmatched all-wheel-drive grip.
          </p>
          <div className="flex gap-4">
            <div className="bg-slate-800 p-4 rounded-xl border border-slate-700">
              <span className="block text-2xl font-bold text-red-500">600</span>
              <span className="text-xs text-slate-400">Horsepower</span>
            </div>
            <div className="bg-slate-800 p-4 rounded-xl border border-slate-700">
              <span className="block text-2xl font-bold text-red-500">2.5s</span>
              <span className="text-xs text-slate-400">0-60 mph</span>
            </div>
          </div>
        </div>
        <div className="bg-gradient from-red-600/20 to-slate-800 p-2 rounded-3xl border border-slate-700 shadow-2xl">
          <img 
            src="src\assets\pngwing.com.png" 
            alt="Nissan GT-R" 
            className="rounded-2xl w-full h-320px object-cover"
          />
        </div>
      </main>

      {/* Footer */}
      <footer className="text-center py-6 text-xs text-slate-500 border-t border-slate-800">
        Built with React and Tailwind CSS.
      </footer>
    </div>
  );
}
export default App