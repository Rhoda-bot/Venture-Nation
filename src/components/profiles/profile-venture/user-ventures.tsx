import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { UserContext } from "../../../context/userContext";

const UserVentures = () => {
    const {user} = useContext(UserContext)
    return(
        <>
            <div className="profile__ventures px-2 px-lg-4 my-4">
              <div className="row align-items-center my-3 mt-4 mt-xxl-5">
                <div className="col-md-6 text-center text-md-start">
                <h4 className="profile__details--name">My ventures</h4>
                </div>
                    <div className="col-md-6  text-center text-md-end">
                        <NavLink to="/venture/add-venture" role="button" className="profile__details--edit ms-0">
                        <i className="fa fa-plus"/> add venture
                        </NavLink>
                    </div>
              </div>
            <div className="row">
                {user?.ventures && user?.ventures.map((val: any) => (
                     <div className="col-md-6 col-xxl-4 my-2 my-xxl-3 mt-3" key={val?.name}>
                     <NavLink to={`/profile/ventures/${val?.slug}`}>
                     <div className="card ventures__card border-0 h-100">
                         <div className="venture__banner" style={{
                             backgroundImage: 'url(/assets/profile/banner.png)',
                             width: '100%',
                             height: '150px',
                             backgroundRepeat: 'no-repeat',
                             backgroundSize: 'cover',
                             borderRadius: '10px'
 
             
                         }}></div>
                         <img src={val?.logo !== undefined ? val?.logo : '/assets/profile/dafaultBg.png'}  className="ventures__card--img mx-auto" alt="" />
                     
                         <div className="card-body text-center pt-0" >
                             <h6 className="ventures--name my-1">{val?.name}</h6>
                             <p>{val?.tagline}</p>
                             <div className="d-flex">
                                 <p className="me-1 mb-0 px-2 py-1 profile__skills--tag">
                                    <small>{val?.location}</small>
                                 </p>
                             </div>
                         </div>
                     </div>
                    </NavLink>
                      </div>
                ))}              
            </div>
              
            </div>
        </>
    )
}
export default UserVentures;