import { Settings } from '@mui/icons-material'
import React from 'react'
import './bottomcard.scss'
import Bottomchart from '../bottomchart/Bottomchart'

const Bottomcard = () => {
  return (
    <div className='bottomcard'>
        <div className='top'>
            <div className='title'> Benefits </div>
            <div className='calendar'> June - December </div>
            <div className='set-cont'>
                <Settings className='icon' />
            </div>
        </div>
        <div className='bottom'>
            <Bottomchart />
        </div>
    </div>
  )
}

export default Bottomcard