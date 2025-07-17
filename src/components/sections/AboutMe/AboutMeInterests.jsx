import React from 'react';
import { Camera, Headphones, Film, BookOpen, Globe, Gamepad2, Video, Code2 } from 'lucide-react';

const interests = [
  { icon: <Camera size={18} />, label: 'Photography' },
  { icon: <Headphones size={18} />, label: 'Listening Music' },
  { icon: <Film size={18} />, label: 'Watching Movie' },
  { icon: <BookOpen size={18} />, label: 'Study' },
  { icon: <Globe size={18} />, label: 'Web Browsing' },
  { icon: <Gamepad2 size={18} />, label: 'Online Games' },
  { icon: <Video size={18} />, label: 'Videography' },
  { icon: <Code2 size={18} />, label: 'Coding' },
];

export const AboutMeInterests = () => (
  <div>
    <div className="flex items-center mb-2">
      <span className="mr-2 text-text font-medium">Interest</span>
      <div className="flex-1 border-t border-surface"></div>
    </div>
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-3 mt-4">
      {interests.map(({ icon, label }) => (
        <div
          key={label}
          className="flex items-center gap-2 bg-accent text-surface font-bold px-3 py-2 rounded-lg shadow hover:scale-105 transition-transform cursor-pointer text-sm"
        >
          {icon}
          <span>{label}</span>
        </div>
      ))}
    </div>
  </div>
); 