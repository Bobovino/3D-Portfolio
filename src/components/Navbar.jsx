import { NavLink } from "react-router-dom";
import ResumeButton from "../components/ResumeButton.jsx"


const Navbar = () => {
  return (
    <header className='header align-items'>      
        <NavLink to="/" className="w-10 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md">
            <p className="blue-gradient_text">RM</p>
        </NavLink>
      <nav className='flex text-lg gap-4 font-medium items-center'>
          <NavLink to='/about' className={({ isActive }) => isActive ? "text-blue-600" : "text-black" }>
            About
          </NavLink>
          <NavLink to='/projects' className={({ isActive }) => isActive ? "text-blue-600" : "text-black"}>
            Projects
          </NavLink>
        <ResumeButton/>       
      </nav>
    </header>
  );
};

export default Navbar;
