import React, { useState } from "react";
import GeneralProfile from "./profile-general";
import ProfilePassword from "./profile-passsword";
import { NavLink } from "react-router-dom";
import ProfileSocials from "./profile-socials";

const EditProfile = () => {
    const [general, setGeneral] = useState<any>()
    const [password, setPassword] = useState<any>()
    const [email, setEmail] = useState<any>()
    const [social, setSocial] = useState<any>();
    const [swapStateItems, setSwapStateItems] = useState<number>(1);
    const [active, setActive] = useState({
        generals:true,
        passwords: false,
        emails: false,
        socials: false
    })

    const handleGeneral = () => {
        setSwapStateItems(1)
        setActive({
            generals:true,
            passwords: false,
            emails: false,
            socials: false
        })
    }
    const handlePassword = () => {
        setSwapStateItems(2)
        setActive({
            generals:false,
            passwords: true,
            emails: false,
            socials: false
        })
    }
    const handleEmail = () => {
        setSwapStateItems(3)
        setActive({
            generals:false,
            passwords: false,
            emails: true,
            socials: false
        })
    }
    const handleSocial = () => {
        setSwapStateItems(4)
        setActive({
            generals:false,
            passwords: false,
            emails: false,
            socials: true
        })
    
    }
    return(
        <>
            <div className="editprofile">
                <div className="container">
                    <div className="row mt-4 px-4">
                        <div className="col-md-4 border-end">
                            <h5 className="profile__details--name">Edit profile</h5>
                            <p className="profile__details--location">Personalize and keep your profile up-to-date.</p>
                        <div className="card border-0">
                            <ul className="nav flex-column">
                                <li className={`nav-item p-2 editprofile__menu d-flex ${active.generals && "editprofile__active"} `} role="presentation" onClick={handleGeneral}>
                                   
                                    <span className="me-auto">General</span> <img src="/assets/icons/right.png" alt="" />
                                </li>
                                <li className={`nav-item p-2 editprofile__menu d-flex ${active.passwords && "editprofile__active"} `}  role="presentation" onClick={handlePassword}>
                                    <span className="me-auto">Password</span> <img src="/assets/icons/right.png" alt="" />
                                </li>
                                <li className={`nav-item p-2 editprofile__menu d-flex ${active.emails && "editprofile__active"} `}  role="presentation" onClick={handleEmail}>
                                    <span className="me-auto">Email notifications</span> <img src="/assets/icons/right.png" alt="" />
                                </li>
                                <li className={`nav-item p-2 editprofile__menu d-flex ${active.socials && "editprofile__active"} `}  role="presentation" onClick={handleSocial}>
                                    <span className="me-auto">Social profiles</span> <img src="/assets/icons/right.png" alt="" />
                                </li>
                                
                            </ul>
                            </div>
                        </div>
                        <div className="col-md-7">
                            {swapStateItems === 1 &&   (
                                <GeneralProfile />
                            )}
                            {swapStateItems === 2 && (
                                <ProfilePassword />
                            )}
                             {swapStateItems === 4 && (
                                <ProfileSocials />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default EditProfile;