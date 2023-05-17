import React, { useContext } from "react";
import { UserContext } from "../../../context/userContext";

const UserContact = () => {
    const { user } = useContext(UserContext);
    console.log(user);
    
    return(
        <>
           <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="card my-2 px-2 pl-2 border-0" style={{boxShadow: ' 0px 0px 1px rgba(12, 26, 75, 0.24), 0px 3px 8px -1px rgba(50, 50, 71, 0.05)'}}>
                            <div className="card-body">
                                <h4 className="">Contact info</h4>
                                <small><i className="fa fa-phone"/></small>
                                <small className="mx-3"> Phone</small>
                                <p className="mx-4 px-1">{user && user?.phone}</p>
                                <small><i className="fa fa-message"/></small>
                                <small className="mx-3"> Email address</small>
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