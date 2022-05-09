import React from 'react';
import { FaFlag, FaLightbulb } from 'react-icons/fa';
import { AiOutlinePaperClip } from 'react-icons/ai'
import { Link } from 'react-router-dom';

const OurTeam = () => {
    return (
        <div className='relative'>
            <div className='team-img mx-auto md:mb-72 relative'>
                <h1 className='font-extrabold text-2xl text-white z-50 md:text-5xl text-center absolute right-0 left-0 bottom-0 top-[20%]'>We love what we do <br /> and we do it with passion</h1>
                <Link to={'/manage'}>
                    <button className='font-extrabold text-xl text-white z-50 md:text-3xl text-center absolute right-0 left-0 bottom-0 top-[0]'>
                        <span className='border-btn'>SEE OUR ALL PRODUCTS</span>
                    </button>
                </Link>
            </div>
            <div className='md:grid hidden m-20 grid-cols-3 absolute bottom-[-250px]'>
                <div className='p-24 bg-gray-800'>
                    <FaFlag className='text-white z-50 text-2xl mb-5'></FaFlag>
                    <h2 className='text-white z-50 text-xl font-semibold'>Our Mission</h2>
                    <p className='text-white font-light z-50 text-sm'>We encourage every team member to be a whole person. We have a flexible, high trust environment that is focused on doing great work.</p>
                </div>
                <div className='p-24 bg-stone-600'>
                    <FaLightbulb className='text-white z-50 text-2xl mb-5'></FaLightbulb>
                    <h2 className='text-white z-50 text-xl font-semibold'>Our Vision</h2>
                    <p className='text-white z-50 text-sm'>Our purpose is to build solutions that remove the barriers preventing people from doing their best work, and this is at the heart of how we approach our.</p>
                </div>
                <div style={{ backgroundColor: '#64B9B4' }} className='p-24'>
                    <AiOutlinePaperClip className='text-white z-50 text-2xl mb-5'></AiOutlinePaperClip>
                    <h2 className='text-white z-50 text-xl font-semibold'>Our Philosophy</h2>
                    <p className='text-white z-50 text-sm'>Learning and Growth. We’re building a learning organization, so you not only develop your craft but your ability to partner with others.</p>
                </div>
            </div>
        </div>
    );
};

export default OurTeam;