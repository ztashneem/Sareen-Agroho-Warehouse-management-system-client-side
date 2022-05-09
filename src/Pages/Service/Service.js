import React from 'react';
import { Link } from 'react-router-dom';

const Service = ({ service }) => {
    const { _id, name, img, price, description, supplier, quantity } = service;
    return (

        <div className="max-w-sm md:mb-0 mb-10  mx-auto relative h-[700px] bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
            <img className=" w-2/3 mx-auto" src={img} alt="" />
            <div className="p-5">
                <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">{name}</h5>
                <p style={{ color: '#494949' }} className="mb-3 font-semibold text-gray-700 dark:text-gray-400"><small>{description}</small></p>
                <p style={{ color: '#494949' }} className="mb-3 text-lg font-bold text-gray-700 dark:text-gray-400">Price: ${price}</p>
                <p style={{ color: '#494949' }} className="mb-3 text-sm font-normal text-gray-700 dark:text-gray-400"><span className='font-bold'>In-Stock:</span> {quantity}</p>
                <p style={{ color: '#494949' }} className="mb-3 text-sm font-normal text-gray-700 dark:text-gray-400"><span className='font-bold'>Supplier Name:</span> {supplier}</p>

                <Link style={{ backgroundColor: '#64B9B4' }} to={`/update/${_id}`} className="inline-flex absolute bottom-1 items-center py-3 text-white font-bold px-3 text-xl text-center focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Update Items
                    <svg className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                </Link>
            </div>
        </div>
    );
};

export default Service;