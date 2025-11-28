import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { AmenitiesPage, GalleryPage, LocationPage, RatesPage } from './pages/Details';
import { BookingPage, ContactPage } from './pages/Booking';
import { Impressum, Privacy, Terms } from './pages/Legal';

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ausstattung" element={<AmenitiesPage />} />
          <Route path="/galerie" element={<GalleryPage />} />
          <Route path="/lage" element={<LocationPage />} />
          <Route path="/preise" element={<RatesPage />} />
          <Route path="/buchen" element={<BookingPage />} />
          <Route path="/kontakt" element={<ContactPage />} />
          <Route path="/impressum" element={<Impressum />} />
          <Route path="/datenschutz" element={<Privacy />} />
          <Route path="/agb" element={<Terms />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;