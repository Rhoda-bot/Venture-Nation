import React from "react";
import AddTeamModal from "../modal/add-teamModal";

const VentureTeams = () => {
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
                            <div className="col-6 text-start"></div>
                            <div className="col-6 text-end">
                                <button className="profile__details--edit ms-0"  data-bs-toggle="modal" data-bs-target="#exampleModal">
                                    <i className="fa fa-plus"/> Add team member
                                </button>
                            </div>
                        </div>
                        <div className="row text-center">
                            <img src="/assets/profile/emptystate.svg" alt="" />
                            <p>No confirmed team member yet</p>
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