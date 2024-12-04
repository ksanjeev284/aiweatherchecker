import React, { useState } from 'react';
import { Search } from 'lucide-react';

interface CitySearchProps {
  onSearch: (city: string) => void;
  disabled?: boolean;
}

export function CitySearch({ onSearch, disabled }: CitySearchProps) {
  const [city, setCity] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (city.trim()) {
      onSearch(city.trim());
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto">
      <div className="relative">
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city name..."
          disabled={disabled}
          className="w-full px-4 py-3 pl-12 rounded-lg border border-gray-300 
                   focus:ring-2 focus:ring-blue-500 focus:border-transparent
                   disabled:bg-gray-100 disabled:cursor-not-allowed"
        />
        <Search className="absolute left-4 top-3.5 h-5 w-5 text-gray-400" />
      </div>
    </form>
  );
}