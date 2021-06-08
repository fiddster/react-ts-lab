import React from 'react';
import { Link } from "react-router-dom";

interface NavLinkProps {
    to: string,
    name: string
}

export const NavLink: React.FC<NavLinkProps> = ({ to, name }: NavLinkProps) => {
    return (
        <Link className="navlink" to={to}>
            <span>
                {name}
            </span>
        </Link>
    )
}