import React, { useEffect, useState } from 'react'
const API_KEY1 = '44055de4b2b94afb84724dd86c4c4132'
import { IoIosArrowForward, IoIosHeartEmpty } from "react-icons/io";
import { FaCartPlus } from "react-icons/fa"
import axios from 'axios'
import { Link } from 'react-router-dom';
import './Allgames.css'
const Allgames = () => {
    const [games1, setGames] = useState([]);
    const [loading, setisLoading] = useState(true);

    useEffect(() => {
        axios.get(`https://api.rawg.io/api/games?key=${API_KEY1}&page_size=12`)
            .then((res) => {
                setGames(res.data.results);
                setisLoading(false);
            })
            .catch((err) => {
                console.log(err);
                setisLoading(false)
            })
    }, [])
    if (loading) return (
        <div className="loader-container">
            <div className="loader"></div>
        </div>
    )
    return (
        <>
            <center><h1>All Games</h1></center>
            <div className="container1">
                {games1.map((game) => (

                    <div key={game.id} className="card">
                        <img src={game.background_image} alt={game.name} />
                        <h3 className='title'>{game.name}</h3>
                        <p className='rating'>⭐{game.rating}</p>
                        <div className="buttons">
                            <Link to={`/games/${game.id}`} key={game.id}>
                                <button className='btn'>Install <IoIosArrowForward /></button>
                            </Link>
                        </div>
                        <div className="icon1">
                            <FaCartPlus />
                            <p className='love'><IoIosHeartEmpty /></p>
                        </div>
                    </div>

                ))}

            </div>
        </>
    )
}

export default Allgames
