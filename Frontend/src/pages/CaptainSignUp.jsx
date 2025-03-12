import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom';
import { CaptainDataContext } from '../context/CaptainContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const CaptainSignUp = () => {

    const navigate = useNavigate();
    const[email,setEmail] = useState("");
    const[password,setPassword] = useState("");
    const[firstname,setFirstname] = useState("");
    const[lastname,setLastname] = useState("");
    const[vehicleColor, setVehicleColor] = useState("");
    const[vehicleType, setVehicleType] = useState("");
    const[vehicleCapacity, setVehicleCapacity] = useState("");
    const[vehiclePlate, setVehiclePlate] = useState("");
    // const[captainData,setCaptainData] = useState({})



    const {captain,setCaptain} = useContext(CaptainDataContext);
                
    const submitHandler =async (e)=>{
        e.preventDefault();
        // console.log(captainData);
        const newCaptain = {
            fullname:{
                firstname:firstname,
                lastname:lastname
            },
            email:email,
            password:password,
            vehicle:{
                color:vehicleColor,
                plate:vehiclePlate,
                capacity:vehicleCapacity,
                vehicleType:vehicleType,
            }
        };

        const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/register`,newCaptain)
        if(response.status === 201){
            const data = response.data;
            setCaptain(data.captain);
            localStorage.setItem('token',data.token);
            navigate('/captain-home')
        }

        setEmail("");
        setPassword("");
        setFirstname("");
        setLastname("");
        setVehicleColor("");
        setVehicleType("");
        setVehicleCapacity("");
        setVehiclePlate("");
    }

    return (
        <div className='p-5 bg-red-100 flex h-screen flex-col justify-between'>
            <div>
                <img className='w-20 mb-5' src="https://clipground.com/images/drift-logo-1.jpg" alt="" />  
                <form 
                    onSubmit={(e)=>{submitHandler(e)}}
                    >
                    <h3 className='text-xl mb-1'> Full name </h3>
                    <div className='flex gap-2'>
                        <input 
                        value={firstname}
                        onChange={(e)=>{setFirstname(e.target.value)}}
                        className='bg-[#eeeeee] mb-1 py-2 px-4 border w-full text-lg placeholder:text-base'
                        type="text" 
                        required
                        placeholder='First name'
                        />
                        <input 
                        value={lastname}
                        onChange={(e)=>{setLastname(e.target.value)}}
                        className='bg-[#eeeeee] mb-1 py-2 px-4 border w-full text-lg placeholder:text-base'
                        type="text" 
                        required
                        placeholder='Last name'
                        />
                </div>
                    
                    <h3 className='text-xl mb-1'> Whats your email </h3>
                    <input 
                    value={email}
                    onChange={(e)=>{setEmail(e.target.value)}}
                    className='bg-[#eeeeee] mb-1 py-2 px-4 border w-full text-lg placeholder:text-base'
                    type="email" 
                    required
                    placeholder='email@example.com'
                    />
                    <h3 className='text-xl mb-1'>Enter Password</h3>
                    <input 
                    value={password}
                    onChange={(e)=>{setPassword(e.target.value)}}
                    className='bg-[#eeeeee] mb-1 py-2 px-4 border w-full text-lg placeholder:text-base'
                    type="password" 
                    required
                    placeholder='password'
                    />
                    <h3 className='text-xl mb-1'> Vehicle details </h3>
                    <div>
                        <div className='flex gap-2'>
                            <input 
                            value={vehicleColor}
                            onChange={(e)=>{setVehicleColor(e.target.value)}}
                            className='bg-[#eeeeee] mb-1 px-4 border w-full text-lg placeholder:text-base'
                            type="text" 
                            required
                            placeholder='color'
                            />
                            <input 
                            value={vehiclePlate}
                            onChange={(e)=>{setVehiclePlate(e.target.value)}}
                            className='bg-[#eeeeee] mb-1 py-2 px-4 border w-full text-lg placeholder:text-base'
                            type="text" 
                            required
                            placeholder='plate number'
                            />
                        </div>
                        <div className='flex gap-2'>
                            <input 
                            value={vehicleCapacity}
                            onChange={(e)=>{setVehicleCapacity(e.target.value)}}
                            className='bg-[#eeeeee] mb-5 py-2 px-4 border w-full text-lg placeholder:text-base'
                            type="number" 
                            required
                            placeholder='capacity'
                            />
                            <select 
                            value={vehicleType}
                            onChange={(e)=>{setVehicleType(e.target.value)}}
                            className='bg-[#eeeeee] mb-5 py-2 px-4 border w-full text-lg placeholder:text-base'
                            type="text" 
                            required
                            placeholder='Vehicle Type'
                            >
                                <option value="" disabled>Select Vehicle type</option>
                                <option value="car">Car</option>
                                <option value="auto">Auto</option>
                                <option value="bike">Bike</option>
                            </select>
                        </div>
                    </div>
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
