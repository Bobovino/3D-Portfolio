import englishResume from '../assets/pdf/English-Resume.pdf';
import { FaRegFilePdf} from 'react-icons/fa';
 
const ResumeButton = () => {
  return (
    <a
      href={englishResume}
      download="Rodrigo_Martinez_Tabernero_Resume_English.pdf"
      className="flex items-center bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded inline-flex justify-center"
    >
      <span>Download Resume</span>
      <FaRegFilePdf className="ml-2" />
    </a>
  );
};

export default ResumeButton