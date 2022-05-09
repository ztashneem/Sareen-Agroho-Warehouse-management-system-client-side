import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';
import useToken from '../../../Hooks/useToken';
import Loading from '../../../SharePage/Loading/Loading';
// import { IoLogoGoogleplus } from 'react-icons/io';
import SocialLogin from '../SocialLogin/SocialLogin';


const Signin = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || "/";
    const [userInfo, setUserInfo] = useState({
        email: "",
        password: "",
    });
    const [errors, setErrors] = useState({
        email: "",
        password: "",
        other: "",
    })
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [token] = useToken(user);
    const [sendPasswordResetEmail, sending, resetError] = useSendPasswordResetEmail(auth);
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

    const resetPassword = async () => {
        const email = userInfo.email;
        if (email) {
            await sendPasswordResetEmail(email);
            toast.success('Send email!!!');
        }
        else {
            toast.error('Please enter your email address!!!')
        }
    }

    if (loading || sending) {
        <Loading></Loading>
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
    const handleSignIn = async event => {
        event.preventDefault();
        await signInWithEmailAndPassword(userInfo.email, userInfo.password);
        event.target.reset();
    }
    if (token) {
        navigate(from, { replace: true });
    }
    if (user) {
        toast.success('User Sign In Successfully')
    }
    let errorMsg;
    if (error || resetError) {
        errorMsg =
            <p className='text-red-700'>Error : {error?.message}
            </p>;
    }
    useEffect(() => {
        if (error) {
            switch (error?.code) {
                case "auth/invalid-email":
                    toast.error('Invalid Email');
                    break;
                case "auth/user-not-found":
                    toast.error("Please Register")
                    break;
                case "auth/wrong-password":
                    toast.error("Wrong Password");
                    break;
                case "something went wrong":
                default:
                    break
            }
        }
    }, [error]);

    return (
        <div className='md:grid mb-20  grid-cols-2'>
            <div className='font-custom'>
                <h2 style={{ color: '#64B9B4' }} className='text-center text-3xl py-10'>Sign in to....</h2>
                {/* <button onClick={() => signInWithGoogle()} className='rounded-full p-5 mr-10 bg-white'><IoLogoGoogleplus className='text-xl'></IoLogoGoogleplus></button> */}
                <SocialLogin></SocialLogin>
                <p style={{ color: '#494949' }} className='text-center text-xl'>or use your email account</p>
                <div className='w-3/6 mx-auto py-20 h-[50vh]'>
                    <form onSubmit={handleSignIn}>
                        <div className="mb-6">
                            {/* <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label> */}
                            <input type="email" onChange={handleEmailChange} id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='Your Email' required />
                            {errors?.email && <p className='text-red-600 font-bold mt-2'>{errors.email}</p>}
                        </div>
                        <div className="mb-6">
                            {/* <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your password</label> */}
                            <input type="password" onChange={handlePassChange} id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='Password' required />
                            {errors?.password && <p className='text-red-600 font-bold mt-2'>{errors.password}</p>}
                        </div>
                        {errorMsg}
                        <button type="submit" className="text-white rounded px-5 py-4 text-xl font-bold sign-btn">SIGN IN</button>
                    </form>
                    <p>Forget Password <button type="button" class="btn btn-link text-decoration-none" onClick={resetPassword}>Rest Password</button></p>
                </div>
            </div>
            <div className="login-img relative font-custom">
                <div className='absolute bottom-0 left-0 right-0 top-[40%] '>
                    <h1 className='text-center text-white z-50 text-4xl mr-10 mb-10 font-bold'>Hello, Friend</h1>
                    <h5 className='text-center text-white font-semibold z-50 text-xl mr-5'>Enter your personal details and <br /> start journey with us</h5>
                    <p className='text-center z-50 m-10 text-2xl'><Link className='border-login font-bold text-white py-2 px-5' to="/signup">SIGNUP</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Signin;