import React from 'react';
import { Phone, GraduationCap, MapPin, Mail, Briefcase } from 'lucide-react';

export const AboutMeInfo = () => (
  <div className="w-full max-w-xl mx-auto">
    <h3 className="text-2xl font-bold mb-2 text-accent">
      BS InfoTech Student | Aspiring Web Developer
    </h3>
    <p className="mb-6 text-text font-normal">
      Hi, I'm <span className="font-semibold text-accent">Jhon Harold Rueda</span>, a passionate aspiring web developer and UI/UX designer. I'm driven by creativity and innovation, aiming to craft user-centered designs and develop seamless web experiences that make an impact.
    </p>
    <div className="flex flex-col gap-4 text-base">
      <div className="flex items-center gap-3 text-text">
        <Phone size={18} className="text-accent" />
        <span className="font-medium">Phone:</span> +63 9538435067
      </div>
      <div className="flex items-center gap-3 text-text">
        <GraduationCap size={18} className="text-accent" />
        <span className="font-medium">Program and College level:</span> BS-InfoTech / 3rd year level
      </div>
      <div className="flex items-center gap-3 text-text">
        <MapPin size={18} className="text-accent" />
        <span className="font-medium">Location:</span>Zamboanga City, Philippines
      </div>
      <div className="flex items-center gap-3 text-text">
        <Mail size={18} className="text-accent" />
        <span className="font-medium">Email:</span> haroldzkie99@gmail.com
      </div>
      <div className="flex items-center gap-3 text-text">
        <Briefcase size={18} className="text-accent" />
        <span className="font-medium">Freelance:</span> Video Editing / Photo Editing
      </div>
    </div>
  </div>
); 