import React, { useContext } from "react";
import { UserContext } from "../../../context/userContext";
import UserVentures from "../profile-venture/user-ventures";
import UserContact from "../profile-venture/contact";
import Socials from "./socials";
import { NavLink } from "react-router-dom";

const ProfileProfile = () => {
    const {user}: any = useContext<any>(UserContext);
    const skills = user?.skills;
    
    
    return(
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-9 p-0 profile__details">
                        <div className="col-md-12 position-relative" style={{
                            backgroundImage: 'url(/assets/profile/profile-bg.png)',
                            height: '190px',
                            width: '100%',
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat',
                            objectFit: 'cover',
                        }}>
                            <img src={(user?.avatar === null) ? "/assets/profiles/ava.png": user?.avatar} className="img-fluid  profile__details--avartar"  alt="" />
                            <div className="text-end">
                               <NavLink to="/edit-profile">
                               <button className="position-abolute profile__details--edit">Edit profile</button>
                               </NavLink>
                            </div>
                        </div>
                        <div className="container py-5">
                        <div className="row px-3 mx-1">
                            <h4 className="pt-2 profile__details--name">{user?.name}</h4>
                            <div className=" profile__details--mail">{user?.email}</div>
                            <span className=" profile__details--text">Passionate Entrepreneur with a drive to innovate and disrupt industries</span>
                            <p className=" profile__details--location">
                                <span> <img src="/assets/profile/vec1.png" alt="" /> Lagos state, Nigeria</span>
                                <span><img src="/assets/profile/vec2.png" alt="" className="mx-2"/> March 12, 1995</span>
                                <span><img src="/assets/profile/vec3.png" alt="" className="mx-2" />{user?.gender}</span>
                            </p>
                            <h4 className=" profile__details--name mt-2">Skills</h4>
                                {skills &&
                                    skills?.map((val:any)=> console.log(val))
                                }
                            {/* {
                                user?.skill.map((val:any, index: any)=> (
                                    <span ke>{index}</span>
                                ))
                            } */}
                            {/* <div className="profile__skills">
                            <button className="mx-1 profile__skills--btn">leadership</button>
                            <button className="mx-1 profile__skills--btn">Communication</button>
                            <button className="mx-1 profile__skills--btn">Critical thinking</button>
                            </div> */}
                        </div>
                        </div>
                        <UserVentures />
                        </div>
                <div className="col-md-3">
                    <UserContact />
                    <Socials /> 
                </div>
            </div>
            </div>
        </>
    )
}
export default ProfileProfile