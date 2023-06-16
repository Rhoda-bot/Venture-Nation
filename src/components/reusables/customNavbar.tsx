import React from "react";
import { Link, NavLink } from "react-router-dom";

const CustomNavbar = () => {
    const checkUser = localStorage.getItem('token')
    return (
            <>
                <div className="navigation">
                <nav className="navbar navbar-expand-lg  fixed-top navbar-light bg-white">
                <div className="container">
                    <NavLink className="navbar-brand d-flex" to="/">
                        <img src="/assets/venture-logo.png" alt="logo" width={45}  className="img-fluid navigation--logo"/>
                        <span className="d-none d-md-block mx-2 mt-2">Venture Nation</span>
                    </NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <form className="d-flex flex-end ms-auto p-2">
                            <ul  className="navbar-nav me-auto mb-2 mb-lg-0 text-lg-center">
                            <li className="nav-item py-0">
                                <Link to="/learning-hub" className="navi--link text-dark nav-link active px-2" aria-current="page">Learning Hub</Link>
                            </li>
                            <li className="nav-item py-0">
                                <Link to="/resource-hub" className="navi--link text-dark nav-link active px-2" aria-current="page">Resources Hub</Link>
                            </li>
                            <li className="nav-item py-0">
                                <Link to="/learning-hub" className="navi--link text-dark nav-link active px-2" aria-current="page">Services</Link>
                            </li>
                            <li className="nav-item py-0">
                               {(localStorage.getItem("token") !== null) && 
                               <>
                                   <NavLink className="" to="/dashboard" aria-current="page">
                                   <button className="header__search--btn px-3 py-2">Dashboard</button>
                                   </NavLink>
                               </>}
                            </li>
                            <li className="nav-item py-0 mt-2">
                               {(localStorage.getItem("token") === null) && <>
                                    <button className="header__search--btn">Sign up</button>
                               </>}
                            </li>
                            </ul>
                        </form>
                    </div>
                </div>
            </nav>
                </div>
            </>
        )
}

export default CustomNavbar;