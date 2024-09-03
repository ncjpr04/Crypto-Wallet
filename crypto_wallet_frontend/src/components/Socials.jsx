import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp, Linkedin, Github, Twitter, Instagram } from "lucide-react";


const socialLinks = [
  { name: "LinkedIn", icon: <Linkedin />, url: "https://www.linkedin.com/in/ncjpr04/", color: "bg-blue-600" },
  { name: "GitHub", icon: <Github />, url: "https://github.com/ncjpr04", color: "bg-gray-800" },
  { name: "LeetCode", icon: "LC", url: "https://leetcode.com/u/ncjpr04/", color: "bg-yellow-600" },
  { name: "Twitter", icon: <Twitter />, url: "https://twitter.com/ncjpr04", color: "bg-sky-500" },
  { name: "Instagram", icon: <Instagram />, url: "https://www.instagram.com/ncjpr04/", color: "bg-pink-600" },
  { name: "Stack Overflow", icon: "SO", url: "https://stackoverflow.com/users/22814377/ncjpr04", color: "bg-orange-500" },
];

function Socials() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed z-50 left-3 top-1/4 -translate-y-1/2 flex flex-col items-center"
    >
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsExpanded(!isExpanded)}
        className="bg-gray-800 text-white p-3 rounded-full shadow-lg mb-2"
      >
        {isExpanded ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
      </motion.button>
      
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col gap-2"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2, delay: index * 0.1 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className={`${social.color} text-white p-3 rounded-full shadow-lg flex items-center justify-center`}
              >
                {typeof social.icon === 'string' ? social.icon : React.cloneElement(social.icon, { size: 20 })}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default Socials;