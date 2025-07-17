import React, { useState } from 'react';
import NetworkingImg from '../../../assets/images/Networking_LE_upscale_balanced_x4.jpg';
import DeanlistImg from '../../../assets/images/Deanlist_LE_upscale_balanced_x4.jpg';
import DigitalLiteracyImg from '../../../assets/images/DigitalLiteracy_LE_upscale_balanced_x4.jpg';
import { X } from 'lucide-react';
import { Swiper as SwiperMobile, SwiperSlide as SwiperSlideMobile } from 'swiper/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import 'swiper/css';
import { useRef } from 'react';

export const Certifications = () => {
  const certifications = [
    {
      id: 1,
      title: 'Microsoft Digital Literacy',
      institution: 'TESDA',
      year: '2023',
      image: DigitalLiteracyImg,
      description: 'Completed the Microsoft Digital Literacy course, covering essential computer and internet skills.'
    },
    {
      id: 2,
      title: 'Networking Basics',
      institution: 'Cisco Networking Academy',
      year: '2025',
      image: NetworkingImg,
      description: 'Successfully completed the Networking Basics course, learning foundational networking concepts and protocols.'
    },
    {
      id: 3,
      title: "Dean's Lister (Academic Achievement)",
      institution: 'Zamboanga Peninsula Polytechnic State University',
      year: '2024',
      image: DeanlistImg,
      description: "Recognized as a Dean's Lister for outstanding academic performance in BSIT, 1st Semester AY 2023-2024."
    }
  ];

  const [modalImg, setModalImg] = useState(null);
  const mobileSwiperRef = useRef(null);

  return (
    <section id="certifications" className="section">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-extrabold mb-10 text-center text-[#7DD6C0] drop-shadow-lg tracking-tight relative">
          Certifications & Education
          <span className="block w-24 h-1 bg-[#7DD6C0] mx-auto mt-3 rounded-full opacity-80"></span>
        </h2>
        {/* Mobile Swiper */}
        <div className="sm:hidden w-full max-w-xs mx-auto mt-8 relative flex items-center justify-center">
          <button
            aria-label="Previous Certification"
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-[#232526] hover:bg-[#7DD6C0] hover:text-[#232526] text-[#7DD6C0] rounded-full p-2 shadow-md transition-all duration-200 focus:outline-none focus-visible:outline-none focus:ring-0"
            style={{ marginLeft: '-1.5rem' }}
            onClick={() => mobileSwiperRef.current?.slidePrev()}
          >
            <ChevronLeft size={22} />
          </button>
          <SwiperMobile
            onSwiper={swiper => (mobileSwiperRef.current = swiper)}
            spaceBetween={24}
            slidesPerView={1}
            loop={certifications.length > 1}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            speed={700}
            className="py-4"
          >
            {certifications.map(cert => (
              <SwiperSlideMobile key={cert.id}>
                <div
                  className="relative flex flex-col md:flex-row items-center bg-[#181A1B] rounded-2xl shadow-lg p-7 gap-7 border border-[#232526] hover:border-[#7DD6C0] transition-all duration-300 group min-h-[220px] cursor-pointer hover:shadow-[0_4px_24px_0_rgba(125,214,192,0.18)]"
                  onClick={() => setModalImg(cert.image)}
                  tabIndex={0}
                  role="button"
                  aria-label={`View full certificate for ${cert.title}`}
                  onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') setModalImg(cert.image); }}
                >
                  <div className="flex-shrink-0 flex items-center justify-center w-full md:w-auto z-20 relative">
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="w-44 h-32 object-cover rounded-xl shadow-md border border-[#232526] group-hover:blur-sm group-hover:brightness-75 group-hover:saturate-150 transition-all duration-300"
                      draggable={false}
                    />
                    {/* Hover overlay for guidance - only over the image */}
                    <div className="absolute inset-0 rounded-xl bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-10 flex items-center justify-center">
                      <span className="text-white text-lg font-bold px-4 py-1 rounded-full shadow-md border border-[#7DD6C0] backdrop-blur-sm drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">Click to enlarge</span>
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col justify-center w-full z-20">
                    <h3 className="text-2xl font-extrabold text-white mb-1 leading-tight tracking-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)] group-hover:text-white group-hover:drop-shadow-[0_4px_16px_rgba(0,0,0,1)] transition-colors duration-200">
                      {cert.title}
                    </h3>
                    <span className="text-[#7DD6C0] font-semibold text-base mb-1 block drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)] group-hover:text-white group-hover:drop-shadow-[0_4px_16px_rgba(0,0,0,1)] transition-colors duration-200">
                      {cert.institution}
                    </span>
                    <span className="text-sm text-white opacity-90 mb-2 block drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)] group-hover:text-white group-hover:drop-shadow-[0_4px_16px_rgba(0,0,0,1)] transition-colors duration-200">
                      {cert.year}
                    </span>
                    <span className="text-sm text-white opacity-95 block drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)] group-hover:text-white group-hover:drop-shadow-[0_4px_16px_rgba(0,0,0,1)] transition-colors duration-200">
                      {cert.description}
                    </span>
                  </div>
                </div>
              </SwiperSlideMobile>
            ))}
          </SwiperMobile>
          <button
            aria-label="Next Certification"
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-[#232526] hover:bg-[#7DD6C0] hover:text-[#232526] text-[#7DD6C0] rounded-full p-2 shadow-md transition-all duration-200 focus:outline-none focus-visible:outline-none focus:ring-0"
            style={{ marginRight: '-1.5rem' }}
            onClick={() => mobileSwiperRef.current?.slideNext()}
          >
            <ChevronRight size={22} />
          </button>
        </div>
        {/* Desktop Grid */}
        <div className="hidden sm:grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {certifications.map(cert => (
            <div
              key={cert.id}
              className="relative flex flex-col md:flex-row items-center bg-[#181A1B] rounded-2xl shadow-lg p-7 gap-7 border border-[#232526] hover:border-[#7DD6C0] transition-all duration-300 group min-h-[220px] cursor-pointer hover:shadow-[0_4px_24px_0_rgba(125,214,192,0.18)]"
              onClick={() => setModalImg(cert.image)}
              tabIndex={0}
              role="button"
              aria-label={`View full certificate for ${cert.title}`}
              onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') setModalImg(cert.image); }}
            >
              <div className="flex-shrink-0 flex items-center justify-center w-full md:w-auto z-20 relative">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-44 h-32 object-cover rounded-xl shadow-md border border-[#232526] group-hover:blur-sm group-hover:brightness-75 group-hover:saturate-150 transition-all duration-300"
                  draggable={false}
                />
                {/* Hover overlay for guidance - only over the image */}
                <div className="absolute inset-0 rounded-xl bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-10 flex items-center justify-center">
                  <span className="text-white text-lg font-bold px-4 py-1 rounded-full shadow-md border border-[#7DD6C0] backdrop-blur-sm drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">Click to enlarge</span>
                </div>
              </div>
              <div className="flex-1 flex flex-col justify-center w-full z-20">
                <h3 className="text-2xl font-extrabold text-white mb-1 leading-tight tracking-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)] group-hover:text-white group-hover:drop-shadow-[0_4px_16px_rgba(0,0,0,1)] transition-colors duration-200">
                  {cert.title}
                </h3>
                <span className="text-[#7DD6C0] font-semibold text-base mb-1 block drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)] group-hover:text-white group-hover:drop-shadow-[0_4px_16px_rgba(0,0,0,1)] transition-colors duration-200">
                  {cert.institution}
                </span>
                <span className="text-sm text-white opacity-90 mb-2 block drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)] group-hover:text-white group-hover:drop-shadow-[0_4px_16px_rgba(0,0,0,1)] transition-colors duration-200">
                  {cert.year}
                </span>
                <span className="text-sm text-white opacity-95 block drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)] group-hover:text-white group-hover:drop-shadow-[0_4px_16px_rgba(0,0,0,1)] transition-colors duration-200">
                  {cert.description}
                </span>
              </div>
            </div>
          ))}
        </div>
        {/* Modal for full-size certificate image */}
        {modalImg && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm" onClick={() => setModalImg(null)}>
            <div className="relative max-w-2xl w-full mx-4" onClick={e => e.stopPropagation()}>
              <button
                className="absolute top-2 right-2 bg-[#232526] text-[#7DD6C0] rounded-full p-1 shadow-md hover:bg-[#7DD6C0] hover:text-[#232526] transition-all"
                onClick={() => setModalImg(null)}
                aria-label="Close"
              >
                <X size={28} />
              </button>
              <img src={modalImg} alt="Certificate Full View" className="w-full h-auto rounded-xl shadow-2xl border-2 border-[#7DD6C0]" />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};