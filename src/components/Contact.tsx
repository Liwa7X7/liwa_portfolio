import React from 'react';
import { Github, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <section className="py-16" id="contact">
      <h2 className="section-title">CONTACT</h2>
      <div className="card space-y-6">
        <div className="flex items-center gap-3">
          <MapPin className="text-red-500 w-6 h-6" />
          <span>Kélibia/Dar Allouche : rue de liberté, 8055, Kelibia, Tunisie</span>
        </div>
        <div className="flex items-center gap-3">
          <Phone className="text-red-500 w-6 h-6" />
          <a href="tel:+21622332319" className="hover:text-red-400 transition-colors">
            +216 22 332 319
          </a>
        </div>
        <div className="flex items-center gap-3">
          <Mail className="text-red-500 w-6 h-6" />
          <a href="mailto:liwaamoknii@gmail.com" className="hover:text-red-400 transition-colors">
            liwaamoknii@gmail.com
          </a>
        </div>
        <div className="flex items-center gap-3">
          <Linkedin className="text-red-500 w-6 h-6" />
          <a 
            href="https://linkedin.com/liwa-mokni" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-red-400 transition-colors"
          >
            linkedin.com/liwa-mokni
          </a>
        </div>
      </div>
    </section>
  );
}