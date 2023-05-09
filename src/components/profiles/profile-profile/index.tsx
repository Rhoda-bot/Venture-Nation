import React, { useContext } from "react";
import { UserContext } from "../../../context/userContext";
import UserVentures from "../profile-venture/user-ventures";
import UserContact from "../profile-venture/contact";
import Socials from "./socials";

const ProfileProfile = () => {
    const {user, setUser}: any = useContext<any>(UserContext);
    console.log(user);
    
    return(
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-9 p-0 profile__details">
                        <div className="col-md-12 position-relative" style={{
                            backgroundImage: 'url(/assets/profile/pro2.png)',
                            height: '190px',
                            width: '100%',
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat',
                            objectFit: 'cover',
                            borderRadius:' 0px 0px 40px 0px'
                        }}>
                            <img src="/assets/profile/ava.png" className="img-fluid  profile__details--avartar"  alt="" />
                            <div className="text-end t bg-dark">
                                <button className="position-abolute profile__details--edit">Edit profile</button>
                            </div>
                        </div>
                        <div className="container py-5">
                        <div className="row px-3 mx-1">
                            <h4 className="pt-2 profile__details--name">Olivia Clark</h4>
                            <div className=" profile__details--mail">clarkolivia2@gmail.com</div>
                            <span className=" profile__details--text">Passionate Entrepreneur with a drive to innovate and disrupt industries</span>
                            <p className=" profile__details--location">
                                <span> <img src="/assets/profile/vec1.png" alt="" /> Lagos state, Nigeria</span>
                                <span><img src="/assets/profile/vec2.png" alt="" className="mx-2"/> March 12, 1995</span>
                                <span><img src="/assets/profile/vec3.png" alt="" className="mx-2" /> Male</span>
                            </p>
                            <h4 className=" profile__details--name mt-2">Skills</h4>
                            <div className="profile__skills">
                            <button className="mx-1 profile__skills--btn">leadership</button>
                            <button className="mx-1 profile__skills--btn">Communication</button>
                            <button className="mx-1 profile__skills--btn">Critical thinking</button>
                            </div>
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