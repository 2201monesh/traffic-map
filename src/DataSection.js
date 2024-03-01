import React from 'react'
import { FaArrowTrendUp } from "react-icons/fa6";
import { FaArrowTrendDown } from "react-icons/fa6";
import { FiCircle } from "react-icons/fi";

function DataSection({heading, stats, direction, percentage}) {
  return (
    <div className='data-section'>
      <FiCircle className='circle-logo'/>
      <h3>{heading}</h3>
      <h3>{stats}</h3>
      <div className='data-section-logo-div'>
        {direction === "up" && <div className='data-section-logo-up'><FaArrowTrendUp /></div>}
        {direction === "down" && <div className='data-section-logo-down'><FaArrowTrendDown /></div>}
        {direction ==="up" ? <h3 className='percentage-up'>{percentage}</h3> : <h3 className='percentage-down'>{percentage}</h3>}
      </div>
    </div>
  )
}

export default DataSection
