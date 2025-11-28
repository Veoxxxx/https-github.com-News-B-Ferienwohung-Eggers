import React, { ButtonHTMLAttributes, InputHTMLAttributes } from 'react';

export const Button: React.FC<ButtonHTMLAttributes<HTMLButtonElement> & { variant?: 'primary' | 'outline' }> = ({ 
  className = "", 
  variant = 'primary', 
  children, 
  ...props 
}) => {
  const baseStyle = "px-8 py-3 transition-all duration-300 font-medium tracking-wide text-sm uppercase";
  const variants = {
    primary: "bg-sand-800 text-white hover:bg-sand-900 border border-transparent",
    outline: "bg-transparent border border-sand-800 text-sand-800 hover:bg-sand-50"
  };

  return (
    <button className={`${baseStyle} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};

export const Input: React.FC<InputHTMLAttributes<HTMLInputElement> & { label: string }> = ({ label, className = "", ...props }) => (
  <div className="flex flex-col gap-2">
    <label className="text-xs uppercase tracking-wider text-stone-500">{label}</label>
    <input 
      className={`border-b border-stone-300 bg-transparent py-2 focus:outline-none focus:border-sand-800 transition-colors ${className}`} 
      {...props} 
    />
  </div>
);

export const Section: React.FC<{ children: React.ReactNode; className?: string; id?: string }> = ({ children, className = "", id }) => (
  <section id={id} className={`max-w-7xl mx-auto px-6 py-24 ${className}`}>
    {children}
  </section>
);

export const Heading: React.FC<{ children: React.ReactNode; level?: 1 | 2 | 3; className?: string }> = ({ children, level = 2, className = "" }) => {
  const base = "font-serif text-stone-900";
  if (level === 1) return <h1 className={`${base} text-4xl md:text-6xl mb-6 ${className}`}>{children}</h1>;
  if (level === 2) return <h2 className={`${base} text-3xl md:text-4xl mb-8 ${className}`}>{children}</h2>;
  return <h3 className={`${base} text-xl md:text-2xl mb-4 ${className}`}>{children}</h3>;
};