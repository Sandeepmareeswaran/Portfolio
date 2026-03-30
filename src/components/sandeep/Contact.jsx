import React, { useState, useRef, useEffect } from 'react';
import { Send, Mail, MapPin, Phone, ArrowUpRight } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [focusedField, setFocusedField] = useState(null);

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

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:sandeepmaree2005n@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;
    window.location.href = mailtoLink;
  };

  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'sandeepmaree2005@gmail.com', href: 'mailto:sandeepmaree2005@gmail.com' },
    { icon: Phone, label: 'Phone', value: '+91 6383791799', href: 'tel:+916383791799' },
    { icon: MapPin, label: 'Location', value: 'Tamil Nadu, India', href: null },
  ];

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative py-24 md:py-32 overflow-hidden font-inter"
      style={{ backgroundColor: '#000000' }}
    >
      <div className="max-w-5xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-14 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-6">
            <span className="w-2 h-2 rounded-full" style={{ background: '#a779f1' }} />
            <span className="text-xs font-medium tracking-wide" style={{ color: '#a779f1' }}>Get in Touch</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="text-white">Let's Work </span>
            <span
              className="bg-clip-text text-transparent"
              style={{ background: 'linear-gradient(135deg, #a779f1, #ff8e38)', WebkitBackgroundClip: 'text' }}
            >
              Together
            </span>
          </h2>
          <p className="mt-4 text-lg text-gray-500 max-w-xl mx-auto">
            Have a project in mind? Let's discuss how we can bring your ideas to life.
          </p>
        </div>

        <div className={`grid grid-cols-1 lg:grid-cols-5 gap-10 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Contact Info Cards */}
          <div className="lg:col-span-2 space-y-4">
            {contactInfo.map((item, idx) => (
              <div
                key={idx}
                className="group p-5 rounded-2xl border border-white/5 hover:border-[#a779f1]/30 transition-all duration-300"
                style={{ background: '#141414' }}
              >
                {item.href ? (
                  <a href={item.href} className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="p-3 rounded-xl bg-white/5 text-[#a779f1]">
                        <item.icon className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 uppercase tracking-wide">{item.label}</p>
                        <p className="text-white font-medium group-hover:text-[#a779f1] transition-colors">{item.value}</p>
                      </div>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-gray-600 group-hover:text-[#a779f1] transition-colors" />
                  </a>
                ) : (
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-xl bg-white/5 text-[#a779f1]">
                      <item.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 uppercase tracking-wide">{item.label}</p>
                      <p className="text-white font-medium">{item.value}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}

            {/* Quick CTA */}
            <div
              className="p-6 rounded-2xl mt-6 relative overflow-hidden"
              style={{
                background: 'rgba(20, 20, 20, 0.6)',
                border: '1px solid rgba(167, 121, 241, 0.2)'
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#a779f1]/10 to-transparent pointer-events-none" />
              <p className="text-lg font-medium text-white mb-2 relative z-10">Ready to start?</p>
              <p className="text-sm text-gray-400 relative z-10">Fill out the form and I'll get back to you within 24 hours.</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {['name', 'email'].map((field) => (
                  <div key={field} className="relative">
                    <label
                      className={`absolute left-4 transition-all duration-300 pointer-events-none ${focusedField === field || formData[field]
                        ? '-top-2.5 text-xs bg-[#000000] px-2 text-[#a779f1]'
                        : 'top-4 text-gray-500'
                        }`}
                    >
                      {field === 'name' ? 'Your Name' : 'Your Email'}
                    </label>
                    <input
                      type={field === 'email' ? 'email' : 'text'}
                      name={field}
                      value={formData[field]}
                      onChange={handleChange}
                      onFocus={() => setFocusedField(field)}
                      onBlur={() => setFocusedField(null)}
                      required
                      className="w-full px-4 py-4 rounded-xl bg-[#141414] text-white outline-none transition-all duration-300"
                      style={{
                        border: focusedField === field
                          ? '1px solid #a779f1'
                          : '1px solid rgba(255, 255, 255, 0.1)',
                      }}
                    />
                  </div>
                ))}
              </div>

              <div className="relative">
                <label
                  className={`absolute left-4 transition-all duration-300 pointer-events-none ${focusedField === 'subject' || formData.subject
                    ? '-top-2.5 text-xs bg-[#000000] px-2 text-[#a779f1]'
                    : 'top-4 text-gray-500'
                    }`}
                >
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('subject')}
                  onBlur={() => setFocusedField(null)}
                  required
                  className="w-full px-4 py-4 rounded-xl bg-[#141414] text-white outline-none transition-all duration-300"
                  style={{ border: focusedField === 'subject' ? '1px solid #a779f1' : '1px solid rgba(255, 255, 255, 0.1)' }}
                />
              </div>

              <div className="relative">
                <label
                  className={`absolute left-4 transition-all duration-300 pointer-events-none ${focusedField === 'message' || formData.message
                    ? '-top-2.5 text-xs bg-[#000000] px-2 text-[#a779f1]'
                    : 'top-4 text-gray-500'
                    }`}
                >
                  Your Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('message')}
                  onBlur={() => setFocusedField(null)}
                  required
                  rows={5}
                  className="w-full px-4 py-4 rounded-xl bg-[#141414] text-white outline-none resize-none transition-all duration-300"
                  style={{ border: focusedField === 'message' ? '1px solid #a779f1' : '1px solid rgba(255, 255, 255, 0.1)' }}
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 py-4 rounded-xl font-semibold text-white transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-[#a779f1]/20"
                style={{ background: 'linear-gradient(135deg, #a779f1, #5A3A92)' }}
              >
                Send Message
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </div>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');
        .font-inter { font-family: 'Inter', sans-serif; }
      `}</style>
    </section>
  );
}
