import React, { useContext } from "react";
import { UserContext } from "../../../context/userContext";

const UserContact = () => {
    const { user } = useContext(UserContext);
    console.log(user);
    
    return(
        <>
            <div className="contact p-3 p-lg-3 pb-lg-2 my-5 ">
            <div className="card my-2 px-2 pl-2 border-0" style={{boxShadow: ' 0px 0px 1px rgba(12, 26, 75, 0.24), 0px 3px 8px -1px rgba(50, 50, 71, 0.05)'}}>
                <div className="card-body">
                    <h6 className="">Contact info</h6>
                    <div className="d-flex my-2">
                    <i className="fa fa-phone"/>
                    <div className="mx-2">
                        <p className="mb-1">Phone</p>
                        <p className="mx-4 px-1">{user && user?.phone}</p>
                    </div>
                    </div>
                    <div className="d-flex my-2">
                    <i className="fa fa-mail"/>
                    <div className="mx-2">
                        <p className="mb-1">Email address</p>
                        <p className="mx-4 px-1">{user && user?.email}</p>
                    </div>
                    </div>
                 </div>
            </div>
            </div>
        </>
    )
}
export default UserContact