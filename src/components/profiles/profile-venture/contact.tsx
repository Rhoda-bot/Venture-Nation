import React from "react";

const UserContact = () => {
    return(
        <>
            <h4 className="mt-3">Contact info</h4>
           <div className="">
           <div className="card my-2 px-2 pl-2 border-0" style={{boxShadow: ' 0px 0px 1px rgba(12, 26, 75, 0.24), 0px 3px 8px -1px rgba(50, 50, 71, 0.05)'}}>
                <div className="card-body">
                <small>Phone</small>
                <p ><img src="/assets/icons/phonr.svg" className="mx-1" alt="" />(+234) 802 422 8343</p>
                <small>Website</small>
                <p ><img src="/assets/icons/link.svg" className="mx-1" alt="" />samplewebsite.com</p>
                <small ><img src="/assets/icons/sms.png" className="mx-1" alt="" />Email address</small>
                <p >boomboom@gmail.com</p>
                <small ><img src="/assets/profile/vec1.png" className="mx-1" alt="" />Location</small>
                <p >Lagos, Nigeria</p>
                </div>
            </div>
           </div>
        </>
    )
}
export default UserContact