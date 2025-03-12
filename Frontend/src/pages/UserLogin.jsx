import React, { useState, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserDataContext } from '../context/UserContext';
import axios from 'axios';


const UserLogin = () => {
    const[email,setEmail] = useState("");
    const[password,setPassword] = useState("");
    // const[userData,setUserData] = useState({})

    const navigate = useNavigate();
    const {user,setUser} = useContext(UserDataContext);
        
    const submitHandler = async(e)=>{
        e.preventDefault();
        // console.log(userData)
        const userData = {
            email:email,
            password:password
        };
        const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/login`,userData);
        if(response.status === 200){
            const data = response.data;
            setUser(data.user);
            console.log(response);
            // token send
            localStorage.setItem('token',data.token);

            navigate("/home");
        } 
        setEmail("");
        setPassword("");
    }
    
  return (
    <div className='p-7 flex h-screen flex-col justify-between'>
        <div>
            <img className='w-20 mb-10' src="https://clipground.com/images/drift-logo-1.jpg" alt="" />  
            <form 
                onSubmit={(e)=>{submitHandler(e)}}
                >
                <h3 className='text-xl mb-2'> Whats your email </h3>
                <input 
                value={email}
                onChange={(e)=>{setEmail(e.target.value)}}
                className='bg-[#eeeeee] mb-7 py-2 px-4 border w-full text-lg placeholder:text-base'
                type="email" 
                required
                placeholder='email@example.com'
                />
                <h3 className='text-xl mb-2'>Enter Password</h3>
                <input 
                value={password}
                onChange={(e)=>{setPassword(e.target.value)}}
                className='bg-[#eeeeee] mb-7 py-2 px-4 border w-full text-lg placeholder:text-base'
                type="password" 
                required
                placeholder='password'
                /> 
                <button
                    className='flex items-center justify-center w-full bg-black rounded text-white py-3 text-xl tracking-wider'
                    >Login</button>
                <p className='font-xl mt-2 capitalize'>New User?
                    <Link to='/signup'
                    className='text-blue-600 ml-2'
                    >
                        Sign up as new user
                    </Link>
                </p>
            </form>
        </div>
        <div>
            <Link
                to='/captain-login'
                className='flex item-center justify-center w-full rounded bg-red-400 text-white py-3 text-xl tracking-wider'
                >Sign In As Captain</Link>
            </div>
    </div>
  )
}

export default UserLogin
