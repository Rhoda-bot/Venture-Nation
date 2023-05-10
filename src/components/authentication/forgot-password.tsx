import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const ForgotPassword = () => {
    const [email, setEmail] = useState<string>('');

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        const newEmail = event.target.value;
        setEmail(newEmail);
    }
    const handleSubmitForm = (e:any)=> {}
    return(
        <>
            <div className="signup">
                <div className="container-fluid p-lg-0 ">
                    <div className="row align-items-center">
                        <div className="col-md-6 col-sm-12 signup__col">
                            <form onSubmit={handleSubmitForm}>
                                <img src="/assets/venture-logo.png" className='mb-3 mt-5'  alt="Logo" />
                                <h1 className='signup__col--title'>Forgot password?</h1>
                                <p className='signup__col--text mb-3 pb-4'>No worries, we’ll send reset instructions to you.</p>
                                <div className="row justify-content-center text-start ">
                                    <div className="col-md-8 mb-3 pb-3">
                                        <label htmlFor="email" className='signup__col--label'>Enter email Adress</label>
                                        <input type="text" 
                                        className="form-control
                                        shadow-none
                                         signup__col--inp"
                                        placeholder="Enter your email"
                                        onChange={handleInputChange}
                                        name="email"
                                        value={email}
                                        />
                                    </div>
                                    
                                    <div className="col-md-8 mt-3">
                                        <input type="submit" 
                                        value="Next"
                                        className='signup__col--btn'
                                        />
                                    </div>
                                    <div className="col-md-8 text-center mt-3">
                                        <p>  
                                        <NavLink to="/auth/sign-in"><b style={{color:'rgba(90, 39, 213, 1)'
                                        }}>Back to Login</b></NavLink>
                                        </p>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="col-md-6 signup__img d-none d-lg-block"  style={{
                                backgroundImage: 'linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),url(/assets/auth/1.png)',
                                height: '100vh',
                                backgroundRepeat: 'no-repeat',
                                backgroundSize: 'cover'
                            }}>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ForgotPassword;