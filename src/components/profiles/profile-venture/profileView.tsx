import React, { useState } from "react";
import Overviews from "./overviews";
import Teams from "./teams";
import Socials from "../profile-profile/socials";
import UserContact from "./contact";
import { NavLink } from "react-router-dom";
import ProfileOverview from "./profile-overview";

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
            <div className="ventureview">
                <div className="container px-3">
                    <div className="row">
                        <div className="col-md-9 ">
                            <div className="col-md-12 position-relative" style={{
                                backgroundImage: 'url(/assets/profile/venturebg.png)',
                                height: '190px',
                                width: '100%',
                                backgroundSize: 'cover',
                                backgroundRepeat: 'no-repeat',
                                objectFit: 'cover',
                            }}>
                                <img src={ "/assets/profile/venture.png"} className="position-absolute top-100 start-50 translate-middle"  alt="" />
                                <div className="text-end row">
                                    <div className="col-md-3 d-flex">
                                        <NavLink to="/edit-venture" className="px-3">
                                        <button className="position-abolute profile__details--edit">Edit profile</button>
                                        </NavLink>
                                    </div>
                                </div>
                            </div>
                            <div className="row text-center py-5 mt-4">
                                    <h5>Venture name</h5>
                                    <p>Expanding Africas vast and efficient delivery and fulfillment network.</p>
                                    <h5></h5>
                                    <p className="text-start">
                                    Lorem ipsum dolor sit amet consectetur. Integer consequat lacus laoreet eget. Massa id pellentesque dolor sed facilisi posuere. 
                                    Ac eget consectetur tellus faucibus. Nibh egestas etiam eu nulla ut orci. Nec sem habitant in sit ipsum sit arcu sed.
                                    Amet imperdiet turpis nisl ut tincidunt. Orci vitae vitae urna sit blandit. Sed egestas non ut odio ut nunc. 
                                    Amet in mauris senectus purus quis enim urna.
                                    </p>
                                    <p className="text-start">
                                    Lorem ipsum dolor sit amet consectetur. 
                                    Integer conseq uat lacus laoreet eget. Massa id pellentesque dolor sed facilisi posuere. Ac eget consectetur tellus faucibus.
                                    Nibh egestas etiam eu nulla ut orci. Nec sem habitant in sit ipsum sit arcu sed. Amet imperdiet turpis nisl ut tincidunt. 
                                    Orci vitae vitae urna sit blandit. 
                                    Sed egestas non ut odio ut nunc. Amet in mauris senectus purus quis enim urna.
                                    </p>
                            </div>
                            <div className="row">
                                <ProfileOverview />
                            </div>
                            <div className="row">
                                <Teams />
                            </div>
                        </div>
                        <div className="col-md-3">
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