import React from 'react'
import SidebarOption from './SidebarOption'

function Sidebar() {
    return (
        <div>
            <h1>Sidebar</h1>
            <img className="sidebar__logo"
             alt="" />

             <SidebarOption title="Home" />
             <SidebarOption title="Search" />
             <SidebarOption title="Library" />


        </div>
    )
}

export default Sidebar
