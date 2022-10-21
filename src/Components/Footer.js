import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import EmailIcon from '@mui/icons-material/Email';
import "../styles/Footer.css"

export default function Footer() {
  return (
    <div className='footer'>
      <div className='socialmedia'>
        <InstagramIcon/>
        <FacebookIcon/>
        <YouTubeIcon/>
        <EmailIcon/>
      <p>&copy; 2022 star restaurant reserved copy right</p>

      </div>
    </div>
  )
}
