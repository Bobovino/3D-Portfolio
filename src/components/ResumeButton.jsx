import englishResume from '../assets/pdf/English-Resume.pdf';
import spanishResume from '../assets/pdf/Español-CV.pdf';
import germanResume from '../assets/pdf/Deutsch-CV.pdf';
import { useState } from 'react';
import { FaRegFilePdf, FaCaretDown } from 'react-icons/fa';

const ResumeButton = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const resumes = [
    { name: 'English Resume', file: englishResume },
   /*  { name: 'Spanish Resume', file: spanishResume },
    { name: 'German Resume', file: germanResume }, */
  ];

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={() => setShowDropdown(!showDropdown)}
        className="flex items-center bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded inline-flex justify-center"
      >
        <span>Download Resume</span>
        <FaCaretDown className="ml-2" />
      </button>
      {showDropdown && (
        <div className="origin-top-right z-20 absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"   style={{ zIndex: 20}}>
          <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            {resumes.map((resume, index) => (
              <a
                key={index}
                href={resume.file}
                download
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 z-999"
                role="menuitem"
              >
                {resume.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ResumeButton;
