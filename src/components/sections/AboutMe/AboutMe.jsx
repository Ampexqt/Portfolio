import React, { useState } from 'react';
import profileImg from '../../../assets/images/profile.jpg';
import { Phone, GraduationCap, MapPin, Mail, Briefcase, Camera, Headphones, Film, BookOpen, Globe, Gamepad2, Video, Code2, User, Download, X } from 'lucide-react';

const details = [
  { icon: <Phone size={18} />, label: 'Phone', value: '+63 9538435067' },
  { icon: <GraduationCap size={18} />, label: 'Education', value: 'BS InfoTech, 3rd Year' },
  { icon: <MapPin size={18} />, label: 'Location', value: 'Upper Calarian, Zamboanga City' },
  { icon: <Mail size={18} />, label: 'Email', value: 'haroldzkie99@gmail.com' },
  { icon: <Briefcase size={18} />, label: 'Freelance', value: 'Video & Photo Editing' },
];

const interests = [
  { icon: <Camera size={18} />, label: 'Photography' },
  { icon: <Headphones size={18} />, label: 'Music' },
  { icon: <Film size={18} />, label: 'Movies' },
  { icon: <BookOpen size={18} />, label: 'Study' },
  { icon: <Globe size={18} />, label: 'Web Browsing' },
  { icon: <Gamepad2 size={18} />, label: 'Gaming' },
  { icon: <Video size={18} />, label: 'Videography' },
  { icon: <Code2 size={18} />, label: 'Coding' },
];

// Toast Component
const Toast = ({ message, isVisible, onClose }) => {
  if (!isVisible) return null;

  return (
    <div className="fixed top-1/2 left-4 z-50 animate-slide-in transform -translate-y-1/2">
      <div className="bg-[#7DD6C0]/20 border-2 border-[#7DD6C0] rounded-xl shadow-2xl p-3 max-w-xs w-full backdrop-blur-md ring-2 ring-[#7DD6C0]/30">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-[#7DD6C0] rounded-full animate-pulse shadow-lg"></div>
            <span className="text-[#F2F2E9] font-semibold text-xs">{message}</span>
          </div>
          <button
            onClick={onClose}
            className="text-[#7DD6C0] hover:text-[#F2F2E9] transition-all duration-200 p-1 rounded-full hover:bg-[#7DD6C0]/20 hover:scale-110"
          >
            <X size={14} />
          </button>
        </div>
      </div>
    </div>
  );
};

export const AboutMe = () => {
  const [showToast, setShowToast] = useState(false);

  const handleDownloadCV = () => {
    setShowToast(true);
    // Auto-hide toast after 4 seconds
    setTimeout(() => {
      setShowToast(false);
    }, 4000);
  };

  return (
    <section id="about" className="section">
      <Toast 
        message="Upcoming Features" 
        isVisible={showToast} 
        onClose={() => setShowToast(false)} 
      />
      <div className="container mx-auto px-2 sm:px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-10 text-center break-words">
          About <span className="highlight">Me</span>
        </h2>
        <div className="glass p-4 sm:p-8 md:p-16 rounded-2xl shadow-lg">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6 sm:gap-10 md:gap-16 w-full">
            {/* Profile Photo */}
            <div className="flex-shrink-0 flex justify-center w-full md:w-auto mb-4 md:mb-0">
              <img
                src={profileImg}
                alt="Jhon Harold Rueda Portrait"
                className="rounded-full w-28 h-28 xs:w-36 xs:h-36 sm:w-40 sm:h-40 md:w-56 md:h-56 object-cover shadow-lg border-4 border-surface"
              />
            </div>
            {/* Info */}
            <div className="flex-1 w-full max-w-full sm:max-w-xl md:max-w-2xl mx-auto flex flex-col items-start">
              {/* Personal Information Heading with Icon - Left Aligned and Highlighted */}
              <div className="flex items-center gap-2 mb-3 sm:mb-4 w-full">
                <User size={22} className="text-white" />
                <span className="text-lg sm:text-xl md:text-2xl font-extrabold text-white">Personal Information</span>
              </div>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-1 text-accent break-words">
                Jhon Harold Rueda
              </h3>
              <p className="text-base sm:text-lg md:text-xl font-semibold text-text mb-1 break-words">
                IT Student & Aspiring Programmer
              </p>
              <p className="mb-6 sm:mb-8 text-sm sm:text-base md:text-lg text-gray-300 font-normal max-w-full break-words">
                I'm an IT student who loves building for the web and learning by doing. I enjoy tackling real-world challenges and continuously improving my skills through practical experience.
              </p>
              <ul className="w-full flex flex-col gap-2 sm:gap-3 mb-6 sm:mb-8">
                {details.map(({ icon, label, value }) => (
                  <li key={label} className="flex flex-wrap items-center gap-2 sm:gap-3 text-sm sm:text-base text-text break-all">
                    <span className="text-accent">{React.cloneElement(icon, { size: 18, className: 'text-accent' })}</span>
                    <span className="font-medium min-w-[90px] sm:min-w-[110px]">{label}:</span>
                    <span className="font-normal break-all">{value}</span>
                  </li>
                ))}
              </ul>
              {/* CV Download Button */}
              <div className="w-full mb-6 sm:mb-8">
                <button
                  onClick={handleDownloadCV}
                  className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 rounded-lg border-2 border-accent text-accent font-semibold text-sm sm:text-base bg-transparent hover:bg-accent hover:text-surface transition-all duration-200 shadow-sm hover:shadow-md focus:outline-none focus-visible:outline-none focus:ring-0 w-full sm:w-auto justify-center"
                >
                  <Download size={18} />
                  Download CV
                </button>
              </div>
              {/* Interests */}
              <div className="w-full mt-2">
                <div className="mb-1 sm:mb-2 text-text font-medium flex items-center gap-2">
                  <span>Interests:</span>
                  <div className="flex-1 border-t border-surface"></div>
                </div>
                <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3 mt-2">
                  {interests.map(({ icon, label }) => (
                    <div
                      key={label}
                      className="flex items-center gap-2 bg-surface/80 border border-surface px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg shadow-sm text-xs sm:text-sm font-medium text-text hover:bg-accent/80 hover:text-surface transition-colors w-full"
                    >
                      <span className="text-accent">{React.cloneElement(icon, { size: 16, className: 'text-accent' })}</span>
                      <span className="break-words">{label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};