import React from 'react';

const About = () => {
    return (
    <div>
        <div>
            <h1 className='text-center italic text-primary font-extrabold text-xl md:text-3xl'>About Us</h1>
        </div>
        <div className='flex  mt-5 flex-col rounded-md md:flex-row shadow-xl p-4 bg-white items-start gap-5'>
            <div className='max-w-2xl space-y-4'>
                <h1 className='text-primary font-semibold text-2xl italic md:text-3xl'>Winter Closing Donation Camp</h1>
                <p className='text-secondary text-base font-medium'>Welcome to Winter Closing Donation Camp, a heartfelt initiative dedicated to helping underprivileged communities stay warm during the chilly winter season. Our mission is to ensure that no one faces the harshness of winter without adequate clothing and warmth.</p>
                <p className='text-secondary text-base font-medium'>We invite compassionate individuals like you to join us in spreading kindness and making a tangible difference. Here's how you can contribute:</p>
                <p className='text-secondary text-base font-medium'><span className='text-primary font-bold'>Donate Winter Clothing:</span> Share gently used or new winter wear, such as sweaters, jackets, scarves, and blankets.</p>
                <p className='text-secondary text-base font-medium'><span className='text-primary font-bold'>Monetary Contributions:</span> Support our efforts through financial donations that help us purchase and distribute essential winter supplies.</p>
                <p className='text-secondary text-base font-medium'><span className='text-primary font-bold'>Volunteer with Us:</span> Participate in our donation drives and help us reach more people in need.</p>
            </div>
            <div className='mx-auto'>
                <img className='w-[400px] rounded-lg mx-auto' src="https://i.ibb.co/hMGZnxv/winter4.webp" alt="" />
            </div>
        </div>
    </div>
    );
};

export default About;