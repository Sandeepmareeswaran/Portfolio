import React, { useState, useEffect, useRef } from 'react';

const skillOptions = [
  'Leading teams',
  'Guiding colleagues',
  'Understanding business pain points',
  'Client pitching',
  'Product design',
  'Engaging co-workers',
  'Teaching',
  'Mentoring',
  'Problem solving',
  'Facilitating collaboration',
  'Project scoping',
  'Strategic planning',
];

export default function Skills() {
  const [selected, setSelected] = useState([
    'Leading teams',
    'Guiding colleagues',
    'Understanding business pain points',
    'Client pitching',
    'Product design',
    'Engaging co-workers',
    'Teaching',
  ]);
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entries[0].target);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const toggleSkill = (skill) => {
    setSelected((curr) =>
      curr.includes(skill)
        ? curr.filter((s) => s !== skill)
        : [...curr, skill]
    );
  };

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="relative py-24 md:py-32 overflow-hidden font-inter"
      style={{ backgroundColor: '#000000' }}
    >
      <div className="max-w-5xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-14 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-6">
            <span className="w-2 h-2 rounded-full" style={{ background: '#a779f1' }} />
            <span className="text-xs font-medium tracking-wide" style={{ color: '#a779f1' }}>Beyond Code</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="text-white">Professional </span>
            <span
              className="bg-clip-text text-transparent"
              style={{ background: 'linear-gradient(135deg, #a779f1, #5A3A92)', WebkitBackgroundClip: 'text' }}
            >
              Skills
            </span>
          </h2>
          <p className="mt-4 text-lg text-gray-500 max-w-xl mx-auto">
            Not just code — these are the mindsets & strengths I bring to every project.
          </p>
        </div>

        {/* Animated Directional Bands */}
        <div className={`mt-10 mb-20 py-12 relative overflow-hidden transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          {/* Fading Edges */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-black to-transparent z-10"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-black to-transparent z-10"></div>

          {/* First Band: Angled - Left to Right */}
          <div className="relative rotate-[-3deg] transform-gpu scale-105 my-8">
            <div className="flex animate-marquee-fast hover:pause gap-4 w-max">
              {[...skillOptions, ...skillOptions, ...skillOptions].map((skill, index) => {
                const isActive = selected.includes(skill);
                return (
                  <button
                    key={`t1-${index}`}
                    onClick={() => toggleSkill(skill)}
                    className={`
                      relative py-3.5 px-8 rounded-full font-bold text-sm transition-all duration-300 flex-shrink-0 cursor-pointer select-none
                      ${isActive ? 'text-white' : 'text-gray-400 hover:text-white bg-white/[0.02] hover:bg-white/5'}
                    `}
                    style={{
                      background: isActive ? 'linear-gradient(135deg, #a779f1, #5A3A92)' : undefined,
                      border: isActive ? 'none' : '1px solid rgba(255, 255, 255, 0.08)',
                    }}
                  >
                    <span className="relative z-10">{skill}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Second Band: Angled - Right to Left */}
          <div className="relative rotate-[2deg] transform-gpu scale-105 my-8 ml-[-10%]">
            <div className="flex animate-marquee-reverse-fast hover:pause gap-4 w-max">
              {[...skillOptions, ...skillOptions, ...skillOptions].reverse().map((skill, index) => {
                const isActive = selected.includes(skill);
                return (
                  <button
                    key={`t2-${index}`}
                    onClick={() => toggleSkill(skill)}
                    className={`
                      relative py-3.5 px-8 rounded-full font-bold text-sm transition-all duration-300 flex-shrink-0 cursor-pointer select-none
                      ${isActive ? 'text-white' : 'text-gray-400 hover:text-white bg-white/[0.02] hover:bg-white/5'}
                    `}
                    style={{
                      background: isActive ? 'linear-gradient(135deg, #ff8e38, #9b4b05)' : undefined,
                      border: isActive ? 'none' : '1px solid rgba(255, 255, 255, 0.08)',
                    }}
                  >
                    <span className="relative z-10">{skill}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>


      </div>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');
        .font-inter { font-family: 'Inter', sans-serif; }
        @keyframes marquee-fast {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-33.33%); }
        }
        @keyframes marquee-reverse-fast {
          0% { transform: translateX(-33.33%); }
          100% { transform: translateX(0%); }
        }
        .animate-marquee-fast {
          animation: marquee-fast 20s linear infinite;
        }
        .animate-marquee-reverse-fast {
          animation: marquee-reverse-fast 25s linear infinite;
        }
        .hover\\:pause:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
