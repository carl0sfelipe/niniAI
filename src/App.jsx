import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import ResultsPage from './components/ResultsPage';
import HomePage from './components/HomePage';
import { initGA, logPageView } from "./analytics";

const AnalyticsTracker = () => {
  const location = useLocation();

  useEffect(() => {
    console.log("Mudança de rota detectada:", location.pathname);
    logPageView();
  }, [location]);

  return null;
};

function App() {
  useEffect(() => {
    console.log("Inicializando Google Analytics...");
    initGA();
  }, []);

  return (
    <Router>
      {/* O componente que rastreia mudanças na URL agora está FORA do <Routes> */}
      <AnalyticsTracker />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/results" element={<ResultsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
