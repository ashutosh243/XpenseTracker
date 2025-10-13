import React, { useState } from 'react'
import Style from './piechart.module.css';
import { Pie, PieChart, ResponsiveContainer,Tooltip } from 'recharts';
import {getData}  from '../helper/getData';


const Piechart = () => {

    
const data01 =getData();
console.log(data01);
    return (<>
        <div className={Style.container}>
            <ResponsiveContainer width="100%" height="100%">
                <PieChart width={400} height={400}>
                    <Pie
                        nameKey="Key"
                        dataKey="value"
                        data={data01}
                        cx="50%"
                        cy="50%"
                        outerRadius={80}
                        fill="#8884d8"
                        label
                    />
                    <Tooltip />
                </PieChart>
            </ResponsiveContainer>
        </div>
    </>)
}

export default Piechart