import englishResume from '../assets/pdf/English-Resume.pdf';
import { FaRegFilePdf, FaDownload } from 'react-icons/fa';

 
const ResumeButton = () => {
  return <>
    <a
      href={englishResume}
      download="Rodrigo_Martinez_Tabernero_Resume_English.pdf"
      className="hidden sm:inline-flex flex items-center bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 sm:py-2 sm:px-4 rounded  justify-center"
    >
      <span>Download Resume</span>
      <FaRegFilePdf className="ml-1 sm:ml-2" />
    </a>
    <a
      href={englishResume}
      download="Rodrigo_Martinez_Tabernero_Resume_English.pdf"
      className="sm:hidden flex items-center bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 sm:py-2 sm:px-4 rounded inline-flex justify-center"
    > 
      <span>Resume</span>
      <FaDownload className="ml-1" />
      <FaRegFilePdf className="ml-1 " />
    </a>
    </>
 
};

export default ResumeButton