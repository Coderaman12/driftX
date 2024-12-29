import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div className='w-full h-screen bg-red-100'>
            <div className='w-full h-3/4 bg-red-200'>
                <img className='absolute w-20' src="https://clipground.com/images/drift-logo-1.jpg" alt="" />
                <img className='absoute' src="https://images.unsplash.com/photo-1734108039189-f6c123288381?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            </div>
            <div className='flex-col space-y-10 w-full h-1/4 bg-white pb-7 p-4'>
                <h2 className='text-3xl font-bold capitalize' >get Started with <span>drift<span>X</span></span></h2>
                <Link to="/login"
                    className='rounded flex items-center capitalize  justify-center w-full h-[12vw] bg-black text-white text-2xl'>
                    continue 
                    <i className="ri-arrow-right-line"></i>
                </Link>
            </div>
        </div>
    )
}

export default Home
