import React, { useState } from "react";
// import { NavLink } from "react-router-dom";
import { Navbar, Nav, NavItem, NavLink, Button, Collapse } from 'reactstrap';

const ProfileNavbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return(
        <>
        {/* <div>
        <Navbar color="light" light expand="md">
        <Nav className="mr-auto" navbar>
          <NavItem>
            <NavLink href="/">Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/about">About</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/contact">Contact</NavLink>
          </NavItem>
        </Nav>
        <button className="navbar-toggler d-block d-md-none" type="button" onClick={toggle}>
          <span className="navbar-toggler-icon"></span>
        </button>
      </Navbar>
      <div className={`sidebar ${isOpen ? 'open' : ''} col-md-3`}>
        <Nav vertical>
          <NavItem>
            <NavLink href="/">Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/about">About</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/contact">Contact</NavLink>
          </NavItem>
        </Nav>
      </div>
    </div> */}
     

            <div className="navigation">
            <nav className="navbar navbar-expand-lg px-5">
                <div className="container-fluid px-3  mx-3">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                    <a className="navbar-brand" href="#">
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
                        <img src= "/assets/icons/avatar.png" width={50} height={50} alt="" />
                        <span className="mx-lg-2">Olivia Clark</span>
                    </li>
                       {/* <li className="nav-item px-3 pt-1">
                        <img src={(user?.avatar === null) ? "/assets/profiles/profile1.png" : user?.avatar} width={30} height={30} alt="" />
                       </li>
                      <li className="nav-item px-3 pt-1">
                        <h5>{user?.name}</h5>
                        <span style={{
                            fontSize: "15px",
                            lineHeight: -1
                        }}>{user?.email}</span>
                      </li> */}
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