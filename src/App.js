import React from 'react';
import { Router } from "@reach/router"
import LandingPage from './pages/Landing'

function App() {
  return (
    <Router>
      <LandingPage path="/" />
    </Router>    
  );
}

export default App;
