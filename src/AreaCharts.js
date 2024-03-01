import React from 'react'
import { AreaChart, Area } from 'recharts'

const AreaCharts = ({data, height, scale}) => {

  return (
    <div className={scale ? 'scaleX chart-div' : 'chart-div'}>
    <AreaChart width={200} height={height} data = {data} >
      <Area type={'monotone'} dataKey="product1" />
    </AreaChart>
    </div>
  );
};

export default AreaCharts;
