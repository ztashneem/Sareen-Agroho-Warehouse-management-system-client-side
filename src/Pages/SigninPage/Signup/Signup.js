import React, { useEffect, useState } from 'react';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';
import useToken from '../../../Hooks/useToken';
import Loading from '../../../SharePage/Loading/Loading';
import SocialLogin from '../SocialLogin/SocialLogin';

const Signup = () => {
    const [userInfo, setUserInfo] = useState({
        email: "",
        password: "",
        confirmPass: "",
    });
    const [errors, setErrors] = useState({
        email: "",
        password: "",
        other: "",
    });
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    const [token] = useToken(user);

    const handleEmailChange = event => {
        const emailRegex = /\S+@\S+\.\S+/;
        const validEmail = emailRegex.test(event.target.value);
        if (validEmail) {
            setUserInfo({ ...userInfo, email: event.target.value });
            setErrors({ ...errors, email: "" })
        } else {
            setErrors({ ...errors, email: "Invalid Email" });
            setUserInfo({ ...userInfo, email: "" })
        }

    }

    const handlePassChange = event => {
        const passwordRegex = /.{6}/;
        const validPassword = passwordRegex.test(event.target.value);
        if (validPassword) {
            setUserInfo({ ...userInfo, password: event.target.value });
            setErrors({ ...errors, password: "" })
        } else {
            setErrors({ ...errors, password: "Minium 6 Characters!!" });
            setUserInfo({ ...userInfo, password: "" })
        }
    }
    const handleConfirmPassChange = event => {
        if (event.target.value === userInfo.password) {
            setUserInfo({ ...userInfo, confirmPass: event.target.value });
            setErrors({ ...errors, password: "" })
        } else {
            setErrors({ ...errors, password: "Password Don't Match!!" });
            setUserInfo({ ...userInfo, confirmPass: "" })
        }
    }
    const handleSignUp = async event => {
        event.preventDefault();
        const displayName = event.target.name.value;
        await createUserWithEmailAndPassword(userInfo.email, userInfo.password);
        await updateProfile({ displayName });
        event.target.reset();
    };

    useEffect(() => {
        if (error) {
            switch (error?.code) {
                case "auth/invalid-email":
                    toast.error('Invalid Email');
                    break;
                case "auth/user-exists":
                    toast.error("Please Register")
                    break;
                case "auth/invalid-password":
                    toast.error("Wrong Password");
                    break;
                case "something went wrong":
                default:
                    break
            }
        }
    }, [error]);
    if (user) {
        toast.success('User Sign Up Successfully')
    }
    if (loading || updating) {
        <Loading></Loading>
    };
    if (error || updateError) {
        toast.error('Something Went Wrong!!!')
    }
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || "/";
    if (token) {
        navigate(from, { replace: true });
    }
    return (
        <div className='md:grid mb-20 grid-cols-2'>
            <div className='font-custom'>
                <h2 style={{ color: '#64B9B4' }} className='text-center text-3xl py-5'>Create Account</h2>
                <SocialLogin></SocialLogin>
                <p style={{ color: '#494949' }} className='text-xl text-center'>or use your email for registration</p>
                <div className='w-3/6 mx-auto py-20'>
                    <form onSubmit={handleSignUp}>
                        <div className="mb-6">
                            {/* <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your Name</label> */}
                            <input type="text" name='name' id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='Your Name' required />
                        </div>
                        <div className="mb-6">
                            {/* <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label> */}
                            <input type="email" onChange={handleEmailChange} id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='Your Email' required />
                            {errors?.email && <p className='text-red-600 mt-2 font-bold'>{errors.email}</p>}
                        </div>
                        <div className="mb-6">
                            {/* <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your password</label> */}
                            <input type="password" onChange={handlePassChange} name='password' id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='Password' required />
                            {errors?.password && <p className='text-red-600 mt-2 font-bold'>{errors.password}</p>}
                        </div>
                        <div className="mb-6">
                            {/* <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your password</label> */}
                            <input type="password" onChange={handleConfirmPassChange} name='confirmPassword' id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='Confirm-Password' required />
                        </div>
                        <button type="submit" className="text-white rounded px-5 py-4 text-xl font-bold sign-btn">SIGN UP</button>
                    </form>
                </div>
            </div>
            <div className="login-img relative font-custom">
                <div className='absolute bottom-0 left-0 right-0 top-[40%] '>
                    <h1 className='text-center text-white z-50 text-4xl mr-10 mb-10 font-bold'>Welcome Back!</h1>
                    <h5 className='text-center text-white font-semibold z-50 text-xl mr-5'>To keep connected with us please <br /> login with your personal info</h5>
                    <p className='text-center  z-50 m-10 text-2xl'><Link className='border-login text-white font-bold py-2 px-5' to="/signin">SIGNIN</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Signup;

