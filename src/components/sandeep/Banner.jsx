import React from 'react';
import steveJobs from '../../assets/steve.avif';

export default function Banner() {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden font-inter" style={{ backgroundColor: '#000000' }}>
      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        <div
          className="flex flex-col md:flex-row items-center gap-6 p-6 md:p-10 rounded-2xl relative overflow-hidden group transition-transform duration-500 ease-out hover:scale-105"
          style={{
            background: '#000000',
            backdropFilter: 'blur(10px)'
          }}
        >
          {/* Border Gradient - Always Visible */}
          <div
            className="absolute inset-0 rounded-2xl pointer-events-none opacity-100 transition-opacity duration-500"
            style={{
              borderRadius: '16px',
              padding: '2px',
              background: 'linear-gradient(135deg, #a779f1, #5A3A92, #ff8e38, #9b4b05)',
              mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
              maskComposite: 'exclude',
              WebkitMaskComposite: 'xor'
            }}
          />

          {/* Image Section */}
          <div className="w-32 h-32 md:w-40 md:h-40 flex-shrink-0 relative rounded-xl overflow-hidden shadow-lg group-hover:scale-105 transition-transform duration-300 ease-in-out z-10">
            <div className="absolute inset-0 bg-gradient-to-br from-[#a779f1]/20 to-transparent rounded-xl opacity-70"></div>
            <img
              src={steveJobs}
              alt="Steve Jobs"
              className="w-full h-full object-cover rounded-xl relative z-10 grayscale group-hover:grayscale-0 transition-all duration-500"
            />
            {/* Animated Border for Image */}
            <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-[#a779f1]/50 transition-colors duration-300"></div>
          </div>

          {/* Content Section */}
          <div className="flex-1 text-white text-center md:text-left relative z-20">
            <blockquote className="text-lg md:text-xl lg:text-2xl font-bold leading-tight text-white relative">
              {/* Giant Quote Mark - Top Left */}
              <span
                className="absolute -top-6 left-0 text-6xl md:text-8xl font-black opacity-10 select-none hidden md:block"
                style={{
                  color: '#a779f1',
                  lineHeight: '0.5',
                  fontFamily: 'serif'
                }}
              >
                "
              </span>

              {/* Quote Text */}
              <p className="mb-4 pl-0 md:pl-12 font-semibold text-2xl md:text-2xl lg:text-3xl leading-relaxed tracking-tight">
                <span className="bg-clip-text text-transparent" style={{
                  backgroundImage: 'linear-gradient(to bottom, #ffffff, #ffffff)'
                }}>
                  "Your time is limited, so don't waste it living someone else's life."
                </span>
              </p>

              {/* Giant Quote Mark - Bottom Right */}
              <span
                className="absolute -bottom-8 right-0 text-6xl md:text-8xl font-black opacity-10 select-none hidden md:block"
                style={{
                  color: '#ff8e38',
                  lineHeight: '0.5',
                  fontFamily: 'serif'
                }}
              >
                "
              </span>

              <footer className="text-right mt-6 pr-2">
                <span className="bg-clip-text text-transparent" style={{
                  backgroundImage: 'linear-gradient(to bottom, #a779f1, #a779f1)'
                }}>
                  - Steve Jobs
                </span>

              </footer>
            </blockquote>
          </div>
        </div>
      </div>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');
        .font-inter {
          font-family: 'Inter', sans-serif;
        }
      `}</style>
    </section>
  );
}
