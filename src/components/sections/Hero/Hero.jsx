import React from 'react';
import { ArrowRightIcon } from 'lucide-react';
import { Github, Linkedin, Instagram } from 'lucide-react';
import { Button } from '../../common/Button';

export const Hero = () => {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="section min-h-screen flex items-center relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl">
          {/* Greeting */}
          <p className="text-[#7DD6C0] text-lg md:text-xl font-semibold mb-3 tracking-wide">Hello, I'm</p>
          {/* Name */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-2">
            Jhon Harold Rueda
          </h1>
          {/* Role */}
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#F2F2E9] mb-6 tracking-tight">
            Web Developer
          </h2>
          {/* Description */}
          <p className="text-base md:text-lg text-[#d1d5db] mb-10 max-w-2xl font-normal">
            Passionate about continuous learning and contributing to open-source projects that support the developer community and beyond.
          </p>
          {/* Buttons */}
          <div className="flex flex-wrap gap-4 mb-8">
            <Button primary onClick={scrollToProjects}>
              View My Work
              <ArrowRightIcon size={18} className="ml-2" />
            </Button>
          </div>
          {/* Social Icons - Inspired Style */}
          <div className="flex flex-wrap gap-x-6 gap-y-3 mb-8 items-center text-[#b0b0b0]">
            <a href="https://github.com/Ampexqt" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="flex items-center gap-1 hover:text-[#7DD6C0] transition-all duration-200 hover:scale-105">
              <Github size={18} /> <span className="hidden sm:inline text-sm font-medium">GitHub</span>
            </a>
            <a href="https://www.linkedin.com/in/rueda-jhon-harold-m-5585aa375/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="flex items-center gap-1 hover:text-[#7DD6C0] transition-all duration-200 hover:scale-105">
              <Linkedin size={18} />
              <span className="hidden sm:inline text-sm font-medium">LinkedIn</span>
            </a>
            <a href="https://codepen.io/Jhon-Harold-Rueda/pen/YPyyWgE" target="_blank" rel="noopener noreferrer" aria-label="Codepen" className="flex items-center gap-1 hover:text-[#7DD6C0] transition-all duration-200 hover:scale-105">
              <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-codepen"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 7 12 12 22 7"/><polyline points="12 22 12 12"/></svg>
              <span className="hidden sm:inline text-sm font-medium">Codepen</span>
            </a>
            <a href="https://gitlab.com/Ampexqt" target="_blank" rel="noopener noreferrer" aria-label="GitLab" className="flex items-center gap-1 hover:text-[#7DD6C0] transition-all duration-200 hover:scale-105">
              <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-gitlab"><path d="M12 2l2.09 6.26L20 8.27l-5 3.64 1.91 6.09L12 15.77l-4.91 2.23L9 11.91l-5-3.64 5.91-.01L12 2z"/></svg>
              <span className="hidden sm:inline text-sm font-medium">GitLab</span>
            </a>
            <a href="https://www.codewars.com/users/Ampexqt" target="_blank" rel="noopener noreferrer" aria-label="Codewars" className="flex items-center gap-1 hover:text-[#7DD6C0] transition-all duration-200 hover:scale-105">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
              <span className="hidden sm:inline text-sm font-medium">Codewars</span>
            </a>
            <a href="https://app.daily.dev/jhonharoldrueda" target="_blank" rel="noopener noreferrer" aria-label="Daily.dev" className="flex items-center gap-1 hover:text-[#7DD6C0] transition-all duration-200 hover:scale-105">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="m22 10-7.5 7.5L13 16"/></svg>
              <span className="hidden sm:inline text-sm font-medium">Daily.dev</span>
            </a>
            <a href="https://steamcommunity.com/profiles/76561198300844711/" target="_blank" rel="noopener noreferrer" aria-label="Steam" className="flex items-center gap-1 hover:text-[#7DD6C0] transition-all duration-200 hover:scale-105">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="16.5" cy="13.5" r="2.5"/><circle cx="9.5" cy="16.5" r="1.5"/><path d="M14.5 15.5l-3.5 1"/><path d="M13.5 14.5l-2-2"/></svg>
              <span className="hidden sm:inline text-sm font-medium">Steam</span>
            </a>
            <a href="https://dev.to/ampexqt" target="_blank" rel="noopener noreferrer" aria-label="Dev.to" className="flex items-center gap-1 hover:text-[#7DD6C0] transition-all duration-200 hover:scale-105">
              <svg width="18" height="18" viewBox="0 0 50 50" fill="currentColor" className=""><rect width="50" height="50" rx="12"/><text x="50%" y="60%" textAnchor="middle" fontSize="18" fill="#161618" fontFamily="Arial, sans-serif" fontWeight="bold">DEV</text></svg>
              <span className="hidden sm:inline text-sm font-medium">Dev.to</span>
            </a>
            <a href="https://x.com/johnharoldrueda" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)" className="flex items-center gap-1 hover:text-[#7DD6C0] transition-all duration-200 hover:scale-105">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 7 17l-5-5"/><path d="m22 10-7.5 7.5L13 16"/></svg>
              <span className="hidden sm:inline text-sm font-medium">X</span>
            </a>
            <a href="https://www.facebook.com/haroldzkie23" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="flex items-center gap-1 hover:text-[#7DD6C0] transition-all duration-200 hover:scale-105">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              <span className="hidden sm:inline text-sm font-medium">Facebook</span>
            </a>
            <a href="https://instagram.com/ampexxqt" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="flex items-center gap-1 hover:text-[#7DD6C0] transition-all duration-200 hover:scale-105">
              <Instagram size={18} /> <span className="hidden sm:inline text-sm font-medium">Instagram</span>
            </a>
            <a href="https://hashnode.com/@ampex" target="_blank" rel="noopener noreferrer" aria-label="Hashnode" className="flex items-center gap-1 hover:text-[#7DD6C0] transition-all duration-200 hover:scale-105">
              <svg width="18" height="18" viewBox="0 0 50 50" fill="none" stroke="currentColor" strokeWidth="2" className=""><rect x="10" y="10" width="30" height="30" rx="8" fill="currentColor"/><rect x="18" y="18" width="14" height="14" rx="4" fill="#161618"/></svg>
              <span className="hidden sm:inline text-sm font-medium">Hashnode</span>
            </a>
          </div>
          {/* 3D Cube Grid for small screens (below icons) - 7-cube pattern */}
          <div className="block md:hidden w-full flex justify-center my-6">
            <div className="w-[260px] h-[200px] sm:w-[320px] sm:h-[240px]">
              <svg width="100%" height="100%" viewBox="0 0 480 360" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Top Row - 4 cubes, leftmost faded */}
                <g opacity="0.25">
                  <polygon points="40,100 100,70 160,100 160,160 100,190 40,160 40,100 100,130 160,100 100,70 100,130 100,190" stroke="#2de39a" strokeWidth="0.3" fill="none"/>
                  <polyline className="cube-trail" points="40,100 100,70 160,100 160,160 100,190 40,160 40,100 100,130 160,100 100,70 100,130 100,190" stroke="#7DD6C0" strokeWidth="0.3" fill="none"/>
                  <circle className="cube-point" cx="40" cy="100" r="2.2" />
                  <circle className="cube-point" cx="100" cy="70" r="2.2" />
                  <circle className="cube-point" cx="160" cy="100" r="2.2" />
                  <circle className="cube-point" cx="160" cy="160" r="2.2" />
                  <circle className="cube-point" cx="100" cy="190" r="2.2" />
                  <circle className="cube-point" cx="40" cy="160" r="2.2" />
                  <circle className="cube-point" cx="100" cy="130" r="2.2" />
                </g>
                <g>
                  <polygon points="100,70 160,40 220,70 220,130 160,160 100,130 100,70 160,100 220,70 160,40 160,100 160,160" stroke="#2de39a" strokeWidth="0.3" fill="none"/>
                  <polyline className="cube-trail delay-1" points="100,70 160,40 220,70 220,130 160,160 100,130 100,70 160,100 220,70 160,40 160,100 160,160" stroke="#7DD6C0" strokeWidth="0.3" fill="none"/>
                  <circle className="cube-point delay-1" cx="100" cy="70" r="2.2" />
                  <circle className="cube-point delay-1" cx="160" cy="40" r="2.2" />
                  <circle className="cube-point delay-1" cx="220" cy="70" r="2.2" />
                  <circle className="cube-point delay-1" cx="220" cy="130" r="2.2" />
                  <circle className="cube-point delay-1" cx="160" cy="160" r="2.2" />
                  <circle className="cube-point delay-1" cx="100" cy="130" r="2.2" />
                  <circle className="cube-point delay-1" cx="160" cy="100" r="2.2" />
                </g>
                <g>
                  <polygon points="160,100 220,70 280,100 280,160 220,190 160,160 160,100 220,130 280,100 220,70 220,130 220,190" stroke="#2de39a" strokeWidth="0.3" fill="none"/>
                  <polyline className="cube-trail delay-2" points="160,100 220,70 280,100 280,160 220,190 160,160 160,100 220,130 280,100 220,70 220,130 220,190" stroke="#7DD6C0" strokeWidth="0.3" fill="none"/>
                  <circle className="cube-point delay-2" cx="160" cy="100" r="2.2" />
                  <circle className="cube-point delay-2" cx="220" cy="70" r="2.2" />
                  <circle className="cube-point delay-2" cx="280" cy="100" r="2.2" />
                  <circle className="cube-point delay-2" cx="280" cy="160" r="2.2" />
                  <circle className="cube-point delay-2" cx="220" cy="190" r="2.2" />
                  <circle className="cube-point delay-2" cx="160" cy="160" r="2.2" />
                  <circle className="cube-point delay-2" cx="220" cy="130" r="2.2" />
                </g>
                <g>
                  <polygon points="220,130 280,100 340,130 340,190 280,220 220,190 220,130 280,160 340,130 280,100 280,160 280,220" stroke="#2de39a" strokeWidth="0.3" fill="none"/>
                  <polyline className="cube-trail delay-3" points="220,130 280,100 340,130 340,190 280,220 220,190 220,130 280,160 340,130 280,100 280,160 280,220" stroke="#7DD6C0" strokeWidth="0.3" fill="none"/>
                  <circle className="cube-point delay-3" cx="220" cy="130" r="2.2" />
                  <circle className="cube-point delay-3" cx="280" cy="100" r="2.2" />
                  <circle className="cube-point delay-3" cx="340" cy="130" r="2.2" />
                  <circle className="cube-point delay-3" cx="340" cy="190" r="2.2" />
                  <circle className="cube-point delay-3" cx="280" cy="220" r="2.2" />
                  <circle className="cube-point delay-3" cx="220" cy="190" r="2.2" />
                  <circle className="cube-point delay-3" cx="280" cy="160" r="2.2" />
                </g>
                {/* Bottom Row - 3 cubes, offset right */}
                <g>
                  <polygon points="160,220 220,190 280,220 280,280 220,310 160,280 160,220 220,250 280,220 220,190 220,250 220,310" stroke="#2de39a" strokeWidth="0.3" fill="none"/>
                  <polyline className="cube-trail delay-4" points="160,220 220,190 280,220 280,280 220,310 160,280 160,220 220,250 280,220 220,190 220,250 220,310" stroke="#7DD6C0" strokeWidth="0.3" fill="none"/>
                  <circle className="cube-point delay-4" cx="160" cy="220" r="2.2" />
                  <circle className="cube-point delay-4" cx="220" cy="190" r="2.2" />
                  <circle className="cube-point delay-4" cx="280" cy="220" r="2.2" />
                  <circle className="cube-point delay-4" cx="280" cy="280" r="2.2" />
                  <circle className="cube-point delay-4" cx="220" cy="310" r="2.2" />
                  <circle className="cube-point delay-4" cx="160" cy="280" r="2.2" />
                  <circle className="cube-point delay-4" cx="220" cy="250" r="2.2" />
                </g>
                <g>
                  <polygon points="220,250 280,220 340,250 340,310 280,340 220,310 220,250 280,280 340,250 280,220 280,280 280,340" stroke="#2de39a" strokeWidth="0.3" fill="none"/>
                  <polyline className="cube-trail delay-5" points="220,250 280,220 340,250 340,310 280,340 220,310 220,250 280,280 340,250 280,220 280,280 280,340" stroke="#7DD6C0" strokeWidth="0.3" fill="none"/>
                  <circle className="cube-point delay-5" cx="220" cy="250" r="2.2" />
                  <circle className="cube-point delay-5" cx="280" cy="220" r="2.2" />
                  <circle className="cube-point delay-5" cx="340" cy="250" r="2.2" />
                  <circle className="cube-point delay-5" cx="340" cy="310" r="2.2" />
                  <circle className="cube-point delay-5" cx="280" cy="340" r="2.2" />
                  <circle className="cube-point delay-5" cx="220" cy="310" r="2.2" />
                  <circle className="cube-point delay-5" cx="280" cy="280" r="2.2" />
                </g>
                <g>
                  <polygon points="280,160 340,130 400,160 400,220 340,250 280,220 280,160 340,190 400,160 340,130 340,190 340,250" stroke="#2de39a" strokeWidth="0.3" fill="none"/>
                  <polyline className="cube-trail delay-6" points="280,160 340,130 400,160 400,220 340,250 280,220 280,160 340,190 400,160 340,130 340,190 340,250" stroke="#7DD6C0" strokeWidth="0.3" fill="none"/>
                  <circle className="cube-point delay-6" cx="280" cy="160" r="2.2" />
                  <circle className="cube-point delay-6" cx="340" cy="130" r="2.2" />
                  <circle className="cube-point delay-6" cx="400" cy="160" r="2.2" />
                  <circle className="cube-point delay-6" cx="400" cy="220" r="2.2" />
                  <circle className="cube-point delay-6" cx="340" cy="250" r="2.2" />
                  <circle className="cube-point delay-6" cx="280" cy="220" r="2.2" />
                  <circle className="cube-point delay-6" cx="340" cy="190" r="2.2" />
                </g>
              </svg>
            </div>
          </div>
          {/* 3D Isometric Cube Grid - Refined with Trail Animation and Responsive */}
          <div className="hidden md:block absolute right-10 top-1/4 pointer-events-none select-none z-0 w-[260px] h-[200px] md:w-[400px] md:h-[320px] lg:w-[520px] lg:h-[400px]">
            <svg width="100%" height="100%" viewBox="0 0 420 320" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Top Row - Cube 1 */}
              <g>
                <polygon points="120,60 170,35 220,60 220,110 170,135 120,110 120,60 170,85 220,60 170,35 170,85 170,135" stroke="#2de39a" strokeWidth="0.8" fill="none"/>
                <polyline className="cube-trail" points="120,60 170,35 220,60 220,110 170,135 120,110 120,60 170,85 220,60 170,35 170,85 170,135" stroke="#7DD6C0" strokeWidth="1.2" fill="none"/>
                <circle className="cube-point" cx="120" cy="60" r="2.2" />
                <circle className="cube-point" cx="170" cy="35" r="2.2" />
                <circle className="cube-point" cx="220" cy="60" r="2.2" />
                <circle className="cube-point" cx="220" cy="110" r="2.2" />
                <circle className="cube-point" cx="170" cy="135" r="2.2" />
                <circle className="cube-point" cx="120" cy="110" r="2.2" />
                <circle className="cube-point" cx="170" cy="85" r="2.2" />
              </g>
              {/* Top Row - Cube 2 */}
              <g>
                <polygon points="220,60 270,35 320,60 320,110 270,135 220,110 220,60 270,85 320,60 270,35 270,85 270,135" stroke="#2de39a" strokeWidth="0.8" fill="none"/>
                <polyline className="cube-trail delay-1" points="220,60 270,35 320,60 320,110 270,135 220,110 220,60 270,85 320,60 270,35 270,85 270,135" stroke="#7DD6C0" strokeWidth="1.2" fill="none"/>
                <circle className="cube-point delay-1" cx="220" cy="60" r="2.2" />
                <circle className="cube-point delay-1" cx="270" cy="35" r="2.2" />
                <circle className="cube-point delay-1" cx="320" cy="60" r="2.2" />
                <circle className="cube-point delay-1" cx="320" cy="110" r="2.2" />
                <circle className="cube-point delay-1" cx="270" cy="135" r="2.2" />
                <circle className="cube-point delay-1" cx="220" cy="110" r="2.2" />
                <circle className="cube-point delay-1" cx="270" cy="85" r="2.2" />
              </g>
              {/* Middle Row - Cube 3 */}
              <g>
                <polygon points="170,135 220,110 270,135 270,185 220,210 170,185 170,135 220,160 270,135 220,110 220,160 220,210" stroke="#2de39a" strokeWidth="0.8" fill="none"/>
                <polyline className="cube-trail delay-2" points="170,135 220,110 270,135 270,185 220,210 170,185 170,135 220,160 270,135 220,110 220,160 220,210" stroke="#7DD6C0" strokeWidth="1.2" fill="none"/>
                <circle className="cube-point delay-2" cx="170" cy="135" r="2.2" />
                <circle className="cube-point delay-2" cx="220" cy="110" r="2.2" />
                <circle className="cube-point delay-2" cx="270" cy="135" r="2.2" />
                <circle className="cube-point delay-2" cx="270" cy="185" r="2.2" />
                <circle className="cube-point delay-2" cx="220" cy="210" r="2.2" />
                <circle className="cube-point delay-2" cx="170" cy="185" r="2.2" />
                <circle className="cube-point delay-2" cx="220" cy="160" r="2.2" />
              </g>
              {/* Bottom Row - Cube 4 */}
              <g>
                <polygon points="220,210 270,185 320,210 320,260 270,285 220,260 220,210 270,235 320,210 270,185 270,235 270,285" stroke="#2de39a" strokeWidth="0.8" fill="none"/>
                <polyline className="cube-trail delay-3" points="220,210 270,185 320,210 320,260 270,285 220,260 220,210 270,235 320,210 270,185 270,235 270,285" stroke="#7DD6C0" strokeWidth="1.2" fill="none"/>
                <circle className="cube-point delay-3" cx="220" cy="210" r="2.2" />
                <circle className="cube-point delay-3" cx="270" cy="185" r="2.2" />
                <circle className="cube-point delay-3" cx="320" cy="210" r="2.2" />
                <circle className="cube-point delay-3" cx="320" cy="260" r="2.2" />
                <circle className="cube-point delay-3" cx="270" cy="285" r="2.2" />
                <circle className="cube-point delay-3" cx="220" cy="260" r="2.2" />
                <circle className="cube-point delay-3" cx="270" cy="235" r="2.2" />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}; 