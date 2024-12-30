import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const CaptainSignUp = () => {
    const[email,setEmail] = useState("");
    const[password,setPassword] = useState("");
    const[firstname,setFirstname] = useState("");
    const[lastname,setLastname] = useState("");
    const[captainData,setCaptainData] = useState({})
                
    const submitHandler = (e)=>{
        e.preventDefault();
        // console.log(captainData);
        setCaptainData({
            fullname:{
                firstname:firstname,
                lstname:lastname
            },
            email:email,
            password:password
        });
        setEmail("");
        setPassword("");
        setFirstname("");
        setLastname("");
    }

    return (
        <div className='p-7 bg-red-100 flex h-screen flex-col justify-between'>
            <div>
                <img className='w-20 mb-10' src="https://clipground.com/images/drift-logo-1.jpg" alt="" />  
                <form 
                    onSubmit={(e)=>{submitHandler(e)}}
                    >
                    <div className='flex gap-2'>
                        <input 
                        value={firstname}
                        onChange={(e)=>{setFirstname(e.target.value)}}
                        className='bg-[#eeeeee] mb-5 py-2 px-4 border w-full text-lg placeholder:text-base'
                        type="text" 
                        required
                        placeholder='First name'
                        />
                        <input 
                        value={lastname}
                        onChange={(e)=>{setLastname(e.target.value)}}
                        className='bg-[#eeeeee] mb-5 py-2 px-4 border w-full text-lg placeholder:text-base'
                        type="text" 
                        required
                        placeholder='Last name'
                        />
                </div>
                    
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
                    className='w-full bg-black rounded capitalize text-white py-3 text-xl tracking-wider'
                    >create captain account</button>
                    <p className='font-xl mt-2 capitalize'>Already register?
                        <Link to='/captain-login'
                        className='text-blue-600 ml-2'
                        >
                            Captain login
                        </Link>
                    </p>
                </form>
            </div>
            <div>
            <p
              className='text-[2vw]'
            >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique dolores atque, error iste assumenda odit excepturi recusandae sequi unde facere.
            </p>
            </div>
        </div>
    )
}

export default CaptainSignUp
