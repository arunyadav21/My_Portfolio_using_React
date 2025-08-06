import React, { useState } from "react";
import { MdOutlineEmail, MdOutlineContactPhone, MdVerifiedUser } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData);
    alert("Thank you for your message! I'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="Contact" className="relative bg-gradient-to-r from-[#3a4a8a] to-[#465697] text-white py-16 px-8 md:px-24 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-blue-300 blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-40 h-40 rounded-full bg-purple-300 blur-3xl"></div>
      </div>
      
      <div className="relative z-10 flex flex-col lg:flex-row justify-between items-start gap-12 max-w-7xl mx-auto">
        {/* Left side - Contact header and info */}
        <div className="text-center lg:text-left w-full lg:w-1/2">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-100">
            Let's Connect
          </h1>
          <h3 className="text-lg md:text-2xl font-normal text-blue-100 mb-8">
            Feel free to reach out for collaborations or just to say hi!
          </h3>
          
          {/* Contact details */}
          <ul className="space-y-4 mb-8">
            <li className="flex gap-3 items-center p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300">
              <MdVerifiedUser size={24} className="text-blue-200" />
              <span>Arun Yadav</span>
            </li>
            <li className="flex gap-3 items-center p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300">
              <MdOutlineContactPhone size={24} className="text-blue-200" />
              <a href="tel:9129652795">+91 9129652795</a>
            </li>
            <li className="flex gap-3 items-center p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300">
              <MdOutlineEmail size={24} className="text-blue-200" />
              <a href="mailto:oficialarun8565@gmail.com">oficialarun8565@gmail.com</a>
            </li>
          </ul>

          {/* Social media links */}
          <div className="flex justify-center lg:justify-start gap-4 mt-6">
            <a href="https://www.linkedin.com/in/arun-yadav-8837b4368/" className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110">
              <CiLinkedin size={24} />
            </a>
            <a href="https://github.com/arunyadav21" className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110">
              <FaGithub size={24} />
            </a>
            <a href="https://x.com/ArunYadav143420" className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110">
              <FaTwitter size={24} />
            </a>
            <a href="https://www.instagram.com/travelwitharun1/" className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110">
              <FaInstagram size={24} />
            </a>
          </div>
        </div>

        {/* Right side - Contact form */}
        <div className="w-full lg:w-1/2 bg-white/10 backdrop-blur-sm rounded-xl p-6 md:p-8 shadow-lg">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-blue-100">Send me a message</h2>
          
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-blue-100 mb-2">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg focus:ring-2 focus:ring-blue-300 focus:border-blue-300 text-white placeholder-blue-200"
                placeholder="Your name"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-blue-100 mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg focus:ring-2 focus:ring-blue-300 focus:border-blue-300 text-white placeholder-blue-200"
                placeholder="your.email@example.com"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-blue-100 mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg focus:ring-2 focus:ring-blue-300 focus:border-blue-300 text-white placeholder-blue-200"
                placeholder="Your message here..."
              ></textarea>
            </div>
            
            <button
              type="submit"
              className="w-full py-3 px-6 bg-gradient-to-r from-blue-400 to-blue-600 text-white font-medium rounded-lg hover:from-blue-500 hover:to-blue-700 transition-all duration-300 shadow-md hover:shadow-lg"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Copyright */}
      <div className="relative z-10 text-center mt-16 pt-6 border-t border-white/10 text-white/60 text-sm">
        © {new Date().getFullYear()} Arun Yadav. All rights reserved.
      </div>
    </section>
  );
};

export default Contact;