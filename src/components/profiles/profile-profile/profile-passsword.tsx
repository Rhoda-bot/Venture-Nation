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

    const [passwordStrength, setPasswordStrength] = useState<string>('weak');  
   

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
                <div className="container">
                    <div className="row">
                    <h4 className="profile__details--name">Password</h4>
                    <p className="profile__details--location">Manage your account password</p>
                    
                    </div>
                </div>
            </div>
        </>
    )
}
export default ProfilePassword