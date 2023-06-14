import React, { useContext, useEffect } from "react";
import ProfileNavbar from "./navbar";
import Sidebar from "./profileSidebar";
import { Outlet, useLocation } from "react-router-dom";
import UserContact from "./profile-venture/contact";
import { UserContext } from "../../context/userContext";
import { getRequest } from "../../utility/apiRequest";
import Socials from "./profile-profile/socials";

const ProfileHome = () => {
    const {user, setUser}: any = useContext<any>(UserContext);
    const {pathname} = useLocation();

    useEffect(() => {
        const getCurrentUser = async () => {
          try {
            const fetchCurrentUser = await getRequest(`users/${localStorage.getItem('userEmail')}`);
            if (fetchCurrentUser.data.status === "success") {
              return fetchCurrentUser.data.data;
            }
          } catch (error) {
            console.log(error);
          }
          return null;
        };
      
        getCurrentUser().then((userData) => {
          if (userData) {
            setUser(userData);
          }
        });
      }, [setUser])
    return(
        <>
        <ProfileNavbar currentUser={user}/>
            <div className="profile p-0">
                <div className="container-fluid ">
                    <div className="row">
                        <div className={( pathname === "/venture/add-venture"?`d-none col-md-2` : 'd-block col-md-2')}>
                            <Sidebar />
                        </div>
                        <div  className={( pathname === "/venture/add-venture"?`col-md-12 p-0` : 'col-md-10 p-0') }>
                            <Outlet />
                        </div>
                        
                    </div>
                </div>
            </div>
        </>
    )
}
export default ProfileHome;