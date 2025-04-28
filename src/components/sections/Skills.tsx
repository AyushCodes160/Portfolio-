import React from 'react';
import { motion } from 'framer-motion';
import SkillBar from '../ui/SkillBar';

const Skills: React.FC = () => {
  const frontendSkills = [
    { name: 'React', level: 95, color: '#00FFFF' },
    { name: 'JavaScript', level: 90, color: '#FFFF00' },
    { name: 'TypeScript', level: 85, color: '#007ACC' },
    { name: 'Three.js', level: 80, color: '#FF00FF' },
    { name: 'CSS/SCSS', level: 85, color: '#FF5733' },
  ];

  const backendSkills = [
    { name: 'Node.js', level: 85, color: '#68A063' },
    { name: 'Express', level: 80, color: '#828282' },
    { name: 'GraphQL', level: 75, color: '#E535AB' },
    { name: 'MongoDB', level: 80, color: '#13AA52' },
    { name: 'PostgreSQL', level: 70, color: '#336791' },
  ];

  const otherSkills = [
    { name: 'Git/GitHub', level: 90, color: '#F1502F' },
    { name: 'Docker', level: 65, color: '#2496ED' },
    { name: 'WebGL', level: 75, color: '#990000' },
    { name: 'Figma', level: 70, color: '#F24E1E' },
    { name: 'AWS', level: 60, color: '#FF9900' },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <section id="skills" className="py-20 bg-dark-matter relative">
      {/* Decorative Element */}
      <div className="absolute top-10 right-10 w-24 h-24 bg-neon-blue/20 rounded-full blur-[6rem]" />
      <div className="absolute bottom-10 left-10 w-24 h-24 bg-neon-pink/20 rounded-full blur-[6rem]" />

      <div className="container mx-auto px-4">
        <motion.h2 
          className="section-title text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Power Stats
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
          {/* Frontend Skills */}
          <motion.div 
            className="card"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-future text-neon-blue mb-6 text-center">Frontend</h3>
            <div className="space-y-6">
              {frontendSkills.map((skill) => (
                <SkillBar 
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  color={skill.color}
                />
              ))}
            </div>
          </motion.div>

          {/* Backend Skills */}
          <motion.div 
            className="card"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-future text-neon-pink mb-6 text-center">Backend</h3>
            <div className="space-y-6">
              {backendSkills.map((skill) => (
                <SkillBar 
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  color={skill.color}
                />
              ))}
            </div>
          </motion.div>

          {/* Other Skills */}
          <motion.div 
            className="card"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-future text-electric-blue mb-6 text-center">Tools & More</h3>
            <div className="space-y-6">
              {otherSkills.map((skill) => (
                <SkillBar 
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  color={skill.color}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;