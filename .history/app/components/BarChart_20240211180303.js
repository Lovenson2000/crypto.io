"use client";

import React from 'react'
import { Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from 'recharts';

export default function AreaChartBox() {

    const data = [
        {
            "name": "Page A",
            "uv": 4000,
        },
        {
            "name": "Page B",
            "uv": 3000,
            
        },
        {
            "name": "Page C",
            "uv": 2000,
            
        },
        {
            "name": "Page D",
            "uv": 2780,
           
        },
        {
            "name": "Page E",
            "uv": 1890,
            
        },
        {
            "name": "Page F",
            "uv": 2390,
            
        },
        {
            "name": "Page G",
            "uv": 3490,
            
        },
        
    ];

    return (
        <BarChart width={730} height={250} data={data}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            
            <Bar dataKey="pv" fill="#8884d8" />
            <Bar dataKey="uv" fill="#8238ff" />
        </BarChart>
    )
}
