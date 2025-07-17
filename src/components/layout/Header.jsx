import React, { useState, useEffect } from 'react';
import { MenuIcon, XIcon } from 'lucide-react';

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About Me', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center mt-4">
      <div
        className={`w-full max-w-5xl mx-auto px-4 py-4 flex items-center justify-between rounded-xl transition-all duration-500
        ${scrolled
          ? 'bg-gradient-to-r from-white/20 to-white/5 backdrop-blur-2xl border border-white/20 shadow-2xl'
          : 'bg-transparent'}
        `}
        style={scrolled ? {backdropFilter: 'blur(24px)', WebkitBackdropFilter: 'blur(24px)'} : {boxShadow: 'none', border: 'none', backdropFilter: 'none', WebkitBackdropFilter: 'none'}}
      >
        <a href="#" className="text-xl font-['Poppins'] font-bold text-[#F2F2E9] flex items-center">
          <span className="highlight">Dev</span>Portfolio
        </a>
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map(item => (
            <a
              key={item.name}
              href={item.href}
              className="relative text-[#F2F2E9] hover:text-[#7DD6C0] transition-colors duration-300 text-sm font-medium group"
            >
              {item.name}
              <span
                className="absolute left-0 -bottom-1 w-full h-[2px] bg-[#7DD6C0] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full"
              />
            </a>
          ))}
        </nav>
        {/* Enhanced Mobile Menu Button */}
        <button 
          className="md:hidden relative p-2 rounded-lg bg-[#7DD6C0]/10 border border-[#7DD6C0]/20 hover:bg-[#7DD6C0]/20 hover:border-[#7DD6C0]/40 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#7DD6C0]/50 focus:ring-offset-2 focus:ring-offset-transparent" 
          onClick={toggleMobileMenu}
        >
          <div className="relative">
            {mobileMenuOpen ? (
              <XIcon size={24} className="text-[#7DD6C0] animate-spin-in" />
            ) : (
              <MenuIcon size={24} className="text-[#F2F2E9] hover:text-[#7DD6C0] transition-colors duration-300" />
            )}
          </div>
          {/* Pulse effect when menu is open */}
          {mobileMenuOpen && (
            <div className="absolute inset-0 rounded-lg bg-[#7DD6C0]/20 animate-ping"></div>
          )}
        </button>
      </div>
      
      {/* Enhanced Mobile Navigation */}
      <div className={`md:hidden fixed inset-0 z-40 transition-all duration-500 ${mobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        {/* Backdrop */}
        <div 
          className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-all duration-500 ${mobileMenuOpen ? 'opacity-100' : 'opacity-0'}`}
          onClick={() => setMobileMenuOpen(false)}
        />
        
        {/* Menu Container */}
        <div className={`absolute top-20 left-4 right-4 bg-[#242527]/95 backdrop-blur-xl border border-[#7DD6C0]/30 rounded-2xl shadow-2xl ring-2 ring-[#7DD6C0]/20 transition-all duration-500 transform ${mobileMenuOpen ? 'translate-y-0 opacity-100 scale-100' : '-translate-y-4 opacity-0 scale-95'}`}>
          {/* Menu Header */}
          <div className="flex items-center justify-between p-4 border-b border-[#7DD6C0]/20">
            <span className="text-lg font-bold text-[#F2F2E9]">Navigation</span>
            <button 
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-lg hover:bg-[#7DD6C0]/10 transition-colors duration-200"
            >
              <XIcon size={20} className="text-[#7DD6C0]" />
            </button>
          </div>
          
          {/* Menu Items */}
          <div className="p-2">
            {navItems.map((item, index) => (
              <a 
                key={item.name} 
                href={item.href} 
                className={`block px-4 py-3 text-base font-medium text-[#F2F2E9] hover:text-[#7DD6C0] hover:bg-[#7DD6C0]/10 rounded-lg transition-all duration-300 transform hover:translate-x-2 ${mobileMenuOpen ? 'animate-slide-in' : ''}`}
                style={{ animationDelay: `${index * 100}ms` }}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};