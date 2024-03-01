import React from 'react'
import { AreaChart, Area } from 'recharts'

const AreaCharts = ({data, height}) => {

  return (
    <AreaChart width={200} height={height} data = {data} >
      <Area type={'monotone'} dataKey="product1" />
    </AreaChart>
  );
};

export default AreaCharts;
