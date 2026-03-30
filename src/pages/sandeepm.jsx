import React from 'react';
import Navbar from '../components/sandeep/Navbar';
import Hero from '../components/sandeep/Hero';
import Banner from '../components/sandeep/Banner';
import About from '../components/sandeep/About';
import TeckStack from '../components/sandeep/TeckStack';
import Skills from '../components/sandeep/Skills';
import Projects from '../components/sandeep/Projects';
import Achievements from '../components/sandeep/Achievements';
import Contact from '../components/sandeep/Contact';
import Footer from '../components/sandeep/Footer';

const Sandeepm = () => {
          return (
                    <div
                              className="min-h-screen overflow-x-hidden"
                              style={{
                                        backgroundColor: '#0B0B0B',
                                        scrollBehavior: 'smooth'
                              }}
                    >
                              {/* Sticky Navbar */}
                              <Navbar />

                              {/* Main Content */}
                              <main>
                                        <Hero />
                                        <Banner />
                                        <About />
                                        <TeckStack />
                                        <Skills />
                                        <Projects />
                                        <Achievements />
                                        <Contact />
                              </main>

                              {/* Footer */}
                              <Footer />
                    </div>
          );
};

export default Sandeepm;