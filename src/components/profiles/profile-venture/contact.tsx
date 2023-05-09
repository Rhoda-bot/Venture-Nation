import React from "react";

const UserContact = () => {
    return(
        <>
            <h4 className="mt-3">Contact info</h4>
            <div className="card p-2 border-0" style={{boxShadow: ' 0px 0px 1px rgba(12, 26, 75, 0.24), 0px 3px 8px -1px rgba(50, 50, 71, 0.05)'}}>
                <small>Phone</small>
                <p>(+234) 802 422 8343</p>
                <small>Website</small>
                <p>samplewebsite.com</p>
                <small>Email address</small>
                <p>boomboom@gmail.com</p>
                <small>Location</small>
                <p>Lagos, Nigeria</p>
            </div>
        </>
    )
}
export default UserContact