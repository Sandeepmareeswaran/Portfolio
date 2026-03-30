import React, { useEffect, useRef, useState } from 'react';

export default function About() {
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

  const highlights = [
    { icon: '💡', label: 'Creative Problem Solver' },
    { icon: '🚀', label: 'Tech Innovator' },
    { icon: '🤝', label: 'Team Leader' },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-24 md:py-32 overflow-hidden"
      style={{ backgroundColor: '#000000' }}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full mb-6">
            <span className="w-2 h-2 bg-purple-400 rounded-full" />
            <span className="text-sm text-purple-300 tracking-wide">About Me</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="text-white">Get to know </span>
            <span
              className="bg-clip-text text-transparent"
              style={{ background: 'linear-gradient(to bottom, #a779f1ff, #5A3A92)', WebkitBackgroundClip: 'text' }}
            >
              who I am
            </span>
          </h2>
        </div>

        {/* Main Content Grid */}
        <div className={`grid grid-cols-1 lg:grid-cols-5 gap-8 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>

          {/* Left Column - Highlight Cards */}
          <div className="lg:col-span-2 space-y-4">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="group p-5 rounded-2xl transition-all duration-300 relative overflow-hidden"
                style={{
                  transitionDelay: `${idx * 100}ms`,
                  background: 'rgba(20, 20, 20, 1)',
                  border: '1px solid rgba(255, 255, 255, 0.08)'
                }}
              >
                {/* Gradient border on hover */}
                <div
                  className="absolute inset-[-1px] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{
                    background: 'linear-gradient(135deg, #a779f1ff, #5A3A92, #ff8e38ff, #9b4b05ff)',
                    zIndex: '-1',
                    borderRadius: 'calc(1rem + 1px)'
                  }}
                />
                <div className="flex items-center gap-4 relative z-10">
                  <div className="text-3xl">{item.icon}</div>
                  <span className="text-lg font-medium text-white group-hover:text-purple-300 transition-colors">{item.label}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column - Text Content */}
          <div className="lg:col-span-3 space-y-6">
            <p className="text-lg leading-relaxed text-gray-400">
              I am <span className="text-white font-semibold">Sandeep</span>, which beautifully translates to
              <span className="text-purple-400 font-semibold italic"> "Lamping Light"</span> — a beacon of guidance and illumination.
            </p>

            <p className="text-lg leading-relaxed text-gray-400">
              As an <span className="text-purple-400 italic">AIML enthusiast</span>, I thrive at the intersection of creativity, intelligence, and innovation.
              I'm a part of <span className="text-white font-semibold">Outliers United</span>,
              a freelancing collective built to transform ambitious ideas into impactful digital realities.
            </p>

            <p className="text-lg leading-relaxed text-gray-400">
              My journey has been shaped by leading teams, pitching visionary projects,
              and crafting products that merge <span className="text-purple-400">purpose</span> with <span className="text-purple-300">precision</span>.
            </p>

            {/* Quote Card */}
            <div
              className="relative p-6 mt-8 rounded-2xl overflow-hidden group"
              style={{
                background: 'rgba(20, 20, 20, 1)',
                border: '1px solid rgba(255, 255, 255, 0.08)'
              }}
            >
              {/* Gradient border on hover */}
              <div
                className="absolute inset-[-1px] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{
                  background: 'linear-gradient(135deg, #a779f1ff, #5A3A92, #ff8e38ff, #9b4b05ff)',
                  zIndex: 0,
                  borderRadius: '16px'
                }}
              />
              <div className="relative z-10">
                <div className="absolute top-0 left-0 text-5xl font-serif select-none" style={{ color: 'rgba(167, 121, 241, 0.2)' }}>"</div>
                <p className="relative text-lg italic text-gray-300 pl-6 pt-2">
                  Drive towards your dreams — the path unfolds when you move with <span className="text-white font-medium">purpose</span>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
