'use client';
//import React, { useEffect, useState } from 'react';


import { PieChart, Pie, Cell, Legend, Tooltip } from 'recharts';

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
      </div>
    </>
  );
};

export default Chart;
