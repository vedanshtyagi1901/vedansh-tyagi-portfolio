import React, { useState } from 'react';
import ContactModal from '../../ContactPage/ContactModal';

function WorkTogether() {
  const [showContact, setShowContact] = useState(false);

  return (
    <>
      <div className="bg-[#0D1B2A] py-16 text-center px-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
          Do you have Project Idea?<br className="hidden sm:block" /> Let's discuss your project!
        </h2>
        <button
          onClick={() => setShowContact(true)}
          className="mt-4 bg-[#A53DFF] hover:bg-purple-700 text-white font-medium px-6 py-2 rounded-lg transition-all duration-300"
        >
          Let’s work Together <span className="ml-2">→</span>
        </button>
      </div>

      <ContactModal isOpen={showContact} onClose={() => setShowContact(false)} />
    </>
  );
}

export default WorkTogether;
