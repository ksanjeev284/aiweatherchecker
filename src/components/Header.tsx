import React from 'react';
import { Brain } from 'lucide-react';

export function Header() {
  return (
    <header className="w-full py-6 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
      <div className="container mx-auto px-4 flex items-center justify-center space-x-3">
        <Brain className="w-8 h-8" />
        <h1 className="text-2xl font-bold">Ultra-Advanced AI-Powered Weather Analysis</h1>
      </div>
    </header>
  );
}