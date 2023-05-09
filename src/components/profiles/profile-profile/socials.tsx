import React from "react";

const Socials = () => {
    return(
        <>
            <h4 className="mt-3 py-3">Socials</h4>
            <div className="card p-3  border-0" style={{boxShadow: ' 0px 0px 1px rgba(12, 26, 75, 0.24), 0px 3px 8px -1px rgba(50, 50, 71, 0.05)'}}>
                <div className="card-body">
                <small><img src="/assets/icons/Linkedin.svg" className="mx-1" alt="" />LinkedIn</small>
                <p>view linkedin profile</p>
                <small><img src="/assets/icons/twitter.png" className="mx-1" alt="" />Twitter</small>
                <p>view twitter profile</p>
                <small><img src="/assets/icons/instagram.png" className="mx-1" alt="" />Instagram</small>
                <p>view instagram profile</p>
                <small><img src="/assets/icons/facebook.svg" className="mx-1" alt="" />Facebook</small>
                <p>view facebook profile</p>
                </div>
            </div>
        </>
    )
}
export default Socials;