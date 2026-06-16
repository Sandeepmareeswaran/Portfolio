import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import About from '../components/About';
import TechStack from '../components/TechStack';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Achievements from '../components/Achievements';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Home = () => {
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
                                        <TechStack />
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

export default Home;