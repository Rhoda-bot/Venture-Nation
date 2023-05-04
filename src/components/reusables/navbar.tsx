import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar: React.FC = () => {
    return(
        <>
        <nav className="navbar">
            <div className="navbar-logo">
                <a href="#">Logo</a>
            </div>
            <ul className="navbar-menu">
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
            <div className="navbar-toggle">
                <span></span>
                <span></span>
                <span></span>
            </div>
            </nav>

            {/* <div className="sidenav">
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Services</a>
            <a href="#">Contact</a> */}
            {/* </div> */}
            {/* <div className="navigation">
                <nav className='navbar navbar-expand-lg navbar-light bg-light'>
                    <div className="container-fluid">
                        <button className='navbar-toggler' type='button' data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls='navbarNav' aria-expanded="false" aria-label='Toggle Navigation'>
                            <span className='navbar-toggler-icon'></span>
                        </button>
                        <div className='collapse navbar-collapse' id='navbarNav'>
                            <ul className='navbar-nav'>
                                <li className='nav-item'>
                                    <NavLink to="#" aria-current="page">Home</NavLink>
                                </li>
                                <li className='nav-item'>
                                    <NavLink to="#">About</NavLink>
                                </li>
                                <li className='nav-item'>
                                    <NavLink to="#">Services</NavLink>
                                </li>
                                <li className='nav-item'>
                                    <NavLink to="#">About</NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <div className="sidenav">
                    <NavLink to="#">Home</NavLink>
                    <NavLink to="#">About</NavLink>
                    <NavLink to="#">Services</NavLink>
                    <NavLink to="#">Contact</NavLink>
                </div>
            </div> */}
        </>
    )
}
export default Navbar;