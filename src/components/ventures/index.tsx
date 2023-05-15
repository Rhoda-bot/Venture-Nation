import React, { useState } from "react";
import VentureGeneral from "./venture-general";
import VentureOview from "./venture-overview";
import VentureTeams from "./venture-teams";
import VentureSocials from "./venture-socials";

const Ventures = () => {
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
                    <div className="row">
                    <div className="col-lg-4 pe-0 mx-2 px-2 bg-white">
                    
                    <h5 className="profile__details--name px-3 px-lg-4">Edit venture</h5>
                    <p className="profile__details--location px-3 px-lg-4">Personalize and keep your profile up-to-date.</p>
                    <ul className="nav flex-column">
                        <li className={`nav-item  editprofile__menu d-flex ${active.generals && "editprofile__active"} `} role="presentation" onClick={handleGeneral}>
                           
                            <span className="me-auto">General</span> <img src="/assets/icons/right.png" alt="" />
                        </li>
                        <li className={`nav-item  editprofile__menu d-flex ${active.passwords && "editprofile__active"} `}  role="presentation" onClick={handlePassword}>
                            <span className="me-auto">Overview</span> <img src="/assets/icons/right.png" alt="" />
                        </li>
                        <li className={`nav-item  editprofile__menu d-flex ${active.emails && "editprofile__active"} `}  role="presentation" onClick={handleEmail}>
                            <span className="me-auto">Team members</span> <img src="/assets/icons/right.png" alt="" />
                        </li>
                        <li className={`nav-item  editprofile__menu d-flex ${active.socials && "editprofile__active"} `}  role="presentation" onClick={handleSocial}>
                            <span className="me-auto">Social profiles</span> <img src="/assets/icons/right.png" alt="" />
                        </li>
                        
                    </ul>
                    </div>
                    <div className="col-md-7">
                            {swapStateItems === 1 &&   (
                                <VentureGeneral />
                            )}
                            {swapStateItems === 2 && (
                                <VentureOview />
                            )}
                             {swapStateItems === 3 && (
                                <VentureTeams />
                            )}
                             {swapStateItems === 4 && (
                                <VentureSocials />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Ventures;