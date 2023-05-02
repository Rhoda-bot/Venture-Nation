import React, { useState } from 'react';

const SignUp = () => {
    const [hideorshowPassword, setHideorShowPassword] = useState<boolean>(false);
    const [validInputs, setValidInputs] = useState<boolean>(true);
    const [password, setPassword] = useState<string>('');
    const [email, setEmail] = useState<string>('');

    const handleHideOrShowPassword = () => {
        if (hideorshowPassword == false) {
            setHideorShowPassword(true);
        }else{
            setHideorShowPassword(false)
        }
      
    }

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
        }
        setValidInputs(validateInputForm(email, password))
    }

    const handleSubmitForm = (e: any) =>{
        e.preventDefault();
    }
    return(
        <>
            <div className="signup py-5">
                <div className="container py-5">
                    <div className="row">
                        <div className="col-md-6 col-sm-12 signup__col">
                            <form onSubmit={handleSubmitForm}>
                                <h1 className='signup__col--title'>Create an Account</h1>
                                <p className='signup__col--text'>Lorem ipsum,  deleniti a? Non tempore, harum numquam.</p>
                                <div className="row">
                                    <div className="col-md-8 mb-2">
                                        <label htmlFor="email">Email</label>
                                        <input type="text" className='form-control' 
                                        value={email} name='email' 
                                        onChange={handleInputChange}
                                        />
                                    </div>

                                    <div className="col-md-8 position-relative mb-2">
                                        <label htmlFor="password">Password</label>
                                        <input type={hideorshowPassword == false? "password" : "text" } 
                                        className='form-control' 
                                        value={password}
                                        name='password'
                                        onChange={handleInputChange}
                                         />
                                        <i className={hideorshowPassword == false?`fa-regular fa-eye signup__col--icon`:`fa-regular fa-eye-slash signup__col--icon` } onClick={handleHideOrShowPassword}/>
                                    </div>
                                    {!validInputs && <div>Email or Password is invalid</div>}
                                    <div className="col-md-8 mt-3">
                                        <input type="submit" 
                                        value="create an account"
                                        className='signup__col--btn'
                                        />
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