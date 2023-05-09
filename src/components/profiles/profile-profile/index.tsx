import React, { useContext } from "react";
import { UserContext } from "../../../context/userContext";
import UserVentures from "../profile-venture/user-ventures";

const ProfileProfile = () => {
    const {user, setUser}: any = useContext<any>(UserContext);
    console.log(user);
    
    return(
        <>
            <div className="container-fluid">
            <div className="row justify-content-center align-items-center">
                        <div className="col-md-12" style={{}}>
                            <img src=" /assets/profile/pro2.png" className="position-relative h-100 img-fluid "  alt="" />
                        </div>
                        <div className="row">
                            <div className="col-md-1"></div>
                           <div className="col-md-4">
                           <img src="/assets/profile/ava.png" className="position-absolute top-75 start-25 translate-middle" alt="" />
                           </div>
                           <div className="col-md-2"></div>
                           <div className="col-md-4 mt-3 text-end">
                            <button>Edit profile</button>
                           </div>
                        </div>
                        <div className="row mt-5">
                            <h4>Olivia Clark</h4>
                            <small>clarkolivia2@gmail.com</small>
                            <span>Passionate Entrepreneur with a drive to innovate and disrupt industries</span>
                            <p>
                                <span>Lagos state, Nigeria</span>
                                <span>March 12, 1995</span>
                                <span>Male</span>
                            </p>
                            <h3>Skills</h3>
                            <div className="d-flex">
                            <button className="mx-2">leadership</button>
                            <button className="mx-2">Communication</button>
                            <button className="mx-2">Critical thinking</button>
                            </div>
                        </div>
                        <UserVentures />
            </div>
            </div>
        </>
    )
}
export default ProfileProfile