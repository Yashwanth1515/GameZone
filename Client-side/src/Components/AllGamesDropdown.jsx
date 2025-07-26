import React from 'react'
import { NavLink } from 'react-router-dom';
import './AllGamesDrop.css'
const AllGamesDropdown = () => {
    return (
        <>
            <div className="kiditems">
                <div className="dropdown">
                    <NavLink to="#">Kids</NavLink>
                    <NavLinkLink to="#">Family</NavLinkLink>
                    <NavLinkLink to="#">Puzzle</NavLinkLink>
                    <NLink to="#">18+</NLink>
                </div>
            </div>
        </>
    )
}

export default AllGamesDropdown
