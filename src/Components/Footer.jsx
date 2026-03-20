import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'
function Footer() {
    return (
        <div className=" bg-gray-50 ">
            <div className='flex justify-center items-center flex-col bg-blue-600 py-8 px-4 gap-4'>
                <div>
                    <img src={logo} alt="" className='w-28' />
                </div>
                <div className='flex gap-13 text-gray-300 p-4'>
                    <Link to="">Home</Link>
                    <Link to="/jobs">Jobs</Link>
                    <Link to="/about">About</Link>
                    <Link to="/contact">Contact</Link>
                </div>
                <p>© 2026 Job-Hunt. All rights reserved.</p>

            </div>
        </div>
    )
}
export default Footer


