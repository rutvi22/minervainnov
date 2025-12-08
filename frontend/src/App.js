import React from 'react';
import './App.css';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import CaseStudies from './components/CaseStudies';
import StakeholderTabs from './components/StakeholderTabs';
import AboutServices from './components/AboutServices';
import TheDifference from './components/TheDifference';
import Testimonials from './components/Testimonials';
import DemoForm from './components/DemoForm';
import Contact from './components/Contact';
// import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      {/* <Header /> */}
      <Hero />
      <AboutUs />
      <CaseStudies />
      <AboutServices />
      <StakeholderTabs />
      <TheDifference />
      <Testimonials />
      <DemoForm />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
