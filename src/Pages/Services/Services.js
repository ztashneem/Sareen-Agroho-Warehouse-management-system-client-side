import React from 'react';
import { Link } from 'react-router-dom';
import useServices from '../../Hooks/useServices';
import Service from '../Service/Service';

const Services = () => {
    const { services } = useServices();

    const newServices = services.slice(0, 6)

    return (
        <div className='w-full'>
            <h2 className='text-4xl font-bold text-center m-8'>Inven<span style={{ color: '#64B9B4' }}>tories</span></h2>
            <div className='md:grid grid-cols-3 container mx-auto gap-4'>
                {
                    newServices.map(service => <Service
                        service={service}
                        key={service._id}
                    ></Service>)
                }
            </div>
            <div className='m-16'>
                <Link style={{ backgroundColor: '#64B9B4' }} to={`/manage`} className="inline-flex bottom-1 items-center py-3 text-white font-bold px-3 text-xl text-center focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Manage Inventory
                    <svg className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                </Link>
            </div>
        </div>
    );
};

export default Services;