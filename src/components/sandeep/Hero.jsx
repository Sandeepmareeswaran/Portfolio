import React from 'react';
import profileImage from '../../assets/sandeep_profile.jpg';

export default function Hero() {
  // Social Links Data - matching reference design
  const socialLinks = [
    {
      name: 'GitHub',
      subtitle: 'See My Work',
      href: 'https://github.com/Sandeepmareeswaran',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
        </svg>
      )
    },
    {
      name: 'LinkedIn',
      subtitle: 'See My Work',
      href: 'https://www.linkedin.com/in/sandeep-m-36a443293/',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z" />
        </svg>
      )
    },
    {
      name: 'Gmail',
      subtitle: 'Get in Touch',
      href: 'mailto:sandeepmareeswaran@zohomail.in',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
        </svg>
      )
    }
  ];

  return (
    <section
      id="hero"
      className="relative w-full min-h-screen overflow-hidden"
      style={{ backgroundColor: '#000000' }}
    >
      {/* Static Grid Background */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px, 60px 60px'
        }}
      />

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex items-center px-4 sm:px-6 md:px-8 lg:px-12 py-20">
        <div className="w-full max-w-6xl mx-auto">

          {/* Flexible Layout for Custom Mobile Ordering */}
          <div className="flex flex-col lg:flex-row lg:items-center lg:gap-8">

            {/* LEFT SIDE CONTENT - For Desktop */}
            <div className="lg:flex-1 flex flex-col">

              {/* SECTION 1: Name + Subtitle - Order 1 on mobile */}
              <div className="order-1 lg:order-1 mb-4 lg:mb-6 text-center lg:text-left">
                {/* Name */}
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-3">
                  <span
                    className="bg-clip-text text-transparent"
                    style={{
                      background: 'linear-gradient(to bottom, #a779f1ff, #5A3A92)',
                      WebkitBackgroundClip: 'text'
                    }}
                  >
                    Sandeep Mareeswaran
                  </span>
                </h1>

                {/* Subtitle */}
                <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold">
                  <span
                    className="bg-clip-text text-transparent"
                    style={{
                      background: 'linear-gradient(to bottom, #ff8e38ff, #9b4b05ff)',
                      WebkitBackgroundClip: 'text'
                    }}
                  >
                    AIML Student & Full-Stack Developer
                  </span>
                </h2>
              </div>

              {/* SECTION 2: Image + CTA Buttons - Order 2 on mobile, hidden on desktop (shown in right column) */}
              <div className="order-2 lg:hidden flex flex-col items-center gap-6 mb-8">
                {/* Circular Image with Gradient Ring */}
                <div className="relative group">
                  {/* Gradient Ring - visible on hover */}
                  <div
                    className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: 'linear-gradient(135deg, #a779f1ff, #5A3A92, #ff8e38ff, #9b4b05ff)',
                      padding: '4px',
                      borderRadius: '50%'
                    }}
                  />
                  {/* Outer ring container */}
                  <div
                    className="relative rounded-full p-1 transition-all duration-500"
                    style={{
                      background: 'linear-gradient(135deg, #a779f1ff, #5A3A92, #ff8e38ff, #9b4b05ff)',
                    }}
                  >
                    {/* Inner black background to create ring effect */}
                    <div className="rounded-full p-1 bg-black">
                      {/* Image Container */}
                      <div className="relative rounded-full overflow-hidden w-48 h-48 sm:w-56 sm:h-56">
                        <img
                          src={profileImage}
                          alt="Sandeep Mareeswaran"
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        {/* Subtle gradient overlay */}
                        <div
                          className="absolute inset-0 opacity-20"
                          style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.6), transparent)' }}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* CTA Buttons - for mobile */}
                <div className="flex gap-3">
                  {/* Contact Me Button */}
                  <div className="relative group">
                    <div
                      className="absolute inset-[-1px] rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                      style={{
                        background: 'linear-gradient(135deg, #a779f1ff, #5A3A92, #ff8e38ff, #9b4b05ff)'
                      }}
                    />
                    <a
                      href="#contact"
                      className="relative flex items-center gap-3 px-4 py-2.5 rounded-lg transition-all duration-300"
                      style={{
                        background: 'rgba(20, 20, 20, 1)',
                        border: '1px solid rgba(255, 255, 255, 0.08)'
                      }}
                    >
                      <div className="text-gray-500 group-hover:text-white transition-colors">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
                        </svg>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-sm font-medium text-white leading-tight">Contact Me</span>
                        <span className="text-xs text-gray-500 leading-tight">Get in Touch</span>
                      </div>
                    </a>
                  </div>

                  {/* View Projects Button */}
                  <div className="relative group">
                    <div
                      className="absolute inset-[-1px] rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                      style={{
                        background: 'linear-gradient(135deg, #a779f1ff, #5A3A92, #ff8e38ff, #9b4b05ff)'
                      }}
                    />
                    <a
                      href="#projects"
                      className="relative flex items-center gap-3 px-4 py-2.5 rounded-lg transition-all duration-300"
                      style={{
                        background: 'rgba(20, 20, 20, 1)',
                        border: '1px solid rgba(255, 255, 255, 0.08)'
                      }}
                    >
                      <div className="text-gray-500 group-hover:text-white transition-colors">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z" />
                        </svg>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-sm font-medium text-white leading-tight">View Projects</span>
                        <span className="text-xs text-gray-500 leading-tight">See My Work</span>
                      </div>
                    </a>
                  </div>
                </div>
              </div>

              {/* SECTION 3: Social Links + Description - Order 3 on mobile */}
              <div className="order-3 lg:order-2 flex flex-col items-center lg:items-start">
                {/* Social Links Row */}
                <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-8">
                  {socialLinks.map((social, idx) => (
                    <div
                      key={idx}
                      className="relative group"
                    >
                      {/* Gradient border - visible on hover */}
                      <div
                        className="absolute inset-[-1px] rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                        style={{
                          background: 'linear-gradient(135deg, #a779f1ff, #5A3A92, #ff8e38ff, #9b4b05ff)'
                        }}
                      />
                      <a
                        href={social.href}
                        target={social.href.startsWith('mailto') ? '_self' : '_blank'}
                        rel="noopener noreferrer"
                        className="relative flex items-center gap-3 px-4 py-2.5 rounded-lg transition-all duration-300"
                        style={{
                          background: 'rgba(20, 20, 20, 1)',
                          border: '1px solid rgba(255, 255, 255, 0.08)'
                        }}
                      >
                        {/* Icon */}
                        <div className="text-gray-500 group-hover:text-white transition-colors">
                          {social.icon}
                        </div>
                        {/* Text */}
                        <div className="flex flex-col">
                          <span className="text-sm font-medium text-white leading-tight">{social.name}</span>
                          <span className="text-xs text-gray-500 leading-tight">{social.subtitle}</span>
                        </div>
                      </a>
                    </div>
                  ))}
                </div>

                {/* Description */}
                <p className="text-sm md:text-base text-gray-400 leading-relaxed max-w-xl text-center lg:text-left">
                  I'm passionate about transforming ideas into impactful digital solutions through
                  <span className="text-white text-xl font-semibold"> Artificial intelligence</span> and
                  <span className="text-white text-xl font-semibold"> Modern web technologies</span>.
                  Let's build something amazing together!
                </p>
              </div>
            </div>

            {/* RIGHT COLUMN - Image + CTA Buttons - Only visible on Desktop */}
            <div className="hidden lg:flex flex-col items-end gap-6 flex-shrink-0">
              {/* Circular Image with Gradient Ring */}
              <div className="relative group">
                {/* Gradient Ring - visible on hover */}
                <div
                  className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: 'linear-gradient(135deg, #a779f1ff, #5A3A92, #ff8e38ff, #9b4b05ff)',
                    padding: '4px',
                    borderRadius: '50%'
                  }}
                />
                {/* Outer ring container */}
                <div
                  className="relative rounded-full p-1 transition-all duration-500"
                  style={{
                    background: 'linear-gradient(135deg, #a779f1ff, #5A3A92, #ff8e38ff, #9b4b05ff)',
                  }}
                >
                  {/* Inner black background to create ring effect */}
                  <div className="rounded-full p-1 bg-black">
                    {/* Image Container */}
                    <div className="relative rounded-full overflow-hidden w-64 h-64">
                      <img
                        src={profileImage}
                        alt="Sandeep Mareeswaran"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      {/* Subtle gradient overlay */}
                      <div
                        className="absolute inset-0 opacity-20"
                        style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.6), transparent)' }}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex gap-3">
                {/* Contact Me Button */}
                <div className="relative group">
                  <div
                    className="absolute inset-[-1px] rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                    style={{
                      background: 'linear-gradient(135deg, #a779f1ff, #5A3A92, #ff8e38ff, #9b4b05ff)'
                    }}
                  />
                  <a
                    href="#contact"
                    className="relative flex items-center gap-3 px-4 py-2.5 rounded-lg transition-all duration-300"
                    style={{
                      background: 'rgba(20, 20, 20, 1)',
                      border: '1px solid rgba(255, 255, 255, 0.08)'
                    }}
                  >
                    <div className="text-gray-500 group-hover:text-white transition-colors">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
                      </svg>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-sm font-medium text-white leading-tight">Contact Me</span>
                      <span className="text-xs text-gray-500 leading-tight">Get in Touch</span>
                    </div>
                  </a>
                </div>

                {/* View Projects Button */}
                <div className="relative group">
                  <div
                    className="absolute inset-[-1px] rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                    style={{
                      background: 'linear-gradient(135deg, #a779f1ff, #5A3A92, #ff8e38ff, #9b4b05ff)'
                    }}
                  />
                  <a
                    href="#projects"
                    className="relative flex items-center gap-3 px-4 py-2.5 rounded-lg transition-all duration-300"
                    style={{
                      background: 'rgba(20, 20, 20, 1)',
                      border: '1px solid rgba(255, 255, 255, 0.08)'
                    }}
                  >
                    <div className="text-gray-500 group-hover:text-white transition-colors">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z" />
                      </svg>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-sm font-medium text-white leading-tight">View Projects</span>
                      <span className="text-xs text-gray-500 leading-tight">See My Work</span>
                    </div>
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20">
        <span className="text-xs text-gray-600 uppercase tracking-widest">Scroll</span>
        <div className="w-5 h-8 rounded-full border flex justify-center p-1" style={{ borderColor: 'rgba(150, 115, 206, 0.3)' }}>
          <div className="w-1 h-2 rounded-full animate-bounce" style={{ background: '#9673CE' }} />
        </div>
      </div>
    </section>
  );
}
