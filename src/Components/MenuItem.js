import React from 'react'

 export default function MenuItem(props) {
  return (
    <div className='menuItem'>
        <div style={{backgroundImage:`url(${props.image})`}}></div>
        <h2>{props.name}</h2>
        <h2>{props.chinesename}</h2>
    </div>
  )
}
