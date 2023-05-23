import React, { useContext } from "react";
import { UserContext } from "../../../context/userContext";
import { NavLink } from "react-router-dom";
const Socials = () => {
    const { user } = useContext(UserContext);
    return(
        <>
            <div className="contact p-3 p-lg-3 pb-lg-2 my-5 bg-white" style={{boxShadow: ' 0px 0px 1px rgba(12, 26, 75, 0.24), 0px 3px 8px -1px rgba(50, 50, 71, 0.05)', borderRadius: '10px'}}>
            <div className="my-2  px-1 pl-2 border-0">
                    <h6 className="fw-bold contact--title mb-3">Socials</h6>
                    <div className="mb-3">
                        {user?.socials?.linkedIn && (
                            <div className="d-flex">
                                 <img src="/assets/icons/Linkedin.svg" className="img-fluid" alt="" />
                                 <span>
                                    <NavLink to={user?.socials?.linkedIn} target="_blank" rel="no-referrer" className="mx-3 contact--span">view linkedin profile </NavLink>
                                 </span>
                            </div>
                        )}
                    </div>
                    <div className="mb-3">
                        {user?.socials?.twitter && (
                            <div className="d-flex">
                                 <img src="/assets/icons/twitter.png" className="img-fluid" alt="" /> 
                                 <span>
                                    <NavLink to={user?.socials?.twitter} target="_blank" rel="no-referrer" className="mx-3 contact--span">view twitter profile </NavLink>
                                 </span>
                            </div>
                        )}
                    </div>
                    <div className="mb-3">
                        {user?.socials?.instagram && (
                            <div className="d-flex">
                                 <img src="/assets/icons/instagram.png" className="img-fluid" alt="" /> 
                                 <span>
                                     <NavLink to={user?.socials?.instagram} target="_blank" rel="no-referrer" className="mx-3 contact--span">view instagram profile  </NavLink>
                                     <i className="fa fa-edit"/>
                                 </span>
                                
                            </div>
                        )}
                    </div>
                    <div className="">
                        {user?.socials?.facebook && (
                            <div className="d-flex">
                                 <img src="/assets/icons/facebook.svg" className="img-fluid" alt="" /> 
                                 <span>
                                    <NavLink to={user?.socials?.facebook} target="_blank" rel="no-referrer" className="mx-3 contact--span">view facebook profile</NavLink>
                                    <i className="fa fa-edit"/>
                                 </span>
                            </div>
                        )}
                    </div>
                 </div>
            </div>
        </>
    )
}
export default Socials;