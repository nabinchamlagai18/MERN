import React from 'react'
import { NavLink } from 'react-router-dom'

const SunwayNavLink = () => {
    return (
        <div>
            <NavLink style={{ marginRight: "20px" }} to="/home"> Home </NavLink> 
            <NavLink style={{ marginRight: "20px" }} to="/product"> Product </NavLink>
            <NavLink style={{ marginRight: "20px" }} to="/product/create"> Create Product </NavLink>
            <NavLink style={{ marginRight: "20px" }} to="/user"> User </NavLink>
            <NavLink style={{ marginRight: "20px" }} to="/user/create"> Create User </NavLink>

        </div>
    )
}

export default SunwayNavLink