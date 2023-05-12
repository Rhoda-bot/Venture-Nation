import React, { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { postRequest } from '../../utility/apiRequest';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { ToastContainer, toast } from 'react-toastify';

const SignUp = () => {
    const [hideorshowPassword, setHideorShowPassword] = useState<boolean>(false);
    const [progressColor, setProgressColor] = useState<string>("#DC2626");
    const [progressStrength, setProgressStrength] = useState<string>("Weak");
    const [response, setResponse] = useState<string>('');
    const [loading, setIsLoading] = useState<boolean>(false)



    const navigate = useNavigate();

    const handleHideOrShowPassword = () => {
        if (hideorshowPassword == false) {
            setHideorShowPassword(true);
        }else{
            setHideorShowPassword(false)
        }
      
    };

      const validationSchema = Yup.object().shape({
        name: Yup.string()
        .required("Full name is required"),
        email: Yup.string()
        .email("Invalid email Address")
        .required("Email is required"),
        password: Yup.string()
        .min(8,"Password must be at least 8 characters")
        .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{8,}$/,
        'Password must contain at least 8 characters, one uppercase letter, one number, and one special character')
      })
 
  

  

    const handleSubmitForm = async(e: any) =>{
        setIsLoading(true)
        
        const result = await postRequest(e, 'auth/register');
        if (result.data.status === 'success') {
            setIsLoading(false)
                setResponse('success, kindly check you mailbox for verification.');
                toast('success, kindly check you mailbox for verification.')
                navigate('/confirm-email')
        }
       if (result.data.errors) {
        setIsLoading(false)
            const errorsArr = result.data.errors;
            errorsArr.map((val:any) =>{
                setResponse(val.message)
                toast(val.message)
        })
       }
       
        
        
    }
    

    return(
        <>
            <div className="signup">
                <div className="container-fluid p-lg-0">
                    <div className="row align-items-center">
                        <div className="col-md-6 col-sm-12 signup__col">
                            <Formik initialValues={{name: '', email: '', password: ''}}
                                    validationSchema={validationSchema}
                                    onSubmit={handleSubmitForm
                                    }
                            >
                                {
                                    (props) => {
                                        const {errors, dirty, touched,isValid, values} = props;
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
                                        <img src="/assets/venture-logo.png" className='mb-3' alt="Logo" />
                                        <h1 className='signup__col--title'>Create an account</h1>
                                        <p className='signup__col--text'>Please fill all the required input fields.</p>
                                        <div className="row justify-content-center text-start">
                                            <div className="col-md-8 mb-2">
                                                <label htmlFor="fullname" className='signup__col--label'>Full Name</label>
                                                <Field 
                                                    type="text"
                                                    name="name"
                                                    id="name"
                                                    className={touched.name && errors.name ? 
                                                        'form-control signup__col--inpisIvalid shadow-none' : 
                                                        'form-control signup__col--inp shadow-none'}
                                                />
                                                 <ErrorMessage name="fullname" component="div" className="error" />
                                            
                                            </div>
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
                                                 <p className='text-danger'>{response}</p>
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
                                            <div className="col-md-8 mb-3">
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
                                            <div className="col-md-8 text-start mb-3">
                                            
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
                                            <div className="col-md-8">
                                                {
                                                    loading ? (

                                                        <button className={!( dirty && isValid)? 'disabled-btn signup__col--btn' : 'signup__col--btn'} disabled>

                                                            Submit</button>
                                                    ):(
                                                        <>
                                                        <button type='submit'
                                                        className={
                                                            !(dirty && isValid) ? 'disabled-btn signup__col--btn' : "signup__col--btn py-3 ms-0 w-100 fw-bold"
                                                        }
                                                        >
                                                             Sign up
                                                        </button>

                                                        </>
                                                    )
                                                }
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
                        <div className="col-md-6 signup__img d-none d-lg-block"  style={{
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
export default SignUp;