import React, { useState } from 'react';
import ContactModal from '../../ContactPage/ContactModal';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showContact, setShowContact] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="h-16 flex items-center justify-between px-6 md:px-16">
        {/* Logo & Toggle */}
        <div className="flex items-center gap-3 font-bold text-2xl text-[#A53DFF] font-kalam" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}>
          <button onClick={() => setIsOpen(!isOpen)} className="text-3xl md:hidden">
            {isOpen ? '✖' : '☰'}
          </button>
          {"</Vedansh>"}
        </div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-6 text-sm font-medium">
          <li className='px-4 py-2'><a href="/" className='hover:text-[#A53DFF] cursor-pointer'>Home</a></li>
          <li className='px-4 py-2'><a href="/projects" className='hover:text-[#A53DFF] cursor-pointer'>Projects</a></li>
          <li className='px-4 py-2'><a href="/achievements" className='hover:text-[#A53DFF] cursor-pointer'>Achievements</a></li>
          <li className='px-4 py-2'><a href="/resume" className='hover:text-[#A53DFF] cursor-pointer' target='_blank'>Resume</a></li>
          <li className='border px-4 py-2 bg-[#A53DFF] rounded-lg text-white cursor-pointer hover:underline underline-offset-4' onClick={() => setShowContact(true)}>Contact</li>
        </ul>

      </div>
        <ContactModal isOpen={showContact} onClose={() => setShowContact(false)} />

      {/* Mobile Dropdown Menu with Animation */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out px-6 ${isOpen ? 'max-h-96 pb-4' : 'max-h-0'
          }`}
      >
        <ul className="flex flex-col space-y-3 text-sm font-medium pt-2">
          <li className='px-2 py-1 border-b'><a href="/" className='hover:text-[#A53DFF] cursor-pointer'>Home</a></li>
          <li className='px-2 py-1 border-b'><a href="/projects" className='hover:text-[#A53DFF] cursor-pointer'>Projects</a></li>
          <li className='px-2 py-1 border-b'><a href="/achievements" className='hover:text-[#A53DFF] cursor-pointer'>Achievements</a></li>
          <li className='px-2 py-1 border-b'><a href="/resume" className='hover:text-[#A53DFF] cursor-pointer' target='_blank'>Resume</a></li>
          <li className='px-4 py-2 mt-2 bg-[#A53DFF] rounded-lg text-white text-center cursor-pointer hover:underline underline-offset-4' onClick={() => setShowContact(true)}>Contact</li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
