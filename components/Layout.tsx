import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import { ROUTES, SITE_DATA } from '../constants';

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="min-h-screen flex flex-col font-sans text-stone-600 bg-sand-50">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <Link to="/" className={`font-serif text-2xl tracking-tighter ${isScrolled ? 'text-stone-900' : 'text-stone-900'}`}>
            Eggers<span className="text-sand-500">.</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex gap-8 items-center">
            {ROUTES.map((route) => (
              <Link 
                key={route.path} 
                to={route.path}
                className={`text-sm uppercase tracking-widest hover:text-sand-800 transition-colors ${location.pathname === route.path ? 'text-sand-800 font-medium' : 'text-stone-600'}`}
              >
                {route.label}
              </Link>
            ))}
            <Link to="/buchen" className="bg-sand-800 text-white px-6 py-2 text-xs uppercase tracking-widest hover:bg-sand-900 transition-colors">
              Buchen
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-white z-40 flex flex-col items-center justify-center gap-8 md:hidden">
           {ROUTES.map((route) => (
              <Link 
                key={route.path} 
                to={route.path}
                className="font-serif text-3xl text-stone-800"
              >
                {route.label}
              </Link>
            ))}
            <Link to="/buchen" className="mt-8 bg-sand-800 text-white px-8 py-3 text-sm uppercase tracking-widest">
              Jetzt Buchen
            </Link>
        </div>
      )}

      {/* Content */}
      <main className="flex-grow pt-0">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-stone-100 border-t border-stone-200 py-16">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
          <div>
            <h4 className="font-serif text-2xl mb-6">Ferienwohnung Eggers</h4>
            <p className="text-sm leading-relaxed mb-4">
              Ein Rückzugsort der Ruhe. Erleben Sie das Wattenmeer von seiner schönsten Seite in einer Atmosphäre von leisem Luxus.
            </p>
          </div>
          
          <div>
            <h5 className="font-serif text-lg mb-4">Kontakt</h5>
            <ul className="text-sm space-y-3">
              <li className="flex items-center gap-3"><Mail size={16} /> {SITE_DATA.email}</li>
              <li className="flex items-center gap-3"><Phone size={16} /> {SITE_DATA.phone}</li>
              <li className="flex items-center gap-3"><MapPin size={16} /> {SITE_DATA.address}</li>
            </ul>
          </div>

          <div>
             <h5 className="font-serif text-lg mb-4">Rechtliches</h5>
             <ul className="text-sm space-y-3">
               <li><Link to="/impressum" className="hover:text-sand-800">Impressum</Link></li>
               <li><Link to="/datenschutz" className="hover:text-sand-800">Datenschutz</Link></li>
               <li><Link to="/agb" className="hover:text-sand-800">AGB</Link></li>
             </ul>
          </div>

          <div>
            <h5 className="font-serif text-lg mb-4">Folgen Sie uns</h5>
            <a href="#" className="inline-block p-2 rounded-full border border-stone-300 hover:border-sand-800 hover:text-sand-800 transition-colors">
              <Instagram size={20} />
            </a>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-stone-200 text-center text-xs text-stone-400">
          © {new Date().getFullYear()} Ferienwohnung Eggers. Alle Rechte vorbehalten.
        </div>
      </footer>
    </div>
  );
};