import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const SignUp = () => {
    const [hideorshowPassword, setHideorShowPassword] = useState<boolean>(false);
    const [validInputs, setValidInputs] = useState<boolean>(true);
    const [hasDigit, setHasDigit] = useState<boolean>(false);
    const [hasSpecialChar, setSpecialChar] = useState<boolean>(false);
    const [hasUpperCase, setUpperCase] = useState<boolean>(false);
    const [passwordStrength, setPasswordStrength] = useState<string>('weak');

    const [password, setPassword] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [fullname, setFullname] = useState<string>('');

    const handleHideOrShowPassword = () => {
        if (hideorshowPassword == false) {
            setHideorShowPassword(true);
        }else{
            setHideorShowPassword(false)
        }
      
    };

    const validateInputForm = (email: string, password: string): boolean => {
        const mailRegex = /^[a-zA-Z0-9._]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,}$/;
        const passwordRex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9]).{8,}$/;
        return mailRegex.test(email) && passwordRex.test(password);
    }

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        const {name, value} = event.target;
        if(name === 'email'){
            setEmail(value);
        }else if (name === 'password') {
            setPassword(value);
            setHasDigit(/\d/.test(value))
            setSpecialChar(/[!@#$%^&*(),.?":{}|<>]/.test(value))
            setUpperCase(/[A-Z]/.test(value))
            if(value.length >= 8 && hasDigit && hasSpecialChar && hasUpperCase){
                setPasswordStrength("strong")
            }else if (value.length >= 8 && (hasDigit || hasSpecialChar || hasUpperCase)) {
                setPasswordStrength("fair")
            }else{
                setPasswordStrength("weak")
            }
            
        }else if (name === 'fullname') {
            setFullname(value);
        }
        
    };
    const getProgressBarColor = () =>{
        if (passwordStrength === "weak") {
            return "#ff0000"; // red
          } else if (passwordStrength === "fair") {
            return "#ffa500"; // orange
          } else {
            return "#008000"; // green
          }
    };

    const getPasswordStrengthMessage = () => {
        if (passwordStrength === "weak") {
          return "Strong password must contain at least 8 characters, digits and uppercase letters.";
        } else if (passwordStrength === "fair") {
          return "Strong password must contain at least 8 characters, digits and uppercase letters.";
        } else {
          return "Password is strong!";
        }
      };

    const handleSubmitForm = (e: any) =>{
        e.preventDefault();
    }
    return(
        <>
            <div className="signup py-3">
                <div className="container py-5">
                    <div className="row ">
                        <div className="col-md-6 col-sm-12 signup__col">
                            <form onSubmit={handleSubmitForm}>
                                <img src="/assets/venture-logo.png" className='mb-3' alt="Logo" />
                                <h1 className='signup__col--title'>Create an account</h1>
                                <p className='signup__col--text'>Please fill all the required input fields.</p>
                                <div className="row justify-content-center text-start">

                                    <div className="col-md-8 mb-2">
                                        <label htmlFor="fullname" className='signup__col--label'>Full Name</label>
                                        <input type="text" className='form-control signup__col--inp' 
                                        value={fullname} name='fullname' 
                                        onChange={handleInputChange}
                                        placeholder='Full name'
                                        />
                                    </div>

                                    <div className="col-md-8 mb-2">
                                        <label htmlFor="email" className='signup__col--label'>Email</label>
                                        <input type="text" className='form-control signup__col--inp' 
                                        value={email} name='email' 
                                        onChange={handleInputChange}
                                        placeholder='Enter your email address'
                                        />
                                    </div>

                                    <div className="col-md-8 position-relative mb-2">
                                        <label htmlFor="password" className='signup__col--label'>Password</label>
                                        <input type={hideorshowPassword == false? "password" : "text" } 
                                        className='form-control signup__col--inp' 
                                        placeholder='Password'
                                        value={password}
                                        name='password'
                                        onChange={handleInputChange}
                                         />
                                        <i className={hideorshowPassword == false?`fa-regular fa-eye signup__col--icon`:`fa-regular fa-eye-slash signup__col--icon` } onClick={handleHideOrShowPassword}/>
                                    </div>
                                    <div className="col-md-8">
                                        <div className="row">
                                            <div className="col-md-6">
                                                Password Strength
                                            </div>
                                            <div className="col-md-6 text-end">
                                                {passwordStrength}
                                            </div>
                                        </div>
                                    </div>
                                    {
                                        passwordStrength !== "strong" && (
                                        <div className="col-md-12 text-center">
                                            <progress
                                            value={
                                              passwordStrength === "fair" ? 0.5 : passwordStrength === "weak" ? 0.25 : 1
                                            }
                                            max={1} 
                                            style={{ backgroundColor: getProgressBarColor(), width: '65%', borderRadius: '50%' }}
                                          />
                                          <p>{getPasswordStrengthMessage()}</p>
                                        </div>
                                        )
                                    }
                                    <div className="col-md-8 mt-3">
                                        <input type="submit" 
                                        value="Next"
                                        className='signup__col--btn'
                                        />
                                    </div>
                                    <div className="col-md-8 text-center mt-3">
                                        <p>
                                        Already have an account? 
                                        <NavLink to="/auth/sign-in"><b style={{color:'rgba(90, 39, 213, 1)'
                                        }}>Log in</b></NavLink>
                                        </p>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="col-md-6 border-start">
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default SignUp;