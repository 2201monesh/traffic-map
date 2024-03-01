import React from 'react'
import { HiOutlineFunnel } from "react-icons/hi2";
import DataSection from './DataSection';
import AreaCharts from './AreaCharts';

function SalesSection() {

   const data1 = [
  {
    name: 'Page A',
    product1: 4000,
    product2: 2400
  },
  {
    name: 'Page B',
    product1: 3950,
    product2: 2210
  },
  {
    name: 'Page C',
    product1: 3850,
    product2: 2290
  },
  {
    name: 'Page D',
    product1: 3600,
    product2: 2000
  },
  {
    name: 'Page E',
    product1: 3300,
    product2: 2181
  },
  {
    name: 'Page F',
    product1: 3350,
    product2: 2181
  },
  {
    name: 'Page G',
    product1: 3350,
    product2: 2100
  },
];

const data2 = [
  {
    name: 'Page A',
    product1: 3350,
    product2: 2400
  },
  {
    name: 'Page B',
    product1: 3300,
    product2: 2210
  },
  {
    name: 'Page C',
    product1: 3200,
    product2: 2290
  },
  {
    name: 'Page D',
    product1: 2950,
    product2: 2000
  },
  {
    name: 'Page E',
    product1: 2650,
    product2: 2181
  },
  {
    name: 'Page F',
    product1: 2700,
    product2: 2181
  },
  {
    name: 'Page G',
    product1: 2700,
    product2: 2100
  },
];

const data3 = [
  {
    name: 'Page A',
    product1: 2610,
    product2: 2400
  },
  {
    name: 'Page B',
    product1: 2600,
    product2: 2210
  },
  {
    name: 'Page C',
    product1: 2500,
    product2: 2290
  },
  {
    name: 'Page D',
    product1: 2250,
    product2: 2000
  },
  {
    name: 'Page E',
    product1: 1950,
    product2: 2181
  },
  {
    name: 'Page F',
    product1: 2000,
    product2: 2181
  },
  {
    name: 'Page G',
    product1: 2000,
    product2: 2100
  },
];

const data4 = [
  {
    name: 'Page A',
    product1: 1850,
    product2: 2400
  },
  {
    name: 'Page B',
    product1: 1800,
    product2: 2210
  },
  {
    name: 'Page C',
    product1: 1700,
    product2: 2290
  },
  {
    name: 'Page D',
    product1: 1450,
    product2: 2000
  },
  {
    name: 'Page E',
    product1: 1150,
    product2: 2181
  },
  {
    name: 'Page F',
    product1: 1200,
    product2: 2181
  },
  {
    name: 'Page G',
    product1: 1200,
    product2: 2100
  },
];

const data5 = [
  {
    name: 'Page A',
    product1: 1150,
    product2: 2400
  },
  {
    name: 'Page B',
    product1: 1100,
    product2: 2210
  },
  {
    name: 'Page C',
    product1: 1000,
    product2: 2290
  },
  {
    name: 'Page D',
    product1: 750,
    product2: 2000
  },
  {
    name: 'Page E',
    product1: 450,
    product2: 2181
  },
  {
    name: 'Page F',
    product1: 500,
    product2: 2181
  },
  {
    name: 'Page G',
    product1: 500,
    product2: 2100
  },
];

  return (
    <div>
      <div className='sales-funnel-head'>
        <div className='sales-logo'><HiOutlineFunnel size={30} /></div>
        <h1>Sales Funnel</h1>
      </div>

      <div className="sales-data">
        <DataSection heading='Impressions' stats='867.4K' direction="up" percentage="+75%" />
        <DataSection heading='Engagement' stats='118K' direction="up" percentage="+75%" />
        <DataSection heading='Visits' stats='4.29K' direction="down" percentage="-55%" />
        <DataSection heading='Add to carts' stats='984' direction="down" percentage="-65%" />
        <DataSection heading='Conversions' stats='49' direction="down" percentage="-75%" />
      </div>

      <div className='charts'>
        <div>
          <AreaCharts data={data1} height={200} />
          <AreaCharts data={data1} height={200} scale="true" />
        </div>
        <div>
          <AreaCharts data={data2} height={170} />
          <AreaCharts data={data2} height={170} scale="true" />
        </div>
        <div>
          <AreaCharts data={data3} height={150} />
          <AreaCharts data={data3} height={150} scale="true" />
        </div>
        <div>
          <AreaCharts data={data4} height={120} />
          <AreaCharts data={data4} height={120} scale="true" />
        </div>

        <div>
          <AreaCharts data={data5} height={80} />
          <AreaCharts data={data5} height={80} scale="true" />
        </div>
        
      </div>
    </div>
  )
}

export default SalesSection;
