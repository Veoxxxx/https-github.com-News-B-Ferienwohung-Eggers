import React, { useState } from 'react';
import { Section, Heading, Input, Button } from '../components/UI';
import { BookingCalendar } from '../components/BookingCalendar';
import { createBooking } from '../services/channelManager';
import { IMAGES } from '../constants';

export const BookingPage: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    arrival: '',
    departure: '',
    guests: '2',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    try {
      await createBooking(formState);
      setStatus('success');
    } catch (err) {
      setStatus('error');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  if (status === 'success') {
    return (
      <Section className="text-center min-h-[60vh] flex flex-col justify-center items-center">
        <Heading level={1}>Vielen Dank!</Heading>
        <p className="text-stone-600 mb-8 max-w-lg">
          Wir haben Ihre Buchungsanfrage erhalten und melden uns innerhalb von 24 Stunden bei Ihnen per E-Mail mit einem verbindlichen Angebot.
        </p>
        <Button onClick={() => setStatus('idle')}>Neue Anfrage</Button>
      </Section>
    );
  }

  return (
    <div className="bg-sand-50 min-h-screen pt-32 pb-24">
      <Section className="bg-white shadow-xl p-8 md:p-16 rounded-sm">
        <div className="text-center mb-12">
          <Heading level={1}>Buchungsanfrage</Heading>
          <p className="text-stone-600">Prüfen Sie die Verfügbarkeit und sichern Sie sich Ihren Wunschtermin.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Calendar Side */}
          <div>
            <h3 className="font-serif text-xl mb-6">Verfügbarkeit</h3>
            <BookingCalendar />
            <p className="text-xs text-stone-400 mt-4 text-center">
              Kalenderdaten werden live aktualisiert. Änderungen vorbehalten.
            </p>
          </div>

          {/* Form Side */}
          <div>
            <h3 className="font-serif text-xl mb-6">Ihre Daten</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input label="Name" name="name" type="text" required value={formState.name} onChange={handleChange} placeholder="Max Mustermann" />
                <Input label="E-Mail" name="email" type="email" required value={formState.email} onChange={handleChange} placeholder="ihre@email.de" />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 <div className="flex flex-col gap-2">
                    <label className="text-xs uppercase tracking-wider text-stone-500">Anreise</label>
                    <input type="date" name="arrival" required className="border-b border-stone-300 bg-transparent py-2 text-stone-800" value={formState.arrival} onChange={handleChange} />
                 </div>
                 <div className="flex flex-col gap-2">
                    <label className="text-xs uppercase tracking-wider text-stone-500">Abreise</label>
                    <input type="date" name="departure" required className="border-b border-stone-300 bg-transparent py-2 text-stone-800" value={formState.departure} onChange={handleChange} />
                 </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 <div className="flex flex-col gap-2">
                    <label className="text-xs uppercase tracking-wider text-stone-500">Gäste</label>
                    <select name="guests" className="border-b border-stone-300 bg-transparent py-2" value={formState.guests} onChange={handleChange}>
                      <option value="1">1 Person</option>
                      <option value="2">2 Personen</option>
                      <option value="3">3 Personen</option>
                      <option value="4">4 Personen</option>
                    </select>
                 </div>
                 <Input label="Telefon (optional)" name="phone" type="tel" value={formState.phone} onChange={handleChange} />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs uppercase tracking-wider text-stone-500">Nachricht</label>
                <textarea 
                  name="message"
                  className="border-b border-stone-300 bg-transparent py-2 focus:outline-none focus:border-sand-800 min-h-[100px]" 
                  placeholder="Haben Sie besondere Wünsche?"
                  value={formState.message}
                  onChange={handleChange}
                ></textarea>
              </div>

              <Button type="submit" className="w-full mt-4" disabled={status === 'submitting'}>
                {status === 'submitting' ? 'Wird gesendet...' : 'Unverbindlich Anfragen'}
              </Button>
              <p className="text-[10px] text-stone-400 text-center mt-4">
                Mit dem Absenden erklären Sie sich mit der Verarbeitung Ihrer Daten gemäß der Datenschutzerklärung einverstanden.
              </p>
            </form>
          </div>
        </div>
      </Section>
    </div>
  );
};

// --- CONTACT PAGE ---
export const ContactPage: React.FC = () => (
  <div className="pt-32 pb-24 max-w-4xl mx-auto px-6 text-center">
    <Heading level={1}>Kontakt</Heading>
    <p className="text-stone-600 mb-12">Wir freuen uns, von Ihnen zu hören.</p>
    
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
      <div className="p-8 border border-stone-100 shadow-sm">
        <h4 className="font-serif text-lg mb-2">Anschrift</h4>
        <p className="text-sm text-stone-600">Am Sahlenburger Strand 12<br/>27476 Cuxhaven</p>
      </div>
      <div className="p-8 border border-stone-100 shadow-sm">
        <h4 className="font-serif text-lg mb-2">Telefon</h4>
        <p className="text-sm text-stone-600">+49 4721 123456<br/><span className="text-xs text-stone-400">Mo-Fr 09:00 - 18:00</span></p>
      </div>
      <div className="p-8 border border-stone-100 shadow-sm">
        <h4 className="font-serif text-lg mb-2">Email</h4>
        <p className="text-sm text-stone-600">kontakt@ferienwohnung-eggers.de<br/><span className="text-xs text-stone-400">Antwort in 24h</span></p>
      </div>
    </div>

    <img src={IMAGES.exterior} alt="Das Haus" className="w-full h-[400px] object-cover mb-12 opacity-80" />
  </div>
);