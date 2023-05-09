import React, { useContext, useEffect } from "react";
import ProfileNavbar from "./navbar";
import Sidebar from "./profileSidebar";
import { Outlet } from "react-router-dom";
import UserContact from "./profile-venture/contact";
import { UserContext } from "../../context/userContext";
import { getRequest } from "../../utility/apiRequest";
import Socials from "./profile-profile/socials";

const ProfileHome = () => {
    const {user, setUser}: any = useContext<any>(UserContext)
    useEffect(() => {

        const getCurrentUser = async() => {
            const fetchCurrentUser = await getRequest('users/current-user');
            return fetchCurrentUser;
            
        }
        const result = getCurrentUser();
        result.then((res:any) => {
            if (res.data.status === "success") {
                setUser(res.data.data);
                
            }
        })
    })
    
    return(
        <>
        <ProfileNavbar />
            <div className="profile">
                <div className="container-fluid">
                    <div className="row justify-content-center ">
                        <div className="col-md-2 border-end">
                            <Sidebar />
                        </div>
                        <div className="col-md-7">
                            <Outlet />
                        </div>
                        <div className="col-md-2">
                            <UserContact />
                            <Socials />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ProfileHome;