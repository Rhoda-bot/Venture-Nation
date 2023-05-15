import React from "react";
import SIDEBAR  from '../../utility/sidebar.json'
import { NavLink } from "react-router-dom";

const Sidebar = () => {
    const sidebarMenu = SIDEBAR
    return(
        <>
           <div className="sidebar" style={{
            height: '100%'
           }}>
            {
                sidebarMenu.map(({id, name, icon}) => (
                    <NavLink to={name.toLocaleLowerCase()} key={id} className="sidebar--link ml-1 text-decoration-none d-none d-lg-block">
                        <div  className="">
                        <img src={icon} alt="image" /> {name}
                        </div>
                    </NavLink>
                ))
            }
           </div>
        </>
    )
}
export default Sidebar;