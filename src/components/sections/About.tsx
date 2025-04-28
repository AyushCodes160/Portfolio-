import React from 'react';
import { motion } from 'framer-motion';
import AnimatedAvatar from '../three/AnimatedAvatar';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-space-gray relative overflow-hidden">
      {/* Background Accents */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-dark-matter to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-dark-matter to-transparent"></div>
      
      <div className="container mx-auto px-4">
        <motion.h2 
          className="section-title text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* 3D Avatar */}
          <motion.div 
            className="h-[400px] relative w-full flex justify-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <AnimatedAvatar />
          </motion.div>
          
          {/* About Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl font-future text-neon-blue mb-4">
              The Developer Behind The Code
            </h3>
            
            <div className="space-y-4 text-gray-300">
              <p>
                Hello there! I'm <span className="text-neon-pink font-semibold">Ayush Kumar</span>, a full-stack developer with a passion for creating engaging digital experiences. My journey in programming began when I built my first game mod at 16, and I've been hooked ever since.
              </p>
              
              <p>
                With over 5 years of professional experience, I specialize in building performant and visually stunning web applications using modern technologies like React, Three.js, and Node.js.
              </p>
              
              <p>
                When I'm not coding, you'll find me exploring new game worlds, contributing to open source, or experimenting with WebGL and 3D graphics.
              </p>
            </div>
            
            <div className="mt-8 grid grid-cols-2 gap-6">
              <div>
                <h4 className="text-electric-blue font-future text-lg mb-2">Education</h4>
                <p className="text-gray-300">B.S. Computer Science</p>
                <p className="text-gray-400">Tech University, 2018</p>
              </div>
              
              <div>
                <h4 className="text-electric-blue font-future text-lg mb-2">Experience</h4>
                <p className="text-gray-300">5+ Years Professional</p>
                <p className="text-gray-400">Web & Game Development</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;