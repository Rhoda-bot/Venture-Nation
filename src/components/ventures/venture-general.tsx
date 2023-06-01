import React, { useContext, useEffect, useState } from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { Fade } from "reactstrap";
import Tag from "../reusables/tag";
import * as Yup from 'yup';
import { UserContext } from "../../context/userContext";
import { useParams } from "react-router-dom";
import { getRequest } from "../../utility/apiRequest";
import ReactQuill from "react-quill";
import Sector from "../reusables/sector";
import DeleteVentureModal from "../modal/deleteVenture";

const VentureGeneral = () => {
    const [skills, setSkills] = useState<any>([]);
    const {user} = useContext(UserContext);
    const {venturename} = useParams();
    const [venture, setVenture] = useState<any>([]);
    const [sector, setSector] = useState<any>([])
    const [model, setModel] = useState<any>([])

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
    const validationSchema = Yup.object().shape({
        name: Yup.string()
        .required("Name is required"),
        location: Yup.string()
        .required("Location is required"),
        description: Yup.string()
        ,
        dateFounded: Yup.string(),
        link: Yup.string(),
        sector: Yup.string(),
        businessModel: Yup.string(),
        stage: Yup.string()
        .required("Stage is required"),
        tagline: Yup.string(),
        linkedin: Yup.string(),
        twitter: Yup.string(),
        instagram: Yup.string(),
        facebook: Yup.string(),

      })

    const handleForm = (values:any) => {
        console.log(values);
        
    }
    return (
        <>
            <Fade>
            <div className="general bg-white">
                    <div className="container">
                        <div className="row">
                        <div className="general__header py-4 px-5">
                                <h4 className="profile__details--name">General</h4>
                                <p className="profile__details--location">You can keep your venture information and data up-to-date by editing the form fields below.</p>
                            </div>  
                            <div className="col-md-12">
                                <div className="mx-2 h-100 text-center">
                                    <div className="venturedetails__top">
                                    <div className="venturedetails__top--banner" style={{
                                        backgroundImage: 'url(/assets/profile/banner.png)',
                                        width: '100%',
                                        backgroundPosition: 'center center',
                                        backgroundRepeat: 'no-repeat',
                                        height: '190px',
                                        backgroundSize: 'cover',
                                        objectFit: 'cover',
                                        borderRadius: '0'
                                    }}>
                                            <div className="profile__updateavatar top-50" style={{
                                                marginLeft: '130px'
                                            }}>
                                                <label htmlFor="updateavatar" role="button">
                                                    <img src="/assets/profile/upload.svg" alt="" />
                                                    <input id="file-input" type="file" />
                                                </label>
                                            </div>
                                    </div>
                                    <div className="" style={{
                                        marginTop: '-45px'
                                    }}>
                                    <img src={(venture?.logo !== null) ? venture?.logo: "/assets/profile/defaultBg.webp"} className="img-fluid  profile__details--avatar"  alt="" /> 
                                    <div className="profile__updateavatar">
                                        <label htmlFor="updateavatar" role="button">
                                            <img src="/assets/profile/upload.svg" alt="" />
                                            <input id="file-input" type="file" />
                                        </label>
                                    </div>
                                    </div>
                                    </div>
                                </div>   
                            </div>
                            <div className="col-md-12 py-5 mt-5">
                                <Formik 
                                 enableReinitialize
                                initialValues={{
                                    name: venture?.name,
                                    dateFounded: venture?.dateFounded,
                                    link: venture?.link,
                                    sector: venture?.sector,
                                    businessModel: venture?.businessModel,
                                    stage: venture?.stage,
                                    tagline: venture?.tagline,
                                    location: venture?.location,
                                    
                                }}
                                onSubmit={handleForm}
                                validationSchema={validationSchema}
                                >
                                      {
                                        (props) => {
                                            const {touched, errors} = props;
                                            return(
                                                <Form>
                                            <div className="row  px-3 mx-1">
                                                <div className="col-md-6 my-2 my-lg-3 px-2">
                                                    <label htmlFor="name" className="signup__col--label mb-2">Venture name <span>(required)</span></label>
                                                    <Field 
                                                        placeholder="Venture name" 
                                                        type="text"
                                                        name="name"

                                                        className={ touched.name && errors.name? `form-control
                                                        p-2
                                                        p-lg-3
                                                         shadow-none signup__col--inpisIvalid` : `form-control
                                                        p-2
                                                        p-lg-3
                                                         shadow-none signup__col--inp`}
                                                    />
                                                    <ErrorMessage name="name" component="div" className="error"/>
                                                </div>
                                                <div className="col-md-6 my-2 my-lg-3 px-2">
                                                    <label htmlFor="datefounded" className="signup__col--label mb-2">Date founded</label>
                                                    <Field 
                                                        type="date"
                                                        name="dateFounded"
                                                        className={ touched.dateFounded && errors.dateFounded? `form-control
                                                        p-2
                                                        p-lg-3
                                                         shadow-none signup__col--inpisIvalid` : `form-control
                                                        p-2
                                                        p-lg-3
                                                         shadow-none signup__col--inp`}
                                                    />
                                                </div>
                                                <div className="col-md-12 my-2 my-lg-3 px-2">
                                                    <label htmlFor="tag" className="signup__col--label mb-2">Venture tagline</label>
                                                    <Field 
                                                        placeholder="Tagline"
                                                        type="text"
                                                        name="tagline"
                                                        className={ touched.tagline && errors.tagline? `form-control
                                                        p-2
                                                        p-lg-3
                                                         shadow-none signup__col--inpisIvalid` : `form-control
                                                        p-2
                                                        p-lg-3
                                                         shadow-none signup__col--inp`}
                                                    />
                                                </div>
                                                <div className="col-md-12 mb-3">
                                                    <label htmlFor="description">Description <span>(required)</span></label>
                                                    <ReactQuill 
                                                        placeholder="Compose an epic..."
                                                    />
                                                </div>
                                                <div className="col-md-6 my-2 my-lg-3 px-2">
                                                    <label htmlFor="stage" className="signup__col--label mb-2">Stage <span>(required)</span></label>
                                                    <Field as="select" name="gender"  className={ touched.stage && errors.stage ? `form-control
                                                        p-2
                                                        p-lg-3
                                                         shadow-none signup__col--inpisIvalid` : `form-control
                                                        p-2
                                                        p-lg-3
                                                         shadow-none signup__col--inp`} aria-label="Default select example">
                                                                 <option defaultValue={"Explore"} value="Explore">Explore</option>
                                                                 <option value="Idea">Idea</option>
                                                                 <option value="Concept">Concept</option>
                                                                 <option value="Product">Product</option>
                                                                 <option value="Revenue">Revenue</option>
                                                                 <option value="Growth">Growth</option>
                                                                 <option value="Stable">Stable</option>
                                                              
                                                    </Field>
                                                    <ErrorMessage name="stage" component="div" className="error"/>
                                                </div>
                                                <div className="col-md-6 my-2 my-lg-3 px-2">
                                                    <label htmlFor="location" className="signup__col--label mb-2">Location <span>(required)</span></label>
                                                    <Field 
                                                        placeholder="Location"
                                                        type="text"
                                                        name="location"
                                                         className={touched.location && errors.location? `form-control
                                                        p-2
                                                        p-lg-3
                                                         shadow-none signup__col--inpisIvalid` : `form-control
                                                        p-2
                                                        p-lg-3
                                                         shadow-none signup__col--inp`}
                                                    />
                                                     <ErrorMessage name="location" component="div" className="error"/>
                                                </div>
                                                <div className="col-md-6 mb-3">
                                                    
                                                    <label htmlFor="sector" className="signup__col--label mb-2">Sector <span>(required)</span></label>
                                                    {sector}
                                                    <Sector setSector={setSector} sector={sector}/>
                                                </div>
                                                <div className="col-md-6 mb-3">
                                                    <label htmlFor="model" className="signup__col--label mb-2">Customer model <span>(required)</span></label>
                                                     <Tag setSkills={setModel} skills={venture?.businessModel}/>
                                                </div>
                                                <div className="col-md-6 my-2 my-lg-3 px-2">
                                                    <label htmlFor="stage" className="signup__col--label mb-2">Currency</label>
                                                    <Field as="select" name="gender" className="form-select shadow-none p-2 p-lg-3
                                                                 signup__col--inp" aria-label="Default select example">
                                                                 <option defaultValue={"Pre-seed"} value="USD">$ USD</option>
                                                                 <option value="Naira">₦ Naira</option>
                                                                 <option value="Euro">€ Euro</option>
                                                                 <option value="Yen"> ¥ Yen</option>
                                                                 <option value="Rupee">₹ Rupee</option>
                                                                 <option value="Cedis">₵ Cedis</option>
                                                                 <option value="Seed">Exit</option>
                                                              
                                                    </Field>
                                                </div>
                                                <div className="col-md-12 my-2 my-lg-3 px-2">
                                                    <label htmlFor="link" className="signup__col--label mb-2">Link (website or pitch deck)</label>
                                                    <Field 
                                                        placeholder=""
                                                        type="text"
                                                        name="link"
                                                        className="shadow-none form-control signup__col--inp p-2 p-lg-3"
                                                        value={venture?.link}
                                                    />
                                                </div>
                                                <h5>Contact Info</h5>
                                                <div className="col-md-6 my-2 my-lg-3 px-2">
                                                    <label htmlFor="Phone">Phone</label>
                                                    <Field 
                                                        placeholder=""
                                                        type="text"
                                                        name="phone"
                                                        className="shadow-none form-control signup__col--inp p-2 p-lg-3"
                                                        value={venture?.owner?.phone}
                                                    />
                                                </div>
                                                <div className="col-md-6 my-2 my-lg-3 px-2">
                                                    <label htmlFor="Phone">Email</label>
                                                    <Field 
                                                        placeholder=""
                                                        type="text"
                                                        name="email"
                                                        className="shadow-none form-control signup__col--inp p-2 p-lg-3"
                                                        value={venture?.owner?.email}
                                                    />
                                                </div>
                                                <div className="">
                                                    <div className="d-flex"></div>
                                                </div>
                                                <div className="my-2 px-0 mb-3 mb-lg-4 text-end">
                                                    <button className="py-3 ms-0 px-4 fw-bold ventures--button" type="submit" style={{
                                                        minWidth: '160px',
                                                    }}>Create venture</button>
                                                </div>
                                            </div>
                                        </Form>
                                            )
                                        }
                                      }
                                </Formik>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mt-3">
                           <div className="my-3 py-4">
                           <div className="col-md-12 p-3 py-3 mt-3 my-3 bg-white venturedetails__card">
                                
                                <div className="d-flex align-items-start mb-2">
                                      <div>
                                        <h6 className="mb-2 fw-bold">Public visibility</h6>
                                        <p className="profile__details--mail">Enable your venture to be visible to the public</p>
                                      </div>
                                      <label htmlFor="" className="ms-4 ms-auto my-4">
                                      <div className="form-check form-switch">
                                        <input className="form-check-input shadow-none" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                                        </div>
                                      </label>
                                </div>
                            </div>
                           </div>
                </div>
                <div className="row mt-3">
                           <div className="my-3 py-4">
                           <div className="col-md-12 p-3 py-3 mt-3 my-3 bg-white venturedetails__card">
                                
                                <div className="d-flex align-items-start mb-2">
                                      <div>
                                        <h6 className="mb-2 fw-bold">Delete this venture</h6>
                                        <p className="profile__details--mail">We recommend that you back-up all important files and data before initiating this process.</p>
                                      </div>
                                </div>
                                      <div className="text-end">
                                      <button className="py-2 py-lg-3 px-lg-4 text-end btn btn-outline-danger" data-bs-toggle="modal" data-bs-target="#exampleModal2">Delete Venture</button>
                                      </div>
                            </div>
                           </div>
                </div>
           </Fade>
           <DeleteVentureModal />
        </>
    )
}
export default VentureGeneral;
