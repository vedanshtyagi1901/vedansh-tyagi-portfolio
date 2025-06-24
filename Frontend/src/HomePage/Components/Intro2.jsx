import React from 'react'

function Intro2() {
  return (
    <div className='h-full bg-white text-center lg:text-left'>
      <div className="relative">
        <div className="bg-[#F0F1F3] py-20 px-6 md:px-20">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start gap-10">

            {/* Left Text Section */}
            <div className="lg:w-1/2">
              <h1 className="text-3xl font-bold text-gray-800 mb-4">Core Tech Areas</h1>
              <p className="text-gray-600 mb-3">
                Apart from my core tech stack, I'm always exploring new and emerging technologies in the ever-evolving tech landscape.
              </p>
              <p className="text-gray-600">
                Whether it’s the latest frameworks, tools, or trends in development, I love staying up-to-date and experimenting with what’s next.
              </p>
              <div className="mt-4 flex gap-5 justify-center lg:justify-normal">
                <a href='/projects' className='bg-[#A53DFF] text-white px-4 py-2 rounded-lg transition-colors duration-200 hover:bg-[#9229e6]'>My Projects</a>
                <a href='/resume' target='_blank' className="border text-[#A53DFF] border-[#A53DFF] flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 hover:bg-[#A53DFF] hover:text-white hover:border-transparent">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-download" viewBox="0 0 16 16">
                    <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5" />
                    <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708z" />
                  </svg>
                  <span>Download CV</span>
                </a>
              </div>
            </div>

            {/* Right Cards Section */}
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Card 1 */}
              <div className="bg-white p-5 sm:p-6 md:p-7 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <img src='/htmlLogo.jpg' alt="" srcset="" className="w-20 h-20 sm:w-12 sm:h-12 bg-[#A53DFF] text-white flex items-center justify-center rounded-md mb-3 text-lg mx-auto lg:mx-0" />
                <h2 className="font-semibold text-gray-800 text-base sm:text-lg">1. WebD</h2>
                <p className="text-gray-600 text-sm mt-1">Nextjs, Reactjs, TailwindCSS, Nodejs, Expressjs, Flask</p>
              </div>

              {/* Card 2 */}
              <div className="bg-white p-5 sm:p-6 md:p-7 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <img src='/pythonLogo.jpg' alt="" srcset="" className="w-20 h-20 sm:w-12 sm:h-12 bg-[#A53DFF] text-white flex items-center justify-center rounded-md mb-3 text-lg mx-auto lg:mx-0" />
                <h2 className="font-semibold text-gray-800 text-base sm:text-lg">2. Python</h2>
                <p className="text-gray-600 text-sm mt-1">Data science, AI/ML, REST APIs, Flask, Webscraping, Sockets</p>
              </div>

              {/* Card 3 */}
              <div className="bg-white p-5 sm:p-6 md:p-7 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <img src='/dbmsLogo.png' alt="" srcset="" className="w-20 h-20 sm:w-12 sm:h-12 bg-[#A53DFF] text-white flex items-center justify-center rounded-md mb-3 text-lg mx-auto lg:mx-0" />
                <h2 className="font-semibold text-gray-800 text-base sm:text-lg">3. DBMS</h2>
                <p className="text-gray-600 text-sm mt-1">MongoDB, MySQL</p>
              </div>

              {/* Card 4 */}
              <div className="bg-white p-5 sm:p-6 md:p-7 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <img src='/aimlLogo.png' alt="" srcset="" className="w-20 h-20 sm:w-12 sm:h-12 bg-[#A53DFF] text-white flex items-center justify-center rounded-md mb-3 text-lg mx-auto lg:mx-0"/>
                <h2 className="font-semibold text-gray-800 text-base sm:text-lg">4. AI/ML</h2>
                <p className="text-gray-600 text-sm mt-1">TensorFlow, Keras, Jupyter, Colab</p>
              </div>
            </div>

          </div>
        </div>
      </div>

    </div>
  )
}

export default Intro2