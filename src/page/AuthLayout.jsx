import React from 'react';
import Login from '../components/Login';
import { Outlet } from 'react-router-dom';
import Register from '../components/Register';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const AuthLayout = () => {
    return (
        <div>
              {/* navbar */}
              <nav className='bg-white shadow-lg'>
                <Navbar></Navbar>
            </nav>
          <Outlet></Outlet>
            {/* footer */}
            <footer className='bg-black text-white'>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default AuthLayout;