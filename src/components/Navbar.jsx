import { Link, NavLink } from "react-router-dom";
import winterLogo from '../../src/assets/winter.jpeg'

const Navbar = () => {

     const links = <>
     <li><NavLink to='/'>Home</NavLink></li>
     <li><NavLink to='/donationCamp'>Donation Campaigns</NavLink></li>
     <li><NavLink to='/help'>How to Help</NavLink></li>
     <li><NavLink to='dashboard'>Dashboard</NavLink></li>
     </>

    return (
        <div className="navbar  w-11/12 mx-auto">
        <div className="navbar-start">
            <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h8m-8 6h16" />
                    </svg>
                </div>
                <ul 
                    tabIndex={0}
                    className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 z-[9999] shadow">
                    {links}
                </ul>
            </div>
            <img src={winterLogo} className="w-10 h-10 rounded-full" alt="" />
        </div>
        <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 text-black gap-4">
                {links}
            </ul>
        </div>
        <div className="navbar-end gap-4">
        <img src='https://i.ibb.co/68pYjTF/user-removebg-preview.png'alt="" />
        
        <div>
            <Link to='/auth/login' className="px-3 py-2 bg-bgbton text-white font-semibold rounded-md">Login</Link>
        </div>
        </div>
    </div>
    );
};

export default Navbar;