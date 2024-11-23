import React from 'react';
import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import About from '../components/About';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <div>
          <nav className='bg-white'>
            <Navbar></Navbar>
          </nav>
          <Banner></Banner>
          <main className='bg-gray-100 py-10 md:py-20'>
           <section className='w-11/12 mx-auto'>
           <About></About>
           </section>
          </main>
          <footer className='bg-black text-white'>
            <Footer></Footer>
          </footer>
        </div>
    );
};

export default Home;