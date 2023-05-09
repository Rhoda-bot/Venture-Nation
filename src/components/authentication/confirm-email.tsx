import React from "react";

const ConfirmEmail: React.FC = ( ) => {
    return(
        <>
            <div className="signup">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-6 col-sm-12 signup__col text-center">
                        <img src="/assets/venture-logo.png" className='mb-3 mt-5'  alt="Logo" />
                                <h1 className='signup__col--title'>Confirm mail</h1>
                                <p className='signup__col--text'>Mail confirmation link has been sent to your email address.</p>
                                <img src="/assets/icons/mail.png" alt="" />
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
export default ConfirmEmail;