import React from 'react';
import { GlassCard } from '../../common/GlassCard';
import { ExternalLinkIcon } from 'lucide-react';
import ECommerceImg from '../../../assets/images/E-commerce-Admin-Dashboard.jpg';
import StudentInfoImg from '../../../assets/images/Student-Information-Management-System.jpg';
import ExecutiveDashboardImg from '../../../assets/images/Executive-Dashboard-Ordering-Management-System.jpg';
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
import { Swiper as SwiperMobile, SwiperSlide as SwiperSlideMobile } from 'swiper/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import 'swiper/css';
import { useRef } from 'react';

export const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'E-commerce Dashboard',
      description: 'A comprehensive admin dashboard for managing e-commerce operations, featuring analytics, product management, and order tracking.',
      image: ECommerceImg,
      tags: ['React', 'Tailwind CSS', 'Chart.js'],
      link: 'https://github.com/Ampexqt/E-Commerce-Fresh-Farm',
      techStack: [
        { icon: Html5Icon, name: 'HTML5' },
        { icon: Css3Icon, name: 'CSS3' },
        { icon: JavascriptIcon, name: 'JavaScript' },
        { icon: PhpIcon, name: 'PHP' },
        { icon: BootstrapIcon, name: 'Bootstrap' },
        { icon: ChartjsIcon, name: 'Chart.js' },
        { icon: MysqlIcon, name: 'MySQL' },
      ]
    },
    {
      id: 2,
      title: 'Student Information Management System',
      description: 'Student Information Management System (SIMS) for junior high schools. Manage students, classes, classrooms, and shift-based schedules with real-time updates.',
      image: StudentInfoImg,
      tags: ['React', 'Node.js', 'MongoDB'],
      link: 'https://sims-4f789.web.app/',
      techStack: [
        { icon: Html5Icon, name: 'HTML5' },
        { icon: ReactIcon, name: 'ReactJS' },
        { icon: FirebaseIcon, name: 'Firebase' },
        { icon: CloudinaryIcon, name: 'Cloudinary' },
      ]
    },
    {
      id: 3,
      title: 'Executive Dashboard',
      description: 'An executive dashboard for monitoring key business metrics, visualizing data, and generating reports for decision-making.',
      image: ExecutiveDashboardImg,
      tags: ['React', 'D3.js', 'Tailwind CSS'],
      link: 'https://github.com/Ampexqt/Executive-Dashboard-Frontend-Only',
      techStack: [
        { icon: Html5Icon, name: 'HTML5' },
        { icon: ReactIcon, name: 'ReactJS' },
        { icon: Css3Icon, name: 'CSS3' },
        { icon: PostgresqlIcon, name: 'PostgreSQL' },
        { icon: ChartjsIcon, name: 'Chart.js' },
        { icon: NodejsIcon, name: 'Node.js' },
        { icon: FeatherjsIcon, name: 'FeatherJS' },
      ]
    }
  ];
  const mobileSwiperRef = useRef(null);
  return (
    <section id="projects" className="section">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">
          My <span className="highlight">Projects</span>
        </h2>
        {/* Mobile Swiper */}
        <div className="sm:hidden w-full max-w-xs mx-auto mt-8 relative flex items-center justify-center">
          <button
            aria-label="Previous Project"
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
            loop={projects.length > 1}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            speed={700}
            className="py-4"
          >
            {projects.map(project => (
              <SwiperSlideMobile key={project.id}>
                <GlassCard className="flex flex-col h-full project-card group border-l-4 border-transparent hover:border-[#7DD6C0] transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-[1.025] bg-[rgba(31,41,55,0.35)]">
                  <div className="relative mb-6 overflow-hidden rounded-xl shadow-lg border border-[#232526] group-hover:shadow-2xl transition-all duration-300">
                    <img src={project.image} alt={project.title} className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105 rounded-xl" />
                    <a href={project.link} target="_blank" rel="noopener noreferrer"
                      className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl cursor-pointer z-10">
                      <span className="inline-block px-6 py-2 rounded-full bg-[#7DD6C0] text-[#232526] font-bold text-lg shadow-md hover:bg-[#2de39a] hover:scale-105 hover:underline transition-all duration-300 focus:outline-none focus-visible:outline-none focus:ring-0 flex items-center gap-2">
                        {project.title === 'Student Information Management System' ? 'Live Demo' : 'View Project'}
                        <ExternalLinkIcon size={20} className="ml-1" />
                      </span>
                    </a>
                  </div>
                  <h3 className="text-2xl font-extrabold mb-2 text-[#7DD6C0] group-hover:text-[#2de39a] transition-colors duration-300 drop-shadow-lg">
                    {project.title}
                  </h3>
                  <p className="text-base text-[#F2F2E9]/80 mb-4 flex-grow font-medium leading-relaxed group-hover:text-[#F2F2E9] transition-colors duration-300">
                    {project.description}
                  </p>
                  <div className="flex flex-col gap-2 mb-4">
                    <span className="text-sm font-semibold text-[#7DD6C0]">Tech Stack Used:</span>
                    <div className="flex flex-wrap items-center gap-3">
                      {project.techStack && project.techStack.map((tech, idx) => (
                        <span key={idx} className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-white/80 border border-[#e0e0e0] shadow-sm">
                          <img src={tech.icon} alt={tech.name} title={tech.name} className="w-6 h-6 object-contain" />
                        </span>
                      ))}
                    </div>
                  </div>
                </GlassCard>
              </SwiperSlideMobile>
            ))}
          </SwiperMobile>
          <button
            aria-label="Next Project"
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-[#232526] hover:bg-[#7DD6C0] hover:text-[#232526] text-[#7DD6C0] rounded-full p-2 shadow-md transition-all duration-200 focus:outline-none focus-visible:outline-none focus:ring-0"
            style={{ marginRight: '-1.5rem' }}
            onClick={() => mobileSwiperRef.current?.slideNext()}
          >
            <ChevronRight size={22} />
          </button>
        </div>
        {/* Desktop Grid */}
        <div className="hidden sm:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map(project => (
            <GlassCard key={project.id} className="flex flex-col h-full project-card group border-l-4 border-transparent hover:border-[#7DD6C0] transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-[1.025] bg-[rgba(31,41,55,0.35)]">
              <div className="relative mb-6 overflow-hidden rounded-xl shadow-lg border border-[#232526] group-hover:shadow-2xl transition-all duration-300">
                <img src={project.image} alt={project.title} className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105 rounded-xl" />
                <a href={project.link} target="_blank" rel="noopener noreferrer"
                  className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl cursor-pointer z-10">
                  <span className="inline-block px-6 py-2 rounded-full bg-[#7DD6C0] text-[#232526] font-bold text-lg shadow-md hover:bg-[#2de39a] hover:scale-105 hover:underline transition-all duration-300 focus:outline-none focus-visible:outline-none focus:ring-0 flex items-center gap-2">
                    {project.title === 'Student Information Management System' ? 'Live Demo' : 'View Project'}
                    <ExternalLinkIcon size={20} className="ml-1" />
                  </span>
                </a>
              </div>
              <h3 className="text-2xl font-extrabold mb-2 text-[#7DD6C0] group-hover:text-[#2de39a] transition-colors duration-300 drop-shadow-lg">
                {project.title}
              </h3>
              <p className="text-base text-[#F2F2E9]/80 mb-4 flex-grow font-medium leading-relaxed group-hover:text-[#F2F2E9] transition-colors duration-300">
                {project.description}
              </p>
              <div className="flex flex-col gap-2 mb-4">
                <span className="text-sm font-semibold text-[#7DD6C0]">Tech Stack Used:</span>
                <div className="flex flex-wrap items-center gap-3">
                  {project.techStack && project.techStack.map((tech, idx) => (
                    <span key={idx} className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-white/80 border border-[#e0e0e0] shadow-sm">
                      <img src={tech.icon} alt={tech.name} title={tech.name} className="w-6 h-6 object-contain" />
                    </span>
                  ))}
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
};