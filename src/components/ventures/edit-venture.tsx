import React, { useState } from "react";
import GeneralVenture from "./general-venture";
import VentureOview from "./venture-overview";
import VentureTeams from "./venture-teams";
import VentureSocials from "./venture-socials";
import VentureGeneral from "./venture-general";


const EditVenture = () => {
    const [general, setGeneral] = useState<any>()
    const [overview, setOverview] = useState<any>()
    const [teams, setTeams] = useState<any>()
    const [social, setSocial] = useState<any>();
    const [swapStateItems, setSwapStateItems] = useState<number>(1);

    const [active, setActive] = useState({
        generals:true,
        passwords: false,
        teams: false,
        socials: false
    })

    const handleGeneral = () => {
        setSwapStateItems(1)
        setActive({
            generals:true,
            passwords: false,
            teams: false,
            socials: false
        })
    }
    const handleOverview = () => {
        setSwapStateItems(2)
        setActive({
            generals:false,
            passwords: true,
            teams: false,
            socials: false
        })
    }
    const handleTeams = () => {
        setSwapStateItems(3)
        setActive({
            generals:false,
            passwords: false,
            teams: true,
            socials: false
        })
    }
    const handleSocial = () => {
        setSwapStateItems(4)
        setActive({
            generals:false,
            passwords: false,
            teams: false,
            socials: true
        })
    
    }
    return(
        <>
            <div className="editventure py-5">
                <div className="container py-5">
                    <div className="row">
                    <div className="col-lg-4 py-4 col-xxl-4 px-2 px-md-3 pe-0 bg-white" style={{
                            height: '400px',
                            borderRadius: '10px'
                        }}>
                    
                            <h5 className="profile__details--name px-3 px-lg-4">Edit venture profile</h5>
                            <p className="profile__details--location px-3 px-lg-4">Personalize your venture profile below.</p>
                            <ul className="nav flex-column">
                                <li className={`nav-item  editprofile__menu d-flex ${active.generals && "editprofile__active"} `} role="presentation" onClick={handleGeneral}>
                                   
                                    <span className="me-auto">General</span> <img src="/assets/icons/right.png" alt="" />
                                </li>
                                <li className={`nav-item  editprofile__menu d-flex ${active.passwords && "editprofile__active"} `}  role="presentation" onClick={handleOverview}>
                                    <span className="me-auto">Overview</span> <img src="/assets/icons/right.png" alt="" />
                                </li>
                                <li className={`nav-item  editprofile__menu d-flex ${active.teams && "editprofile__active"} `}  role="presentation" onClick={handleTeams}>
                                    <span className="me-auto">Team members</span> <img src="/assets/icons/right.png" alt="" />
                                </li>
                                <li className={`nav-item  editprofile__menu d-flex ${active.socials && "editprofile__active"} `}  role="presentation" onClick={handleSocial}>
                                    <span className="me-auto">Social profiles</span> <img src="/assets/icons/right.png" alt="" />
                                </li>
                                
                            </ul>
                        </div>
                        <div className="col-lg-7 col-xxl-6 px-2 px-md-3">
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
export default EditVenture