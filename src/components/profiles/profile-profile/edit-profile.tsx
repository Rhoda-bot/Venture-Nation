import React, { useState } from "react";
import GeneralProfile from "./profile-general";
import ProfilePassword from "./profile-passsword";

const EditProfile = () => {
    const [general, setGeneral] = useState<any>()
    const [password, setPassword] = useState<any>()
    const [email, setEmail] = useState<any>()
    const [social, setSocial] = useState<any>();
    const [swapStateItems, setSwapStateItems] = useState<number>(1);

    const handleGeneral = () => {
        setSwapStateItems(1)
    }
    const handlePassword = () => {
        setSwapStateItems(2)
    }
    const handleEmail = () => {
        setSwapStateItems(3)
    }
    const handleSocial = () => {
        setSwapStateItems(4)
    }
    return(
        <>
            <div className="editprofile">
                <div className="container">
                    <div className="row mt-4">
                        <div className="col-md-4 border-end">
                            <h5 className="profile__details--name">Edit profile</h5>
                            <p className="profile__details--location">Personalize and keep your profile up-to-date.</p>
                        <div className="card border-0">
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item p-2 editprofile__menu d-flex" role="button" onClick={handleGeneral}><span className="me-auto">General</span> <img src="/assets/icons/right.png" alt="" /></li>
                                <li className="list-group-item p-2 editprofile__menu d-flex" role="button" onClick={handlePassword}><span className="me-auto">Password</span> <img src="/assets/icons/right.png" alt="" /></li>
                                <li className="list-group-item p-2 editprofile__menu d-flex" role="button" onClick={handleEmail}><span className="me-auto">Email notifications</span> <img src="/assets/icons/right.png" alt="" /></li>
                                <li className="list-group-item p-2 editprofile__menu d-flex" role="button" onClick={handleSocial}><span className="me-auto">Social profiles</span> <img src="/assets/icons/right.png" alt="" /></li>
                                <li className="list-group-item"/>
                            </ul>
                            </div>
                        </div>
                        <div className="col-md-7">
                            {swapStateItems === 1 && (
                                <GeneralProfile />
                            )}
                            {swapStateItems === 2 && (
                                <ProfilePassword />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default EditProfile;