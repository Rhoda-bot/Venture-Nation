import React, { useContext, useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { UserContext } from "../../context/userContext";
import { getRequest } from "../../utility/apiRequest";
import moment from "moment";
import Chart from 'react-apexcharts';
import { object } from "yup";
import { isEmptyArray } from "formik";

const VentureDetails = () => {
    const {venturename} = useParams();
    const [venture, setVenture] = useState<any>([]);
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
    }, []);

    const chartOptions = {
        chart: {
          id: 'line-chart',
        },
        xaxis: {
          categories: venture?.revenue && Object.values(venture?.revenue),
        },
        fill: {
            type: 'area',
            gradient: {
              shade: 'dark',
              shadeIntensity: 0.5,
              gradientToColors: ['#ABE5A1'],
              inverseColors: false,
              opacityFrom: 1,
              opacityTo: 0.9,
              stops: [0, 100],
            },
          },
      };

      const chartRevenue:any =[
        {
            name: 'Revenue',
            data: venture?.revenue && Object.keys(venture?.revenue)
        } 
      ] 
    const userOptions = {
        chart: {
            id: 'line-chart',
        },
        xaxis: {
            categories: venture?.noOfUsers && Object.values(venture?.noOfUsers)
        }
    }

    const chartNoOfUsers:any = [
        {
            name: 'Users',
            data: venture?.noOfUsers && Object.keys(venture?.noOfUsers)
        }
    ]
    const grossTransactionOptions = {
        chart: {
            id: 'line-chart',
        },
        xaxis: {
            categories: venture?.grossTransactionalValue && Object.values(venture?.grossTransactionalValue)
        }
    }

    const chartGrossTransactionValue:any = [
        {
            name: 'Users',
            data: venture?.grossTransactionalValue && Object.keys(venture?.grossTransactionalValue)
        }
    ]
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
                                    <div className="profile__details px-2 px-lg-4 pb-3 pb-xxl-4 bg-white venturedetails__description">
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
                                        <NavLink className=" mb-1 mb-xl-2" to={venture?.link} target="_blank" rel="no-referrer"> <i className="fa fa-link"/> {venture?.link}</NavLink>

                                    </div>
                                </div>
                            </div>
                        </div>
                         <div className="col-xl-4 px-4 my-3">
                            <div className="venturedetails__description bg-white p-4 h-100 venturedetails__card">
                                <h5 className="fw-bold mb-3 my-1">Contact info</h5>
                                <div className="">
                                    <i className="fa fa-phone"/> <span className="mx-3 contact--span">Phone </span>
                                    <p className="mx-4 px-2 contact--text">{venture?.owner?.phone}</p>

                                </div>
                                <div className="">
                                    <i className="fa fa-message"/> <span className="mx-3 contact--span">Email Address </span>
                                    <p className="mx-4 px-2 contact--text">{venture?.owner?.email}</p>

                                </div>
                                <div className="">
                                    <i className="fa fa-map-marker"/> <span className="mx-3 contact--span">Location </span>
                                    <p className="mx-4 px-2 contact--text">{venture?.location}</p>

                                </div>
                                <h5 className="fw-bold mb-3 my-1">Social Profiles</h5>
                              
                            </div>
                         </div>
                         <div className="row my-4 px-3">
                            <div className="col-md-6 col-xl-3 px-4 my-2">
                                <div className="row align-items-center p-2 px-3 py-4 py-lg-4 h-100 venturedetails__card">
                                    <div className="col-9">
                                        <h6 className="mb-2 fw-bold ">
                                            <small>{venture?.stage}</small>
                                        </h6>
                                        <p className="profile__details--mail">Venture stage</p>
                                    </div>
                                    <div className="col-3">
                                        <img src="/assets/icons/stage.svg" alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-xl-3 px-4 my-2 ">
                                <div className="row align-items-center px-3 py-4 py-lg-4 h-100 venturedetails__card">
                                    <div className="col-9">
                                        <h6 className="mb-2 fw-bold ">
                                             {venture?.businessModel && venture?.businessModel.map((val:any)=>(
                                                <small key={val}>{val}</small>
                                            ))}
                                        </h6>
                                        <p className="profile__details--mail">Customer model</p>
                                    </div>
                                    <div className="col-3">
                                        <img src="/assets/icons/model.svg" alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-xl-3 px-4 my-2 ">
                                <div className="row align-items-center px-3 py-4 py-lg-4 h-100 venturedetails__card">
                                    <div className="col-9">
                                        <h6 className="mb-2 fw-bold ">
                                            <small>NA</small>
                                        </h6>
                                        <p className="profile__details--mail">Average salary</p>
                                    </div>
                                    <div className="col-3">
                                        <img src="/assets/icons/avgSalary.svg" alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-xl-3 px-4 my-2 ">
                                <div className="row align-items-center px-3 py-4 py-lg-4 h-100 venturedetails__card">
                                    <div className="col-9">
                                        <h6 className="mb-2 fw-bold ">
                                            <small>{moment(venture?.dateFounded).format('YYYY')}</small>
                                        </h6>
                                        <p className="profile__details--mail">Year founded</p>
                                    </div>
                                    <div className="col-3">
                                        <img src="/assets/icons/calendar.svg" alt="" />
                                    </div>
                                </div>
                            </div>
                         </div>
                         <div className="row my-4">
                            <div className="col-lg-12 px-4 my-3">
                                <div className="venturedetails__card p-4 h-100 bg-white">
                                    <div className="pe-5">
                                        <h5 className="my-3">Full description</h5>
                                        <div className="pe-5 me-5">
                                            <p className="profile__details--mail" dangerouslySetInnerHTML={{__html: venture?.description}} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                         </div>
                         <div className="row">
                           <div>
                           <div className="col-12 venturedetails__card p-md-4">
                                <h6 className="mt-3 mx-2">Overview</h6>
                                <div className="row">
                                    <div className="col-md-6 my-2 px-3 px-lg-4">
                                        <div className="row p-2">
                                           <div className="col-md-6 p-2">
                                                <div className="card p-2 h-100">
                                                    <div className="row align-items-center ">
                                                    <div className="col-4">
                                                    <img src="/assets/icons/revenue.svg" className="img-fluid" alt="" />
                                                    
                                                    </div>
                                                    <div className="col-8">
                                                    <h6 className="mb-1 fw-bold">
                                                        <small>{200000}</small>
                                                    </h6>
                                                        <p className="profile__details--mail">Revenue</p>
                                                    </div>
                                                    </div>
                                                </div>
                                           </div>
                                           <div className="col-md-6 p-2">
                                                <div className="card p-2 h-100">
                                                    <div className="row align-items-center ">
                                                    <div className="col-4">
                                                    <img src="/assets/icons/users.svg" className="img-fluid" alt="" />
                                                    
                                                    </div>
                                                    <div className="col-8">
                                                    <h6 className="mb-1 fw-bold">
                                                        <small>{200000}</small>
                                                    </h6>
                                                        <p className="profile__details--mail">No of users</p>
                                                    </div>
                                                    </div>
                                                </div>
                                           </div>
                                           <div className="col-md-6 p-2">
                                                <div className="card p-2 h-100">
                                                    <div className="row align-items-center">
                                                    <div className="col-4">
                                                    <img src="/assets/icons/employ.svg" className="img-fluid" alt="" />
                                                    
                                                    </div>
                                                    <div className="col-8">
                                                    <h6 className="mb-1 fw-bold">
                                                        <small>{200000}</small>
                                                    </h6>
                                                        <p className="profile__details--mail">Full-time employees</p>
                                                    </div>
                                                    </div>
                                                </div>
                                           </div>
                                           <div className="col-md-6 p-2">
                                                <div className="card p-2 h-100">
                                                    <div className="row align-items-center ">
                                                    <div className="col-4">
                                                    <img src="/assets/icons/funds.svg" className="img-fluid" alt="" />
                                                    
                                                    </div>
                                                    <div className="col-8">
                                                    <h6 className="mb-1 fw-bold">
                                                        <small>{200000}</small>
                                                    </h6>
                                                        <p className="profile__details--mail">Part-time workers</p>
                                                    </div>
                                                    </div>
                                                </div>
                                           </div>
                                           <div className="col-md-6  p-2">
                                                <div className="card p-2 h-100">
                                                    <div className="row align-items-center">
                                                    <div className="col-4">
                                                    <img src="/assets/icons/revenue.svg" className="img-fluid" alt="" />
                                                    
                                                    </div>
                                                    <div className="col-8">
                                                    <h6 className="mb-1 fw-bold">
                                                        <small>{200000}</small>
                                                    </h6>
                                                        <p className="profile__details--mail">External funds raised</p>
                                                    </div>
                                                    </div>
                                                </div>
                                           </div>
                                           <div className="col-md-6  p-2">
                                                <div className="card p-2 h-100">
                                                    <div className="row align-items-center">
                                                    <div className="col-4">
                                                    <img src="/assets/icons/gtv.svg" className="img-fluid" alt="" />
                                                    
                                                    </div>
                                                    <div className="col-8">
                                                    <h6 className="mb-1 fw-bold">
                                                        <small>{200000}</small>
                                                    </h6>
                                                        <p className="profile__details--mail">GTV</p>
                                                    </div>
                                                    </div>
                                                </div>
                                           </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 my-2 px-3 px-lg-4">
                                        <div className="card p-3">
                                        <h6 className="mx-2">Revenue</h6>
                                        <Chart
                                            options={chartOptions}
                                            series={chartRevenue}
                                            type="line"
                                            height={250}
                                        />
                                        </div>
                                    </div>
                                    <div className="col-md-6 my-2 px-3 px-lg-4">
                                        <div className="card p-3">
                                            <h6 className="mx-2">Number of Users</h6>
                                            <Chart
                                                options={userOptions}
                                                series={chartNoOfUsers}
                                                type="line"
                                                height={250}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-6 my-2 px-3 px-lg-4">
                                        <div className="card p-3">
                                            <h6 className="mx-2">Gross Transaction Value</h6>
                                            <Chart
                                                options={grossTransactionOptions}
                                                series={chartGrossTransactionValue}
                                                type="line"
                                                height={250}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                           </div>
                         </div>
                         <div className="row my-4 px-3">
                            <div className="">
                                <div className="col-md-12 col-12 venturedetails__card p-md-4 text-center">
                                     <h6 className="text-start fw-bold">Team members</h6>
                                    {!venture?.team || venture?.team.length === 0 && (
                                       <img src="/assets/profile/emptystate.svg" className="" alt="image" />
                                    )}
                                       <div className="row my-4">
                                       { venture?.team && (
                                            venture?.team.map((val:any,index:number) => (
                                                <div className="col-md-3" key={index}>
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
                                                                </div>
                                                                    <p className="mb-0 text-start">
                                                                        <small> {val?.role}</small>
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
                    </div>
                </div>
            </div>
        </>
    )
}
export default VentureDetails