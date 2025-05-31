import React from "react";
import { FaCss3, FaFigma, FaHtml5, FaJs, FaReact } from "react-icons/fa";
import { SiFlutter, SiRedis, SiTailwindcss, SiMongodb } from "react-icons/si";
import { FaBell, FaAmazon } from "react-icons/fa";
import { RiNetflixFill } from "react-icons/ri";

const Experience = () => {
  const skills = [
    { icon: <FaHtml5 size={50} />, color: "#E34F26", name: "HTML5" },
    { icon: <FaCss3 size={50} />, color: "#1572B6", name: "CSS3" },
    { icon: <FaReact size={50} />, color: "#61DAFB", name: "React" },
    { icon: <FaJs size={50} />, color: "#F7DF1E", name: "JavaScript" },
    { icon: <SiFlutter size={50} />, color: "#02569B", name: "Flutter" },
    { icon: <SiMongodb size={50} />, color: "#47A248", name: "MongoDB" },
    { icon: <SiTailwindcss size={50} />, color: "#38B2AC", name: "Tailwind" },
  ];

  const experiences = [
    {
      icon: <FaBell size={40} />,
      color: "#4285F4",
      company: "Jeena Sikho Lifecare Ltd",
      role: "Tele-Sales Team Leader",
      period: "Oct 2021 - Jan 2025",
      responsibilities: [
        "Led a team of Tele-Sales specialists",
        "Implemented new support processes that reduced resolution time by 30%",
        "Mentored junior team members",
      ],
    },
  ];

  return (
    <section id="Experience" className="py-16 px-5 md:px-24 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
          My <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">Skills</span> & 
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"> Experience</span>
        </h1>
        <p className="text-gray-300 mb-12 max-w-2xl">
          Technologies I've worked with and professional journey so far.
        </p>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Skills Section */}
          <div className="lg:w-1/2">
            <h2 className="text-2xl font-semibold text-white mb-6 flex items-center">
              <span className="w-4 h-4 bg-blue-500 rounded-full mr-3"></span>
              Technical Skills
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {skills.map((skill, index) => (
                <div 
                  key={index}
                  className="bg-gray-800 bg-opacity-60 backdrop-blur-sm rounded-xl p-4 flex flex-col items-center transition-all duration-300 hover:scale-105 hover:shadow-lg"
                  style={{ boxShadow: `0 4px 6px -1px ${skill.color}40, 0 2px 4px -1px ${skill.color}20` }}
                >
                  <div className="p-3 bg-gray-900 rounded-lg mb-2">
                    {React.cloneElement(skill.icon, { color: skill.color })}
                  </div>
                  <span className="text-white font-medium">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Experience Section */}
          <div className="lg:w-1/2">
            <h2 className="text-2xl font-semibold text-white mb-6 flex items-center">
              <span className="w-4 h-4 bg-purple-500 rounded-full mr-3"></span>
             Experience
            </h2>
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <div 
                  key={index}
                  className="relative bg-gray-800 bg-opacity-60 backdrop-blur-sm rounded-xl p-6 overflow-hidden transition-all duration-300 hover:bg-opacity-70"
                >
                  <div className="absolute top-0 left-0 w-1 h-full" style={{ backgroundColor: exp.color }}></div>
                  <div className="flex gap-4 items-start ml-3">
                    <div className="p-3 rounded-lg" style={{ backgroundColor: `${exp.color}20` }}>
                      {React.cloneElement(exp.icon, { color: exp.color })}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                      <p className="text-blue-300 font-medium">{exp.company}</p>
                      <p className="text-gray-400 text-sm mb-3">{exp.period}</p>
                      <ul className="space-y-2">
                        {exp.responsibilities.map((item, i) => (
                          <li key={i} className="flex items-start text-gray-300">
                            <span className="text-blue-400 mr-2">•</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;



















{/* normall code....
import React from "react";
import { FaCss3, FaFigma, FaHtml5, FaJs, FaReact, } from "react-icons/fa";
import { SiFlutter, SiRedis, SiTailwindcss } from "react-icons/si";
import { FaBell } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { RiNetflixFill } from "react-icons/ri";
import { FaAmazon } from "react-icons/fa";
const Experience = () => {
  return (
    <div id="Experience" className="p-10 md:p-24">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Skills</h1>
      <div className="flex flex-wrap items-center justify-around">
        <div className="flex flex-wrap md:w-2/5 gap-8 md:p-12 py-10">
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaHtml5 color="#E34F26" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaCss3 color="#1572B6" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaReact color="#61DAFB" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaJs color="#F7DF1E" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <SiFlutter color="#F24E1E" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <SiMongodb color="#47A248" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <SiTailwindcss color="#FF4438" size={50} />
          </span>
        </div>
        <div>
            <h1 className="text-2xl md:text-4xl text-white font-bold">Experience</h1>
          <div className="flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center">
            <FaBell color="#4285F4" size={50} />
            <span className="text-white">
              <h2 className="leading-tight">Software Support , Jeena Sikho Lifecare ltd</h2>
              <p className="text-sm leading-tight font-thin">
                Jan 2025 - Leave
              </p>
              <ul className="text-sm p-2">
                <li>- Work as Team Leader</li>
                <li>- Senior Empoleeye</li>
              </ul>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;*/}