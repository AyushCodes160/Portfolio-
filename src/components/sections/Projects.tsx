import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ProjectCard from '../ui/ProjectCard';

const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  
  const projects = [
    {
      id: 1,
      title: 'Cyber Quest',
      description: 'A futuristic RPG game with WebGL rendering and real-time combat systems',
      image: 'https://images.pexels.com/photos/2763927/pexels-photo-2763927.jpeg',
      tags: ['Game Dev', 'WebGL', 'Three.js'],
      demoLink: '#',
      codeLink: '#',
      category: 'games'
    },
    {
      id: 2,
      title: 'NeoTrade Dashboard',
      description: 'Responsive cryptocurrency dashboard with real-time data visualization',
      image: 'https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg',
      tags: ['React', 'API', 'Charts'],
      demoLink: '#',
      codeLink: '#',
      category: 'web'
    },
    {
      id: 3,
      title: 'PixelVerse',
      description: 'Social media platform for game developers to showcase their pixel art',
      image: 'https://images.pexels.com/photos/1670977/pexels-photo-1670977.jpeg',
      tags: ['Full Stack', 'Node.js', 'MongoDB'],
      demoLink: '#',
      codeLink: '#',
      category: 'web'
    },
    {
      id: 4,
      title: 'Orbital Defense',
      description: 'Space-themed tower defense game with WebGL particles and effects',
      image: 'https://images.pexels.com/photos/1274260/pexels-photo-1274260.jpeg',
      tags: ['Game Dev', 'Canvas', 'JavaScript'],
      demoLink: '#',
      codeLink: '#',
      category: 'games'
    },
    {
      id: 5,
      title: 'AI Quest Generator',
      description: 'Procedural quest generator for RPG games powered by machine learning',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg',
      tags: ['AI', 'API', 'React'],
      demoLink: '#',
      codeLink: '#',
      category: 'tools'
    },
    {
      id: 6,
      title: 'Tech Blog',
      description: 'Personal developer blog with custom CMS and syntax highlighting',
      image: 'https://images.pexels.com/photos/4974915/pexels-photo-4974915.jpeg',
      tags: ['Next.js', 'MDX', 'Tailwind'],
      demoLink: '#',
      codeLink: '#',
      category: 'web'
    }
  ];

  const categories = [
    { id: 'all', name: 'All' },
    { id: 'web', name: 'Web Apps' },
    { id: 'games', name: 'Games' },
    { id: 'tools', name: 'Tools' }
  ];

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="py-20 bg-space-gray">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="section-title text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Projects
        </motion.h2>

        {/* Category Filter */}
        <motion.div 
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-full transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-neon-blue text-black font-semibold'
                  : 'bg-transparent border border-neon-blue/50 text-neon-blue hover:bg-neon-blue/10'
              }`}
            >
              {category.name}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {filteredProjects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>

        {/* More Projects Button */}
        <div className="text-center mt-12">
          <a 
            href="https://github.com" 
            target="_blank"
            rel="noopener noreferrer"
            className="neon-button rounded-full inline-block"
          >
            More on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;