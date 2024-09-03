import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTwitter, FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

const SocialSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const socialLinks = [
    { icon: <FaTwitter />, url: 'https://twitter.com/yourusername' },
    { icon: <FaGithub />, url: 'https://github.com/yourusername' },
    { icon: <FaLinkedin />, url: 'https://linkedin.com/in/yourusername' },
    { icon: <FaInstagram />, url: 'https://instagram.com/yourusername' },
  ];

  return (
    <motion.div
      className="fixed left-0 top-1/2 -translate-y-1/2 bg-gray-800 text-white p-2 rounded-r-lg"
      initial={{ x: -60 }}
      animate={{ x: isOpen ? 0 : -60 }}
      transition={{ duration: 0.3 }}
      onHoverStart={() => setIsOpen(true)}
      onHoverEnd={() => setIsOpen(false)}
    >
      <motion.div className="flex flex-col space-y-4">
        <AnimatePresence>
          {isOpen && (
            <>
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl hover:text-blue-400 transition-colors"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {link.icon}
                </motion.a>
              ))}
            </>
          )}
        </AnimatePresence>
        <motion.div
          className="text-2xl cursor-pointer"
          animate={{ rotate: isOpen ? 180 : 0 }}
        >
          {isOpen ? '←' : '→'}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default SocialSidebar;
