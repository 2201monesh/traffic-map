import React from 'react'
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";

function NavLayout() {
  return (
    <div className='nav-layout'>
      <div className="nav-left">
        <div className='watch-logo'><MdOutlineRemoveRedEye size={20} /></div>
        <h2>Live Overview</h2>
      </div>

      <div className="nav-right">
        <div className='dropdown'><h3>India</h3> <span className='arrowSpan'><IoIosArrowDown size={20} /></span></div>
        <div className='watch-logo'><FaMinus /></div>
        <div className='watch-logo'><FaPlus /></div>
      </div>
    </div>
  )
}

export default NavLayout;
