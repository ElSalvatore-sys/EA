import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Solutions from './pages/Solutions';
import GastronomyHospitality from './pages/solutions/GastronomyHospitality';
import IndustrialManufacturing from './pages/solutions/IndustrialManufacturing';
import FinanceSecurity from './pages/solutions/FinanceSecurity';
import SmartLiving from './pages/solutions/SmartLiving';
import Healthcare from './pages/solutions/Healthcare';
import Retail from './pages/solutions/Retail';
import EAMethod from './pages/EAMethod';
import WhyEA from './pages/WhyEA';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/solutions/gastronomy-hospitality" element={<GastronomyHospitality />} />
          <Route path="/solutions/industrial-manufacturing" element={<IndustrialManufacturing />} />
          <Route path="/solutions/finance-security" element={<FinanceSecurity />} />
          <Route path="/solutions/smart-living" element={<SmartLiving />} />
          <Route path="/solutions/healthcare" element={<Healthcare />} />
          <Route path="/solutions/retail" element={<Retail />} />
          <Route path="/ea-method" element={<EAMethod />} />
          <Route path="/why-ea" element={<WhyEA />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;