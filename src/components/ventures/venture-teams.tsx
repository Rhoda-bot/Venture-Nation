import React, { useEffect, useState } from "react";
import AddTeamModal from "../modal/add-teamModal";
import { getRequest } from "../../utility/apiRequest";
import { useParams } from "react-router-dom";
import { Button, Card, CardText, CardTitle, Col, Nav, NavItem, NavLink, Row, TabContent, TabPane } from "reactstrap";
import DeleteInviteModal from "../modal/deleteInvite";

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
    const handleRemoveTeamMember = async (name:any) => {
        const filt =  venture?.team.filter((members:any) => {
            if (members.name === name ) {
              console.log(members);
              
            }
        });
        
    }
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
                                             { venture?.team && (
                                            venture?.team.map((val:any,index:number) => (
                                                <div className="col-md-6" key={index}>
                                                    <NavLink to="#">
                                                        <div className="ventures__teamcard px-2">
                                                        <div className="row align-items-center p-2 p-xxl-3 w-auto ">
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
                                                                    <p className="fw-bold mb-1">{val?.name}</p>
                                                                    <p className="mb-1 py-0 fw-bold text-end ms-auto dropdown"  role="button" data-bs-toggle="dropdown" aria-expanded="false">...</p>
                                                                    <div className="dropdown-menu dropdown-menu-demo border-0 mx-2" style={{
                                                                        boxShadow:"0px 0px 50px -5px rgba(0, 0, 0, 0.08)"
                                                                    }}>
                                                                        <NavLink href="#" className="dropdown-item p-2"><i className="fa fa-edit mx-2"/> Edit Role</NavLink>
                                                                        <NavLink href="#" className="dropdown-item p-2 text-danger" onClick={() => handleRemoveTeamMember(val?.name)}><i className="fa fa-trash mx-2"/>Remove</NavLink>
                                                                    </div>
                                                                </div>
                                                                    <p className="mb-0 text-start">
                                                                        <small> {val?.role}</small>
                                                                    </p>
                                                            </div>
                                                        </div>
                                                        </div>
                                                    </NavLink>
                                                </div>
                                            ))
                                        )}
                                       </div>
                                    
                                </div>
                            </div>
                            
                        </div>
                        <div className="row py-5">
                          <div className="mx-2 me-0 py-3 px-2">
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
                                <div className="row align-items-center">
                                    {venture?.invites &&(
                                        <>
                                        <div className="col-md-8">
                                        <div className="d-flex mt-3 pt-3">
                                            <img src="/assets/icons/inviteAvatar.svg" className=" mx-2" alt="" />
                                          <p className="fw-bold mx-3">
                                            {venture?.invites && Object.keys(venture?.invites)}
                                          </p>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="d-flex mt-3">
                                            <button className="profile__details--edit">Resend</button>
                                            <i className="fa fa-trash mx-5 mt-3 text-danger" role="button" data-bs-toggle="modal" data-bs-target="#exampleModal3"/>
                                        </div>
                                    </div>
                                    </>
                                    )
                                    }
                                </div>
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
                <DeleteInviteModal />
            </div>
        </>
    )
}
export default VentureTeams;