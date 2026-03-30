import React from 'react';
import { ArrowUp } from 'lucide-react';

export default function Footer() {
          const currentYear = new Date().getFullYear();

          const scrollToTop = () => {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
          };

          const footerLinks = [
                    { label: 'Home', href: '#hero' },
                    { label: 'About', href: '#about' },
                    { label: 'Projects', href: '#projects' },
                    { label: 'Contact', href: '#contact' },
          ];

          const socialLinks = [
                    {
                              href: "https://github.com/Sandeepmareeswaran", icon: (
                                        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                                        </svg>
                              )
                    },
                    {
                              href: "https://www.linkedin.com/in/sandeep-m-36a443293/", icon: (
                                        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                                  <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z" />
                                        </svg>
                              )
                    },
                    {
                              href: "mailto:sandeepmare2005@gmail.com", icon: (
                                        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                              )
                    }
          ];

          return (
                    <footer
                              className="relative py-12 overflow-hidden"
                              style={{ backgroundColor: '#000000', borderTop: '1px solid rgba(255, 255, 255, 0.05)' }}
                    >
                              <div className="max-w-5xl mx-auto px-6 md:px-12">
                                        {/* Main Footer Content */}
                                        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-10">
                                                  {/* Logo */}
                                                  <a href="#hero" className="text-2xl font-bold">
                                                            <span
                                                                      className="bg-clip-text text-transparent"
                                                                      style={{ background: 'linear-gradient(to bottom, #a779f1ff, #5A3A92)', WebkitBackgroundClip: 'text' }}
                                                            >
                                                                      SANDEEP
                                                            </span>
                                                            <span className="text-[#a779f1]">.</span>
                                                  </a>

                                                  {/* Navigation */}
                                                  <nav className="flex flex-wrap justify-center gap-6">
                                                            {footerLinks.map((link) => (
                                                                      <a
                                                                                key={link.label}
                                                                                href={link.href}
                                                                                className="text-sm text-gray-500 hover:text-white transition-colors"
                                                                      >
                                                                                {link.label}
                                                                      </a>
                                                            ))}
                                                  </nav>

                                                  {/* Social + Back to top */}
                                                  <div className="flex items-center gap-4">
                                                            {socialLinks.map((social, idx) => (
                                                                      <a
                                                                                key={idx}
                                                                                href={social.href}
                                                                                target={social.href.startsWith('mailto') ? '_self' : '_blank'}
                                                                                rel="noopener noreferrer"
                                                                                className="p-2.5 rounded-xl text-gray-500 hover:text-purple-400 hover:bg-purple-500/10 transition-all duration-300"
                                                                      >
                                                                                {social.icon}
                                                                      </a>
                                                            ))}
                                                            <div className="w-px h-6 bg-white/10 mx-2" />
                                                            <button
                                                                      onClick={scrollToTop}
                                                                      className="p-2.5 rounded-xl border border-white/10 text-gray-500 hover:text-purple-400 hover:border-purple-500/30 transition-all duration-300"
                                                            >
                                                                      <ArrowUp className="w-4 h-4" />
                                                            </button>
                                                  </div>
                                        </div>

                                        {/* Bottom Bar */}
                                        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
                                                  <p className="text-sm text-gray-600">
                                                            © {currentYear} Sandeep Mareeswaran. Built with passion and
                                                            <span className="text-[#a779f1]"> 💜</span>
                                                  </p>
                                                  <p className="text-xs text-gray-700">
                                                            Designed & Developed by
                                                            <span className="text-[#a779f1] font-medium"> Sandeep M</span>
                                                  </p>
                                        </div>
                              </div>
                    </footer>
          );
}
