import { useState, useEffect } from 'react';

export const ANALYSIS_STEPS = [
  'Analyzing atmospheric conditions',
  'Processing meteorological data',
  'Calibrating quantum weather sensors',
  'Running machine learning algorithms',
];

export function useWeatherSimulation() {
  const [isLoading, setIsLoading] = useState(false);
  const [currentStep, setCurrentStep] = useState(-1);
  const [showResult, setShowResult] = useState(false);
  const [city, setCity] = useState<string>();

  useEffect(() => {
    if (!isLoading) return;

    const stepInterval = setInterval(() => {
      setCurrentStep(prev => {
        if (prev >= ANALYSIS_STEPS.length - 1) {
          clearInterval(stepInterval);
          setTimeout(() => {
            setIsLoading(false);
            setShowResult(true);
          }, 1000);
          return prev;
        }
        return prev + 1;
      });
    }, 1000);

    return () => clearInterval(stepInterval);
  }, [isLoading]);

  const startSearch = (searchCity: string) => {
    setCity(searchCity);
    setIsLoading(true);
    setCurrentStep(-1);
    setShowResult(false);
  };

  const reset = () => {
    setCity(undefined);
    setIsLoading(false);
    setCurrentStep(-1);
    setShowResult(false);
  };

  return { isLoading, currentStep, showResult, city, startSearch, reset };
}