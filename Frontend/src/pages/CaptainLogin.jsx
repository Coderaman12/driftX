import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const CaptainLogin = () => {

    const[email,setEmail] = useState("");
        const[password,setPassword] = useState("");
        const[captainData,setCaptainData] = useState({})
            
        const submitHandler = (e)=>{
            e.preventDefault();
            // console.log(captainData);
            setCaptainData({
                email:email,
                password:password
            });
            setEmail("");
            setPassword("");
        }
        

    return (
        <div className='p-7 bg-red-100 flex h-screen flex-col justify-between'>
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
                    className='w-full bg-black rounded text-white py-3 text-xl tracking-wider'
                    >Login</button>
                    <p className='font-xl mt-2 capitalize'>New Captain?
                        <Link to='/captain-signup'
                        className='text-blue-600 ml-2'
                        >
                            Sign up as new Captain
                        </Link>
                    </p>
                </form>
            </div>
            <div>
                <Link
                    to='/login'
                    className='flex item-center justify-center w-full rounded bg-green-400 text-white py-3 text-xl tracking-wider'
                    >Sign In As User</Link>
                </div>
        </div>
    )
}

export default CaptainLogin