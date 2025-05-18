import React, { useState, useEffect } from 'react';
import RandomGen from './components/randomGen';
import TextGen from './components/TextGen';

const App = () => {
  const [theme, setTheme] = useState('dark');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  useEffect(() => {
    document.documentElement.classList.remove('dark', 'light');
    document.documentElement.classList.add(theme);
  }, [theme]);

  return (
    <div className="min-h-screen font-sans bg-white text-black dark:bg-gray-900 dark:text-white transition-colors duration-300">
      <div className="max-w-3xl mx-auto py-12 px-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">GIF Generator</h1>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              className="sr-only peer"
              onChange={toggleTheme}
              checked={theme === 'dark'}
            />
            <div className="w-14 h-8 bg-gray-400 rounded-full peer dark:bg-gray-700 peer-checked:bg-yellow-400 transition-colors duration-300"></div>
            <div className="absolute left-1 top-1 w-6 h-6 bg-white rounded-full transition-transform duration-300 peer-checked:translate-x-6"></div>
          </label>
        </div>
        <RandomGen />
        <TextGen />
      </div>
    </div>
  );
};

export default App;
