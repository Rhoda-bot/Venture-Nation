import { log } from 'console';
import React, { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { postRequest } from '../../utility/apiRequest';
import { ToastContainer } from 'react-toastify';

const SignUp = () => {
    const [hideorshowPassword, setHideorShowPassword] = useState<boolean>(false);
    const [hasDigit, setHasDigit] = useState<boolean>(false);
    const [hasSpecialChar, setSpecialChar] = useState<boolean>(false);
    const [hasUpperCase, setUpperCase] = useState<boolean>(false);
    const [passwordStrength, setPasswordStrength] = useState<string>('weak');
    const [progressBarColor, setProgressBarColor] = useState<string>("#ff0000");
    const [errorMessage, setErrorMessage] = useState<string>('');


    const [password, setPassword] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [fullname, setFullname] = useState<string>('');
    const navigate = useNavigate();

    const handleHideOrShowPassword = () => {
        if (hideorshowPassword == false) {
            setHideorShowPassword(true);
        }else{
            setHideorShowPassword(false)
        }
      
    };
    useEffect(() => {
        setProgressBarColor(getProgressBarColor());
        console.log(progressBarColor);
        
      }, [passwordStrength]);

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
          return "Password is weak. It must contain at least one number, one uppercase letter, and one special character, and be at least 8 characters long.";
        } else if (passwordStrength === "fair") {
          return "Password is fair. It must contain at least one more number, uppercase letter, or special character.";
        } else {
          return "Password is strong!";
        }
      };

    const handleSubmitForm = async(e: any) =>{
        e.preventDefault();
        const result = await postRequest({name:fullname, email, password}, 'auth/register');
        if (result.data.status === 'success') {
                setErrorMessage('success, kindly check you mailbox for verification.');
                setFullname('');
                setEmail('');
                setPassword('');
                navigate('/confirm-email')
        }
       if (result.data.errors) {
            const errorsArr = result.data.errors;
            errorsArr.map((val:any) =>{
                setErrorMessage(val.message)
        })
       }
       
        
        
    }
    return(
        <>
            <div className="signup p-0">
                <div className="container-fluid p-lg-0">
                    <div className="row g-0">
                        <div className="col-md-6 col-sm-12 signup__col">
                            <form onSubmit={handleSubmitForm}>
                                <img src="/assets/venture-logo.png" className='mb-3 mt-4' alt="Logo" />
                                <h1 className='signup__col--title'>Create an account</h1>
                                <p className='signup__col--text'>Please fill all the required input fields.</p>
                                <div className="row justify-content-center text-start">
                                    <p>
                                        {errorMessage}
                                    </p>
                                    <div className="col-md-8 mb-2">
                                        <label htmlFor="fullname" className='signup__col--label'>Full Name</label>
                                        <input type="text" className='
                                        form-control 
                                        shadow-none
                                        signup__col--inp' 
                                        value={fullname} name='fullname' 
                                        onChange={handleInputChange}
                                        placeholder='Full name'
                                        />
                                    </div>

                                    <div className="col-md-8 mb-2">
                                        <label htmlFor="email" className='signup__col--label'>Email</label>
                                        <input type="text" className='
                                        form-control
                                        shadow-none
                                         signup__col--inp' 
                                        value={email} name='email' 
                                        onChange={handleInputChange}
                                        placeholder='Enter your email address'
                                        />
                                    </div>

                                    <div className="col-md-8 position-relative mb-2">
                                        <label htmlFor="password" className='signup__col--label'>Password</label>
                                        <input type={hideorshowPassword == false? "password" : "text" } 
                                        className='
                                        form-control
                                        shadow-none
                                         signup__col--inp' 
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
                                    <div className="col-md-8 text-center">
                                    {
                                        passwordStrength !== "strong" && (
                                           <>
                                            <progress
                                            value={
                                              passwordStrength === "fair" ? 0.5 : passwordStrength === "weak" ? 0.25 : 1
                                            }
                                            max={1} 
                                            style={{ color: progressBarColor, width: '100%' }}
                                          />
                                          <p>{getPasswordStrengthMessage()}</p>
                                           </>
                                        )
                                    }
                                    </div>
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