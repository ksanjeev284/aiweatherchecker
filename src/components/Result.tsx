import React from 'react';
import { CloudSun, MapPin, Coffee, Camera, Utensils } from 'lucide-react';

interface ResultProps {
  onReset: () => void;
  city?: string;
}

const mockAttractions = [
  { icon: Coffee, name: "Local Café", description: "Experience the city's best coffee" },
  { icon: Camera, name: "Tourist Spot", description: "Perfect for memorable photos" },
  { icon: Utensils, name: "Restaurant", description: "Taste local cuisine" },
];

export function Result({ onReset, city }: ResultProps) {
  return (
    <div className="text-center space-y-8">
      <CloudSun className="w-24 h-24 mx-auto text-blue-600" />
      <div className="space-y-4">
        <h2 className="text-3xl font-bold text-gray-800">
          REVOLUTIONARY WEATHER SOLUTION:
        </h2>
        {city ? (
          <div className="flex items-center justify-center space-x-2 text-2xl text-gray-700">
            <MapPin className="w-6 h-6" />
            <span>For {city}:</span>
          </div>
        ) : null}
        <p className="text-2xl text-gray-700">
          Just go outside and look up 🌤️
        </p>
        <p className="text-xl text-gray-600 italic">
          Sometimes the best AI is No AI
        </p>
      </div>

      {city && (
        <div className="mt-8">
          <h3 className="text-xl font-semibold mb-4">While you're outside, check out:</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {mockAttractions.map(({ icon: Icon, name, description }) => (
              <div key={name} className="p-4 bg-white rounded-lg shadow-md">
                <Icon className="w-8 h-8 mx-auto mb-2 text-blue-600" />
                <h4 className="font-semibold">{name}</h4>
                <p className="text-sm text-gray-600">{description}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      <button
        onClick={onReset}
        className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 
                 transition-colors duration-200 font-semibold"
      >
        Try Again
      </button>
    </div>
  );
}