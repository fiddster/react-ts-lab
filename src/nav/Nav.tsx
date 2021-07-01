import React from 'react'
import { paths } from "../routes/paths.json";
import { NavLink } from './navlink/NavLink'

export const Nav = () => {
    return (
        <nav className="flex-row align-center">
            <NavLink to={paths.home} name="Home" />
            <NavLink to={paths.lab} name="Lab" />
            <NavLink to={paths.initiativeTracker} name="Initiative Tracker" />
        </nav>

    )
}