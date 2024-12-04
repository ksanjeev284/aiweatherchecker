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
      
      <main id="main-content" className="container mx-auto px-4 py-12" role="main">
        <div className="max-w-2xl mx-auto space-y-8">
          <section aria-label="City Search">
            <CitySearch onSearch={startSearch} disabled={isLoading} />
          </section>
          
          {isLoading && (
            <section aria-label="Analysis Progress" className="space-y-8">
              <LoadingAnimation />
              <ProgressIndicator 
                steps={ANALYSIS_STEPS}
                currentStep={currentStep}
              />
            </section>
          )}
          
          {showResult && (
            <section aria-label="Weather Results">
              <Result onReset={reset} city={city} />
            </section>
          )}
        </div>
      </main>
      
      <footer className="mt-8 text-center text-sm text-gray-600">
        <p>© {new Date().getFullYear()} AI Weather Analysis. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;