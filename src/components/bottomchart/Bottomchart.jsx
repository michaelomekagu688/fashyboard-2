import React, { PureComponent } from 'react';
import './bottomchart.scss'
import { AreaChart, Area, XAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'June', uv: 100 },
  { name: 'July', uv: 400 },
  { name: 'August', uv: 300 },
  { name: 'September', uv: 600 },
  { name: 'October', uv: 500 },
  { name: 'November', uv: 800 },
  { name: 'December', uv: 900 },
];

export default class Bottomchart extends PureComponent {


  render() {
    return (
        <div className='butt'>
            <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                width={500}
                height={400}
                data={data}
                margin={{
                    top: 10,
                    right: 30,
                    left: 0,
                    bottom: 0,
                }}
                >
                <CartesianGrid strokeDasharray="0" stroke='#fff' />
                <XAxis dataKey="name" />
                <Tooltip />
                <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    );
  }
}
