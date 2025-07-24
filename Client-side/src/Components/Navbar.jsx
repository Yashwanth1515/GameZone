import React, { useEffect, useState } from 'react'
import './Navbar.css'
import { Link,useNavigate } from 'react-router-dom'



const Navbar = () => {
  const navigate = useNavigate();
const handleclick=()=>{
  navigate('/search')
}
  return (
    <>
      <div className="navbar">
        <div className="navbar-logo">GameZone</div>
        <form  >
          <div className="search-header">
            <input onClick={handleclick}  placeholder="Search" className="search-header__input" type="text" />
            <button  className="search-header__button">
              <svg
                fill="none"
                viewBox="0 0 18 18"
                height="18"
                width="18"
                className="search-header__icon"
              >
                <path
                  fill="#fff"
                  d="M7.132 0C3.197 0 0 3.124 0 6.97c0 3.844 3.197 6.969 7.132 6.969 1.557 0 2.995-.49 4.169-1.32L16.82 18 18 16.847l-5.454-5.342a6.846 6.846 0 0 0 1.718-4.536C14.264 3.124 11.067 0 7.132 0zm0 .82c3.48 0 6.293 2.748 6.293 6.15 0 3.4-2.813 6.149-6.293 6.149S.839 10.37.839 6.969C.839 3.568 3.651.82 7.132.82z"
                ></path>
              </svg>
            </button>
          </div>
        </form>

        <Link to="/login">
          <div  className="cart"><button>Login</button></div>
        </Link>
      </div>
    </>
  )
}

export default Navbar
