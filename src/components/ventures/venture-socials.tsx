import React from "react";
import { Fade } from "reactstrap";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const VentureSocials = () => {
    const validationSchema = Yup.object().shape({
        linkedIn: Yup.string(),   
        twitter: Yup.string(),
        instagram: Yup.string(),
        facebook: Yup.string()
       
        
      })
    const handleSubmitForm = (e: any) => {
            console.log(e);
            
    }
    return (
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
                                    initialValues={{linkedIn: '', twitter: '', instagram: '', facebook: ''}}
                                            onSubmit={handleSubmitForm}
                                            validationSchema={validationSchema}
                                        >
                                            {
                                                (props) => {
                                                    const {errors, dirty, isValid, touched, values} = props;
                                            
                                                     
                                                    return(
                                                        <Form>
                                                            <div className="row px-4">
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
                                                                        <img src="/assets/icons/twitter.png" className="position-absolute ventures--iconlinks" alt="" />
                                                                        <Field 
                                                                            placeholder="https://"
                                                                            type="text"
                                                                            name="twitter"
                                                                            className="shadow-none form-control signup__col--inp p-2 p-lg-3 text-center"
                                                                        />
                                                                    </div>
                                                                    <div className="col-md-6 my-2 my-lg-3 px-2 position-relative mb-3">
                                                                        <label htmlFor="linkedIn" className="signup__col--label mb-2">Instagram profile link</label>
                                                                        <img src="/assets/icons/instagram.png" className="position-absolute ventures--iconlinks" alt="" />
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
export default VentureSocials;