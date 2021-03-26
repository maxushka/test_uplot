import React, { useEffect, useState } from 'react';
import './LCharts.css'
import LChartBase from './LChartBase'

const LCharts = (props) => {
  const [data1, setData1] = useState([]);
  const [data2, setData2] = useState([]);
  const points = 5000;

  // Example that simulates fetching remote data, and rendering it using a custom Chart component.
  useEffect(() => {
    const interval1 = setInterval(() => {
      let tmp = [];
      let val = 0;
      for (let i = 1; i < points; ++i){
        val = (i < 2000 && i > 1500) ? (Math.random()*10) : Math.random();
        tmp.push({x: i, y: val})
      }
      setData1(tmp);
    }, 30);

    return () => {
      clearInterval(interval1)
    }
  }, [])

  return <div className='fill'>
    <LChartBase id='chart-1' data={data1}/>
  </div>
}

export default LCharts