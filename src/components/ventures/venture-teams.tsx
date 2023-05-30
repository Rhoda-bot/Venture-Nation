import React, { useEffect, useState } from "react";
import AddTeamModal from "../modal/add-teamModal";
import { getRequest } from "../../utility/apiRequest";
import { useParams } from "react-router-dom";
import { Button, Card, CardText, CardTitle, Col, Nav, NavItem, NavLink, Row, TabContent, TabPane } from "reactstrap";

const VentureTeams = () => {
    const {venturename} = useParams();
    const [venture, setVenture] = useState<any>([])
    useEffect(() => {
        const getCurrentVenture = async() => {
            const fetchCurrentVenture = await getRequest(`ventures/${venturename}`);
            return fetchCurrentVenture;
            
        }
        const result = getCurrentVenture();
        result.then((res:any) => {
            if (res.data.status === "success") {
                setVenture(res.data.data);
                
            }
        })
    }, [])
    return (
        <>
            <div className="general bg-white">
                <div className="container">
                    <div className="row">
                        <div className="general__header py-4 px-5">
                                <h4 className="profile__details--name">Team members</h4>
                                <p className="profile__details--location">Manage your venture’s team members.</p>
                        </div>
                        <div className="col-md-12">
                        <div className="row align-items-center">
                            <div className="col-6 text-start">

                            </div>
                            <div className="col-5 text-end mx-3 px-2">
                                <button className="profile__details--edit ms-0 "  data-bs-toggle="modal" data-bs-target="#exampleModal">
                                    <i className="fa fa-plus"/> Add team member
                                </button>
                            </div>
                        </div>
                        <div className="row text-center">
                        <div className="">
                                <div className="col-md-12 col-12 p-md-4 text-center">
                                    {!venture?.team || venture?.team.length === 0 && (
                                        <>
                                        {/* <h6 className="text-start">Team members</h6> */}
                                        <img src="/assets/profile/emptystate.svg" className="" alt="image" />
                                        <p>No confirmed team member yet</p>
                                       </>
                                    )}
                                    
                                       <div className="row">
                                             {venture?.team && (
                                            venture?.team.map((val:any,index:number) => (
                                                <div className="col-md-6" key={index}>
                                                    <div className="row align-items-center p-2 p-xxl-3 w-auto">
                                                        <div className="col-3" style={{
                                                            backgroundImage: `url(${val?.avatar})`,
                                                            height: '50px',
                                                            width: '50px',
                                                            backgroundRepeat: 'no-repeat',
                                                            borderRadius: '50px',
                                                            backgroundSize: 'cover'
                                                        }}></div>
                                                        <div className="col-9">
                                                            <div className="d-flex align-items-start">
                                                                <p className="fw-bold">{val?.name}</p><br />
                                                                <p className="mb-1 py-0 fw-bold text-end ms-auto dropdown"  role="button" data-bs-toggle="dropdown" aria-expanded="false">...</p>
                                                                <div className="dropdown-menu dropdown-menu-demo">
                                                                    <a href="#" className="dropdown-item">Edit Role</a>
                                                                </div>
                                                                <p>
                                                                {val?.role}
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))
                                        )}
                                       </div>
                                    
                                </div>
                            </div>
                            
                        </div>
                        <div className="row py-5">
                          <div className="mx-3 py-3">
                            <h6>Manage invites</h6>
                          <div className="nav nav-tabs" id="nav-tab" role="tablist">
                            <button className="nav-link active ventures--link px-3 py-3" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">
                                Pending
                            </button>
                            <button className="nav-link ventures--link px-3 py-3 mx-2" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">
                                Declined</button>
                          </div>
                          <div className="tab-content" id="nav-tabContent">
                            <div className="tab-pane fade show active " id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab" tabIndex={0}>
                                Pending Tab
                            </div>
                            <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab"  tabIndex={0}>
                                Declined Pane
                            </div>
                          </div>
                          </div>
                        </div>
                        </div>
                    </div>
                </div>
                <AddTeamModal />
            </div>
        </>
    )
}
export default VentureTeams;