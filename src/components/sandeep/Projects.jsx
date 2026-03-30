import React, { useRef, useState, useEffect } from 'react';
import { ArrowRight, DownloadCloud, ExternalLink } from 'lucide-react';

import cashmanImg from '../../assets/clo.png';
import aramEyeCareImg from '../../assets/aramEyecare.png';
import vanikanImg from '../../assets/van.png';
import konguTbiImg from '../../assets/tbi logo.png';
import zenoraImg from '../../assets/slogo.png';

const projects = [
  {
    name: 'Cashman',
    description: 'An AI-integrated financial management app that helps individuals manage their finances efficiently with multiple smart features.',
    image: cashmanImg,
    tags: ['React Native', 'AI', 'Firebase'],
    action: {
      label: 'Play Store',
      href: 'https://play.google.com/store/apps/details?id=com.cashman.app&pcampaignid=web_share',
      isExternal: true,
    },
  },
  {
    name: 'Aram Eyecare',
    description: 'Fully functional e-commerce web application where you can buy specs as per your needs.',
    image: aramEyeCareImg,
    tags: ['React', 'E-commerce', 'Firebase'],
    action: { label: 'Visit Website', href: 'https://www.arameyecare.com', isExternal: true },
  },
  {
    name: 'Vanikan',
    description: 'A single application connecting farmers and consumers directly, facilitating smooth sales and communication.',
    image: vanikanImg,
    tags: ['React Native', 'Agriculture', 'Mobile'],
    action: null,
  },
  {
    name: 'KONGU TBI',
    description: 'Dynamic website developed for the incubator KONGU TBI, showcasing their mission and initiatives.',
    image: konguTbiImg,
    tags: ['Web', 'React', 'Hosting'],
    action: { label: 'Visit Website', href: 'https://antiquewhite-rat-516664.hostingersite.com/', isExternal: true },
  },
  {
    name: 'Zenora',
    description: 'An all-in-one productivity and personal management application designed to organize, track, and streamline tasks seamlessly.',
    image: zenoraImg,
    tags: ['Mobile', 'Productivity', 'Management'],
    action: {
      label: 'Download APK',
      href: 'https://firebasestorage.googleapis.com/v0/b/goodpsyche-2365e.firebasestorage.app/o/DOC-20260310-WA0006.apk?alt=media&token=404b55f7-dd31-4089-be39-6a2098451f09',
      isExternal: true,
    },
  },
];

export default function Projects() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeProject, setActiveProject] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entries[0].target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative py-24 md:py-32 overflow-hidden"
      style={{ backgroundColor: '#000000' }}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full mb-6">
            <span className="w-2 h-2 bg-purple-400 rounded-full" />
            <span className="text-sm text-purple-300 tracking-wide">Portfolio</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="text-white">Featured </span>
            <span
              className="bg-clip-text text-transparent"
              style={{ background: 'linear-gradient(to bottom, #a779f1ff, #5A3A92)', WebkitBackgroundClip: 'text' }}
            >
              Projects
            </span>
          </h2>
        </div>

        {/* Featured Project Display */}
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Project Image */}
          <div className="relative group">
            <div
              className="absolute -inset-1 rounded-3xl opacity-50 blur-xl transition-opacity duration-500 group-hover:opacity-80"
              style={{ background: 'linear-gradient(135deg, #a779f1ff, #5A3A92, #ff8e38ff, #9b4b05ff)' }}
            />
            <div className="relative h-72 md:h-96 rounded-2xl overflow-hidden border border-white/10">
              <img
                src={projects[activeProject].image}
                alt={projects[activeProject].name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              {/* Project Number */}
              <div className="absolute top-4 left-4 text-6xl font-bold text-white/10">
                0{activeProject + 1}
              </div>
            </div>
          </div>

          {/* Project Details */}
          <div className="flex flex-col justify-center">
            <div className="flex flex-wrap gap-2 mb-4">
              {projects[activeProject].tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-xs font-medium rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/20"
                >
                  {tag}
                </span>
              ))}
            </div>

            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {projects[activeProject].name}
            </h3>

            <p className="text-lg text-gray-400 mb-8 leading-relaxed">
              {projects[activeProject].description}
            </p>

            {projects[activeProject].action && (
              projects[activeProject].action.isDownload ? (
                <a
                  href={projects[activeProject].action.href}
                  download
                  className="inline-flex items-center gap-2 w-fit px-6 py-3 rounded-xl font-semibold text-white transition-all duration-300 hover:scale-105"
                  style={{ background: 'linear-gradient(135deg, #a779f1, #5A3A92)' }}
                >
                  <DownloadCloud className="w-5 h-5" />
                  {projects[activeProject].action.label}
                </a>
              ) : (
                <a
                  href={projects[activeProject].action.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 w-fit px-6 py-3 rounded-xl font-semibold text-white border border-white/20 hover:bg-white/5 hover:border-purple-500/50 transition-all duration-300"
                >
                  {projects[activeProject].action.label}
                  <ExternalLink className="w-4 h-4" />
                </a>
              )
            )}
          </div>
        </div>

        {/* Project Selector Cards */}
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-4 transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {projects.map((project, idx) => (
            <button
              key={idx}
              onClick={() => setActiveProject(idx)}
              className={`p-4 rounded-xl text-left transition-all duration-300 ${activeProject === idx
                ? 'border-[#a779f1]/50'
                : 'border-white/5'
                } border`}
              style={{ background: 'rgba(20,20,20,1)' }}
            >
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-lg overflow-hidden ${activeProject === idx ? 'ring-2 ring-purple-400' : ''}`}>
                  <img src={project.image} alt={project.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <p className={`text-sm font-medium ${activeProject === idx ? 'text-purple-300' : 'text-gray-400'}`}>
                    {project.name}
                  </p>
                  <p className="text-xs text-gray-500">0{idx + 1}</p>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
