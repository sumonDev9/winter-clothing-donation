import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { FaLocationDot } from 'react-icons/fa6';
import { IoMdPhotos } from 'react-icons/io';
import Footer from '../components/Footer';

const WinterDetails = () => {


    const { id } = useParams();
    const winterId = parseInt(id);
    const data = useLoaderData();
    console.log(data)
    const winter = data.find(winter => winter.id === winterId);

    const { title, image, description, division, status, contactInfo } = winter;

    console.log(data);
    return (
        <div className='bg-gray-200'>
            <nav className='bg-white shadow-lg'>
                <Navbar></Navbar>
            </nav>
            <div className='py-10 w-11/12 mx-auto flex flex-col md:flex-row gap-5'>

                <div className='shadow-lg bg-white  card max-w-md'>
                    <figure className="px-5 pt-5">
                        <img
                            src={image}
                            alt={title}
                            className="rounded-xl h-52 w-full" />
                    </figure>
                    <div className='p-5 space-y-3'>
                        <h2 className="text-primary font-bold text-xl">{title}</h2>
                        <p className="text-secondary font-semibold text-base">{description}</p>
                        <p className="flex items-center gap-2 text-secondary font-semibold"> <span className='text-primary font-semibold text-lg'>Status:</span> {status}</p>
                        <p className="flex items-center gap-2 text-secondary font-semibold"> <span className='text-primary font-semibold text-lg'>Division:</span> {division}</p>
                        <p className="flex items-center gap-2 text-secondary font-semibold"> <span className='text-primary font-semibold text-lg'>Contact:</span> {contactInfo}</p>

                    </div>
                </div>

                <div className='w-full rounded-xl bg-white shadow-lg p-6'>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-primary text-lg">Quantity of items</span>
                        </label>
                        <input type="number" placeholder="Quantity of items" className="input input-bordered" required />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-primary text-lg">Item type</span>
                        </label>
                        <select className="select select-bordered w-full">
                            <option selected>Select an item Type</option>
                            <option>blanket</option>
                            <option>jacket</option>
                            <option>sweater</option>
                        </select>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-primary text-lg">Pickup location</span>
                        </label>
                        <input type="text" placeholder="Location" className="input input-bordered" required />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-primary text-lg">Additional notes</span>
                        </label>
                        <input type="text" placeholder="Type here" className="input input-bordered input-lg w-full" />
                    </div>

                    <div className='w-full mt-5'>
                        <button className='btn btn-block bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%  text-white text-xl font-bold'>Register</button>
                    </div>

                </div>

            </div>

            {/* footer */}
            <footer className='bg-black text-white'>
           <Footer></Footer>
           </footer>
        </div>
    );
};

export default WinterDetails;


