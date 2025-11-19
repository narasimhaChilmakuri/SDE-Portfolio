import React from 'react';
import { RESUME_DATA } from '../constants';

export const Footer: React.FC = () => {
  const year = new Date().getFullYear();
  
  return (
    <footer className="bg-zinc-950 text-zinc-600 py-12 text-center text-sm">
      <div className="container mx-auto px-6">
        <p>© {year} {RESUME_DATA.profile.name}. Crafted with precision.</p>
      </div>
    </footer>
  );
};