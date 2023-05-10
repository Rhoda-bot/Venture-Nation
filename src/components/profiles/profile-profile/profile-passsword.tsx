import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { postRequest } from "../../../utility/apiRequest";

const ProfilePassword = () => {
    const [hideorshowPassword, setHideorShowPassword] = useState<boolean>(false);
    const [hideorshowPassword2, setHideorShowPassword2] = useState<boolean>(false);
    const [password, setPassword] = useState<string>('')
    const [confirmPassword, setConfirmPassword] = useState<string>('')
    const [hasDigit, setHasDigit] = useState<boolean>(false);
    const [hasSpecialChar, setSpecialChar] = useState<boolean>(false);
    const [hasUpperCase, setUpperCase] = useState<boolean>(false);
    const [progressBarColor, setProgressBarColor] = useState<string>("#ff0000");
    const [message, setMessage] = useState<string>('')

    const [passwordStrength, setPasswordStrength] = useState<string>('weak');  useEffect(() => {
        setProgressBarColor(getProgressBarColor());
        console.log(progressBarColor);
        
      }, [passwordStrength]);

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
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        const {name, value}= event.target;
        if (name === 'password') {
            setPassword(value);
            setHasDigit(/\d/.test(value))
            setSpecialChar(/[!@#$%^&*(),.?":{}|<>]/.test(value));
            setUpperCase(/[A-Z]/.test(value));
            if(value.length >= 8 && hasDigit && hasSpecialChar && hasUpperCase){
                setPasswordStrength("strong")
            }else if (value.length >= 8 && (hasDigit || hasSpecialChar || hasUpperCase)) {
                setPasswordStrength("fair")
            }else{
                setPasswordStrength("weak")
            }
        }else if(name === 'cpassword'){
            setConfirmPassword(value);
            setHasDigit(/\d/.test(value))
            setSpecialChar(/[!@#$%^&*(),.?":{}|<>]/.test(value));
            setUpperCase(/[A-Z]/.test(value));
            if(value.length >= 8 && hasDigit && hasSpecialChar && hasUpperCase){
                setPasswordStrength("strong")
            }else if (value.length >= 8 && (hasDigit || hasSpecialChar || hasUpperCase)) {
                setPasswordStrength("fair")
            }else{
                setPasswordStrength("weak")
            }
        }
    }
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
        const response =await postRequest({ password, confirmPassword}, 'auth/reset-password');
        console.log(response);
        
        if (response.data.status === 'success') {
            setMessage('success, your new password has been created');
            

    }}
    return(
        <>
             <div className="signup">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-6 col-sm-12 signup__col">
                            <form onSubmit={handleSubmitForm}>
                        
                                <h1 className='signup__col--title'>Password</h1>
                                <p className='signup__col--text mb-3 pb-4'>
                                Manage your account password
                                </p>
                                <div className="row justify-content-center text-start ">
                                    <div className="col-md-8 position-relative mb-2">
                                        <label htmlFor="password" className='signup__col--label'>Password</label>
                                        <input type={hideorshowPassword == false? "password" : "text" } 
                                        className='form-control 
                                        shadow-none
                                        signup__col--inp' 
                                        placeholder='Password'
                                        value={password}
                                        name='password'
                                        onChange={handleInputChange}
                                         />
                                        <i className={hideorshowPassword == false?`fa-regular fa-eye signup__col--icon`:`fa-regular fa-eye-slash signup__col--icon` } onClick={handleHideOrShowPassword}/>
                                    </div>
                                    <div className="col-md-8 position-relative mb-2">
                                        <label htmlFor="password" className='signup__col--label'>Password</label>
                                        <input type={hideorshowPassword2 == false? "password" : "text" } 
                                        className='form-control 
                                        shadow-none
                                        signup__col--inp' 
                                        placeholder='Password'
                                        value={confirmPassword}
                                        name='cpassword'
                                        onChange={handleInputChange}
                                         />
                                        <i className={hideorshowPassword2 == false?`fa-regular fa-eye signup__col--icon`:`fa-regular fa-eye-slash signup__col--icon` } onClick={handleHideOrShowPassword2}/>
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
                                        <NavLink to="/auth/sign-in"><b style={{color:'rgba(90, 39, 213, 1)'
                                        }}>Back to Login</b></NavLink>
                                        </p>
                                    </div>
                                </div>
                            </form>
                        </div>
                        
                    </div>
                </div>
            </div>
        </>
    )
}
export default ProfilePassword