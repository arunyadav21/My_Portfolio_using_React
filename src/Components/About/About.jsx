/* eslint-disable no-unused-vars */
import React from "react";
import AboutImg from "../../assets/7358653-removebg-preview.png";
import { IoArrowForward } from "react-icons/io5";

import { motion } from "framer-motion";

const About = () => {
  const aboutItems = [
    {
      title: "Frontend Developer",
      description: "I transform designs into dynamic, responsive, and user-friendly websites. With expertise in HTML, CSS, JavaScript, and React, I build clean, maintainable code that bridges design and functionality. Every pixel matters and every line of code has purpose.",
      icon: <IoArrowForward size={24} className="text-blue-400" />
    },
    {/*
      title: "Database Developer",
      description: "I architect efficient database solutions with expertise in SQL and NoSQL systems. From schema design to query optimization, I ensure data integrity and performance. My experience includes working with MongoDB, PostgreSQL, and Firebase.",
      icon: <IoArrowForward size={24} className="text-purple-400" />
    },
    {
      title: "Backend Developer",
      description: "I design robust APIs, manage servers, and build application logic. Specializing in authentication, security, and performance optimization, I solve real-world problems through efficient backend systems using Node.js, Express, and Python.",
      icon: <IoArrowForward size={24} className="text-green-400" />
    */}
  ];

  return (
    <section 
      id="About"
      className="relative py-16 md:py-24 overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-blue-900 opacity-10 blur-3xl"></div>
      <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-purple-900 opacity-10 blur-3xl"></div>
      
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl shadow-2xl overflow-hidden"
        >
          <div className="flex flex-col lg:flex-row">
            {/* Image Section */}
            <div className="lg:w-2/5 flex justify-center items-center p-8 lg:p-12">
              <div className="relative">
                <img 
                  src={AboutImg} 
                  alt="About me" 
                  className="w-full max-w-xs lg:max-w-md object-contain z-10 relative"
                />
                <div className="absolute -inset-8 bg-blue-500 rounded-full opacity-20 blur-xl"></div>
                <div className="absolute -inset-4 border-4 border-blue-400 rounded-full opacity-30 animate-pulse"></div>
              </div>
            </div>

            {/* Content Section */}
            <div className="lg:w-3/5 p-8 lg:p-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-8">
                About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Me</span>
              </h2>

              <div className="space-y-8">
                {aboutItems.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex gap-6 group"
                  >
                    <div className="flex-shrink-0 mt-1">
                      <div className="p-2 rounded-full bg-gray-700 group-hover:bg-gradient-to-r from-blue-500 to-purple-600 transition-all duration-300">
                        {item.icon}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl md:text-2xl font-semibold mb-2 text-white group-hover:text-blue-300 transition-colors duration-300">
                        {item.title}
                      </h3>
                      <p className="text-gray-300 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="mt-12 inline-block"
              >
                <a 
                  href="#Contact"
                  className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full font-medium text-white hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 flex items-center gap-2"
                >
                  Let's Connect
                  <IoArrowForward className="group-hover:translate-x-1 transition-transform duration-300" />
                </a>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;