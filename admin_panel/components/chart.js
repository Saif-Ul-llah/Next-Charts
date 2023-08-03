'use client';
//import React, { useEffect, useState } from 'react';


import { PieChart, Pie, Cell } from 'recharts';
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function Example(props) {
  return (
    <div style={{ marginBottom: 80 ,marginLeft:40}}>
      <hr style={{ border: "2px solid #ddd" }} />
      <div style={{ marginTop: 30}}>
        <div style={{ width: "350", paddingRight: 30 }}>{props.children}</div>
        <div style={{ width: "350" }}>
          <h3 className="h5">{props.label}</h3>
          <p>{props.description}</p>
        </div>
      </div>
    </div>
  );
}


const Chart = () => {

const chartData = [
    { name: 'Category 1', value: 10 },
    { name: 'Category 2', value: 3 },
    { name: 'Category 3', value: 20 },
    { name: 'Category 1', value: 17 },
];

  const userChart = [
    { name: 'Category 1', value: 30 },
    { name: 'Category 2', value: 50 },
    { name: 'Category 3', value: 20 },
  ];
 
  const winderChart = [
    { name: 'Category 1', value: 30 },
    { name: 'Category 2', value: 70 },
    
  ];

  const percentage = 88;

  const COLORS = ['gray','#ADD8E6','#191970','#FF6384', '#36A2EB', '#FFCE56', '#FF5733', '#00E874']; // Add more colors as needed
  const renderLabel = (entry) => {
    return `${entry.name} : ${entry.value}`;
  };

  return (
    <>
      <div className='flex w-auto justify-center'>
        <div className='mr-20'>
          <h2 className='text-2xl font-bold mb-4 text-center'>Total</h2>
          <PieChart width={400} height={400}>
            <Pie data={chartData} dataKey="value" label={renderLabel}>
              {chartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
           
         
          </PieChart>
        </div>

        <div className='mr-20'>
          <h2 className='text-2xl font-bold mb-4 text-center'>Wanders</h2>
          <PieChart width={400} height={400}>
            <Pie data={winderChart} dataKey="value" label={renderLabel}>
              {winderChart.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
           
          </PieChart>
        </div>

        <div>
          <h2 className='text-2xl font-bold mb-4 text-center'>Users</h2>
          <PieChart width={400} height={400}>
            <Pie data={userChart} dataKey="value" label={renderLabel}>
              {userChart.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
           
          </PieChart>
          
        </div>
        <div className='mr-20'>
          <h2 className='text-2xl font-bold mb-4 text-center'>Demo</h2>
          <Example>
            <CircularProgressbar
              value={percentage}
              text={`${percentage}%`}
              strokeWidth={5}
            />
           </Example>
          </div>
      </div>
    </>
  );
};

export default Chart;


