import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Info } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoLink: string;
  codeLink: string;
  category: string;
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="rounded-lg overflow-hidden relative group h-80 interactive-element"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 ease-in-out group-hover:scale-110"
        style={{ backgroundImage: `url(${project.image})` }}
      />
      
      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-cyber-black via-cyber-black/70 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
      
      {/* Content */}
      <div className="absolute inset-0 p-6 flex flex-col justify-end">
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-3">
          {project.tags.map((tag, index) => (
            <span 
              key={index}
              className="text-xs font-mono px-2 py-1 rounded-full bg-neon-blue/20 text-neon-blue"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <h3 className="text-xl font-future text-white mb-2">{project.title}</h3>
        
        <p className="text-gray-300 text-sm mb-4 line-clamp-2 group-hover:line-clamp-none transition-all duration-300">
          {project.description}
        </p>
        
        {/* Links */}
        <motion.div 
          className="flex gap-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <a 
            href={project.demoLink}
            className="flex items-center space-x-1 text-sm text-white hover:text-neon-blue transition-colors"
            target="_blank" 
            rel="noopener noreferrer"
          >
            <ExternalLink size={14} />
            <span>Live Demo</span>
          </a>
          
          <a 
            href={project.codeLink}
            className="flex items-center space-x-1 text-sm text-white hover:text-neon-pink transition-colors"
            target="_blank" 
            rel="noopener noreferrer"
          >
            <Github size={14} />
            <span>Code</span>
          </a>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;