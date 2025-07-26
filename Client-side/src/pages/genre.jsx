import axios from 'axios';
import React, { useEffect, useState } from 'react'
const key = '44055de4b2b94afb84724dd86c4c4132'
import { useParams } from 'react-router-dom';
import './genre.css'
const genre = () => {
    const [games, setgames] = useState(null);
    const [loading, setLoading] = useState(true);
    const { genres } = useParams();
    useEffect(() => [
        axios.get(`https://api.rawg.io/api/games/${genres}?key=${key}`)
            .then((res) => {
                setgames(res.data.resluts);
                setLoading(false);
            })
            .catch((err) => {
                console.log(err);
            })
    ]), [genres]
    if(loading) return <p>Loading...</p>
    return (
        <>
            <div className="content">
                <div className="bg-image">
                    <img src={games.background_image} alt={games.name} />
                </div>
                <div className="name"><h1>{games.name}</h1>
                    <p><strong>Published on : {games.released}</strong></p>
                    <p className='rate'>Rating : ⭐{games.rating}</p>
                    <h4 className='genre'>Genre:{games.genres.map((g,index)=>{
                        <p key={index} >{g.name}</p>
                    })}</h4>
                    <button className='btn'>Install</button>
                </div>
            </div>
        </>
    )
}

export default genre
