import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import './LeftBar.scss'

const LeftBar = () => {
    let location = useLocation();
    return (
        <div id="left_bar">
            <ul>
                <li className={location.pathname === "/dashboard" ? "active" : null}>
                    <div>
                        <Link to="/dashboard" >
                            <i className="fas fa-chart-line"></i>
                        </Link>
                    </div>
                </li>
                <li className={location.pathname === "/home" ? "active" : null}>
                    <div>
                        <Link to="/home" >
                            <i className="fas fa-home"></i>
                        </Link>
                    </div>
                </li>
                <li className={location.pathname === "/circle" ? "active" : null}>
                    <Link to="/circle" >
                        <i className="fab fa-stumbleupon-circle"></i>
                    </Link>
                </li>
                <li className={location.pathname === "/pizza" ? "active" : null}>
                    <Link to="/pizza" >
                        <i className="fas fa-pizza-slice"></i>
                    </Link>
                </li>
                <li className={location.pathname === "/envelope" ? "active" : null}>
                    <Link to="/envelope" >
                        <i className="fas fa-envelope"></i>
                    </Link>
                </li>
                <li className={location.pathname === "/notification" ? "active" : null}>
                    <Link to="/notification" >
                        <i className="far fa-bell"></i>
                    </Link>
                </li>
                <li className={location.pathname === "/settings" ? "active" : null}>
                    <Link to="/settings" >
                        <i className="fas fa-cog"></i>
                    </Link>
                </li>
                <li className={location.pathname === "/log-out" ? "active" : null}>
                    <Link to="/log-out" >
                        <i className="fas fa-sign-out-alt"></i>
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default LeftBar
