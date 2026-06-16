import React, { useRef, useState, useEffect } from 'react';
import { Trophy, Award, Medal } from 'lucide-react';

import sihImg from '../assets/SIH2K25.png';
import ibmImg from '../assets/IBM.png';
import bytesImg from '../assets/BYTES.png';
import kecImg from '../assets/KECHACK.png';
import hacksphereImg from '../assets/HACKSPHERE.png';
import nicImg from '../assets/NIC.png';
import sapImg from '../assets/SAP.png';

const achievements = [
  { title: 'Nilgiris Impact Challenge', prize: 'Winner', icon: Trophy, image: nicImg, color: '#A78BFA', description: 'Geo-spatial mapping for building approval system' },
  { title: 'SIH 2K25 Internal Hackathon Winner', prize: '1st Prize', icon: Trophy, image: sihImg, color: '#FFD700' },
  { title: 'IBM SkillBuild Hackathon', prize: '1st Prize', icon: Trophy, image: ibmImg, color: '#FFD700' },
  { title: 'Bytes India Hackathon 1.0', prize: '2nd Prize', icon: Award, image: bytesImg, color: '#C0C0C0' },
  { title: 'KEC 2K25 Hackathon', prize: '3rd Prize', icon: Medal, image: kecImg, color: '#CD7F32' },
  { title: 'Hacksphere Hackathon', prize: '3rd Prize', icon: Medal, image: hacksphereImg, color: '#CD7F32' },
  { title: 'SAP Point Calculator', prize: '2nd Prize', icon: Award, image: sapImg, color: '#C0C0C0' },
];

export default function Achievements() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);

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
      id="achievements"
      ref={sectionRef}
      className="relative py-24 md:py-32 overflow-hidden"
      style={{ backgroundColor: '#000000' }}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full mb-6">
            <span className="w-2 h-2 bg-purple-400 rounded-full" />
            <span className="text-sm text-purple-300 tracking-wide">Recognition</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="text-white">My </span>
            <span
              className="bg-clip-text text-transparent"
              style={{ background: 'linear-gradient(to bottom, #a779f1ff, #5A3A92)', WebkitBackgroundClip: 'text' }}
            >
              Achievements
            </span>
          </h2>
        </div>

        {/* Achievements Grid - Bento Style */}
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {achievements.map(({ title, prize, icon: Icon, image, color, description }, idx) => (
            <div
              key={idx}
              className={`group relative rounded-2xl overflow-hidden transition-all duration-500 
                ${idx === 0 ? 'md:col-span-2 lg:col-span-1 lg:row-span-2' : ''}
              `}
              style={{
                minHeight: idx === 0 ? '320px' : '200px',
                transitionDelay: `${idx * 80}ms`
              }}
              onMouseEnter={() => setHoveredCard(idx)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Image Background */}
              <img
                src={image}
                alt={title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />

              {/* Gradient Overlay */}
              <div
                className="absolute inset-0 transition-opacity duration-500"
                style={{
                  background: hoveredCard === idx
                    ? 'linear-gradient(to top, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.5) 50%, rgba(0,0,0,0.3) 100%)'
                    : 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.2) 100%)'
                }}
              />

              {/* Border Glow on Hover */}
              <div
                className={`absolute inset-0 rounded-2xl pointer-events-none transition-opacity duration-500 ${hoveredCard === idx ? 'opacity-100' : 'opacity-0'}`}
                style={{
                  padding: '2px',
                  background: 'linear-gradient(135deg, #a779f1ff, #5A3A92, #ff8e38ff, #9b4b05ff)',
                  WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                  WebkitMaskComposite: 'xor',
                  maskComposite: 'exclude'
                }}
              />

              {/* Content */}
              <div className="absolute inset-0 p-5 flex flex-col justify-between">
                {/* Top Row */}
                <div className="flex justify-between items-start">
                  <div
                    className="px-4 py-1.5 rounded-full text-xs font-bold text-black"
                    style={{ backgroundColor: color }}
                  >
                    {prize}
                  </div>
                  <div
                    className="p-2.5 rounded-xl backdrop-blur-sm"
                    style={{ backgroundColor: 'rgba(255,255,255,0.1)' }}
                  >
                    <Icon className="w-5 h-5" style={{ color }} />
                  </div>
                </div>

                {/* Bottom Title */}
                <div>
                  <h3 className="text-lg md:text-xl font-bold text-white leading-tight group-hover:text-purple-200 transition-colors">
                    {title}
                  </h3>
                  {description && (
                    <p className="text-sm text-gray-400 mt-2 line-clamp-2">
                      {description}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>


      </div>
    </section>
  );
}