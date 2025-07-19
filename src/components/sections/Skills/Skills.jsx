import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import Html5Icon from '../../../assets/images/html5.svg';
import Css3Icon from '../../../assets/images/css3.svg';
import JavascriptIcon from '../../../assets/images/javascript.svg';
import PhpIcon from '../../../assets/images/php.svg';
import BootstrapIcon from '../../../assets/images/bootstrap.svg';
import ChartjsIcon from '../../../assets/images/chartdotjs.svg';
import MysqlIcon from '../../../assets/images/mysql.svg';
import ReactIcon from '../../../assets/images/react.svg';
import FirebaseIcon from '../../../assets/images/firebase.svg';
import CloudinaryIcon from '../../../assets/images/cloudinary.svg';
import PostgresqlIcon from '../../../assets/images/postgresql.svg';
import NodejsIcon from '../../../assets/images/nodedotjs.svg';
import FeatherjsIcon from '../../../assets/images/feathersjs-svgrepo-com.svg';
import { useState } from 'react';
import { Code, Server, Database, Settings, Info, ChevronLeft, ChevronRight } from 'lucide-react';
import { Transition } from '@headlessui/react';
import { Swiper as SwiperMobile, SwiperSlide as SwiperSlideMobile } from 'swiper/react';
import 'swiper/css';
import { useRef } from 'react';
import ViteIcon from '../../../assets/images/vite.svg';
import YarnIcon from '../../../assets/images/yarn.svg';
import NpmIcon from '../../../assets/images/npm.svg';
import TailwindIcon from '../../../assets/images/tailwindcss.svg';
import GithubIcon from '../../../assets/images/github.svg';
import GitIcon from '../../../assets/images/git.svg';
import FigmaIcon from '../../../assets/images/figma.svg';
import PostmanIcon from '../../../assets/images/postman-svgrepo-com.svg';
import VSCodeIcon from '../../../assets/images/vs-code-logo-microsoft-svgrepo-com.svg';
import XamppIcon from '../../../assets/images/xampp.svg';

const techStack = [
  { icon: Html5Icon, name: 'HTML5' },
  { icon: Css3Icon, name: 'CSS3' },
  { icon: JavascriptIcon, name: 'JavaScript' },
  { icon: ReactIcon, name: 'React' },
  { icon: TailwindIcon, name: 'Tailwind CSS' },
  { icon: ViteIcon, name: 'Vite' },
  { icon: NodejsIcon, name: 'Node.js' },
  { icon: PhpIcon, name: 'PHP' },
  { icon: FeatherjsIcon, name: 'FeatherJS' },
  { icon: XamppIcon, name: 'XAMPP' },
  { icon: MysqlIcon, name: 'MySQL' },
  { icon: PostgresqlIcon, name: 'PostgreSQL' },
  { icon: FirebaseIcon, name: 'Firebase' },
  { icon: CloudinaryIcon, name: 'Cloudinary' },
  { icon: BootstrapIcon, name: 'Bootstrap' },
  { icon: ChartjsIcon, name: 'Chart.js' },
  { icon: GitIcon, name: 'Git' },
  { icon: GithubIcon, name: 'GitHub' },
  { icon: YarnIcon, name: 'Yarn' },
  { icon: NpmIcon, name: 'npm' },
  { icon: FigmaIcon, name: 'Figma' },
  { icon: PostmanIcon, name: 'Postman' },
  { icon: VSCodeIcon, name: 'VS Code' },
];

const skillData = [
  // Frontend
  { name: 'HTML5', icon: Html5Icon, category: 'Frontend', level: 'Beginner', description: 'Structured semantic markup for web apps.' },
  { name: 'CSS3', icon: Css3Icon, category: 'Frontend', level: 'Beginner', description: 'Styled responsive layouts and animations.' },
  { name: 'JavaScript', icon: JavascriptIcon, category: 'Frontend', level: 'Beginner', description: 'Added interactivity and dynamic content.' },
  { name: 'React', icon: ReactIcon, category: 'Frontend', level: 'Beginner', description: 'Built responsive UIs using React hooks and Tailwind CSS.' },
  { name: 'Bootstrap', icon: BootstrapIcon, category: 'Frontend', level: 'Beginner', description: 'Quickly prototyped responsive layouts.' },
  { name: 'Tailwind CSS', icon: TailwindIcon, category: 'Frontend', level: 'Beginner', description: 'Utility-first CSS framework for rapid UI development.' },
  { name: 'Chart.js', icon: ChartjsIcon, category: 'Frontend', level: 'Beginner', description: 'Visualized data with interactive charts.' },
  { name: 'Vite', icon: ViteIcon, category: 'Frontend', level: 'Beginner', description: 'Fast build tool and dev server for modern web projects.' },
  // Backend
  { name: 'PHP', icon: PhpIcon, category: 'Backend', level: 'Beginner', description: 'Developed server-side logic and authentication.' },
  { name: 'Node.js', icon: NodejsIcon, category: 'Backend', level: 'Beginner', description: 'Created REST APIs and backend logic.' },
  { name: 'FeatherJS', icon: FeatherjsIcon, category: 'Backend', level: 'Beginner', description: 'Built real-time APIs and microservices.' },
  // Databases
  { name: 'MySQL', icon: MysqlIcon, category: 'Databases', level: 'Beginner', description: 'Designed and queried relational databases.' },
  { name: 'PostgreSQL', icon: PostgresqlIcon, category: 'Databases', level: 'Beginner', description: 'Managed advanced SQL and data integrity.' },
  { name: 'Firebase', icon: FirebaseIcon, category: 'Databases', level: 'Beginner', description: 'Used for auth, real-time DB, and hosting.' },
  // Development Tools
  { name: 'npm', icon: NpmIcon, category: 'Development Tools', level: 'Beginner', description: 'Node.js package manager for JavaScript.' },
  { name: 'Yarn', icon: YarnIcon, category: 'Development Tools', level: 'Beginner', description: 'Fast, reliable dependency management.' },
  { name: 'Git', icon: GitIcon, category: 'Development Tools', level: 'Beginner', description: 'Version control for code collaboration.' },
  { name: 'GitHub', icon: GithubIcon, category: 'Development Tools', level: 'Beginner', description: 'Hosted and managed code repositories.' },
  { name: 'VS Code', icon: VSCodeIcon, category: 'Development Tools', level: 'Beginner', description: 'Code editor for modern development.' },
  { name: 'Postman', icon: PostmanIcon, category: 'Development Tools', level: 'Beginner', description: 'API testing and collaboration platform.' },
  { name: 'XAMPP', icon: XamppIcon, category: 'Development Tools', level: 'Beginner', description: 'Local development environment for PHP and MySQL.' },
  { name: 'Figma', icon: FigmaIcon, category: 'Development Tools', level: 'Beginner', description: 'Collaborative interface design tool.' },
  { name: 'Cloudinary', icon: CloudinaryIcon, category: 'Development Tools', level: 'Beginner', description: 'Asset management and media optimization tool.' },
];

const categories = [
  { label: 'Frontend', icon: <Code size={18} className="mr-2" /> },
  { label: 'Backend', icon: <Server size={18} className="mr-2" /> },
  { label: 'Databases', icon: <Database size={18} className="mr-2" /> },
  { label: 'Development Tools', icon: <Settings size={18} className="mr-2" /> },
];

export const Skills = () => {
  const [activeTab, setActiveTab] = useState('Frontend');
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const filteredSkills = skillData.filter(skill => skill.category === activeTab);
  const swiperRef = useRef(null);
  const desktopSwiperRef = useRef(null);
  const mobileSwiperRef = useRef(null);

  // Only enable loop if there are at least 2 skills
  const mobileLoop = filteredSkills.length > 1;

  // Desktop/tablet: handle horizontal scroll for grid
  const scrollGrid = (dir) => {
    if (!gridScrollRef.current) return;
    const card = gridScrollRef.current.querySelector('.skill-card');
    if (card) {
      const scrollAmount = card.offsetWidth + 40; // 40px gap
      gridScrollRef.current.scrollBy({ left: dir * scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="skills" className="section">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-extrabold mb-6 text-center text-[#7DD6C0] drop-shadow-lg tracking-tight relative">
          Technical <span className="highlight">Skills</span>
          <span className="block w-20 h-1 bg-[#7DD6C0] mx-auto mt-3 rounded-full opacity-80"></span>
        </h2>
        {/* Carousel remains unchanged */}
        <div className="w-full max-w-5xl mx-auto">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={32}
            slidesPerView={5}
            loop={true}
            freeMode={true}
            autoplay={{ delay: 1, disableOnInteraction: false }}
            speed={5000}
            breakpoints={{
              320: { slidesPerView: 2 },
              640: { slidesPerView: 3 },
              1024: { slidesPerView: 7 },
            }}
            className="py-8"
          >
            {techStack.map((tech, idx) => (
              <SwiperSlide key={idx}>
                <div className="flex flex-col items-center justify-center gap-3">
                  <span className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white shadow-md mb-2">
                    <img src={tech.icon} alt={tech.name} className="w-12 h-12 object-contain" />
                  </span>
                  <span className="text-base font-semibold text-[#F2F2E9] tracking-wide text-center drop-shadow-md">
                    {tech.name}
                  </span>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mt-12 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.label}
              onClick={() => setActiveTab(cat.label)}
              className={`flex items-center px-6 py-2 rounded-lg font-semibold text-base transition-all duration-200 shadow-sm border
                ${activeTab === cat.label ? 'bg-[#7DD6C0] text-[#232526] scale-105 shadow-[0_2px_12px_0_rgba(125,214,192,0.18)] border-[#7DD6C0]' : 'bg-[#181A1B] text-[#F2F2E9]/80 border-[#232526] hover:border-[#7DD6C0] hover:shadow-[0_2px_12px_0_rgba(125,214,192,0.10)]'}`}
              style={{ transition: 'all 0.3s cubic-bezier(.4,0,.2,1)' }}
            >
              {cat.icon}
              {cat.label}
            </button>
          ))}
        </div>
        {/* Skills Grid with transition and tooltips */}
        <Transition
          show={true}
          appear
          enter="transition-opacity duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="hidden sm:block w-full max-w-6xl mx-auto relative">
            {filteredSkills.length > 4 && (
              <button
                aria-label="Previous Skill"
                className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-[#232526] hover:bg-[#7DD6C0] hover:text-[#232526] text-[#7DD6C0] rounded-full p-2 shadow-md transition-all duration-200 focus:outline-none"
                style={{ marginLeft: '-1.5rem' }}
                onClick={() => desktopSwiperRef.current?.slidePrev()}
              >
                <ChevronLeft size={22} />
              </button>
            )}
            <Swiper
              onSwiper={swiper => (desktopSwiperRef.current = swiper)}
              modules={[Autoplay]}
              spaceBetween={32}
              slidesPerView={4}
              loop={filteredSkills.length > 4}
              autoplay={false}
              speed={700}
              breakpoints={{
                320: { slidesPerView: 1 },
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
                1280: { slidesPerView: 4 },
              }}
              className="py-2"
            >
              {filteredSkills.map((skill, idx) => (
                <SwiperSlide key={idx}>
                  <div
                    className="relative flex flex-col items-center justify-center bg-[#232526] rounded-2xl shadow-lg p-10 transition-all duration-300 hover:scale-105 hover:shadow-[0_8px_32px_0_rgba(125,214,192,0.25)] border border-transparent hover:border-[#7DD6C0]/60 group"
                    onMouseEnter={() => setHoveredSkill(idx)}
                    onMouseLeave={() => setHoveredSkill(null)}
                  >
                    <span className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-white shadow-md mb-5 transition-all duration-300 group-hover:shadow-[0_0_0_6px_rgba(125,214,192,0.15)] group-hover:scale-110">
                      <img src={skill.icon} alt={skill.name} aria-label={skill.name} className="w-14 h-14 object-contain" />
                    </span>
                    <span className="text-2xl font-extrabold text-[#F2F2E9] mb-3 tracking-tight drop-shadow-sm text-center">{skill.name}</span>
                    <span className={`px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wide ${skill.level === 'Intermediate' ? 'bg-[#7DD6C0] text-[#232526]' : 'bg-green-400 text-[#232526]'}`}>{skill.level}</span>
                    {/* Tooltip */}
                    <Transition
                      show={hoveredSkill === idx}
                      enter="transition-opacity duration-200"
                      enterFrom="opacity-0 translate-y-2"
                      enterTo="opacity-100 translate-y-0"
                      leave="transition-opacity duration-150"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0"
                    >
                      <div className="absolute left-1/2 -translate-x-1/2 top-2 z-20 w-64 bg-[#181A1B] text-[#F2F2E9] text-sm rounded-xl shadow-lg px-4 py-3 border border-[#7DD6C0]/40 pointer-events-none animate-fade-in-up">
                        <div className="flex items-center gap-2 mb-1 text-[#7DD6C0] font-bold"><Info size={16} />{skill.name}</div>
                        <div>{skill.description}</div>
                      </div>
                    </Transition>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            {filteredSkills.length > 4 && (
              <button
                aria-label="Next Skill"
                className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-[#232526] hover:bg-[#7DD6C0] hover:text-[#232526] text-[#7DD6C0] rounded-full p-2 shadow-md transition-all duration-200 focus:outline-none"
                style={{ marginRight: '-1.5rem' }}
                onClick={() => desktopSwiperRef.current?.slideNext()}
              >
                <ChevronRight size={22} />
              </button>
            )}
          </div>
        </Transition>
        {/* Mobile/Tablet: Swiper carousel for skills */}
        <div className="sm:hidden w-full max-w-xs mx-auto mt-8 relative flex items-center justify-center">
          <button
            aria-label="Previous Skill"
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-[#232526] hover:bg-[#7DD6C0] hover:text-[#232526] text-[#7DD6C0] rounded-full p-2 shadow-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#7DD6C0]"
            style={{ marginLeft: '-1.5rem' }}
            onClick={() => mobileSwiperRef.current?.slidePrev()}
          >
            <ChevronLeft size={22} />
          </button>
          <SwiperMobile
            onSwiper={swiper => (mobileSwiperRef.current = swiper)}
            spaceBetween={24}
            slidesPerView={1}
            loop={mobileLoop}
            autoplay={{ delay: 2000, disableOnInteraction: false }}
            speed={700}
            className="py-4"
          >
            {filteredSkills.map((skill, idx) => (
              <SwiperSlideMobile key={idx}>
                <div className="relative flex flex-col items-center justify-center bg-[#232526] rounded-2xl shadow-lg p-8 transition-all duration-300 hover:scale-105 hover:shadow-[0_8px_32px_0_rgba(125,214,192,0.25)] border border-transparent hover:border-[#7DD6C0]/60 group">
                  <span className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white shadow-md mb-4 transition-all duration-300 group-hover:shadow-[0_0_0_6px_rgba(125,214,192,0.15)] group-hover:scale-110">
                    <img src={skill.icon} alt={skill.name} aria-label={skill.name} className="w-12 h-12 object-contain" />
                  </span>
                  <span className="text-xl font-extrabold text-[#F2F2E9] mb-2 tracking-tight drop-shadow-sm text-center">{skill.name}</span>
                  <span className={`px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wide ${skill.level === 'Intermediate' ? 'bg-[#7DD6C0] text-[#232526]' : 'bg-green-400 text-[#232526]'}`}>{skill.level}</span>
                  {/* Tooltip always visible on mobile */}
                  <div className="mt-4 w-full bg-[#181A1B] text-[#F2F2E9] text-sm rounded-xl shadow-lg px-4 py-3 border border-[#7DD6C0]/40 hidden lg:flex">
                    <div className="flex items-center gap-2 mb-1 text-[#7DD6C0] font-bold"><Info size={16} />{skill.name}</div>
                    <div className="hidden lg:block">{skill.description}</div>
                  </div>
                </div>
              </SwiperSlideMobile>
            ))}
          </SwiperMobile>
          <button
            aria-label="Next Skill"
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-[#232526] hover:bg-[#7DD6C0] hover:text-[#232526] text-[#7DD6C0] rounded-full p-2 shadow-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#7DD6C0]"
            style={{ marginRight: '-1.5rem' }}
            onClick={() => mobileSwiperRef.current?.slideNext()}
          >
            <ChevronRight size={22} />
          </button>
        </div>
      </div>
    </section>
  );
};