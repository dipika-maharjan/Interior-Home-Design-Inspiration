import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/private/Navbar';
import FrontSection from './components/private/FrontSection';
import BrowseIdea from './components/private/BrowseIdea';
import Consultation from './components/private/Consult';
import Footer from './components/private/Footer';
import LoginPage from './components/public/Login';
import Homepage from './components/private/Homepage';
import SignupPage from './components/public/Signup';
import BookConsultation from './components/private/BookConsultation';
import LivingSection from './components/private/LivingSection';

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <Routes>
          <Route path="/" element={<LoginPage />} /> 
          <Route path="/Homepage" element={<Homepage />} /> 
          <Route path="/Login" element={<LoginPage />} />
          <Route path="/FrontSection" element={<FrontSection />} />
          <Route path="/BrowseIdea" element={<BrowseIdea />} />
          <Route path="/Consult" element={<Consultation />} />
          <Route path="/Signup" element={<SignupPage />} />
          <Route path="/BookConsultation" element={<BookConsultation />} />
          <Route path="/LivingSection" element={<LivingSection />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
