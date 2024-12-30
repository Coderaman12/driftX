import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const UserSignUp = () => {
  const[email,setEmail] = useState("");
  const[password,setPassword] = useState("");
  const[firstname,setFirstname] = useState("");
  const[lastname,setLastname] = useState("");
  const[userData,setUserData] = useState({})
          
  const submitHandler = (e)=>{
    e.preventDefault();
    // console.log(userData); 
    setUserData({
      fullname:{
        firstname:firstname,
        lastname:lastname
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
    <div className='p-7 flex h-screen flex-col justify-between'>
        <div>
            <img className='w-20 mb-10' src="https://clipground.com/images/drift-logo-1.jpg" alt="" />  
            <form 
                onSubmit={(e)=>{submitHandler(e)}}
                >
                <h3 className='text-xl mb-2'> FullName </h3>
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
                className='bg-[#eeeeee] mb-5 py-2 px-4 border w-full text-lg placeholder:text-base'
                type="email" 
                required
                placeholder='email@example.com'
                />
                <h3 className='text-xl mb-2'>Enter Password</h3>
                <input 
                value={password}
                onChange={(e)=>{setPassword(e.target.value)}}
                className='bg-[#eeeeee] mb-5 py-2 px-4 border w-full text-lg placeholder:text-base'
                type="password" 
                required
                placeholder='password'
                /> 
                <button
                className='flex items-center justify-center w-full bg-black rounded text-white py-3 text-xl tracking-wider'
                >Create Account</button>
                <p className='font-xl mt-2 capitalize'>Already Register?
                    <Link to='/login'
                    className='text-blue-600 ml-2'
                    >
                        Login 
                    </Link>
                </p>
            </form>
        </div>
        <div>
            <p
              className='text-[2vw]'
            >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique dolores atque, error iste assumenda odit excepturi recusandae sequi unde facere.</p>
        </div>
    </div>
  )
}

export default UserSignUp
