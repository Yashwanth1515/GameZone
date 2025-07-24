import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import './Game-card.css';
import { Link } from 'react-router-dom';
import { IoIosArrowForward ,IoIosHeartEmpty} from "react-icons/io";
import { FaCartPlus } from "react-icons/fa";
import { ToastContainer } from 'react-toastify';
import {CartContext} from '../useContext/CartContext'
import Footer from '../Components/Footer'
const API_KEY = '44055de4b2b94afb84724dd86c4c4132';

const Gamecard = () => {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const {addtoCart} = useContext(CartContext)
  

useEffect(() => {
  axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&page_size=25`)
      .then((res) => {
        setGames(res.data.results);
        // console.log(res.data.results)
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
    }, []);

  if (loading) return (
    <div className="loader-container">
      <div className="loader"></div>
    </div>
  )


  return (
    <>
      <center>
        <h1>Popular Games</h1>
      </center>
      <div className="game-container">
        {games.map((game) => (
          <div key={game.id} className="game-card">
            <img src={game.background_image} alt={game.name} className="game-image" />
            <h3 className="game-title">{game.name}</h3>
            <p className="game-rating">⭐ {game.rating} / 5</p>
            <div className="buttons">
              <Link to={`/games/${game.id}`} key={game.id} className="game-link">
                <button  className="installbtn">Install <IoIosArrowForward /></button>
              </Link>
            </div>
            <div onClick={()=>{
              addtoCart({
                id: game.id,
                name: game.name,
                price: Math.floor(Math.random()*60)+20,
                image: game.background_image,
              })
            }} className="icon1">
              <FaCartPlus />
              <p className='love'><IoIosHeartEmpty /></p>
            </div>
          </div>

        ))}
        <ToastContainer />
      </div >
      <Footer/>
    </>
  );
};

export default Gamecard;
