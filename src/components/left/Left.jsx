import { MoreHorizOutlined, StackedBarChart, TrendingDown, TrendingUp } from '@mui/icons-material'
import React from 'react'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './left.scss'

const Left = () => {

    const percentage = 66;

  return (
    <div className='left'>
        <div className='top'>
            <div className='text'> Overall Balance </div>
            <div className='balance'> $11,121.22 </div>
            <div className='but-div'>
                <div className='first'>
                    <TrendingUp className='icons'/>
                    <label> Send </label>
                </div>
                <div className='second'>
                    <TrendingDown className='icons'/>
                    <label> Receive </label>
                </div>
                <div className='third'>
                    <MoreHorizOutlined className='icons' />
                </div>
            </div>
        </div>
        <div className='bottom'>
            <div className='upper'>
                <div className='capa-cont'>
                    <div className='capa-div'> Capabilities </div>
                    <div className='net-div'> Total Net Growth of 42% </div>
                </div>
                <div className='inner'>
                    <div> <StackedBarChart className='icons' /> </div>
                </div>
            </div>
            <div className='lower'>
                <div className='circle'>
                    <CircularProgressbar value={80} strokeWidth={20} text={` ${percentage}%`} />
                </div>
                <div className='assets'>
                    <div className='ass-div'>
                        <div className='ass'> NFT Assets </div>
                        <span> 17% </span>
                        <div className='bars'><label></label></div>
                    </div>
                    <div className='ass-div'>
                        <div className='ass'> Stocks </div>
                        <span> 25% </span>
                        <div className='bars'><label></label></div>
                    </div>
                    <div className='ass-div'>
                        <div className='ass'> Crypto </div>
                        <span> 58% </span>
                        <div className='bars'><label></label></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Left