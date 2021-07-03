import React from 'react'
import { routes } from "../routes/routes.json";
import { NavLink } from './navlink/NavLink'

export const Nav = () => {
    return (
        <nav className="flex-row align-center">
            <NavLink to={routes.home} name="Home" />
            <NavLink to={routes.lab} name="Lab" />
            <NavLink to={routes.initiativeTracker} name="Initiative Tracker" />
        </nav>

    )
}