import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom';
import './Game-details.css'
const API_KEY2 = '44055de4b2b94afb84724dd86c4c4132';
const Gamedetails = () => {
  const [games, setGame] = useState(null);
  const [loading, setLoading] = useState(true);

  const { id } = useParams();
  const {gameId} = useParams();

  useEffect(() => {
    axios.get(`https://api.rawg.io/api/games/${id}?key=${API_KEY2}`)
      .then((res) => {
        setGame(res.data);
        setLoading(false)
      })
      .catch((err) => {
        console.log(err);
        setLoading(false)
      })
  }, [id])

  if (loading) return <p>Loading...</p>
  return (
    <>
      <div className="gamescontainer">
        <div className="gameimage2">
          <img src={games.background_image} alt={games.name} />
        </div>
        <div className="gamename">
          <h1>{games.name}</h1>
          <p><strong>Published on : {games.released}</strong></p>
          <p>Rating : ⭐{games.rating}</p>
          <h4 className='h4'>Genre:{games.genres.map((g, index) => (
            <p key={index}>{g.name}</p>
          ))}</h4>
          <button className='btn1'>Install</button>
        </div>
      </div>
      <div className="desc"><h3>More Details:</h3> <br />{games.description}</div>
    </>
  )
}

export default Gamedetails
