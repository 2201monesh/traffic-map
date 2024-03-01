import React from 'react'
import { HiOutlineFunnel } from "react-icons/hi2";
import DataSection from './DataSection';

function SalesSection() {
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
    </div>
  )
}

export default SalesSection;
