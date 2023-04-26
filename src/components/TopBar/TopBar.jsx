import React from 'react'
import './TopBar.css'
import { Language, NotificationsNone, Settings } from '@mui/icons-material'

export default function TopBar() {
  return (
    <div className='topBar'>
      <div className="topBarWrapper">
        <div className="topLeft">
          <div className="logo">AdminPanel</div>
        </div>
        <div className="topRight">
          <div className="topBarIconContainer">
            <NotificationsNone/>
            <span className="topIconBadge">2</span>
          </div>
          <div className="topBarIconContainer">
            <Language/>
            <span className="topIconBadge">2</span>
          </div>

          <div className="topBarIconContainer">
            <Settings/>
          </div>

          <img src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="topAvatar" />
          
          </div>  
      </div>      
    </div>
  )
}
