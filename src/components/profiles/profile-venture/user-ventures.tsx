import React from "react";

const UserVentures = () => {
    return(
        <>
            <div className="row mt-3">
               <div className="col-md-6">
               <h5>My ventures</h5>
               </div>
                <div className="col-md-6 text-end">
                <button className="" > + add venture</button>
                </div>
                <div className="col-md-6">
                    <div className="card">
                        <img src="/assets/profile/pro1.png"  className="card-img-top position-relative " alt="" />
                        <img src="/assets/profile/circle.png" className="position-absolute top-50 start-50 translate-middle" alt="" />
                        <div className="card-body text-center mt-5" >
                            <h5>Venture name</h5>
                            <p>Building africa’s largest delivery and fufilment network.</p>
                            <div className="d-flex">
                            <button className="mx-2">leadership</button>
                            <button className="mx-2">Communication</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="card">
                        <img src="/assets/profile/pro3.png"  className="card-img-top position-relative " alt="" />
                        <img src="/assets/profile/circle.png" className="position-absolute  top-50 start-50 translate-middle" alt="" />
                        <div className="card-body text-center  mt-5">
                            <h5>Venture name</h5>
                            <p>Building africa’s largest delivery and fufilment network.</p>
                            <div className="d-flex">
                            <button className="mx-2">leadership</button>
                            <button className="mx-2">Communication</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default UserVentures;