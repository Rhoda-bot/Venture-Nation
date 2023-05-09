import React, { useState } from "react";
import Overviews from "./overviews";
import Teams from "./teams";

const ProfileView = () => {
    const [overview, setOverview] = useState<any>("This is Overview");
    const [scorecard, setScoreCard] = useState<any>();
    const [teamMembers, setTeamMembers] = useState<any>();
    const [swapStateItems, setSwapStateItems] = useState<number>(1);

    const handleOverviewContents = () => {
        setSwapStateItems(1)
    }
    const handleScorecardContents = () => {
        setSwapStateItems(2)
    }
    const handleTeamMembersContents = () => {
        setSwapStateItems(3);
    }
    return(
        <>
            <div className="profileview">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12">
                            <img src="/assets/profile/pro.png" className="position-relative h-100 img-fluid "  alt="" />
                        </div>
                           <div>
                           <img src="/assets/profile/com.png" className="position-absolute top-75 start-50 translate-middle" alt="" />
                           </div>
                    </div>
                    <div className="row mt-5 py-5 text-center">
                        <h1 className="">Venture name</h1>
                        <p className="">Expanding Africas delivery and fulfillment network
                            involves creating a  <br/>vast and efficient
                            infrastructure capable of delivering.</p>
                            <div className="col-md-3 mx-auto">
                            <button>send stage</button>
                            </div>
                    </div>
                    <div className="row ">
                        <div className=" text-center justify-content-center">
                            <button onClick={handleOverviewContents}>Overview</button>
                            <button onClick={handleScorecardContents}>Scorecard</button>
                            <button onClick={handleTeamMembersContents}>Team members</button>
                           <div className="col-md-12 mt-3">
                           
                                { swapStateItems === 1 && (
                                    <div>
                                        <Overviews />
                                    </div>
                                )}
                                { swapStateItems === 3 && (
                                    <div>
                                        <Teams />
                                    </div>
                                )}
                            
                           </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}
export default ProfileView;