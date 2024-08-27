import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TopHead from './components/TopHead';
import Header from './components/Header';
import Banner from './components/Banner';
import About from './components/About';
import FooterTop from './components/FooterTop';
import Footer from './components/Footer';
import LoginCard from './components/LoginCard'; // Updated import
import SignupPage from './components/SignupPage'; // Updated import
import EmployeeLogin from './components/EmployeeLogin'; // New import
import AdministratorLogin from './components/AdministratorLogin'; // New import
import PublicLogin from './components/PublicLogin'; // New import
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <TopHead />
        <Header />
        <Routes>
          <Route path="/" element={<><Banner /><About /></>} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<LoginCard />} />
          <Route path="/signup" element={<SignupPage />} /> {/* Updated */}
          <Route path="/login/employee" element={<EmployeeLogin />} />
          <Route path="/login/administrator" element={<AdministratorLogin />} />
          <Route path="/login/public" element={<PublicLogin />} />
          {/* Add routes for signup pages if needed */}
        </Routes>
        <FooterTop />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
