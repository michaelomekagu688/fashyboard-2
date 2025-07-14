
import React from 'react'
import './sidebar.scss'
import {AddCircleOutline, BusinessCenterOutlined, CardGiftcard, DonutSmallOutlined, MoreHorizOutlined, SyncAlt } from '@mui/icons-material'

function Sidebar(){
    return(
        <div className='sidebar'>
            <div className='img-div'>  
                <img src='https://i.pinimg.com/736x/3a/18/f5/3a18f5865092b3319d466c434f7e1119.jpg'
                 alt='man-img'
                 className='man-img'
                />
                <label> Ruben Torff </label>
            </div>
            <ul>
                <li> 
                    <AddCircleOutline className='icons-side' />
                    <label> Top Up </label>
                </li>
                <li > 
                    <SyncAlt className='icons-side' />
                    <label> Transfer </label>
                </li>
                <li> 
                    <DonutSmallOutlined className='icons-side' />
                    <label> Taxes </label>
                </li>
                <li> 
                    <CardGiftcard className='icons-side' />
                    <label> Gifts </label>
                </li>
                <li> 
                    <BusinessCenterOutlined className='icons-side' />
                    <label> Portfolio </label>
                </li>
                <li> 
                    <MoreHorizOutlined className='icons-side' />
                    <label> More </label>
                </li>
            </ul>
        </div>
    )
}
export default Sidebar