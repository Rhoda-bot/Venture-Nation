import React, { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { postRequest } from "../../../utility/apiRequest";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Fade } from "reactstrap";
import { UserContext } from "../../../context/userContext";

const ProfileSocials = () => {

    const {user}: any = useContext<any>(UserContext);
    const [loading, setIsLoading] = useState(false);
  
   
    const validationSchema = Yup.object().shape({
        linkedIn: Yup.string(),   
        twitter: Yup.string(),
        instagram: Yup.string(),
        facebook: Yup.string()
       
        
      })
    const handleSubmitForm = (e: any) => {
            console.log(e);
            
    }   
    return(
        <>
            <Fade>
                <div className="general">
                    <div className="container">
                        <div className="row">
                            <div className="general__header py-4 px-5">
                            <h4 className="profile__details--name">Social profiles</h4>
                            <p className="profile__details--location">Attach your other social media account to your profile. </p>
                            </div>
                            <div className="col-md-12">
                            <hr />
                                <Formik 
                                enableReinitialize
                                initialValues={{linkedIn: user?.socials?.linkedin, twitter: user?.socials?.twitter, instagram:user?.socials?.instagram, facebook: user?.socials?.facebook}}
                                            onSubmit={handleSubmitForm}
                                            validationSchema={validationSchema}
                                        >
                                            {
                                                (props) => {
                                                    const {errors, dirty, isValid, touched, values} = props;
                                            
                                                     
                                                    return(
                                                        <Form>
                                                            <div className="row px-4">
                                                                <div className="col-md-6 mb-3">
                                                                    <label htmlFor="linkedIn">LinkedIn profile link</label>
                                                                    <Field 
                                                                    placeholder="https://"
                                                                    type= "text" 
                                                                    name="linkedIn"
                                                                    id="linkedIn"
                                                                    className={touched.linkedIn && errors.linkedIn ? 
                                                                        'form-control  signup__col--inpisIvalid shadow-none' 
                                                                        : 'form-control  signup__col--inp shadow-none'}
                                                                    />
                                                                     <ErrorMessage name="linkedIn" component="div" className="error text-danger" />
                                             
                                                                </div>
                                                                <div className="col-md-6 mb-3">
                                                                    <label htmlFor="twitter">Twitter profile link</label>
                                                                    <Field 
                                                                    placeholder="https://"
                                                                    type= "text" 
                                                                    name="twitter"
                                                                    id="twitter"
                                                                    className={touched.twitter && errors.twitter ? 
                                                                        'form-control  signup__col--inpisIvalid shadow-none' 
                                                                        : 'form-control  signup__col--inp shadow-none'}
                                                                    />
                                                                      <ErrorMessage name="twitter" component="div" className="error text-danger" />
                                                                </div>
                                                                <div className="col-md-6 mb-3">
                                                                    <label htmlFor="">Instagram profile link</label>
                                                                    <Field 
                                                                    placeholder="https://"
                                                                    type= "text" 
                                                                    name="instagram"
                                                                    id="instagram"
                                                                    className={touched.instagram && errors.instagram ? 
                                                                        'form-control  signup__col--inpisIvalid shadow-none' 
                                                                        : 'form-control  signup__col--inp shadow-none'}
                                                                    />
                                                                       <ErrorMessage name="instagram" component="div" className="error text-danger" />
                                                                </div>
                                                                <div className="col-md-6 mb-3">
                                                                    <label htmlFor="">Facebook profile link</label>
                                                                    <Field 
                                                                    placeholder="https://"
                                                                    type= "text" 
                                                                    name="facebook"
                                                                    id="facebook"
                                                                    className={touched.facebook && errors.facebook ? 
                                                                        'form-control  signup__col--inpisIvalid shadow-none' 
                                                                        : 'form-control  signup__col--inp shadow-none'}
                                                                    />
                                                                     <ErrorMessage name="facebook" component="div" className="error text-danger" />
                                                                </div>
                                                                <div className="col-md-8"/>
                                                                <div className="col-md-4 py-4">
                                                                    <button className="signup__col--btn py-3 ms-0 w-100 fw-bold">Save changes</button>
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
            </Fade>
        </>
    )
}
export default ProfileSocials