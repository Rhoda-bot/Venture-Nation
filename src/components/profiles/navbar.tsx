import React, { useState } from "react";

import { NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownItem, DropdownMenu } from 'reactstrap';

const ProfileNavbar = ({currentUser}: any) => {
    const [isOpen, setIsOpen] = useState(false);

    return(
        <>     
            <div className="navigation">
            <nav className="navbar navbar-expand-lg px-5">
                <div className="container-fluid px-3  mx-3">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                    <a className="navbar-brand" href="/">
                        <img src="/assets/venture-logo.png" alt="logo" width={50}  className="img-fluid"/>
                        <span className="m-1">Venture Nation</span>
                    </a>
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 navigation__menu">
                        <li className="nav-item  px-3" />
                    </ul>
                    <form className="d-flex" role="search">
                      <ul className="navbar-nav">
                      <li className="nav-item  px-3 border-right px-0 pt-2 my-1 mx-2 ">
                            <input className="form-control pe-2 navigation__menu--input position-relative mt-2  text-center" type="search" placeholder="Search" aria-label="Search" />
                            <img src="/assets/icons/search.svg" className="position-absolute mx-1" style={{top: '20px'}}  alt="" />
                           
                        </li>
                      <li className="nav-item px-2 pt-lg-1 my-lg-2 mx-lg-2 border-end">
                        <NavLink to="#" className="nav-link"><img src="/assets/icons/bell.png"
                        alt="" /></NavLink>
                    </li>
                    <li className="nav-item px-2 pt-1 my-lg-2">
                        <img src={(currentUser?.avatar === null) ? "/assets/profiles/ava.png" : currentUser?.avatar} width={50} height={50} alt="" />
                        <small className="mx-lg-1">{currentUser?.name}</small>
                    </li>
                     <li className="nav-item dropdown  pt-lg-2 my-lg-2 mx-lg-5">
                     <UncontrolledDropdown nav inNavbar>
                      <DropdownToggle nav caret >
                        <span></span>
                      </DropdownToggle>
                      <DropdownMenu end>
                        <DropdownItem>Settings</DropdownItem>
                        {/* <DropdownItem>Option 2</DropdownItem> */}
                        <DropdownItem divider />
                        <DropdownItem>Log out</DropdownItem>
                      </DropdownMenu>
                    </UncontrolledDropdown>
                      </li>
                      <NavItem>
                      <NavLink></NavLink>
                      </NavItem>
                      <li>
                        <div>
                          
                        </div>
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
export default ProfileNavbar