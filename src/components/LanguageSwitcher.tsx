import React from 'react';
import { cn } from '@/lib/utils';

const LanguageSwitcher = () => {
  return (
    <div className="flex items-center rounded-md border border-gray-200 overflow-hidden">
      <button
        disabled
        className="bg-dental text-white text-sm font-medium px-2 py-1 disabled:opacity-100"
      >
        EN
      </button>
      <a
        href="https://elitedentalsolutions.bg"
        className="text-gray-700 text-sm font-medium px-2 py-1 hover:bg-gray-100 transition-colors duration-300"
      >
        BG
      </a>
    </div>
  );
};

export default LanguageSwitcher; 