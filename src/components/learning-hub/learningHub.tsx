import React, { useContext, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { UserContext } from "../../context/userContext";
import { getRequest } from "../../utility/apiRequest";
import ProfileNavbar from "../profiles/navbar";
import CustomNavbar from "../reusables/customNavbar";


const LearningHubs = () => {
    const {user, setUser}: any = useContext<any>(UserContext);
    const {pathname} = useLocation();
    useEffect(() => {

        const getCurrentUser = async() => {
            const fetchCurrentUser = await getRequest(`users/${localStorage.getItem('userEmail')}`);
            return fetchCurrentUser;
            
        }
        const result = getCurrentUser();
        result.then((res:any) => {
            if (res.data.status === "success") {
                setUser(res.data.data);
                
            }
        })
    }, [])
    
    return(
        <>
        <CustomNavbar />
            <div className="profile p-0">
                <div className="container-fluid ">
                    <div className="row">
                        <div  className="col-md-12 p-0">
                            <Outlet />
                        </div>
                        
                    </div>
                </div>
            </div>
        </>
    )
}
export default LearningHubs;