import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const projects = [
    {
      title: "Mega Blog Website",
      main: "A modern blogging platform built with React.js and Appwrite backend, featuring rich text editing and user authentication.",
      tags: ["React", "Appwrite", "Tailwind CSS"],
      image: "blog-project.jpg" // replace with your image path
    },
    {
      title: "Swiggy Clone",
      main: "Food delivery app clone with real-time order tracking, restaurant listings, and cart functionality.",
      tags: ["React", "Backend UI", "UI"],
      image: "food-app.jpg" // replace with your image path
    },
    // Add more projects as needed
  ];

  return (
    <section id="Projects" className="relative py-16 md:py-24 px-5 md:px-16 lg:px-24 bg-gradient-to-b from-gray-900 to-gray-800 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute top-20 left-10 w-40 h-40 rounded-full bg-blue-500 blur-3xl"></div>
        <div className="absolute bottom-10 right-20 w-60 h-60 rounded-full bg-purple-500 blur-3xl"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-sm font-semibold tracking-wider text-blue-400 uppercase">
            My Work
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mt-3 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
            Featured Projects
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-gray-400">
            Here are some of my recent projects that showcase my skills and expertise.
          </p>
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              main={project.main}
              tags={project.tags}
              image={project.image}
            />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-400 mb-6">Want to see more of my work?</p>
          <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-full hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 hover:scale-105">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;


















{/* old code....
import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div id="Projects" className="p-10 md:p-24 text-white ">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Projects</h1>
      <div className="py-12 px-8 flex flex-wrap gap-5">
        <ProjectCard
          title="Mega Blog website"
          main="this is a bloggin website created in React Js and used some component library with Appwrite.."
        />
        <ProjectCard
          title="Swiggy Clone"
          main="this is a food delivery website created in react js and used some component library "
        />
        
      </div>
    </div>
  );
};

export default Projects;*/}