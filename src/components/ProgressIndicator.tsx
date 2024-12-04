import React from 'react';

interface ProgressIndicatorProps {
  steps: string[];
  currentStep: number;
}

export function ProgressIndicator({ steps, currentStep }: ProgressIndicatorProps) {
  return (
    <div className="space-y-4 w-full max-w-md">
      {steps.map((step, index) => (
        <div key={step} className="relative">
          <div className="flex items-center">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
              index <= currentStep ? 'bg-blue-600 text-white' : 'bg-gray-200'
            }`}>
              {index <= currentStep ? '✓' : (index + 1)}
            </div>
            <div className="ml-4 text-sm font-medium text-gray-700">{step}</div>
          </div>
          {index < steps.length - 1 && (
            <div className="absolute left-4 top-8 -ml-px h-full w-0.5 bg-gray-200" />
          )}
        </div>
      ))}
    </div>
  );
}