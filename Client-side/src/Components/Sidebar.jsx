import React, { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import './Sidebar.css';
import { ToastContainer } from 'react-toastify';
import GameDropdown from './Gamedropdown'
import {
  FaHome,
  FaGamepad,
  FaUser,
  FaStore,
  FaCartPlus,
  FaBars,
  FaFire,
} from "react-icons/fa";
import { CiLogout } from "react-icons/ci";
import { handlesuccess } from '../util';

const Sidebar = () => {
  const navigate = useNavigate();
  const [isopen, setIsopen] = useState(false)
  const [loggedinuser, setLoggedinuser] = useState('');
  useEffect(() => {
    setLoggedinuser(localStorage.getItem('loggedInuser'))
  }, [])
  const handleclick = (e) => {
    localStorage.removeItem('token')
    localStorage.removeItem('loggedInuser')
    handlesuccess("Logged out Successfully")
    setTimeout(() => {
      navigate('/login')
    }, 1000);
  }
  const toggle = () => setIsopen(!isopen)
  const itemMenu = [
    {
      path: '/',
      name: "Home",
      icon: <FaHome />
    },
    {
      path: '/games',
      name: "All Games",
      icon: <FaGamepad />,
    },
    {
      path: '/library',
      name: "Library",
      icon: <FaStore />
    },
    {
      path: '/cart',
      name: "Cart",
      icon: <FaCartPlus />
    },
    {
      path: '/user',
      name: "User",
      icon: <FaUser />
    },
    {
      icon: <FaFire />,
      Component:<GameDropdown/>,
    },
    {
      name: "Logout",
      icon: <CiLogout onClick={handleclick} />
    },
  ];

  return (
    <div className="container">
      <div style={{ width: isopen ? '220px' : '50px' }} className="sidebar">
        <div className="top_section">
          <h1 style={{ display: isopen ? 'block' : 'none' }} className="logo">GameZone</h1>
          <div className="bars">
            <FaBars onClick={toggle} />
          </div>
        </div>
        {
          itemMenu.map((item, index) => (
            <NavLink
              to={item.path}
              key={index}
              className={'link'}
            >
              <div className="link_content">
                <div className="icon">{item.icon}</div>
                <div style={{ opacity: isopen ? 1 : 0, display: isopen ? 'block' : 'none' }} className="link_text" >{item.name}</div>
                <div style={{display: isopen ? 'block':'none'}}>{item.Component}</div>
              </div>
            </NavLink>

          ))
        }

      </div>
    </div>

  );
};

export default Sidebar;
