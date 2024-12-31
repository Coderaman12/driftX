import React from 'react'
import { Route, Routes } from "react-router-dom"
import Start from "./pages/Start";
import UserLogin from './pages/UserLogin';
import UserSignUp from './pages/UserSignUp';
import CaptainSignUp from './pages/CaptainSignUp';
import CaptainLogin from './pages/CaptainLogin';
import Home from './pages/Home';
import UserProtectedWrapper from './pages/protectedPages/UserProtectedWrapper';
import UserLogout from './pages/UserLogout';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/login" element={<UserLogin />} />
        <Route path="/signup" element={<UserSignUp />} />
        <Route path="/captain-login" element={<CaptainLogin />} />
        <Route path="/captain-signup" element={<CaptainSignUp />} />
        <Route path='/home' element={
          <UserProtectedWrapper>
            <Home />
          </UserProtectedWrapper>
          } />
        <Route path="/logout" element={<UserProtectedWrapper>
          <UserLogout />
        </UserProtectedWrapper>}/>
      </Routes>
    </div>
  )
}

export default App