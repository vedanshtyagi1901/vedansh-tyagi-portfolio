import React, { useState } from 'react';

const allProjects = [
  {
    title: 'Portfolio Website',
    description: 'A personal portfolio website to showcase my work and skills.',
    tech: ['React', 'CSS', 'TypeScript'],
    live: '#',
    github: 'https://github.com/vedanshtyagi1901/vedansh-tyagi-portfolio',
    image: '/PortfolioWebsiteLogo.png',
  },
  {
    title: 'RT-IDS',
    description: "Real Time intrusion detection system that blocks suspicious IP's based on HTTP protocols",
    tech: ['Node.js', 'Express', 'MongoDB'],
    live: '#',
    github: 'https://github.com/vedanshtyagi1901/RT-IDS',
    image: '/RTIDSLogo.png',
  },
  // Add more projects as needed i have created a functionality for load more...
];

function ProjectsGrid() {
  const [visibleCount, setVisibleCount] = useState(6);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 6);
  };

  const visibleProjects = allProjects.slice(0, visibleCount);

  return (
    <div className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900">Projects</h2>
        <p className="mt-2 text-gray-600">A peek at some of the ideas I’ve brought to life,</p>
      </div>

      <div className="mt-10 flex flex-wrap justify-center gap-6 max-w-7xl mx-auto text-center">
        {visibleProjects.map((project, index) => (
          <div key={index} className="border border-gray-200 rounded-lg p-6 shadow-xl hover:shadow-2xl transition duration-200 max-w-80">
            <div className="h-40 mb-4 rounded flex justify-center">
              <img src={project.image} alt={project.title} className="max-h-full max-w-full object-contain" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900">{project.title}</h3>
            <p className="text-sm text-gray-600 mt-1">{project.description}</p>
            <div className="flex flex-wrap gap-2 mt-3 justify-center">
              {project.tech.map((tag, i) => (
                <span key={i} className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">
                  {tag}
                </span>
              ))}
            </div>
            <div className="mt-4 flex gap-3 justify-center">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="border text-[#A53DFF] border-[#A53DFF] flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 hover:bg-[#A53DFF] hover:text-white hover:border-transparent"
              >
                GitHub ↗
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Load More Button */}
      {visibleCount < allProjects.length && (
        <div className="mt-8 text-center">
          <button
            onClick={handleLoadMore}
            className="border px-4 py-2 mt-5 bg-[#A53DFF] rounded-lg text-white cursor-pointer hover:bg-[#8f32d6] transition duration-200"
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
}

export default ProjectsGrid;
