import React, { useEffect, useState } from 'react'
import { FaRegUser } from "react-icons/fa";
import './Userdetails.css'
const Userdetails = () => {
  const [islogged, setIslogged] = useState('');
  const [isemail, setIsemail] = useState('');

  useEffect(() => {
    setIslogged(localStorage.getItem('loggedInuser'));
    setIsemail(localStorage.getItem('email'));
  }, [])
  return (
    <>
      <div className="block">
        <div  className="image-block">
          < FaRegUser size={200} />
        </div>
        <div className="details-block">
          <h1>UserName:{islogged}</h1>
          <h2>email:{isemail}</h2>
          <h2>Purchases:</h2>
        </div>
      </div>
    </>
  )
}

export default Userdetails
