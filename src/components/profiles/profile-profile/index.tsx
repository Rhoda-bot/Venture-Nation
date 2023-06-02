import React, { useContext } from "react";
import { UserContext } from "../../../context/userContext";
import UserVentures from "../profile-venture/user-ventures";
import UserContact from "../profile-venture/contact";
import Socials from "./socials";
import { NavLink } from "react-router-dom";
import moment from "moment";

const ProfileProfile = () => {
    const {user}: any = useContext<any>(UserContext);
    const skills = user?.skills;
    
    
    return(
        <>
            <div className="container-fluid">
                <div className="row" >
                    <div className="col-md-9 bg-white p-0">
                        <div className="profile__banner" style={{
                            backgroundImage: 'url(/assets/profile/profile-bg.png)',
                            height: '190px',
                            width: '100%',
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat',
                            objectFit: 'cover',
                            backgroundPosition: 'center center'
                        }}>
                        </div>
                           <div className="profile__details px-2 px-lg-4">
                           <div className="row align-items-end">
                                 <div className=" col-6 ">
                                    <img src={(user?.avatar === null) ? "/assets/profile/ava.png": user?.avatar} className="img-fluid  profile__details--avatar"  alt="profile image" />
                                </div>
                                <div className="col-6 text-center text-md-end ">
                                    <NavLink to="/profile/edit-profile" role="button" className="profile__details--edit ms-0"> 
                                       <i className="fa fa-edit"/> Edit profile    
                                    </NavLink>
                                </div>
                            </div>
                           <h5 className="pt-2 profile__details--name mb-1">{user?.name}</h5>
                           <p className=" profile__details--mail mb-2 mb-xl-3">{user?.email}</p>
                           <p className=" profile__details--bio mb-2 mb-xl-3">{user?.bio}</p>
                           <div className="profile__details--info d-flex align-items-center">
                            <span className="me-2 profile__details--bio"><i className="fa fa-map-marker"/> {user?.nationality}</span>
                            <span className="me-2 profile__details--bio"><i className="fa fa-calendar"/> {moment(user?.dob).format("MMM Do YY")}</span>
                            <span className="me-2 profile__details--bio"><i className="fa fa-personality"/>{user?.gender}</span>
                           </div>
                           </div>
                            <div className="profile__skills px-lg-4 my-4">
                            <h6 className="profile__skills--title">Skills</h6>
                                <div className="d-flex my-2">

                                {skills &&
                                    skills?.map((val:any, index: number)=>(
                                            <span className="mx-1 profile__skills--tag me-2 me-xl-3 px-2 py-2" key={index}>{val}</span>
                                            ))
                                        }
                                </div>
                            </div>
                            
                        <UserVentures />
                        </div>
                <div className="col-md-3 mt-4 pt-3 d-none col-3 d-lg-block">
                    <UserContact />
                    <Socials /> 
                </div>
            </div>
            </div>
        </>
    )
}
export default ProfileProfile