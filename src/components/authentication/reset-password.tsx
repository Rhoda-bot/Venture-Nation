import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const ResetPassword = () => {
    const [hideorshowPassword, setHideorShowPassword] = useState<boolean>(false);
    const [hasDigit, setHasDigit] = useState<boolean>(false);
    const [hasSpecialChar, setSpecialChar] = useState<boolean>(false);
    const [hasUpperCase, setUpperCase] = useState<boolean>(false);
    const [passwordStrength, setPasswordStrength] = useState<string>('weak');
    const handleHideOrShowPassword = () => {
        if (hideorshowPassword == false) {
            setHideorShowPassword(true);
        }else{
            setHideorShowPassword(false)
        }
      
    };
    return(
        <>
             <div className="signup">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-6 col-sm-12 signup__col">
                            <form>
                                <img src="/assets/venture-logo.png" className='mb-3 mt-5 py-3'  alt="Logo" />
                                <h1 className='signup__col--title'>Set new password</h1>
                                <p className='signup__col--text mb-3 pb-4'>
                                    Your new password must be different from the previously used passwords.
                                </p>
                                <div className="row justify-content-center text-start ">
                                    <div className="col-md-8 position-relative mb-2">
                                        <label htmlFor="password" className='signup__col--label'>Password</label>
                                        <input type={hideorshowPassword == false? "password" : "text" } 
                                        className='form-control signup__col--inp' 
                                        placeholder='Password'
                                        // value={password}
                                        name='password'
                                        // onChange={handleInputChange}
                                         />
                                        <i className={hideorshowPassword == false?`fa-regular fa-eye signup__col--icon`:`fa-regular fa-eye-slash signup__col--icon` } onClick={handleHideOrShowPassword}/>
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
                        <div className="col-md-6 signup__img  d-none d-lg-block"  style={{
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
export default ResetPassword