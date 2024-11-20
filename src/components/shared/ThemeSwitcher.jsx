import { useState } from 'react';

const ThemeSwitcher = () => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className="flex justify-end items-center space-x-2 pb-2">
      <span className="text-xs dark:text-gray-300"></span>
      <div
        onClick={toggleTheme}
        className={`relative inline-flex items-center justify-center w-10 h-5 rounded-full transition-colors border-0 focus:ring-0 shadow-sm
          ${theme === 'light' ? 'bg-[#D1D5DB] shadow-[#a8acb1]' : 'bg-gray-600 shadow-[#3c444e]'}`}
      >
        <span
          className={`absolute left-0 w-4 h-4 rounded-full transform transition-transform 
            ${theme === 'dark' ? 'translate-x-6 bg-gray-900' : 'bg-white'}`}
        />
      </div>
    </div>
  );
};

export default ThemeSwitcher;
