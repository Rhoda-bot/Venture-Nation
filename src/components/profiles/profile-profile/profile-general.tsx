import React from "react";

const GeneralProfile = () => {
    return(
        <>
            <div className="general">
                <div className="container">
                    <div className="row">
                        <h4 className="profile__details--name">General</h4>
                        <p className="profile__details--location">Personalize and keep your profile up-to-date.</p>
                        <div className="col-md-12 position-relative" style={{
                            backgroundImage: 'url(/assets/profile/pro2.png)',
                            height: '170px',
                            width: '100%',
                            borderRadius: '0px 0px 30px 0px'
                        }}>
                            <img src="/assets/profile/ava.png" className="img-fluid  profile__details--avartar"  alt="" />
                        </div>
                        <div className="col-md-12 py-5 mt-5">
                            <form >
                                <div className="row">
                                    <div className="col-md-6">
                                        <input type="text" className="form-control"/>
                                    </div>
                                    <div className="col-md-6">
                                        <input type="text" className="form-control"/>
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
export default GeneralProfile;