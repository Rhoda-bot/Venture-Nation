import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useState } from "react";
import * as Yup from 'yup';
import Tag from "../reusables/tag";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const AddVenture = ( ) => {

    const [sector, setSector] = useState<any>([])
    const [model, setModel] = useState<any>([])
    const [description, setDescription] = useState<string>('')

    const ValidationSchema = Yup.object().shape({
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

    const validate = (values: any) => {
        const errrors: any = {};
        if (!values.name) {
            errrors.name = "Name is required."
        }
        if (!values.stage) {
            errrors.stage = "Stage is required."
        }
        if (!values.location) {
            errrors.location = "Location is required"
        }
    }
    const handleDescription = (value: any) => {
        setDescription(value);
    }
    const sumbitForm = (values: any) => {
        values
    }
    return(
        <>
            <div className="addventure bg-white py-3">
                <div className="container">
                    <div className="row mt-5 pt-lg-4 pt-xxl-5">
                        <div className="col-lg-5 pe-lg-4 pe-xxl-5">
                            <div className="mb-3 mb-xxl-4">
                                <span>
                                    <i className="fa fa-arrow-left"/> Back to profile
                                </span> 
                            </div>
                                <h5>Add a new venture</h5>
                                <p className="profile__details--mail">Create a new venture profile that tells the world about what you do to impact it. 
                                    Share your data and information to gain access to a pool of resources, tools, perks,
                                     and services tailored just for you. Open yourself up to investment opportunities.

                                </p>
                        </div>
                        <div className="col-md-7">
                           <Formik initialValues={{
                            name: '',
                            dateFounded: '',
                            link: '',
                            sector: '',
                            businessModel: '',
                            stage: '',
                            tagline: '',
                            location: ''
                           }} validationSchema={ValidationSchema} onSubmit={sumbitForm}
                           validate={validate}>
                                {
                                    (props) => {
                                        const {touched, errors, dirty} = props;
                                        return(
                                            <Form>
                                            <div className="row">
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
                                                <h6 className="mt-4">Overview </h6>
                                                <div className="col-md-6 mb-3">
                                                    
                                                    <label htmlFor="sector" className="signup__col--label mb-2">Sector <span>(required)</span></label>
                                                    <Tag setSkills={setSector} skills={sector}/>
                                                </div>
                                                <div className="col-md-6 mb-3">
                                                    <label htmlFor="model" className="signup__col--label mb-2">Customer model <span>(required)</span></label>
                                                     <Tag setSkills={setModel} skills={model}/>
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
                                                <div className="col-md-12 mb-3">
                                                    <label htmlFor="description">Description <span>(required)</span></label>
                                                    <ReactQuill 
                                                        value={description}
                                                        placeholder="Compose an epic..."
                                                    />
                                                </div>
                                                    <h5>Attach the link to either your website or your pitch deck.</h5>
                                                <div className="col-md-12 my-2 my-lg-3 px-2">
                                                    <label htmlFor="link" className="signup__col--label mb-2">Link</label>
                                                    <Field 
                                                        placeholder=""
                                                        type="text"
                                                        name="link"
                                                        className="shadow-none form-control signup__col--inp p-2 p-lg-3"
                                                    />
                                                </div>
                                                <h5>Social profiles</h5>
                                                <div className="col-md-6 my-2 my-lg-3 px-2 position-relative">
                                                    <label htmlFor="linkedIn" className="signup__col--label mb-2">LinkedIn profile link</label>
                                                    <img src="/assets/icons/Linkedin.svg" className="position-absolute ventures--iconlinks" alt="" />
                                                    <Field 
                                                        placeholder="https://"
                                                        type="text"
                                                        name="linkedin"
                                                        className="shadow-none form-control signup__col--inp p-2 p-lg-3 text-center"
                                                    />
                                                </div>
                                                <div className="col-md-6 my-2 my-lg-3 px-2 position-relative">
                                                    <label htmlFor="linkedIn" className="signup__col--label mb-2">Twitter profile link</label>
                                                    <img src="/assets/icons/Linkedin.svg" className="position-absolute ventures--iconlinks" alt="" />
                                                    <Field 
                                                        placeholder="https://"
                                                        type="text"
                                                        name="twitter"
                                                        className="shadow-none form-control signup__col--inp p-2 p-lg-3 text-center"
                                                    />
                                                </div>
                                                <div className="col-md-6 my-2 my-lg-3 px-2 position-relative mb-3">
                                                    <label htmlFor="linkedIn" className="signup__col--label mb-2">Instagram profile link</label>
                                                    <img src="/assets/icons/Linkedin.svg" className="position-absolute ventures--iconlinks" alt="" />
                                                    <Field 
                                                        placeholder="https://"
                                                        type="text"
                                                        name="instagram"
                                                        className="shadow-none form-control signup__col--inp p-2 p-lg-3 text-center"
                                                    />
                                                </div>
                                                <div className="col-md-6 my-2 my-lg-3 px-2 position-relative mb-3">
                                                    <label htmlFor="linkedIn" className="signup__col--label mb-2">Facebook profile link</label>
                                                    <img src="/assets/icons/facebook.svg" className="position-absolute ventures--iconlinks" alt="" />
                                                    <Field 
                                                        placeholder="https://"
                                                        type="text"
                                                        name="facebook"
                                                        className="shadow-none form-control signup__col--inp p-2 p-lg-3 text-center"
                                                    />
                                                </div>
                                                
                                                <div className="my-2 px-0 mb-3 mb-lg-4 text-end">
                                                    <button className="py-3 ms-0 px-4 fw-bold ventures--button" type="submit" style={{
                                                        minWidth: '160px'
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
        </>
    )
}
export default AddVenture