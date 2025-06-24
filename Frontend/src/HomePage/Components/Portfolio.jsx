import React from 'react'

function Portfolio() {
  const cards = [
    {
      title: 'Leetcode Profile',
      subtitle: 'Cmpetitive Programming',
      description: '180 Days streak of problem solving & 1702 max context rating',
      link: 'https://leetcode.com/u/vedansh_tyagi245/',
      image: '/leetcodeLogo.jpg',
    },
    {
      title: 'CodeForces Profile',
      subtitle: 'Competitive Programming',
      description: 'Have a title of Pupil after giving more than 10 contests',
      link: 'https://codeforces.com/profile/vedansh_tyagi2451',
      image: '/codeforcesLogo.png',
    },
    {
      title: 'Kaggle Profile',
      subtitle: 'AI ML',
      description: '5+ ML notebooks created so far',
      link: 'https://www.kaggle.com/vedanshtyagi2451',
      image: '/kaggleLogo.png',
    },
  ]

  return (
    <div className="py-16 px-6 sm:px-12 md:px-24 bg-gradient-to-b from-white to-[#fef6ff] mb-10">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">Portfolio</h2>
        <p className="text-gray-500 mt-2">Proof of Skills Across Various Platforms</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow"
          >
            <img
              src={card.image}
              alt={card.title}
              className="w-full h-40 object-cover"
            />
            <div className="p-5">
              <p className="text-xs text-gray-400 uppercase">{card.subtitle}</p>
              <h3 className="text-lg font-semibold text-gray-800 mt-1">{card.title}</h3>
              <p className="text-sm text-gray-600 mt-2">{card.description}</p>
              <a
                href={card.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center text-[#A53DFF] font-medium text-sm hover:underline"
              >
                Link
                <span className="ml-2 text-lg">→</span>
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <a href='/projects' className="bg-[#A53DFF] text-white px-4 py-3 rounded-lg transition-colors duration-200 hover:bg-[#9229e6]">
          View Projects
        </a>
      </div>
    </div>
  )
}

export default Portfolio
