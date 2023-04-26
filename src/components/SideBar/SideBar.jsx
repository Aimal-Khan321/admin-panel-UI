import React from 'react'
import './SideBar.css'
import { ChatBubbleOutline,BarChart ,DynamicFeed, LineStyle, MailOutline, PermIdentity, Report, Storefront, Timeline, TrendingUp, WorkOutline } from '@mui/icons-material'
import {Link} from 'react-router-dom'

export default function SideBar() {
  return (
    <div className='sideBar'>
      <div className="sideBarWrapper">
          <div className="sideBarMenu">
            <h3 className="sidebarTitle">Dashboard</h3>
            <ul className="sideBarList">
                <Link to='/' className="link">
                <li className="sideBarListItem active">
                    <LineStyle className='sideBarIcon'/>
                    Home
                </li>
                </Link>

                <li className="sideBarListItem">
                    <Timeline className='sideBarIcon'/>
                    Analytics
                </li>

                <li className="sideBarListItem">
                    <TrendingUp className='sideBarIcon'/>
                    Sales
                    Home
                </li>
            </ul>
          </div>

          <div className="sideBarMenu">
            <h3 className="sidebarTitle">Quick Menu</h3>
            <ul className="sideBarList">
                <Link to='/users' className='link'>
                <li className="sideBarListItem">
                    <PermIdentity/>
                    Users
                </li>
                </Link>

                <Link to='/products' className='link'>
                <li className="sideBarListItem">
                    <Storefront/>
                    Products
                </li>
                </Link>

                <li className="sideBarListItem">
                    <BarChart/>
                    Reports
                </li>
            </ul>
          </div>

          
          <div className="sideBarMenu">
            <h3 className="sidebarTitle">Notifications</h3>
            <ul className="sideBarList">
                <li className="sideBarListItem">
                    <MailOutline/>
                    Mail
                </li>

                <li className="sideBarListItem">
                    <DynamicFeed/>
                    FeedBack
                </li>

                <li className="sideBarListItem">
                    <ChatBubbleOutline/>
                    Messages
                </li>
            </ul>
          </div>

          
          <div className="sideBarMenu">
            <h3 className="sidebarTitle">Staff</h3>
            <ul className="sideBarList">
                <li className="sideBarListItem">
                    <WorkOutline/>
                    Manage
                </li>

                <li className="sideBarListItem">
                    <Timeline/>
                    Analytics
                </li>

                <li className="sideBarListItem">
                    <Report/>
                    Reports
                </li>
            </ul>
          </div>
      </div>
    </div>
  )
}
