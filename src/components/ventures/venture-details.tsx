import React, { useContext, useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { UserContext } from "../../context/userContext";
import { getRequest } from "../../utility/apiRequest";

const VentureDetails = () => {
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
    
    console.log(venture.name);
    
    return(
        <>
            <div className="venturedetails py-3">
                <div className="container">
                    <div className="row mt-5 pt-lg-4 pt-xxl-5">
                        <div className="col-xl-8 my-3">
                            <div className="mx-2 h-100">
                                <div className="venturedetails__top rounded">
                                    <div className="venturedetails__top--banner" style={{
                                        backgroundImage: 'url(/assets/profile/banner.png)',
                                        width: '100%',
                                        backgroundPosition: 'center center',
                                        backgroundRepeat: 'no-repeat',
                                        height: '150px',
                                        backgroundSize: 'cover',
                                        objectFit: 'cover'
                                    }}>

                                    </div>
                                    <div className="profile__details px-2 px-lg-4 pb-3 pb-xxl-4 bg-white">
                                        <div className="row align-items-end mb-2 mb-xxl-3 rounded">
                                            <div className="col-5">
                                                <img src={venture?.logo && venture?.logo ? venture?.logo : "/assets/profile/defaultBg.webp"} className="ventures__card--img " alt="venture logo" />
                                            </div>
                                            <div className="col-7 text-center text-md-end">
                                                <span className="mx-2">
                                                    <NavLink to={`/ventures/edit-venture/${venturename}`} className="profile__details--edit ms-0"><i className="fa fa-edit"/> Edit venture</NavLink>
                                                </span>
                                                <span className="mx-2" >
                                                  <NavLink to="" className="profile__details--edit ms-0">
                                                  <i className="fa fa-share"/>
                                                  </NavLink>
                                                </span>
                                            </div>
                                        </div>
                                        <h5 className="profile__details--name mb-1">{venture?.name}</h5>
                                        <p className="profile__details--mail mb-1 mb-xl-2">{venture?.tagline}</p>
                                        <p className="profile__details--text">
                                        {venture?.sector &&
                                            venture?.sector?.map((val:any, index: number)=>(
                                            <span className="" key={index}>{val},</span>
                                            ))
                                        }
                                        </p>
                                        <NavLink className=" mb-1 mb-xl-2" to={""} target="_blank"> <i className="fa fa-link"/> {venture?.link}</NavLink>

                                    </div>
                                </div>
                            </div>
                        </div>
                         <div className="col-xl-4 px-4 my-3  bg-white rounded">
                            <div className="venturedetails__description p-4 h-100">
                                <h5 className="my-4">Contact info</h5>
                                <div className="my-3">
                                    <div className="d-flex my-2">
                                        <div className="px-md-2">
                                            <img src="/assets/icons/dail.svg"/>
                                            <p className="mb-1">
                                                    Phone
                                            </p>
                                            <p className="mb-0">
                                                {venture?.owner?.phone}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                         </div>
                         <div className="row my-4 px-3">
                            <div className="col-md-6 col-xl-3 px-4 my-2">
                                <div className="row align-items-center p-2 px-3 py-4 py-lg-4 h-100 bg-white rounded">
                                    <div className="col-9">
                                        <h6 className="mb-2 fw-bold ">
                                            <small>Explore</small>
                                        </h6>
                                        <p>Venture stage</p>
                                    </div>
                                    <div className="col-3">
                                        <img src="/assets/icons/stage.svg" alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-xl-3 px-4 my-2 ">
                                <div className="row align-items-center px-3 py-4 py-lg-4 h-100 bg-white rounded">
                                    <div className="col-9">
                                        <h6 className="mb-2 fw-bold ">
                                            <small>Explore</small>
                                        </h6>
                                        <p>Customer model</p>
                                    </div>
                                    <div className="col-3">
                                        <img src="/assets/icons/model.svg" alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-xl-3 px-4 my-2 ">
                                <div className="row align-items-center px-3 py-4 py-lg-4 h-100 bg-white rounded">
                                    <div className="col-9">
                                        <h6 className="mb-2 fw-bold ">
                                            <small>NA</small>
                                        </h6>
                                        <p>Average salary</p>
                                    </div>
                                    <div className="col-3">
                                        <img src="/assets/icons/avgSalary.svg" alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-xl-3 px-4 my-2 ">
                                <div className="row align-items-center px-3 py-4 py-lg-4 h-100 bg-white rounded">
                                    <div className="col-9">
                                        <h6 className="mb-2 fw-bold ">
                                            <small>2023</small>
                                        </h6>
                                        <p>Year founded</p>
                                    </div>
                                    <div className="col-3">
                                        <img src="/assets/icons/year.svg" alt="" />
                                    </div>
                                </div>
                            </div>
                         </div>
                         <div className="row my-4">
                            <div className="col-lg-12 px-4 my-3">
                                <div className="venturedetails__description p-4 h-100 bg-white">
                                    <div className="pe-5">
                                        <h5 className="my-3">Full description</h5>
                                        <div className="pe-5 me-5">
                                            <p>Short description</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                         </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default VentureDetails