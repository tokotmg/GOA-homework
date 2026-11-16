import React, { useState } from 'react';
export default function ThemeSwitcher() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };
  return (
    <div
      className={`min-h-screen flex flex-col items-center justify-center transition-colors duration-300 ${
        isDarkMode ? 'bg-slate-900 text-white' : 'bg-gray-100 text-slate-900'
      }`}
    >
      <div
        className={`max-w-md w-full p-8 rounded-2xl shadow-lg border transition-colors duration-300 ${
          isDarkMode
            ? 'bg-slate-800 border-slate-700'
            : 'bg-white border-gray-200'
        }`}
      >
        <h1 className="text-2xl font-bold mb-2">
          {isDarkMode ? 'Dark Mode' : 'Light Mode'}
        </h1>
        <p
          className={`mb-6 text-sm ${
            isDarkMode ? 'text-slate-300' : 'text-gray-600'
          }`}
        >
          Click the button below to dynamically switch the page theme using React
          state and Tailwind CSS.
        </p>

        {/* 4. Button to trigger the state change */}
        <button
          onClick={toggleTheme}
          className={`w-full py-3 px-4 rounded-lg font-medium transition-all duration-200 cursor-pointer ${
            isDarkMode
              ? 'bg-amber-400 text-slate-900 hover:bg-amber-300'
              : 'bg-slate-900 text-white hover:bg-slate-800'
          }`}
        >
          {isDarkMode ? '☀️ Switch to Light Mode' : '🌙 Switch to Dark Mode'}
        </button>
      </div>
    </div>
  );
}
