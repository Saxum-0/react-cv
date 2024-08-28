import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
    return (
        <div className="Navigation">
            <NavLink exact to="/">
                <span>Home</span>
            </NavLink>
            <NavLink exact to="/blog">
                <span>Blog</span>
            </NavLink>
            <NavLink exact to="/portfolio">
                <span>Portfolio</span>
            </NavLink>
        </div>
    )
};
export default Navigation;