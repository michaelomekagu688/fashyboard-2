
import React from 'react'
import './middle.scss'
import TopCard from '../topcard/Topcard'
import Bottomcard from '../bottomcard/Bottomcard'

const Middle = () => {
  return (
    <div className='middle'>
        <TopCard />
        <Bottomcard />
    </div>
  )
}

export default Middle