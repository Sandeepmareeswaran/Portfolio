import React, { useEffect, useRef, useState } from 'react';
import {
  CodeIcon,
  SmartphoneIcon,
  WindIcon,
  DatabaseIcon,
  CoffeeIcon,
  FileCodeIcon,
  FlaskConicalIcon,
  PaintbrushIcon,
  BrainIcon,
  ScanEyeIcon,
  GitBranchIcon,
  AppWindowIcon,
  ServerIcon,
  ServerCogIcon,
  NetworkIcon,
  BrainCircuitIcon,
} from 'lucide-react';

const techs = [
  { name: 'React', Icon: CodeIcon, category: 'Frontend' },
  { name: 'React Native', Icon: SmartphoneIcon, category: 'Mobile' },
  { name: 'Tailwind CSS', Icon: WindIcon, category: 'Frontend' },
  { name: 'Firebase', Icon: DatabaseIcon, category: 'Backend' },
  { name: 'Java', Icon: CoffeeIcon, category: 'Backend' },
  { name: 'JavaScript', Icon: FileCodeIcon, category: 'Frontend' },
  { name: 'Flask', Icon: FlaskConicalIcon, category: 'Backend' },
  { name: 'Python', Icon: FileCodeIcon, category: 'Backend' },
  { name: 'HTML', Icon: FileCodeIcon, category: 'Frontend' },
  { name: 'CSS', Icon: PaintbrushIcon, category: 'Frontend' },
  { name: 'TensorFlow', Icon: BrainIcon, category: 'AI/ML' },
  { name: 'OpenCV', Icon: ScanEyeIcon, category: 'AI/ML' },
  { name: 'Machine Learning', Icon: BrainIcon, category: 'AI/ML' },
  { name: 'Deep Learning', Icon: BrainCircuitIcon, category: 'AI/ML' },
  { name: 'Git', Icon: GitBranchIcon, category: 'Tools' },
  { name: 'Expo Go', Icon: AppWindowIcon, category: 'Mobile' },
  { name: 'Hosting', Icon: ServerIcon, category: 'DevOps' },
  { name: 'VPS Hosting', Icon: ServerCogIcon, category: 'DevOps' },
  { name: 'API', Icon: NetworkIcon, category: 'Backend' },
];

export default function TechStack() {
  const [activeCategory, setActiveCategory] = useState('All');
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const categories = ['All', 'Frontend', 'Backend', 'AI/ML', 'Mobile', 'DevOps', 'Tools'];

  const filteredTechs = activeCategory === 'All'
    ? techs
    : techs.filter(t => t.category === activeCategory);

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
      id="techstack"
      ref={sectionRef}
      className="relative py-24 md:py-32 overflow-hidden"
      style={{ backgroundColor: '#000000' }}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#ff8e38]/10 border border-[#ff8e38]/20 rounded-full mb-6">
            <span className="w-2 h-2 bg-[#ff8e38] rounded-full" />
            <span className="text-sm text-[#ff8e38] tracking-wide">Technologies</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="text-white">My Tech </span>
            <span
              className="bg-clip-text text-transparent"
              style={{ background: 'linear-gradient(to bottom, #ff8e38ff, #9b4b05ff)', WebkitBackgroundClip: 'text' }}
            >
              Stack
            </span>
          </h2>
        </div>

        {/* Category Filters */}
        <div className={`flex flex-wrap justify-center gap-2 mb-12 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${activeCategory === cat
                ? 'text-white'
                : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
                }`}
              style={activeCategory === cat ? { background: '#a779f1' } : {}}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Marquee Container */}
        <div className={`relative flex flex-col gap-6 overflow-hidden py-4 -mx-6 md:-mx-12 px-6 md:px-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Fading Edges */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-black to-transparent z-10"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-black to-transparent z-10"></div>

          {/* Row 1: Left */}
          <div className="flex animate-marquee hover:pause gap-4 w-max">
            {[...filteredTechs, ...filteredTechs, ...filteredTechs].map(({ name, Icon }, index) => (
              <div
                key={`${name}-1-${index}`}
                className="group relative p-6 rounded-2xl cursor-default flex-shrink-0 w-40 sm:w-48 transition-colors duration-300 hover:bg-white/[0.04]"
                style={{
                  background: 'rgba(255, 255, 255, 0.02)',
                  border: '1px solid rgba(255, 255, 255, 0.05)',
                }}
              >
                <div className="flex flex-col items-center gap-4 text-center relative z-10">
                  <div
                    className="p-[2px] rounded-xl transition-all duration-300"
                    style={{ background: 'linear-gradient(135deg, #a779f1ff, #5A3A92, #ff8e38ff, #9b4b05ff)' }}
                  >
                    <div className="p-3 rounded-[10px] bg-[#141414] group-hover:bg-[#1a1a1a] transition-all duration-300">
                      <Icon className="w-7 h-7 text-[#a779f1] group-hover:scale-110 transition-transform duration-300" />
                    </div>
                  </div>
                  <span className="text-sm font-medium text-gray-400 group-hover:text-white transition-colors duration-300">
                    {name}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Row 2: Right */}
          <div className="flex animate-marquee-reverse hover:pause gap-4 w-max ml-[-20%]">
            {[...filteredTechs, ...filteredTechs, ...filteredTechs].reverse().map(({ name, Icon }, index) => (
              <div
                key={`${name}-2-${index}`}
                className="group relative p-6 rounded-2xl cursor-default flex-shrink-0 w-40 sm:w-48 transition-colors duration-300 hover:bg-white/[0.04]"
                style={{
                  background: 'rgba(255, 255, 255, 0.02)',
                  border: '1px solid rgba(255, 255, 255, 0.05)',
                }}
              >
                <div className="flex flex-col items-center gap-4 text-center relative z-10">
                  <div
                    className="p-[2px] rounded-xl transition-all duration-300"
                    style={{ background: 'linear-gradient(135deg, #a779f1ff, #5A3A92, #ff8e38ff, #9b4b05ff)' }}
                  >
                    <div className="p-3 rounded-[10px] bg-[#141414] group-hover:bg-[#1a1a1a] transition-all duration-300">
                      <Icon className="w-7 h-7 text-[#a779f1] group-hover:scale-110 transition-transform duration-300" />
                    </div>
                  </div>
                  <span className="text-sm font-medium text-gray-400 group-hover:text-white transition-colors duration-300">
                    {name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-33.33%); }
        }
        @keyframes marquee-reverse {
          0% { transform: translateX(-33.33%); }
          100% { transform: translateX(0%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        .animate-marquee-reverse {
          animation: marquee-reverse 35s linear infinite;
        }
        .hover\\:pause:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
