import {CalendarTodayOutlined,DashboardOutlined, InsertDriveFileOutlined, PieChartOutline, SettingsOutlined } from '@mui/icons-material'
import React from 'react'
import './navbar.scss'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='logo'> Grubbly </div>
      <ul>
        <li> <DashboardOutlined className='icons'/> </li>
        <li> <PieChartOutline className='icons' /> </li>
        <li> <InsertDriveFileOutlined className='icons' /> </li>
        <li> <CalendarTodayOutlined className='icons'/> </li>
        <li className='settings'> <SettingsOutlined className='icons' /> </li>
      </ul>
    </div>
  )
}

export default Navbar