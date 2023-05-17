import React, { useContext, useEffect } from "react";
import ProfileNavbar from "./navbar";
import Sidebar from "./profileSidebar";
import { Outlet } from "react-router-dom";
import UserContact from "./profile-venture/contact";
import { UserContext } from "../../context/userContext";
import { getRequest } from "../../utility/apiRequest";
import Socials from "./profile-profile/socials";

const ProfileHome = () => {
    const {user, setUser}: any = useContext<any>(UserContext);
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
    }, [localStorage.getItem('token')])
    
    return(
        <>
        <ProfileNavbar currentUser={user}/>
            <div className="profile p-0">
                <div className="container-fluid ">
                    <div className="row">
                        <div className="col-md-2">
                            <Sidebar />
                        </div>
                        <div className="col-md-10 p-0">
                            <Outlet />
                        </div>
                        
                    </div>
                </div>
            </div>
        </>
    )
}
export default ProfileHome;