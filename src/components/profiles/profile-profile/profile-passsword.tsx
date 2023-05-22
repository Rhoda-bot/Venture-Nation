import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { postRequest } from "../../../utility/apiRequest";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Fade } from "reactstrap";

const ProfilePassword = () => {
    const [hideorshowPassword, setHideorShowPassword] = useState<boolean>(false);
    const [hideorshowPassword2, setHideorShowPassword2] = useState<boolean>(false);
    const [progressColor, setProgressColor] = useState<string>("#DC2626");
    const [progressStrength, setProgressStrength] = useState<string>("Weak");
    const [loading, setIsLoading] = useState<boolean>(false)

    const handleHideOrShowPassword = () => {
        if (hideorshowPassword == false ) {
            setHideorShowPassword(true);
        }else{
            setHideorShowPassword(false)
        }
    };
    const handleHideOrShowPassword2 = () => {
        if (hideorshowPassword2 == false ) {
            setHideorShowPassword2(true);
        }else{
            setHideorShowPassword2(false)
        }
    };
   
    const validationSchema = Yup.object().shape({
        password: Yup.string()
        .min(8,"Password must be at least 8 characters")
        .required("Password is required"),
        confirmPassword: Yup.string()
        .min(8, "Password must be at least 8 characters")
        .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{8,}$/, 
        "Password must contain at least 8 characters, one uppercase letter, one number, and one special character")
        .required("Confirm password must be at least 8 characters")
        
      })
    const handleSubmitForm = (e: any) => {
            console.log(e);
            
    }   
    return(
        <>
            <Fade>
                <div className="general" >
                    <div className="container">
                        <div className="row">
                            <div className="general__header py-4 px-5 ">
                                <h4 className="profile__details--name">Password</h4>
                                <p className="profile__details--location">Manage your account password</p>
                            </div>
                            <div className="col-md-12  ">
                            <hr />
                                <Formik initialValues={{password: '', confirmPassword: ''}}
                                            onSubmit={handleSubmitForm}
                                            validationSchema={validationSchema}
                                        >
                                            {
                                                (props) => {
                                                    const {errors, dirty, isValid, touched, values} = props;
                                                    const validationConditions = [
                                                        { condition: "Password is valid", isValid: !errors.password },
                                                        {
                                                          condition: "Password is at least 8 characters long",
                                                          isValid: values.password.length >= 8,
                                                        },
                                                        {
                                                          condition: "Password contains at least one uppercase letter",
                                                          isValid: /[A-Z]/.test(values.password),
                                                        },
                                                        {
                                                          condition: "Password contains at least one lowercase letter",
                                                          isValid: /[a-z]/.test(values.password),
                                                        },
                                                        {
                                                          condition: "Password contains at least one number",
                                                          isValid: /\d/.test(values.password),
                                                        },
                                                        {
                                                          condition: "Password contains at least one special character",
                                                          isValid: /[!@#$%^&*(),.?":{}|<>]/.test(values.password),
                                                        },
                                                      ];
                                                      const fulfilledConditions = validationConditions.filter(
                                                        (condition) => condition.isValid
                                                      );
                                            
                                                      const progress = Math.floor(
                                                        (fulfilledConditions.length / validationConditions.length) * 100
                                                      );
                                            
                                                      if (progress <= 25) {
                                                        setProgressColor("#DC2626");
                                                        setProgressStrength("Weak");
                                                      } else if (progress > 25 && progress <= 50) {
                                                        setProgressColor("#F59E0B");
                                                        setProgressStrength("Fair");
                                                      } else if (progress > 50 && progress <= 70) {
                                                        setProgressColor("#22C55E");
                                                        setProgressStrength("Good");
                                                      } else if (progress > 70) {
                                                        setProgressColor("#16A34A");
                                                        setProgressStrength("Strong");
                                                      }
                                                    return(
                                                        <Form>
                                                            <div className="row px-3 mx-auto">
                                                                <div className="col-md-10 mb-3">
                                                                    <label htmlFor="oldPassword">Old Password</label>
                                                                    <input type="text" placeholder="Old Password"
                                                                     className="form-control signup__col--inp shadow-none py-3 px-3"/>
                                                                </div>
                                                                <div className="col-md-10 mb-3 position-relative">
                                                                    <label htmlFor="newPassword">New Password</label>
                                                                    <Field placeholder="New password"
                                                                    type={hideorshowPassword == false? "password" : "text" } 
                                                                    name="password"
                                                                    id="password"
                                                                    className={touched.password && errors.password ? 
                                                                        'form-control  signup__col--inpisIvalid py-3 px-3 shadow-none' 
                                                                        : 'form-control  signup__col--inp py-3 px-3  shadow-none'}
                                                                    />
                                                                     <ErrorMessage name="password" component="div" className="error" />
                                                
                                                                    <i className={hideorshowPassword === false?`fa-regular fa-eye signup__col--icon`:`fa-regular fa-eye-slash signup__col--icon`}
                                                                    onClick={handleHideOrShowPassword}/>
                                                                </div>
                                                                <div className="col-md-10 mb-3 position-relative">
                                                                    <label htmlFor="confirmPassword">Confirm Password</label>
                                                                    <Field placeholder="Confirm password"
                                                                    type={hideorshowPassword2 == false? "password" : "text" } 
                                                                    name="confirmPassword"
                                                                    id="confirmPassword"
                                                                    className={touched.password && errors.password ? 
                                                                        'form-control  signup__col--inpisIvalid shadow-none py-3 px-3' 
                                                                        : 'form-control  signup__col--inp shadow-none py-3 px-3'}
                                                                    />
                                                                     <ErrorMessage name="confirmPassword" component="div" className="error" />
                                                
                                                                    <i className={hideorshowPassword2 === false?`fa-regular fa-eye signup__col--icon`:`fa-regular fa-eye-slash signup__col--icon`}
                                                                    onClick={handleHideOrShowPassword2}/>
                                                                </div>
                                                                <div className="col-md-10 mb-3">
                                                                    <div className="row">
                                                                        <div className="col-md-6">
                                                                            Password Strength
                                                                        </div>
                                                                        <div className="col-md-6 text-end">
                                                                            { <small>{progressStrength}</small>}
                                                                        </div>
                                                                        <p>
                                                                            <img src="/assets/icons/i.png" className='px-1' alt="" />
                                                                        <small>
                                                                            Strong password must contain at least 8 characters,
                                                                            digits, which includes special characters, lowercase
                                                                            and uppercase letters.
                                                                        </small>
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-10 text-start mb-3">
                                            
                                                                <div
                                                                className="progress"
                                                                role="progressbar"
                                                                aria-label="Basic example"
                                                                aria-valuenow={0}
                                                                aria-valuemin={0}
                                                                aria-valuemax={100}
                                                                style={{height: '10px'}}
                                                                >
                                                                <div
                                                                    className={`progress-bar`}
                                                                    style={{
                                                                    width: `${progress}%`,
                                                                    backgroundColor: progressColor,
                                        
                                                                    }}
                                                                ></div>
                                                                </div>
                                                                </div>
                                                                <div className="col-md-6" />
                                                                   
                                                                <div className="col-md-4">
                                                                {
                                                                        loading ? (

                                                                            <button className={!( dirty && isValid)? 'disabled-btn signup__col--btn ' : 'signup__col--btn'} disabled>

                                                                                Submit</button>
                                                                        ):(
                                                                            <>
                                                                            <button type='submit'
                                                                            className={
                                                                                !(dirty && isValid) ? 'disabled-btn signup__col--btn' : "signup__col--btn py-3 ms-0 w-100 fw-bold"
                                                                            }
                                                                            >
                                                                                Save Change
                                                                            </button>

                                                                            </>
                                                                        )
                                                                    }
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
export default ProfilePassword