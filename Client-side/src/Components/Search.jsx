import React, { useEffect, useState } from 'react'
import './Search.css'
import { Link } from 'react-router-dom';
import useDebounce from '../hooks/useDebounce'
const API_KEY = '44055de4b2b94afb84724dd86c4c4132';
const Search = () => {
  const [query, setQuery] = useState('');
  const [games, setGames] = useState([]);

  const debouncedQuery = useDebounce(query, 500);

  useEffect(() => {
    if (debouncedQuery) {
      fetchgames(debouncedQuery)
    }
    else {
      setGames([])
    }
  }, [debouncedQuery])

  const fetchgames = async (search) => {
    try {
      const response = await fetch(`https://api.rawg.io/api/games?key=${API_KEY}&search=${search}&page_size=10`);
      const data = await response.json();
      setGames(data.results || []);
    }
    catch {
      (err) => {
        console.log(err);
      }
    }
  }
  return (
    <>
      <div className="containers3">

        <form  >
          <div className="search-header1">
            <input onChange={(e) => setQuery(e.target.value)}
              value={query} placeholder="Search" className="search-header__input" type="text" />
            <button className="search-header__button">
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
        <div className="game-container">
          {games.map((game) => (
            <div key={game.id} className="game-card">
              <img src={game.background_image} alt={game.name} className="game-image" />
              <h3 className="game-title">{game.name}</h3>
              <p className="game-rating">⭐ {game.rating} / 5</p>
              <div className="buttons">
                <Link to={`/games/${game.id}`} key={game.id} className="game-link">
                  <button className='installbtn'>Install </button>
                </Link>
              </div>
            </div>

          ))}
        </div >
      </div>
    </>
  )
}

export default Search
