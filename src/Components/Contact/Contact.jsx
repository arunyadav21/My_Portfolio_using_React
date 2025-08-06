import React from "react";
import { MdOutlineEmail, MdOutlineContactPhone, MdVerifiedUser } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="Contact" className="relative bg-gradient-to-r from-[#3a4a8a] to-[#465697] text-white py-16 px-8 md:px-24 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-blue-300 blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-40 h-40 rounded-full bg-purple-300 blur-3xl"></div>
      </div>
      
      <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-12 max-w-7xl mx-auto">
        {/* Contact header */}
        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-100">
            Let's Connect
          </h1>
          <h3 className="text-lg md:text-2xl font-normal text-blue-100">
            Feel free to reach out for collaborations or just to say hi!
          </h3>
          
          {/* Social media links */}
          <div className="flex justify-center md:justify-start gap-4 mt-6">
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

        {/* Contact details */}
        <ul className="space-y-4 min-w-[280px]">
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
          <li className="flex gap-3 items-center p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300">
            <CiLinkedin size={24} className="text-blue-200" />
            <a href="https://www.linkedin.com/in/arun-yadav-8837b4368/" target="_blank" rel="noopener noreferrer">
              linkedin.com/in/arunyadav
            </a>
          </li>
          <li className="flex gap-3 items-center p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300">
            <FaGithub size={24} className="text-blue-200" />
            <a href="https://github.com/arunyadav21" target="_blank" rel="noopener noreferrer">
              github.com/arunyadav21
            </a>
          </li>
        </ul>
      </div>

      {/* Copyright */}
      <div className="relative z-10 text-center mt-16 pt-6 border-t border-white/10 text-white/60 text-sm">
        © {new Date().getFullYear()} Arun Yadav. All rights reserved.
      </div>
    </section>
  );
};

export default Contact;


















{  /*Old cade..  import React from "react";
import { MdOutlineEmail, MdOutlineContactPhone, MdVerifiedUser } from "react-icons/md";
import { CiLinkedin,  } from "react-icons/ci";
import { FaGithub  } from "react-icons/fa";

const Footer = () => {
  return (
    <div
      id="Footer"
      className="flex justify-around bg-[#465697] text-white p-10 md:p-12 items-center"
    >
      <div>
        <h1 className="text-2xl md:text-6xl font-bold">Contact</h1>
        <h3 className="text-sm md:text-2xl font-normal">
          Feel Free To reach out!
        </h3>
      </div>

      <ul className="text-sm md:text-xl">
         <li className="flex gap-1 items-center">
          <MdVerifiedUser size={20} />
          Arun Yadav
        </li>
         <li className="flex gap-1 items-center">
          <MdOutlineContactPhone size={20} />
          9129652795
        </li>
        <li className="flex gap-1 items-center">
          <MdOutlineEmail size={20} />
          oficialarun8565@gmail.com
        </li>
        <li className="flex gap-1 items-center">
          <CiLinkedin />
          linkdlin.com/Arun Yadav
        </li>
        <li className="flex gap-1 items-center">
          <FaGithub />
          github.com/arunyadav21
        </li>
      </ul>
    </div>
  );
};

export default Footer;*/}