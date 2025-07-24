import React, { useEffect, useState } from 'react'
import Carousel from '../Components/Carousel'

import './Home.css'
import { ToastContainer } from 'react-toastify';
import { handleerror, handlesuccess } from '../util';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [islogged, setIslogged] = useState('');
  const navigate = useNavigate();
useEffect(() => {
  const token = localStorage.getItem('token');

  if (!token) {
    handleerror('Please login');
    setTimeout(() => {
      navigate('/login');
    }, 3000);
  } 
}, []);
  return (
    <>
      <Carousel />
      <ToastContainer />
    </>
  )
}

export default Home
