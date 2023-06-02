import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { postRequest } from "../../utility/apiRequest";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { ToastContainer, toast } from "react-toastify";

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
            localStorage.setItem('userEmail', e.email)
            // toast.success('success, login sucessfully');
            setIsLoading(false);
            navigate('/profile')


    }
   if (response.data.errors) {
        const errorsArr = response.data.errors;
        errorsArr.map((val:any) =>{
            toast.error(val.message);
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
                            <ToastContainer />
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
                                        <h1 className='signup__col--title'>Welcome back!</h1>
                                        <p className='signup__col--text'>Kindly input your details to access your account.</p>
                                        <div className="row justify-content-center text-start">
                                            
                                            <div className="col-md-8 mb-2">
                                                <label htmlFor="email" className='signup__col--label'>Email</label>
                                                <Field 
                                                    type="email"
                                                    name="email"
                                                    id="email"
                                                    className={touched.email && errors.email ? 
                                                        'form-control py-3 px-3 signup__col--inpisIvalid shadow-none' 
                                                        : 'form-control py-3 px-3  signup__col--inp shadow-none'}
                                                />
                                                 <ErrorMessage name="email" component="div" className="error" />
                                                 <p className='text-danger'>{errorMessage}</p>
                                            </div>
                                            <div className="col-md-8 mb-3 position-relative">
                                                <label htmlFor="password" className='signup__col--label'>Password</label>
                                                <Field 
                                                    type={hideorshowPassword == false? "password" : "text" } 
                                                    name="password"
                                                    id="password"
                                                    className={touched.password && errors.password ? 
                                                        'form-control py-3 px-3 signup__col--inpisIvalid shadow-none' 
                                                        : 'form-control py-3 px-3 signup__col--inp shadow-none'}
                                                />
                                                 <ErrorMessage name="password" component="div" className="error" />
                                                
                                                <i className={hideorshowPassword == false?`fa-regular fa-eye signup__col--icon`:`fa-regular fa-eye-slash signup__col--icon`}
                                                 onClick={handleHideOrShowPassword}/>
                                            </div>
                        
                                        
                                            <div className="col-md-8 mt-2">
                                            {
                                                    loading ? (

                                                        <button className={!( dirty && isValid)? 'disabled-btn signup__col--btn disabled' : 'signup__col--btn'} disabled>
                                                           <div className="spinner-grow" style={{width: '2rem',height: '2rem'}} role="status">
                                                            <span className="visually-hidden">Loading...</span>
                                                            </div>
                                                            </button>
                                                    ):(
                                                        <>
                                                        <button type='submit'
                                                        className={
                                                            !(dirty && isValid) ? 'disabled-btn signup__col--btn signup__col--disabled' : "signup__col--btn py-3 ms-0 w-100 fw-bold"
                                                        }
                                                        >
                                                             
                                                             Sign In
                                                        </button>

                                                        </>
                                                    )
                                                }
                                               
                                            </div>
                                            <div className="col-md-8 text-center mt-3">
                                                <p>
                                                Don’t have an account? 
                                                <NavLink to="/auth/sign-up"><b className='mx-1' style={{color:'rgba(90, 39, 213, 1)',
                                                }}>Sign up</b></NavLink>
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