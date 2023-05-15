import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { postRequest } from "../../utility/apiRequest";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const SignIn: React.FC = () => {
    const [hideorshowPassword, setHideorShowPassword] = useState<boolean>(false);
    const [ifError, setIfError] = useState({
        email: false,
        password: false
    })
    const [loading, setIsLoading] =useState<boolean>(false)
    const [errorMessage, setErrorMessage] = useState<string>('');
    const navigate = useNavigate();
    const handleHideOrShowPassword = () => {
        if (hideorshowPassword == false) {
            setHideorShowPassword(true);
        }else{
            setHideorShowPassword(false)
        }
      
    };

    const validationSchema = Yup.object().shape({
        email: Yup.string()
        .email("Invalid email Address")
        .required("Email is required"),
        password: Yup.string()
        .required("Password is required")
      })
    const handleSubmitForm = async(e: any) =>{
        setIsLoading(true);
        const response =await postRequest(e, 'auth/login');
        
        
        if (response.data.status === 'success') {
            localStorage.setItem('token', response.data.token);
            setErrorMessage('success, login sucessfully');
            setIsLoading(false);
            navigate('/profile')


    }
   if (response.data.errors) {
        const errorsArr = response.data.errors;
        errorsArr.map((val:any) =>{
            setErrorMessage(val.message);
           setIsLoading(false)
    })
    }
}
    return(
        <>
            <div className="signup">
                <div className="container-fluid p-lg-0">
                    <div className="row align-items-center">
                        <div className="col-md-6 col-sm-12 signup__col">
                          <Formik initialValues={{email: '', password: ''}}
                          validationSchema={validationSchema}
                          onSubmit={handleSubmitForm}
                          >
                            {
                                (props) => {
                                    const {errors, touched, dirty, isValid, values} = props;
                                    return(
                                        <Form>
                                        <img src="/assets/venture-logo.png" className='mb-3' alt="Logo" />
                                        <h1 className='signup__col--title'>Create an account</h1>
                                        <p className='signup__col--text'>Please fill all the required input fields.</p>
                                        <div className="row justify-content-center text-start">
                                            
                                            <div className="col-md-8 mb-2">
                                                <label htmlFor="email" className='signup__col--label'>Email</label>
                                                <Field 
                                                    type="email"
                                                    name="email"
                                                    id="email"
                                                    className={touched.email && errors.email ? 
                                                        'form-control  signup__col--inpisIvalid shadow-none' 
                                                        : 'form-control  signup__col--inp shadow-none'}
                                                />
                                                 <ErrorMessage name="email" component="div" className="error" />
                                                 <p className='text-danger'>{errorMessage}</p>
                                            </div>
                                            <div className="col-md-8 mb-2 position-relative">
                                                <label htmlFor="password" className='signup__col--label'>Password</label>
                                                <Field 
                                                    type={hideorshowPassword == false? "password" : "text" } 
                                                    name="password"
                                                    id="password"
                                                    className={touched.password && errors.password ? 
                                                        'form-control  signup__col--inpisIvalid shadow-none' 
                                                        : 'form-control  signup__col--inp shadow-none'}
                                                />
                                                 <ErrorMessage name="password" component="div" className="error" />
                                                
                                                <i className={hideorshowPassword == false?`fa-regular fa-eye signup__col--icon`:`fa-regular fa-eye-slash signup__col--icon`}
                                                 onClick={handleHideOrShowPassword}/>
                                            </div>
                        
                                        
                                            <div className="col-md-8">
                                            <button
                                                type="submit"
                                                className={dirty && isValid ? "signup__col--btn" : "disabled-btn signup__col--btn"}
                                                disabled={!(dirty && isValid)}>
                                                Sign In
                                                </button>
                                               
                                            </div>
                                            <div className="col-md-8 text-center mt-3">
                                                <p>
                                                Already have an account? 
                                                <NavLink to="/auth/sign-in"><b className='mx-1' style={{color:'rgba(90, 39, 213, 1)',
                                                }}>Log in</b></NavLink>
                                                </p>
                                            </div>
                                        </div>
                                    </Form>
                                    )
                                }
                            }
                          </Formik>
                        </div>
                        <div className="col-md-6 signup__img  d-none d-lg-block"  style={{
                                backgroundImage: 'linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),url(/assets/auth/1.png)',
                                height: '100vh',
                                backgroundRepeat: 'no-repeat',
                                backgroundSize: 'cover',
                            }}>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default SignIn;