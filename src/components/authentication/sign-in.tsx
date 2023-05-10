import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { postRequest } from "../../utility/apiRequest";

const SignIn: React.FC = () => {
    const [hideorshowPassword, setHideorShowPassword] = useState<boolean>(false);
    const [password, setPassword] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [errorMessage, setErrorMessage] = useState<string>('');
    const [responseStatus, setResponseStatus] = useState(false);
    const navigate = useNavigate();
    const handleHideOrShowPassword = () => {
        if (hideorshowPassword == false) {
            setHideorShowPassword(true);
        }else{
            setHideorShowPassword(false)
        }
      
    };
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        const {name, value} = event.target;
        if(name === 'email'){
            setEmail(value);
        }else if (name === 'password') {
            setPassword(value)
        }
    }
    const handleSubmitForm = async(e: any) =>{
        e.preventDefault();
        const response =await postRequest({ email, password}, 'auth/login');
        console.log(response);
        
        if (response.data.status === 'success') {
            localStorage.setItem('token', response.data.token);
            setErrorMessage('success, login sucessfully');
            navigate('/profile')


    }
   if (response.data.errors) {
        const errorsArr = response.data.errors;
        errorsArr.map((val:any) =>{
            setErrorMessage(val.message);
            setResponseStatus(true)
            setEmail('');
            setPassword('');
            // setResponseStatus(false)
    })
    }
}
    return(
        <>
            <div className="signup">
                <div className="container-fluid p-lg-0">
                    <div className="row align-items-center">
                        <div className="col-md-6 col-sm-12 signup__col">
                            <form onSubmit={handleSubmitForm}>
                                <img src="/assets/venture-logo.png" className='mb-3 mt-5' alt="Logo" />
                                <h1 className='signup__col--title'>Welcome back!</h1>
                                <p className='signup__col--text'>Kindly input your details to access your account.</p>
                                <div className="row justify-content-center text-start mb-3">
                                    <p className="text-center">
                                        {errorMessage}
                                    </p>
                                    <div className="col-md-8 mb-3">
                                        <label htmlFor="email" className='signup__col--label'>Email</label>
                                        <input type="text" 
                                         className={!responseStatus ?`form-control 
                                         shadow-none
                                         signup__col--inp` : `border border-danger form-control 
                                         shadow-none
                                         signup__col--inp` } 
                                        placeholder="Enter your email"
                                        value={email}
                                        name='email'
                                        onChange={handleInputChange}
                                        />
                                    </div>
                                    <div className="col-md-8 position-relative mb-2">
                                        <label htmlFor="password" className='signup__col--label'>Password</label>
                                        <input type={hideorshowPassword == false? "password" : "text" } 
                                        className={!responseStatus ?`form-control 
                                        shadow-none
                                        signup__col--inp` : `border border-danger form-control 
                                        shadow-none
                                        signup__col--inp` } 
                                        placeholder='Password'
                                        value={password}
                                        name='password'
                                        onChange={handleInputChange}
                                         />
                                        <i className={hideorshowPassword == false?`fa-regular fa-eye signup__col--icon`:`fa-regular fa-eye-slash signup__col--icon` } onClick={handleHideOrShowPassword}/>
                                    </div>
                                    <div className="col-md-8">
                                        
                                        <NavLink to="/auth/forgot-password"><b style={{color:'rgba(90, 39, 213, 1)',
                                        fontSize: '14px'
                                        }}>Forgot password?</b>
                                        </NavLink>
                                    
                                    </div>
                                    <div className="col-md-8 mt-3">
                                        <input type="submit" 
                                        value="Sign in"
                                        className='signup__col--btn'
                                        />
                                    </div>
                                    <div className="col-md-8 text-center mt-3">
                                        <p>
                                        Don’t have an account?  
                                        <NavLink to="/auth/sign-up"><b className='mx-1' style={{color:'rgba(90, 39, 213, 1)'
                                        }}>Sign up</b></NavLink>
                                        </p>
                                    </div>
                                </div>
                            </form>
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