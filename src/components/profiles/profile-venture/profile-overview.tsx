import React from "react";

const ProfileOverview = () => {
    return(
        <>
             <div className="row text-start">
                <div className="col-md-4">
                    <div className="card ventures__card border-0 p-2">
                        <img src="/assets/icons/icon-1.png" width={35} alt="" />
                        <span className="mb-1 mt-2">No of paying customers</span>
                        <h5 className=""> 656,626</h5>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card ventures__card border-0  p-2">
                        <img src="/assets/icons/icon-1.png" width={35} alt="" />
                        <span className="mb-1 mt-2">Metric metric </span>
                        <h5 className="">Value</h5>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card ventures__card border-0 p-2">
                        <img src="/assets/icons/icon-2.png" width={35} alt="" />
                        <span className="mb-1 mt-2">Metric metric </span>
                        <h5 className="">Value</h5>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ProfileOverview;