import React from 'react';
import { Section, Heading, Button } from '../components/UI';
import { AMENITIES, IMAGES, SEASONS, ROUTES } from '../constants';
import { Check, MapPin, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';

// --- AMENITIES PAGE ---
export const AmenitiesPage: React.FC = () => (
  <>
    <div className="bg-sand-50 py-24 text-center">
       <Heading level={1}>Ausstattung</Heading>
       <p className="max-w-2xl mx-auto text-stone-600 mt-4">Alles für Ihren perfekten Aufenthalt. Wir haben an jedes Detail gedacht.</p>
    </div>
    
    <Section>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-24">
        <div>
          <Heading level={2}>Wohnen & Genießen</Heading>
          <p className="text-stone-600 mb-6 leading-relaxed">
            Der großzügige Wohnbereich ist das Herzstück der Wohnung. Helle Farben, Eichenparkett und ausgewählte Designermöbel schaffen eine Oase der Ruhe.
            Der angrenzende Südbalkon lädt zum Frühstück in der Sonne oder einem Glas Wein am Abend ein.
          </p>
          <ul className="space-y-3">
             <li className="flex items-center gap-3 text-sm text-stone-600"><Check size={16} className="text-sand-800"/> 55" Smart-TV & Sonos Soundbar</li>
             <li className="flex items-center gap-3 text-sm text-stone-600"><Check size={16} className="text-sand-800"/> Bequemes Sofa mit Schlaffunktion</li>
             <li className="flex items-center gap-3 text-sm text-stone-600"><Check size={16} className="text-sand-800"/> Dimmbare Beleuchtung</li>
          </ul>
        </div>
        <img src={IMAGES.livingRoom} alt="Wohnbereich" className="rounded-sm shadow-lg" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <img src={IMAGES.kitchen} alt="Küche" className="rounded-sm shadow-lg order-2 md:order-1" />
        <div className="order-1 md:order-2">
          <Heading level={2}>Kochen & Essen</Heading>
          <p className="text-stone-600 mb-6 leading-relaxed">
            Die offene Küche lässt keine Wünsche offen. Egal ob schnelles Frühstück oder ausgiebiges Dinner – hier finden Sie alles, was Sie brauchen.
          </p>
           <ul className="space-y-3">
             <li className="flex items-center gap-3 text-sm text-stone-600"><Check size={16} className="text-sand-800"/> Induktionskochfeld & Backofen</li>
             <li className="flex items-center gap-3 text-sm text-stone-600"><Check size={16} className="text-sand-800"/> Nespresso & Filterkaffeemaschine</li>
             <li className="flex items-center gap-3 text-sm text-stone-600"><Check size={16} className="text-sand-800"/> Spülmaschine</li>
          </ul>
        </div>
      </div>
    </Section>
    
    <div className="bg-stone-900 text-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        <Heading level={2} className="text-white mb-12 text-center">Alle Annehmlichkeiten</Heading>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {AMENITIES.map((am, i) => (
            <div key={i} className="bg-white/5 p-6 border border-white/10 hover:bg-white/10 transition-colors">
               <h4 className="font-serif text-lg mb-2 text-sand-300">{am.title}</h4>
               <p className="text-sm text-stone-300">{am.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </>
);

// --- GALLERY PAGE ---
export const GalleryPage: React.FC = () => {
  const images = [
    { src: IMAGES.livingRoom, alt: "Heller Wohnbereich" },
    { src: IMAGES.bedroom, alt: "Schlafzimmer mit Boxspringbett" },
    { src: IMAGES.kitchen, alt: "Moderne Küchenzeile" },
    { src: IMAGES.bathroom, alt: "Tageslichtbad" },
    { src: IMAGES.detail1, alt: "Dekoration Detail" },
    { src: IMAGES.detail2, alt: "Leseecke" },
    { src: IMAGES.exterior, alt: "Außenansicht Haus" },
    { src: IMAGES.beach, alt: "Strandnähe" },
  ];

  return (
    <div className="pt-32 pb-24 px-6 max-w-7xl mx-auto">
      <Heading level={1} className="text-center mb-16">Galerie</Heading>
      <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
        {images.map((img, i) => (
          <div key={i} className="break-inside-avoid relative group overflow-hidden">
            <img src={img.src} alt={img.alt} className="w-full h-auto transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
              <span className="text-white text-sm font-medium">{img.alt}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// --- LOCATION PAGE ---
export const LocationPage: React.FC = () => (
  <>
    <div className="h-[50vh] relative">
      <img src={IMAGES.beach} alt="Sahlenburg Strand" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
         <Heading level={1} className="text-white">Lage & Umgebung</Heading>
      </div>
    </div>
    <Section>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        <div>
           <Heading level={2}>Cuxhaven Sahlenburg</Heading>
           <p className="text-stone-600 leading-relaxed mb-6">
             Sahlenburg ist der einzige Kurteil Cuxhavens, der Strand, Watt und Wald direkt verbindet. 
             Der Wernerwald reicht bis fast an die Flutlinie heran – ein einmaliges Naturerlebnis an der Nordseeküste.
           </p>
           <p className="text-stone-600 leading-relaxed mb-8">
             Vom Haus aus erreichen Sie in wenigen Minuten:
           </p>
           <ul className="space-y-4 mb-8">
             <li className="flex items-center gap-3"><MapPin className="text-sand-800" size={18} /> <span className="text-stone-700">Sandstrand Sahlenburg (400m)</span></li>
             <li className="flex items-center gap-3"><MapPin className="text-sand-800" size={18} /> <span className="text-stone-700">Waldfreibad (600m)</span></li>
             <li className="flex items-center gap-3"><MapPin className="text-sand-800" size={18} /> <span className="text-stone-700">UNESCO Weltnaturerbe Wattenmeer Besucherzentrum (800m)</span></li>
             <li className="flex items-center gap-3"><MapPin className="text-sand-800" size={18} /> <span className="text-stone-700">Bäcker & Supermarkt (300m)</span></li>
           </ul>
           <Button variant="outline" onClick={() => window.open('https://maps.google.com/?q=Am+Sahlenburger+Strand+12,+Cuxhaven', '_blank')}>
             Route berechnen
           </Button>
        </div>
        <div className="bg-stone-100 rounded-sm min-h-[400px] flex items-center justify-center relative overflow-hidden">
          {/* Mock Map Placeholder */}
          <img src={IMAGES.exterior} className="absolute inset-0 w-full h-full object-cover blur-sm opacity-50" />
          <div className="relative bg-white p-6 shadow-xl text-center">
            <span className="font-serif text-xl block mb-2">Ferienwohnung Eggers</span>
            <span className="text-sm text-stone-500">Am Sahlenburger Strand 12</span>
          </div>
        </div>
      </div>
    </Section>
  </>
);

// --- PRICES PAGE ---
export const RatesPage: React.FC = () => {
    // Simple mock data for chart
    const data = [
      { name: 'Belegt', value: 65, color: '#e0dbd1' },
      { name: 'Verfügbar', value: 35, color: '#5c5343' },
    ];

    return (
      <Section>
        <div className="text-center mb-16">
          <Heading level={1}>Preise & Saisonzeiten</Heading>
          <p className="text-stone-600 mt-4">Transparent und fair. Keine versteckten Kosten.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
           {SEASONS.map((season, idx) => (
             <div key={idx} className={`p-8 border ${idx === 1 ? 'border-sand-800 bg-sand-50 relative' : 'border-stone-200 bg-white'}`}>
                {idx === 1 && <span className="absolute top-0 right-0 bg-sand-800 text-white text-xs px-3 py-1 uppercase tracking-wider">Beliebt</span>}
                <h3 className="font-serif text-2xl mb-2">{season.name}</h3>
                <p className="text-sm text-stone-500 mb-6">{season.period}</p>
                <div className="flex items-baseline gap-1 mb-6">
                  <span className="text-4xl font-serif text-stone-900">{season.pricePerNight}€</span>
                  <span className="text-stone-500">/ Nacht</span>
                </div>
                <ul className="text-sm text-stone-600 space-y-3 mb-8">
                  <li className="flex items-center gap-2"><Check size={14} /> Bis 4 Personen</li>
                  <li className="flex items-center gap-2"><Check size={14} /> Inkl. WLAN & Parkplatz</li>
                  <li className="flex items-center gap-2"><Check size={14} /> Mindestaufenthalt {season.minStay} Nächte</li>
                </ul>
                <Link to="/buchen" className="block text-center w-full py-3 border border-stone-300 hover:border-sand-800 hover:bg-sand-800 hover:text-white transition-colors text-xs uppercase tracking-widest">
                  Jetzt Anfragen
                </Link>
             </div>
           ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-stone-50 p-8 md:p-12 items-center">
            <div>
              <Heading level={3}>Zusatzleistungen</Heading>
              <ul className="space-y-4 text-stone-600 text-sm">
                 <li className="flex justify-between border-b border-stone-200 pb-2">
                   <span>Endreinigung (einmalig)</span>
                   <span className="font-medium">85,00 €</span>
                 </li>
                 <li className="flex justify-between border-b border-stone-200 pb-2">
                   <span>Wäschepaket (pro Person)</span>
                   <span className="font-medium">18,00 €</span>
                 </li>
                 <li className="flex justify-between border-b border-stone-200 pb-2">
                   <span>Hund (auf Anfrage)</span>
                   <span className="font-medium">10,00 € / Nacht</span>
                 </li>
                 <li className="flex justify-between pb-2">
                   <span>Kurtaxe (pro Person/Tag, saisonabhängig)</span>
                   <span className="font-medium">ca. 3,00 €</span>
                 </li>
              </ul>
            </div>
            
            {/* Chart: Occupancy visual using Recharts */}
            <div className="flex flex-col items-center justify-center">
                <h4 className="font-serif text-lg mb-4 text-center">Aktuelle Auslastung (Jahresdurchschnitt)</h4>
                <div className="w-full h-[200px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={data}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={80}
                        paddingAngle={5}
                        dataKey="value"
                      >
                        {data.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
                <div className="flex gap-4 text-xs mt-2">
                   <div className="flex items-center gap-2"><div className="w-3 h-3 bg-[#5c5343]"></div> Verfügbar</div>
                   <div className="flex items-center gap-2"><div className="w-3 h-3 bg-[#e0dbd1]"></div> Belegt</div>
                </div>
            </div>
        </div>
      </Section>
    );
};