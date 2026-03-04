import { useState } from 'react';
import Logo from '../assets/logo.png'
function Navbar() {

  const [open, setOpen] = useState(false)

  return (
    <>
    <nav className="bg-blue-400 text-white px-6 py-4 flex justify-between items-center">
      <div className='flex justify-center items-center'>
        <img src={Logo} alt="" className='w-28' />
        <div className="text-2xl font-bold">Job-Hunt</div>
      </div>
      <ul className="flex gap-6 max-sm:hidden font-normal text-[16px]">
        <li><a href="#">Home</a></li>
        <li><a href="#">Categories</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
        <li><a href="#">Login</a></li>
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
    <a href="#" className="block w-full h-full">Home</a>
  </li>

  <li className="block px-3 py-2 bg-white rounded-md shadow-md">
    <a href="#" className="block w-full h-full">Categories</a>
  </li>

  <li className="block px-3 py-2 bg-white rounded-md shadow-md">
    <a href="#" className="block w-full h-full">About</a>
  </li>

  <li className="block px-3 py-2 bg-white rounded-md shadow-md">
    <a href="#" className="block w-full h-full">Contact</a>
  </li>

  <li className="block px-3 py-2 bg-white rounded-md shadow-md cursor-pointer">
    <a href="#" className="block w-full h-full">Login</a>
  </li>
</ul>
  </div>
)}
    </>
  );
};

export default Navbar;
