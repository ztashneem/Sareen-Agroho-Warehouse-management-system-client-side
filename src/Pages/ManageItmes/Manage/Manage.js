import React from 'react';
import { Link } from 'react-router-dom';

const Manage = ({ service, handleUserDelate }) => {
    // const { } = service;
    return (
        < tr className=" bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600" >
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                {service.name}
            </th>
            <td className="px-6 py-4">
                {service.quantity}
            </td>
            <td className="px-6 py-4">
                ${service.price}
            </td>
            <td className="px-6 py-4">
                {service.supplier}
            </td>
            <td className="px-6 py-4 text-right">
                <button className=" text-white font-bold rounded-lg text-sm mb-5 mr-3 px-5 py-2.5" style={{ backgroundColor: '#64B9B4' }} onClick={() => handleUserDelate(service._id)}>Delate</button>
                <Link className=" text-white rounded-lg text-sm px-5  mt-5 py-3" style={{ backgroundColor: '#64B9B4' }} to={`/update/${service._id}`}><button className='font-bold' type="button" >Update Items</button></Link>
            </td>
        </tr>
    );
};

export default Manage;