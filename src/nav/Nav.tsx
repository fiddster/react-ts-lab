import React from 'react'
import AppRoutes from "../routes/AppRoutes"
import { NavLink } from './navlink/NavLink'

export const Nav = () => {
    return (
        <nav className="flex-row align-center">
            <NavLink to={AppRoutes.home} name="Home" />
            <NavLink to={AppRoutes.initiativeTracker} name="Initiative Tracker" />
            <NavLink to={AppRoutes.lab} name="Lab" />
            <NavLink to={AppRoutes.spells} name="Spells"/>
        </nav>

    )
}