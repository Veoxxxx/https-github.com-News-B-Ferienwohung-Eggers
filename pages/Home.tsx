import React from 'react';
import { Link } from 'react-router-dom';
import { Section, Heading, Button } from '../components/UI';
import { IMAGES, AMENITIES } from '../constants';
import { ArrowRight, Wind, Waves, Coffee } from 'lucide-react';

export const Home: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="relative h-screen w-full overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={IMAGES.hero} 
            alt="Blick in den hellen Wohnbereich der Ferienwohnung Eggers" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/20" />
        </div>
        
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
          <span className="text-sm md:text-base uppercase tracking-[0.3em] mb-4 animate-fadeIn">Cuxhaven Sahlenburg</span>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl mb-8 opacity-95">
            Ruhe. Natur.<br/>Angekommen.
          </h1>
          <Link to="/buchen">
            <Button className="bg-white/10 backdrop-blur-md border border-white hover:bg-white hover:text-stone-900 text-white">
              Verfügbarkeit prüfen
            </Button>
          </Link>
        </div>
      </div>

      {/* Intro Teaser */}
      <Section className="text-center max-w-3xl">
        <span className="text-xs uppercase tracking-widest text-sand-800 mb-4 block">Willkommen bei Familie Eggers</span>
        <Heading>Ein Zuhause am Meer</Heading>
        <p className="text-lg text-stone-600 leading-relaxed mb-8">
          Entfliehen Sie dem Alltag in unserer exklusiven Ferienwohnung direkt am UNESCO-Weltnaturerbe Wattenmeer. 
          Helles Design, natürliche Materialien und der Blick ins Grüne schaffen eine Atmosphäre von unaufdringlichem Luxus.
        </p>
        <Link to="/ausstattung" className="inline-flex items-center gap-2 text-sm uppercase tracking-widest border-b border-stone-300 pb-1 hover:border-sand-800 hover:text-sand-800 transition-colors">
          Die Wohnung entdecken <ArrowRight size={14} />
        </Link>
      </Section>

      {/* Image Grid Teaser */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
        <div className="bg-sand-50 p-12 md:p-24 flex flex-col justify-center">
          <Heading level={3}>Design trifft Gemütlichkeit</Heading>
          <p className="mb-6 text-stone-600">
            Auf 75m² erwartet Sie ein offener Wohnbereich, eine hochwertige Küche und ein Schlafzimmer, das Ruhe verspricht.
            Jedes Detail wurde sorgfältig ausgewählt, um Ihren Aufenthalt unvergesslich zu machen.
          </p>
          <Link to="/galerie">
            <Button variant="outline">Zur Galerie</Button>
          </Link>
        </div>
        <div className="h-[500px] md:h-auto">
          <img src={IMAGES.livingRoom} alt="Detailaufnahme Interieur" className="w-full h-full object-cover" />
        </div>
      </div>

      {/* Amenities Shortlist */}
      <Section className="bg-white">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-sand-50 rounded-full flex items-center justify-center mb-6 text-sand-800">
              <Wind size={24} />
            </div>
            <h3 className="font-serif text-xl mb-3">Frische Meeresbrise</h3>
            <p className="text-sm text-stone-500">Nur 5 Gehminuten zum Strand und Wernerwald.</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-sand-50 rounded-full flex items-center justify-center mb-6 text-sand-800">
              <Coffee size={24} />
            </div>
            <h3 className="font-serif text-xl mb-3">Premium Komfort</h3>
            <p className="text-sm text-stone-500">Boxspringbetten und Vollausstattung für Ihre Erholung.</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-sand-50 rounded-full flex items-center justify-center mb-6 text-sand-800">
              <Waves size={24} />
            </div>
            <h3 className="font-serif text-xl mb-3">Natur Pur</h3>
            <p className="text-sm text-stone-500">Direkter Zugang zu Wander- und Radwegen im Naturschutzgebiet.</p>
          </div>
        </div>
      </Section>

      {/* Location Teaser */}
      <div className="relative h-[600px]">
        <img src={IMAGES.beach} alt="Sahlenburger Strand bei Sonnenuntergang" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-stone-900/30" />
        <div className="absolute bottom-12 left-6 md:left-12 text-white max-w-xl">
          <h2 className="font-serif text-4xl mb-4">Sahlenburg erleben</h2>
          <p className="mb-8 opacity-90">Wo der Wald auf das Meer trifft. Der perfekte Ort für ausgedehnte Wattwanderungen und Sonnenuntergänge.</p>
          <Link to="/lage">
             <Button className="bg-white text-stone-900 hover:bg-stone-100 border-none">Umgebung erkunden</Button>
          </Link>
        </div>
      </div>
    </>
  );
};