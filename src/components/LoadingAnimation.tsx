import React from 'react';
import { Loader2 } from 'lucide-react';

interface LoadingAnimationProps {
  message?: string;
}

export function LoadingAnimation({ message = "Connecting to weather satellites..." }: LoadingAnimationProps) {
  return (
    <div className="flex items-center justify-center space-x-2">
      <Loader2 className="w-6 h-6 animate-spin text-blue-600" />
      <span className="text-blue-600 font-semibold">{message}</span>
    </div>
  );
}