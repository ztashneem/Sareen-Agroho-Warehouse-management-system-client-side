import React from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import useServices from '../../Hooks/useServices';
import Manage from './Manage/Manage';


const ManageItems = () => {
    const { services, setServices } = useServices();
    const handleUserDelate = id => {
        console.log('object', id);
        const proceed = window.confirm("Are You Sure Want To Delate!!")
        if (proceed) {

            const url = `https://hidden-crag-72651.herokuapp.com/delete/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => console.log('hello', data))
            const updateService = services.filter(service => service._id !== id);
            setServices(updateService);
            toast.success('Items Delate Successful')
            // console.log(updateService);
            // console.log(services);
        }
    }
    return (
        <div className='container mx-auto w-full'>
            <Link to={'/add'}><button className=" text-white font-bold rounded-lg text-2xl px-5 my-10 py-4" style={{ backgroundColor: '#64B9B4' }}>
                Add New Item
            </button></Link>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg container mx-auto">
                <table className="w-full table-aa text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 text-lg py-3">
                                Product name
                            </th>
                            <th scope="col" className="px-6 text-lg py-3">
                                In-Stock
                            </th>
                            <th scope="col" className="px-6 text-lg py-3">
                                Price
                            </th>
                            <th scope="col" className="px-6 text-lg py-3">
                                Supplier Name
                            </th>
                            <th scope="col" className="px-6 text-lg py-3">
                                <span className="sr-only">Edit</span>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            services.map(service => <Manage
                                key={service._id}
                                service={service}
                                handleUserDelate={handleUserDelate}
                            ></Manage>)
                        }
                    </tbody>
                </table>
            </div >
        </div>
    );
};

export default ManageItems;