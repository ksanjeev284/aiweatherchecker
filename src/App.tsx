import React from 'react';
import { Header } from './components/Header';
import { CitySearch } from './components/CitySearch';
import { LoadingAnimation } from './components/LoadingAnimation';
import { ProgressIndicator } from './components/ProgressIndicator';
import { Result } from './components/Result';
import { useWeatherSimulation, ANALYSIS_STEPS } from './hooks/useWeatherSimulation';

function App() {
  const { isLoading, currentStep, showResult, city, startSearch, reset } = useWeatherSimulation();

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto space-y-8">
          <CitySearch onSearch={startSearch} disabled={isLoading} />
          
          {isLoading && (
            <div className="space-y-8">
              <LoadingAnimation />
              <ProgressIndicator 
                steps={ANALYSIS_STEPS}
                currentStep={currentStep}
              />
            </div>
          )}
          
          {showResult && <Result onReset={reset} city={city} />}
        </div>
      </main>
    </div>
  );
}

export default App;