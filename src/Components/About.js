import React from 'react'
import "../styles/About.css"
import about from "../Assets/About.jpg"
import interior1 from "../Assets/gallery-interior-3.jpg"


export default function About() {
  return (
    <div className="about">
        <div style={{backgroundImage:`url(${about})`}}></div>
        <div className='about-text'>
        <div className="about-left">
            <h2>About us</h2>
            <p>Besides serving one of the most delicious Chinese cuisines, Star restaurant is a business of second chances. It was started in April 2013 with staff mainly consisting of ex-offenders (More than 50% of our staff strength are from ex-offenders), as Soon Huat embraces a vision to give ex-offenders and former drug-abusers a second chance to begin their lives anew with a meaningful career.</p>
            <img src={interior1} alt="Logo" />
        </div>
        <div className='about-right'>
            <h3>A PLACE FOR TEA, A PLACE TO GATHER</h3>
            <p>With its elegant entrance, contemporary interiors accented with Oriental motifs and a rotunda illuminated by a cascading chandelier, the sophisticated atmosphere of our elegant restaurant in Singapore sets the stage for a bold display of culinary artistry, complemented by warm service. </p>
       </div>
        </div>
    </div>
  )
}
