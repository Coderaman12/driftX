import React, { useRef, useState } from 'react'
import driftxLogo from '../assets/images/driftxLogo.png';
import homeimage from '../assets/images/homeimage.gif';

import {useGSAP} from '@gsap/react';
import gsap from 'gsap'; 
import LocationSearchPanel from '../components/LocationSearchPanel';
const Home = () => {
    const[pickup,setpickup] = useState();
    const[drop,setdrop] = useState();

    const panelRef = useRef(null);
    const panelCloseRef = useRef(null);
    const[panelOpen,setPanelOpen] = useState(false);
    const submitHandler = (e)=>{
        e.preventDefault();
    }


    // animation 
    useGSAP(()=>{
        if(panelOpen){
            gsap.to(panelRef.current,{
                height:"70%",
                padding:24
            })
            gsap.to(panelCloseRef.current,{
                opacity:"1",
            })
        }else{
            gsap.to(panelRef.current,{
                height:"0%",
            })
            gsap.to(panelCloseRef.current,{
                opacity:"0",
            }) 
        }
    },[panelOpen])

    return (
        <div className='relative h-screen w-screen'>
            <img className='w-16 absolute left-5 top-4' src={driftxLogo} alt="" />
            <div className='h-screen w-screen absolute'>
                <img className='h-full w-full object-cover' src={homeimage} alt="" />
            </div>
            <div className='flex flex-col justify-end h-screen w-full absolute top-0'>
                <div className='h-[30%] p-5 rounded-t-lg bg-white relative'>
                    <h4 
                        ref={panelCloseRef}
                        onClick={()=>{setPanelOpen(false)}}
                        className='opacity-0'
                    >
                        <i className="ri-arrow-down-wide-line absolute right-6 text-2xl"></i>
                    </h4>
                    <h2 className='text-2xl mb-5 font-bold' >Find a Ride</h2>
                    <form onSubmit={(e)=>{submitHandler}}>
                        <div
                            className='line absolute bg-black h-16 w-1 left-10 bottom-12' 
                        ></div>
                        <input 
                            value={pickup}
                            onChange={(e)=>{setpickup(e.target.value)}}
                            onClick={()=>{
                                setPanelOpen(true);
                            }}
                            className='w-full px-10 border-1 py-2 rounded-lg bg-[#eeeeee] '
                            type="text"
                            placeholder='Pickup Location'
                        />
                        <input 
                            value={drop}
                            onChange={(e)=>{setdrop(e.target.value)}}
                            onClick={()=>{
                                setPanelOpen(true);
                            }}
                            className='w-full mt-4 px-10 border-1 py-2 rounded-lg bg-[#eeeeee] '
                            type="text"
                            placeholder='Drop Location'
                        />
                    </form>
                </div>
                <div ref={panelRef} className='h-0 bg-white'>
                    <LocationSearchPanel />
                </div>
            </div>
        </div>
    )
}

export default Home
