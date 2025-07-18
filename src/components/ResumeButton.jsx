import { useState } from 'react';
import Rodrigo_English_Resume_2025 from '../assets/pdf/Rodrigo_English_Resume_2025.pdf';
import Rodrigo_Deutsch_Lebenslauf_2025 from '../assets/pdf/Rodrigo_Deutsch_Lebenslauf_2025.pdf';
import Rodrigo_Español_CV_2025 from '../assets/pdf/Rodrigo_Español_CV_2025.pdf';

const resumeOptions = [
  { name: 'English', file: Rodrigo_English_Resume_2025 },
  { name: 'Deutsch', file: Rodrigo_Deutsch_Lebenslauf_2025 },
  { name: 'Español', file: Rodrigo_Español_CV_2025 },
];

const ResumeDropdown = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative inline-block text-left">
      <button
        className="bg-gray-800 text-white px-4 py-2 rounded-md shadow hover:bg-gray-700 transition"
        onClick={() => setOpen((prev) => !prev)}
        onBlur={() => setTimeout(() => setOpen(false), 150)}
        type="button"
      >
        Resume <span className="ml-1">▼</span>
      </button>
      {open && (
        <div className="absolute right-0 mt-2 w-40 origin-top-right bg-white rounded-md shadow-lg z-10 ring-1 ring-black ring-opacity-5">
          <div className="py-1">
            {resumeOptions.map((option) => (
              <a
                key={option.name}
                href={option.file}
                download
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                {option.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ResumeDropdown;