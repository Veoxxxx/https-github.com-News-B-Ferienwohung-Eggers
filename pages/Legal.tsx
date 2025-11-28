import React from 'react';
import { Section, Heading } from '../components/UI';

const LegalLayout: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <Section className="prose prose-stone max-w-3xl pt-32">
    <Heading level={1}>{title}</Heading>
    <div className="text-sm text-stone-600 leading-relaxed space-y-4">
      {children}
    </div>
  </Section>
);

export const Impressum: React.FC = () => (
  <LegalLayout title="Impressum">
    <p>Angaben gemäß § 5 TMG</p>
    <p>
      <strong>Ferienwohnung Eggers</strong><br />
      Inh. Familie Eggers<br />
      Am Sahlenburger Strand 12<br />
      27476 Cuxhaven
    </p>
    <p>
      <strong>Kontakt:</strong><br />
      Telefon: +49 4721 123456<br />
      E-Mail: kontakt@ferienwohnung-eggers.de
    </p>
    <p>
      <strong>Umsatzsteuer-ID:</strong><br />
      Umsatzsteuer-Identifikationsnummer gemäß §27 a Umsatzsteuergesetz: DE123456789
    </p>
  </LegalLayout>
);

export const Privacy: React.FC = () => (
  <LegalLayout title="Datenschutzerklärung">
    <Heading level={3}>1. Datenschutz auf einen Blick</Heading>
    <p>
      <strong>Allgemeine Hinweise</strong><br/>
      Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen.
    </p>
    <Heading level={3}>2. Hosting</Heading>
    <p>Wir hosten die Inhalte unserer Website bei folgendem Anbieter...</p>
    <Heading level={3}>3. Datenerfassung auf dieser Website</Heading>
    <p>
      <strong>Kontaktformular</strong><br/>
      Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert.
    </p>
  </LegalLayout>
);

export const Terms: React.FC = () => (
  <LegalLayout title="Allgemeine Geschäftsbedingungen">
    <Heading level={3}>1. Geltungsbereich</Heading>
    <p>Diese Geschäftsbedingungen gelten für Verträge über die mietweise Überlassung der Ferienwohnung Eggers zur Beherbergung.</p>
    <Heading level={3}>2. Vertragsabschluss</Heading>
    <p>Der Vertrag kommt durch die Annahme des Antrags des Kunden durch die Ferienwohnung Eggers zustande.</p>
    <Heading level={3}>3. Leistungen, Preise, Zahlung</Heading>
    <p>Die Ferienwohnung Eggers ist verpflichtet, die vom Kunden gebuchte Wohnung bereitzuhalten und die vereinbarten Leistungen zu erbringen.</p>
  </LegalLayout>
);