import React from 'react'
import "./sidebar.css"
import {AiOutlineHome} from "react-icons/ai"
import {MdSubscriptions} from "react-icons/md"
const Sidebar = () => {
  return (
    <nav className='sidebar-nav border border-warning'>
      <ul className='sidebar-list'>
        <li className="sidebar-item d-flex align-items-center">
      <AiOutlineHome size={24} className='me-2'/>
        <span>efgtrgr</span>
        </li>
      </ul>
    </nav>
  )
}

export default Sidebar
