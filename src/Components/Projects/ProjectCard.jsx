import React from "react";
import bannerImg from "../../assets/blog-4-1.jpg";

const ProjectCard = ({ title, main, tags = [] }) => {
  return (
    <div className="group relative overflow-hidden p-1 md:p-2 flex flex-col w-80 min-h-[450px] bg-gradient-to-br from-[#0c0e19] to-[#1a1d36] shadow-2xl shadow-slate-900/50 rounded-2xl border border-gray-800 hover:border-blue-400/30 transition-all duration-500 hover:shadow-blue-500/20">
      {/* Glow effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      {/* Image container with hover effect */}
      <div className="relative overflow-hidden rounded-xl m-2">
        <img 
          className="w-full h-48 object-cover rounded-xl transform group-hover:scale-105 transition-transform duration-500" 
          src={bannerImg} 
          alt={title} 
        />
        {/* Shine effect on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-xl md:text-2xl font-bold text-white mb-2 leading-tight">
          {title}
        </h3>
        
        {/* Tags */}
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-3">
            {tags.map((tag, index) => (
              <span 
                key={index}
                className="text-xs px-2 py-1 rounded-full bg-blue-900/40 text-blue-300 border border-blue-800/50"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
        
        <p className="text-gray-300 text-sm md:text-md leading-relaxed mb-6 flex-grow">
          {main}
        </p>

        {/* Buttons with hover effects */}
        <div className="flex gap-3 mt-auto">
          <button className="flex-1 text-white py-2 px-4 text-sm md:text-md hover:opacity-90 transition-all duration-300 hover:scale-[1.02] font-medium rounded-lg bg-gradient-to-r from-blue-600 to-blue-700 shadow-md hover:shadow-blue-500/30">
            Live Demo
          </button>
          <button className="flex-1 text-white py-2 px-4 text-sm md:text-md hover:opacity-90 transition-all duration-300 hover:scale-[1.02] font-medium rounded-lg bg-gradient-to-r from-purple-600 to-purple-700 shadow-md hover:shadow-purple-500/30">
            Source Code
          </button>
        </div>
      </div>

      {/* Corner accent */}
      <div className="absolute top-0 right-0 w-16 h-16 -mr-10 -mt-10 rotate-45 bg-blue-500/20 group-hover:bg-blue-500/30 transition-all duration-500"></div>
    </div>
  );
};

export default ProjectCard;

















//old code...
{/*import React from "react";
import bannerImg from "../../assets/blog-4-1.jpg";
const ProjectCard = ({ title, main }) => {
  return (
    <div className="p-3 md:p-6 flex flex-col w-80 bg-[#0c0e19] shadow-xl shadow-slate-900 rounded-2xl">
      <img className="p-4" src={bannerImg} alt="" />
      <h3 className="px-4 text-xl md:text-2xl font-bold leading-normal">
        {title}
      </h3>
      <p className="px-4 text-sm md:text-md leading-tight py-2">{main}</p>
      <div className="mt-2 p-2 md:p-4 flex gap-2 md:gap-4">
        <button className="md:mt-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]">
          Demo
        </button>
        <button className="md:mt-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]">
          Source Code
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;*/}