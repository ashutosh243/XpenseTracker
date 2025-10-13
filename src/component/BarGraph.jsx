import React from 'react'
import Style from './bargraph.module.css';
import { BarChart, Bar, ResponsiveContainer,Tooltip,YAxis,XAxis } from 'recharts';
import { getData } from '../helper/getData';

function BarGraph() {
  let data=getData();
  console.log(data);
  return (
    <div className={Style.container}>
      <div>Top Expenses</div>
      <ResponsiveContainer width="100%" height="80%">
      <BarChart width={150} height={40} data={data}>
        <Bar dataKey="value" fill="#8884d8"  label={{fill: '#000000ff', fontSize: 22 }}/>
          <YAxis  tick={{ fontSize: 15, fill: '#ffffffff' }}/>
          <XAxis dataKey="key" tick={{ fontSize: 15, fill: '#ffffffff' }}  />
          <Tooltip/>
      </BarChart>
    </ResponsiveContainer>

    </div>
  )
}

export default BarGraph