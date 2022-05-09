import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
const Update = () => {
    const { id } = useParams();
    const [user, setUser] = useState([]);
    console.log(user);
    const [isReload, setIsReload] = useState(false);
    useEffect(() => {
        fetch(`https://hidden-crag-72651.herokuapp.com/service/${id}`)
            .then(res => res.json())
            .then(data => setUser(data))
    }, [isReload]);
    const handleUpdateQuantity = e => {
        e.preventDefault();

        const quantity = e.target.quantity.value;
        const newQuantity = parseInt(quantity) + parseInt(user?.quantity)
        const updateQuantity = { newQuantity: newQuantity }

        const url = `https://hidden-crag-72651.herokuapp.com/service/${id}`
        if (!quantity) {
            alert('Please add some quantity')
        } else {
            fetch(url, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(updateQuantity)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    setIsReload(!isReload);
                    e.target.reset();
                    toast.success("Stock add Successful");
                });
        }
    };
    const handleDeliveryProduct = (id) => {
        const quantity = user?.quantity;
        const updateQuantity = { quantity };
        const url = `https://hidden-crag-72651.herokuapp.com/delivery/${id}`
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateQuantity)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setIsReload(!isReload);
                toast.success('Delivery Successful')
            })
    }

    return (
        <div className='md:grid grid-cols-2 container mx-auto mt-10'>
            <div>
                <img className='w-2/4 mx-auto mb-10' src={user.img} alt="" />
            </div>
            <div className='m-5'>
                <p className='font-bold'><span style={{ color: '#64B9B4' }}>ID:</span> {user._id}</p>
                <h1 className='text-2xl font-bold'>{user.name}</h1>
                <p className='text-xl'>Price: ${user.price}</p>
                <p className='text-sm'>{user.description}</p>
                <p className='text-xl'>Supplier Name: {user.supplier}</p>
                <p className='text-xl'>Sold: {user.sold}</p>
                <p className='text-xl'>In-Stock: {user.quantity}</p>
                <button style={{ backgroundColor: '#64B9B4' }} className="bottom-1 rounded items-center py-2 my-5 text-white font-bold px-3 text-xl text-center" onClick={() => handleDeliveryProduct(user._id)}>Delivered</button>
                <form onSubmit={handleUpdateQuantity}>
                    <input type="text" name='quantity' />
                    <input style={{ backgroundColor: '#64B9B4' }} className='cursor-pointer rounded bottom-1 items-center py-2 text-white font-bold px-3 text-xl text-center ml-5' type="submit" value="Add quantity" />
                </form>
            </div>
        </div>
    );
};

export default Update;