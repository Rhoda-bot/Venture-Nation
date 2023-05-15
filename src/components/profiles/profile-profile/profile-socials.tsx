import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { postRequest } from "../../../utility/apiRequest";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Fade } from "reactstrap";

const ProfileSocials = () => {


  
   
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
                <div className="signup">
                    <div className="container">
                        <div className="row">
                        <h4 className="profile__details--name">Social profiles</h4>
                        <p className="profile__details--location">Attach your other social media account to your profile. </p>
                            <div className="col-md-12">
                            <hr />
                                <Formik initialValues={{linkedIn: '', twitter: '', instagram: '', facebook: ''}}
                                            onSubmit={handleSubmitForm}
                                            validationSchema={validationSchema}
                                        >
                                            {
                                                (props) => {
                                                    const {errors, dirty, isValid, touched, values} = props;
                                            
                                                     
                                                    return(
                                                        <Form>
                                                            <div className="row">
                                                                <div className="col-md-10 mb-3">
                                                                    <label htmlFor="linkedIn">LinkedIn profile link</label>
                                                                    <Field value="https://"
                                                                    type= "text" 
                                                                    name="linkedIn"
                                                                    id="linkedIn"
                                                                    className={ 
                                                                         'form-control  signup__col--inp shadow-none'}
                                                                    />
                                                                </div>
                                                                <div className="col-md-10 mb-3">
                                                                    <label htmlFor="twitter">Twitter profile link</label>
                                                                    <Field value="https://"
                                                                    type= "text" 
                                                                    name="twitter"
                                                                    id="twitter"
                                                                    className={ 
                                                                         'form-control  signup__col--inp shadow-none'}
                                                                    />
                                                                     
                                                                </div>
                                                                <div className="col-md-10 mb-3">
                                                                    <label htmlFor="">Instagram profile link</label>
                                                                    <Field value="https://"
                                                                    type= "text" 
                                                                    name="instagram"
                                                                    id="instagram"
                                                                    className={ 
                                                                         'form-control  signup__col--inp shadow-none'}
                                                                    />
                                                                     
                                                                </div>
                                                                <div className="col-md-10 mb-3">
                                                                    <label htmlFor="">Facebook profile link</label>
                                                                    <Field value="https://"
                                                                    type= "text" 
                                                                    name="facebook"
                                                                    id="facebook"
                                                                    className={ 
                                                                         'form-control  signup__col--inp shadow-none'}
                                                                    />
                                                                     
                                                                </div>
                                                                <div className="col-md-7"/>
                                                                <div className="col-md-3">
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