import logo from '../assets/logo.png'

function Footer() {
    return (
        <div className=" bg-gray-50 ">
            <div className=" py-20 flex justify-around flex-wrap  px-3.5 max-sm:gap-4">
                <div>
                    <h1 className="text-2xl font-medium">Company</h1>
                    <ul className="cursor-pointer text-[14px] pl-1">
                        <li>
                            About Us
                        </li>
                        <li>
                            How It Works
                        </li>
                        <li>
                            Careers
                        </li>
                        <li>
                            Blog
                        </li>
                    </ul>
                </div>
                <div>
                    <h1 className="text-2xl font-medium">Services</h1>
                    <ul className="cursor-pointer text-[14px] pl-1">
                        <li>
                            IT & Digital Services
                        </li>
                        <li>
                            Home Repair Services
                        </li>
                        <li>
                            Electrical Services
                        </li>
                        <li>
                            Construction Services
                        </li>
                        <li>
                            Cleaning Services
                        </li>
                    </ul>
                </div>
                <div>
                    <h1 className="text-2xl font-medium">Users</h1>
                    <ul className="cursor-pointer text-[14px] pl-1">
                        <li>
                            Find Workers
                        </li>
                        <li>
                            Post a Job
                        </li>
                        <li>
                            Become a Worker
                        </li>
                        <li>
                            Login / Sign Up
                        </li>
                    </ul>
                </div>
                <div>
                    <h1 className="text-2xl font-medium ">Support</h1>
                    <ul className="cursor-pointer text-[14px] pl-1">
                        <li>
                            Contact Us
                        </li>
                        <li>
                            Privacy Policy
                        </li>
                        <li>
                            Help Center
                        </li>
                        <li>
                            Terms & Conditions
                        </li>
                    </ul>
                </div>
            </div>
            <div className='flex justify-center items-center flex-col bg-blue-600 py-8 px-4 gap-4'>
                <div>
                <img src={logo} alt="" className='w-28' />
                </div>
                <h2 className='text-white'>Connecting skilled professionals with people
                    who need reliable services.</h2>
                    <p>© 2026 Job-Hunt. All rights reserved.</p>
            </div>
        </div>
    )
}
export default Footer


