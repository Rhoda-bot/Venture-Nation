import React from "react";
import { NavLink } from "react-router-dom";

const UserVentures = () => {
    return(
        <>
            <div className="row mt-3 px-3 mx-2 ventures">
               <div className="col-md-6">
               <h4 className="profile__details--name">My ventures</h4>
               </div>
                <div className="col-md-6 text-end">
                <button className="ventures--btn" > + add venture</button>
                </div>
                <div className="col-md-6 mt-3">
                    <div className="card ventures__card border-0">
                        <img src="/assets/profile/pro1.png"  className="card-img-top position-relative " alt="" />
                        <NavLink to="/ventures">
                        <img src="/assets/profile/venture1.png" className="position-absolute top-50 start-50 translate-middle pb-5" alt="" />
                        </NavLink>
                        <div className="card-body text-center" >
                            <h5 className="ventures--name">Venture name</h5>
                            <p>Building africa’s largest delivery and fufilment network.</p>
                            <div className="d-flex">
                            <button className="mx-2 profile__skills--btn"><img src="/assets/profile/vec1.png" alt="" /> Lagos, Nigeria</button>
                            <button className="mx-1 profile__skills--btn"><img src="/assets/icons/people.png" alt="" /> 18 Team members</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 mt-3">
                    <div className="card ventures__card border-0">
                        <img src="/assets/profile/pro3.png"  className="card-img-top position-relative " alt="" />
                        <NavLink to="/ventures">
                        <img src="/assets/profile/venture.png" className="position-absolute top-50 start-50 translate-middle pb-5" alt="" />
                        </NavLink>
                        <div className="card-body text-center">
                            <h5 className="ventures--name">Venture name</h5>
                            <p>Building africa’s largest delivery and fufilment network.</p>
                            <div className="d-flex">
                            <button className="mx-2 profile__skills--btn"><img src="/assets/profile/vec1.png" alt="" /> Lagos, Nigeria</button>
                            <button className="mx-1 profile__skills--btn"><img src="/assets/icons/people.png" alt="" />18 Team members</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default UserVentures;