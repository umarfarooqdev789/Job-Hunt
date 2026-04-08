import { useState, useEffect } from 'react';
import { NavLink, useNavigate } from "react-router-dom";
import { auth } from '../firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';

function Navbar() {
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState(null);   
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const handleLogout = () => {
    signOut(auth).then(() => {
      navigate("/");
    });
  };

  return (
    <>
      <nav className="bg-blue-400 text-white px-10 py-3 flex justify-between items-center sticky top-0 z-20">
        <div className="text-2xl font-bold">Job-Hunt</div>
        <ul className="flex gap-6 max-sm:hidden font-normal text-[16px] items-center">
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/jobs">Jobs</NavLink></li>
          <li><NavLink to="/saved">Saved Jobs</NavLink></li>

          {user ? (
            <>
              <li className="text-white font-semibold">
                👤 {user.displayName || user.email}
              </li>
              <li>
                <button
                  onClick={handleLogout}
                  className="bg-white text-blue-600 px-4 py-1 rounded-full font-semibold cursor-pointer"
                >
                  Logout
                </button>
              </li>
            </>
          ) : (
            <li><NavLink to="/login">Login/Register</NavLink></li>
          )}
        </ul>

        <div className='text-2xl sm:hidden'>
          <button onClick={() => setOpen(!open)}>
            <i className="fa-solid fa-bars"></i>
          </button>
        </div>
      </nav>  
      {open && (
        <div className='mt-1.5 sm:hidden'>
          <ul className="flex flex-col gap-2 px-2 font-light">
            <li className="block px-3 py-2 bg-white rounded-md shadow-md">
              <NavLink to="/" className="block w-full h-full">Home</NavLink>
            </li>
            <li className="block px-3 py-2 bg-white rounded-md shadow-md">
              <NavLink to="/jobs" className="block w-full h-full">Jobs</NavLink>
            </li>
            <li className="block px-3 py-2 bg-white rounded-md shadow-md">
              <NavLink to="/saved" className="block w-full h-full">Saved Jobs</NavLink>
            </li>
            {user ? (
              <>
                <li className="block px-3 py-2 bg-blue-100 rounded-md shadow-md font-semibold text-blue-700">
                  👤 {user.displayName || user.email}
                </li>
                <li className="block px-3 py-2 bg-white rounded-md shadow-md">
                  <button onClick={handleLogout} className="text-red-500 font-semibold w-full text-left cursor-pointer">
                    Logout
                  </button>
                </li>
              </>
            ) : (
              <li className="block px-3 py-2 bg-white rounded-md shadow-md cursor-pointer">
                <NavLink to="/login" className="block w-full h-full">Login/Register</NavLink>
              </li>
            )}
          </ul>
        </div>
      )}
    </>
  );
}

export default Navbar;