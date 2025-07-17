import React from 'react';
import ReactIcon from '../../assets/images/react.svg';
import TailwindIcon from '../../assets/images/tailwindcss.svg';
import Html5Icon from '../../assets/images/html5.svg';
import Css3Icon from '../../assets/images/css3.svg';
import JavascriptIcon from '../../assets/images/javascript.svg';

export const Footer = () => {
  const techStack = [
    { icon: ReactIcon, name: 'React' },
    { icon: TailwindIcon, name: 'Tailwind CSS' },
    { icon: Html5Icon, name: 'HTML5' },
    { icon: Css3Icon, name: 'CSS3' },
    { icon: JavascriptIcon, name: 'JavaScript' },
  ];
  return (
    <footer className="py-14 border-t border-[rgba(255,255,255,0.1)] bg-background">
      <div className="container mx-auto px-4 flex flex-col items-center gap-6">
        <div className="flex flex-col items-center gap-3 mb-2">
          <span className="text-accent font-semibold text-lg mb-1 tracking-wide">Built with:</span>
          <div className="flex flex-wrap justify-center gap-6">
            {techStack.map((tech, idx) => (
              <span
                key={idx}
                className="inline-flex items-center justify-center w-16 h-16 rounded-full border-2 border-accent/30 bg-white shadow-md transition-all duration-200 hover:border-accent hover:shadow-[0_0_0_6px_rgba(125,214,192,0.25)] group cursor-pointer"
                title={tech.name}
              >
                <img
                  src={tech.icon}
                  alt={tech.name}
                  className="w-10 h-10 object-contain transition-transform duration-200 group-hover:scale-125 group-hover:drop-shadow-[0_0_16px_#7DD6C0]"
                />
              </span>
            ))}
          </div>
        </div>
        <div className="flex justify-center items-center">
          <p className="text-text text-sm text-center font-medium">
            &copy; {new Date().getFullYear()} Jhon Harold Rueda. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};