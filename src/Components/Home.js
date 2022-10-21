import React from 'react'
import {Link} from "react-router-dom"
import home from "../Assets/main-dining-hall.jpg"
import "../styles/Home.css"

export default function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${home})` }}>
        <div className="headerContainer" >
            <h1>Star  Chinese Restaurant</h1>
            <p>Fresh and delicious</p>
            <Link to="/menu">
            <button>Order now</button>
            </Link>
        </div>

    </div>
  )
}
