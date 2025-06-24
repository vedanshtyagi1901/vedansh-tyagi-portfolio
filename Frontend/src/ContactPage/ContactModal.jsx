import { AiOutlineMail, AiOutlinePhone } from 'react-icons/ai';

export default function ContactModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-40 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-semibold text-center mb-4">Contact Me</h2>
        <hr className="mb-4" />

        <div className="flex items-center mb-3">
          <AiOutlineMail className="w-5 h-5 mr-3" />
          <a href="mailto:vedanshtyagi245@gmail.com" className="text-gray-800">
            vedanshtyagi245@gmail.com
          </a>
        </div>

        <div className="flex items-center mb-3">
          <AiOutlinePhone className="w-5 h-5 mr-3" />
          <a href="tel:+919319845200" className="text-gray-800">
            +91 9319845200
          </a>
        </div>

        <button
          onClick={onClose}
          className="mt-4 w-full bg-gray-200 hover:bg-gray-300 text-sm py-2 rounded"
        >
          Close
        </button>
      </div>
    </div>
  );
}
