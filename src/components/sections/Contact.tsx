import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, MapPin, Smartphone } from 'lucide-react';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormState({ name: '', email: '', message: '' });
      
      // Reset submission message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 bg-dark-matter relative">
      {/* Background Accents */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink"></div>
      <div className="absolute top-0 right-0 w-40 h-40 bg-neon-blue/10 rounded-full blur-[6rem]"></div>
      <div className="absolute bottom-0 left-0 w-40 h-40 bg-neon-pink/10 rounded-full blur-[6rem]"></div>
      
      <div className="container mx-auto px-4">
        <motion.h2 
          className="section-title text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Contact Me
        </motion.h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-future text-neon-blue mb-6">Let's Connect</h3>
            <p className="text-gray-300 max-w-md">
              Have a project in mind or just want to say hi? Feel free to reach out through 
              the form or via any of the channels below.
            </p>
            
            <div className="space-y-6 mt-8">
              <div className="flex items-start space-x-4">
                <Mail className="text-neon-pink mt-1" size={20} />
                <div>
                  <h4 className="text-white font-semibold">Email</h4>
                  <a href="mailto:hello@example.com" className="text-gray-300 hover:text-neon-blue transition-colors">
                    hello@example.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <MapPin className="text-neon-pink mt-1" size={20} />
                <div>
                  <h4 className="text-white font-semibold">Location</h4>
                  <p className="text-gray-300">San Francisco, CA</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <Smartphone className="text-neon-pink mt-1" size={20} />
                <div>
                  <h4 className="text-white font-semibold">Phone</h4>
                  <p className="text-gray-300">(123) 456-7890</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-space-gray border border-neon-blue/30 
                  focus:border-neon-blue focus:ring-1 focus:ring-neon-blue 
                  text-white rounded-md outline-none transition duration-300"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formState.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-space-gray border border-neon-blue/30 
                  focus:border-neon-blue focus:ring-1 focus:ring-neon-blue 
                  text-white rounded-md outline-none transition duration-300"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-space-gray border border-neon-blue/30 
                  focus:border-neon-blue focus:ring-1 focus:ring-neon-blue 
                  text-white rounded-md outline-none transition duration-300 resize-none"
                ></textarea>
              </div>
              
              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-3 px-6 flex justify-center items-center space-x-2 
                  bg-gradient-to-r from-neon-blue to-neon-purple text-white font-medium 
                  rounded-md transition-all duration-300 transform hover:scale-[1.02] 
                  hover:shadow-lg focus:outline-none ${
                    isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                  }`}
                >
                  {isSubmitting ? (
                    <span>Sending...</span>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send size={16} />
                    </>
                  )}
                </button>
                
                {isSubmitted && (
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-terminal-green text-center mt-4"
                  >
                    Message sent successfully! I'll get back to you soon.
                  </motion.p>
                )}
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;