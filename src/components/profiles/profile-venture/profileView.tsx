import React, { useState } from "react";
import Overviews from "./overviews";
import Teams from "./teams";
import Socials from "../profile-profile/socials";
import UserContact from "./contact";
import { NavLink } from "react-router-dom";
import ProfileOverview from "./profile-overview";
import UserVentures from "./user-ventures";

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
            <div className="ventureview py-5">
                <div className="container px-3">
                    <div className="row">
                        <div className="col-md-9">
                        <UserVentures />
                           
                        </div>
                        <div className="col-md-3  mt-4 pt-3 d-none col-3 d-lg-block">
                            <UserContact />
                            <Socials />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ProfileView;