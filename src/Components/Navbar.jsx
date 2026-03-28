import { useState } from 'react';
import Logo from '../assets/logo.png'
import { NavLink } from "react-router-dom";
function Navbar() {

  const [open, setOpen] = useState(false)

  return (
    <>
      <nav className="bg-blue-400 text-white px-10 py-3 flex justify-between items-center sticky top-0 z-20">
        <div className="text-2xl font-bold">Job-Hunt</div>
        <ul className="flex gap-6 max-sm:hidden font-normal text-[16px]">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/jobs">Jobs</NavLink>
          </li>
          <li>
            <NavLink to="/saved">Saved Jobs</NavLink>
          </li>
          <li>
            <NavLink to="/login">Login</NavLink>
          </li>
        </ul>
        <div className='text-2xl sm:hidden transition delay-150 duration-300 ease-in-out'>
          <button onClick={() => setOpen(!open)} className=''>
            <i className="fa-solid fa-bars"></i>
          </button>
        </div>

      </nav>

      {open && (
        <div className='mt-1.5 sm:hidden'>
          <ul className=" flex flex-col gap-2 px-2 font-light">
            <li className="block px-3 py-2 bg-white rounded-md shadow-md">
              <NavLink to="/" className="block w-full h-full">
                Home
              </NavLink>
            </li>

            <li className="block px-3 py-2 bg-white rounded-md shadow-md">
              <NavLink to="/jobs" className="block w-full h-full">
                Jobs
              </NavLink>
            </li>

            <li className="block px-3 py-2 bg-white rounded-md shadow-md">
              <NavLink to="/saved" className="block w-full h-full">
                Saved Jobs
              </NavLink>
            </li>

            <li className="block px-3 py-2 bg-white rounded-md shadow-md cursor-pointer">
              <NavLink to="/login" className="block w-full h-full">
                Login
              </NavLink>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;
