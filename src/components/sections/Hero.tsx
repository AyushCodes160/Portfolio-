import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import HeroBackground from '../three/HeroBackground';

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <HeroBackground />
      </div>
      
      {/* Content */}
      <div 
        ref={containerRef} 
        className="container mx-auto px-4 z-10 text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-future font-bold mb-4">
            <span className="block">
              <span className="text-white">Ayush</span>
              <span className="text-neon-blue"> Kumar</span>
            </span>
            <span className="block mt-2 text-neon-pink glitch-text" data-text="Web Developer">
              Web Developer
            </span>
          </h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            I build immersive digital experiences with code and creativity
          </motion.p>
          
          <motion.div
            className="flex flex-col sm:flex-row justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <a 
              href="#projects" 
              className="neon-button rounded-md"
            >
              View My Work
            </a>
            <a 
              href="#contact" 
              className="px-4 py-2 bg-neon-pink text-white font-future 
              border-2 border-neon-pink transition-all duration-300 
              hover:shadow-neon-pink hover:bg-transparent rounded-md"
            >
              Contact Me
            </a>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white"
        animate={{ 
          y: [0, 10, 0],
        }}
        transition={{ 
          repeat: Infinity, 
          duration: 1.5,
        }}
      >
        <ChevronDown size={24} />
      </motion.div>
    </section>
  );
};

export default Hero;