import React from "react";
import avatarImg from "../../assets/3d-web1.png";
import TextChanger from "../TextChanger";

const Home = () => {
  return (
    <div className="relative flex w-full min-h-screen justify-between items-center px-5 md:px-20 py-10 md:py-0 bg-gradient-to-br from-blue-50 to-purple-50 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute -left-20 -top-20 w-64 h-64 rounded-full bg-blue-100 opacity-30 blur-xl"></div>
      <div className="absolute -right-20 bottom-1/3 w-80 h-80 rounded-full bg-purple-100 opacity-20 blur-xl"></div>
      
      <div className="relative z-10 md:w-1/2 space-y-6 md:space-y-8">
        <div className="text-blue-600 text-sm md:text-base font-medium tracking-widest">
          <TextChanger />
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold leading-tight md:leading-snug">
          Hello, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Arun Yadav</span>
        </h1>
        
        <div className="space-y-4">
          <p className="text-gray-700 text-base md:text-xl leading-relaxed">
            I'm a passionate <span className="font-semibold text-blue-600"> Web Developer.</span> 
          </p>
          <p className="text-gray-700 text-base md:text-xl leading-relaxed">
            I've successfully created <span className="font-semibold text-purple-600">3 web development projects</span> that showcase my skills and creativity.
          </p>
          <p className="text-gray-700 text-base md:text-xl leading-relaxed">
            My expertise lies in building <span className="font-semibold text-cyan-600">responsive, user-friendly</span> web applications with modern technologies.
          </p>
          <p className="text-gray-700 text-base md:text-xl leading-relaxed">
            And <span className="font-semibold text-pink-500">3 years of experience</span> in Sales Department as a Team Leader.
          </p>
        </div>
        
        <div className="flex flex-wrap gap-4 pt-4">
          <button className="relative overflow-hidden group text-white py-3 px-6 text-lg font-semibold rounded-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover:shadow-lg hover:shadow-blue-200">
            <span className="relative z-10">Contact Me</span>
            <span className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          </button>
          <button className="text-blue-600 py-3 px-6 text-lg font-semibold rounded-full border-2 border-blue-600 hover:bg-blue-50 transition-colors duration-300">
            View Projects
          </button>
        </div>
      </div>
      
      <div className="hidden md:block relative z-10 w-1/2 justify-center">
        <div className="relative">
          <img style={{marginLeft:350}}
            className="w-80 h-80 object-contain animate-float size-full " 
            src={avatarImg} 
            alt="Arun Yadav" 
          />
          <div className="absolute -z-10 w-full h-full rounded-full bg-blue-100 blur-xl opacity-50 animate-pulse"></div>
          <div className="absolute -z-20 -inset-4 rounded-full border-4 border-blue-200 opacity-30 animate-spin-slow"></div>
        </div>
      </div>
    </div>
  );
};

export default Home;