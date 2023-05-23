import React, { useContext } from "react";
import { UserContext } from "../../../context/userContext";

const UserContact = () => {
    const { user } = useContext(UserContext);
    console.log(user);
    
    return(
        <>
            <div className="contact p-3 p-lg-3 pb-lg-2 my-5 bg-white" style={{boxShadow: ' 0px 0px 1px rgba(12, 26, 75, 0.24), 0px 3px 8px -1px rgba(50, 50, 71, 0.05)', borderRadius: '10px'}}>
            <div className="my-2  px-2 pl-2 border-0">
                    <h6 className="fw-bold">Contact info</h6>
                    <div className="">
                        <i className="fa fa-phone"/> <span className="mx-3">Phone </span>
                        <p className="mx-4 px-2">{user && user?.phone}</p>

                    </div>
                    <div className="">
                        <i className="fa fa-message"/> <span className="mx-3">Email Address </span>
                        <p className="mx-4 px-2">{user && user?.email}</p>

                    </div>
                 </div>
            </div>
        </>
    )
}
export default UserContact