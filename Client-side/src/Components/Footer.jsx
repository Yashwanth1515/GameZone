import React from 'react'
import './Footer.css';
import { Link } from 'react-router-dom';
import { FaInstagram, FaTwitter, FaDiscord } from 'react-icons/fa';
const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="list1">
          <p>GameZone</p>
          <ul>
            <Link><li>About</li></Link>
            <Link><li>New Games</li></Link>
            <Link><li>Top Games</li></Link>
            <Link><li>Offers</li></Link>
            <Link><li>Genre</li></Link>
          </ul>
        </div>
        <div className='list2'>
          <h3>Quick Links</h3>
          <ul >
            <Link to="/"><li>shop</li></Link>
            <Link to='/cart'><li>Cart</li></Link>
            <Link><li>Whitlist</li></Link>
            <Link><li>contact</li></Link>
          </ul>
        </div>
        <div className='list3'>
          <h3>Support</h3>
          <ul >
            <Link to="/"><li>FAQ</li></Link>
            <Link to='/cart'><li>Terms Of Services</li></Link>
            <Link><li>Privacy Policy</li></Link>
            <Link><li>Return Policy</li></Link>
          </ul>
        </div>
        <div className='footicon'>
          <h3 className="font-semibold mb-2">Follow Us</h3>
          <div className="footicons">
            <a href="#" aria-label="Instagram" className="hover:text-pink-500"><i className="fab fa-instagram"><FaInstagram /></i></a>
            <a href="#" aria-label="Twitter" className="hover:text-blue-400"><i className="fab fa-twitter"><FaTwitter /></i></a>
            <a href="#" aria-label="Discord" className="hover:text-indigo-400"><i className="fab fa-discord"><FaDiscord /></i></a>
          </div>
        </div>
      <div className="copyright">
        &copy; {new Date().getFullYear()} GameZone. All rights reserved.
      </div>
      </div>

    </>
  )
}

export default Footer;
