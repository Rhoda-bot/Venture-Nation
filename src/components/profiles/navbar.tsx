import React, { useState } from "react";

import { NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownItem, DropdownMenu } from 'reactstrap';

const ProfileNavbar = ({currentUser}: any) => {
    const [isOpen, setIsOpen] = useState(false);

    return(
        <> 
             <div className="navigation d-none d-lg-block">
              <nav className="navbar navbar-expand-lg bg-white py-0">
                <div className="container-fluid mx-5">
                  <a className="navbar-brand d-flex" href="#">
                    <img src="/assets/venture-logo.png" alt="logo" width={45}  className="img-fluid navigation--logo"/>
                    <span className="d-none d-md-block mx-2 mt-2">Venture Nation</span>
                  </a>
                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 " />
                    <form className="d-flex navigation__form" role="search">
                     <input className="form-control d-none d-md-block navigation__form--input shadow-none" type="search" placeholder="Search" aria-label="Search" />
                      <span className="fa fa-search form-control-feedback navigation__form--search d-none d-md-block"></span>
                    </form>
                    <ul className="navbar-nav px-0 mx-0">
                      <li className="nav-item mt-2 mx-2">
                        <a href="." className="nav-link">
                        <img src="/assets/icons/bell.png"
                        alt="" className="border-end px-3 img-fluid" 
                        />
                        </a>
                      </li>
                        <li className="nav-item mt-2">
                        <a className="nav-link">
                        <img src={(currentUser?.avatar === null) ? "/assets/profiles/ava.png"  : currentUser?.avatar} className="img-fluid p-0" width={35} height={35} alt="" />
                        <small className="mx-2">{currentUser?.name}</small>
                        </a>
                      </li>
                      <li className="nav-item dropdown mt-2 ">
                          <a className="nav-link dropdown-toggle mt-1" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                           <span></span>
                          </a>
                          <ul className="dropdown-menu  dropdown-menu-end">
                            <li><a className="dropdown-item" href="#">Logout</a></li>
                            <li><hr className="dropdown-divider" /></li>
                            
                          </ul>
                        </li>
                      
                    </ul>
                  </div>
                </div>
              </nav> 
             </div>
             <nav className="navbar navbar-expand-lg bg-white d-lg-none d-md-block navigation">
              <div className="container-fluid">
                <a className="navbar-brand d-flex" href="#">
                    <img src="/assets/venture-logo.png" alt="logo" width={45}  className="img-fluid navigation--logo"/>
                    <span className="d-none d-md-block mx-2 mt-2">Venture Nation</span>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <NavLink className="nav-link" href="#">Dashboard</NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" href="#">Learning hub</NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" href="#">Resourse hub</NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" href="#">Profile</NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" href="#">Communities</NavLink>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
        </>
    )
}
export default ProfileNavbar