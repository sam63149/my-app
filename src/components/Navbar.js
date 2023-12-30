import React from 'react';
import '../App.css';

export default function Navbar() {
	return (
     <nav className="navbar">
      <div className="container-fluid">
        <img src="https://cdn-icons-png.flaticon.com/512/3389/3389081.png" alt="book_img" />
       <form className="search-bar" role="search">
        <input className="search" type="search" placeholder="Search" aria-label="Search" />
		<button className="submit" type="submit">Search</button>
       </form>
      </div>
     </nav>
    )
}
