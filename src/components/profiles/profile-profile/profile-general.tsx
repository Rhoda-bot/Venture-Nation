import React, { useState } from "react";
import Tag from "../../reusables/tag";
import { Fade } from "reactstrap";

const GeneralProfile = () => {
    const [tag, setTags] = useState<any>([]);
    return(
        <>
           <Fade>
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
                                        <div className="col-md-6 mb-3">
                                            <label htmlFor="fullname" className="className='signup__col--label">Full name</label>
                                            <input type="text" 
                                            className="form-control shadow-none
                                            signup__col--inp" 
                                            placeholder="Full name"
                                            />
                                        </div>
                                        <div className="col-md-6 mb-3">
                                        <label htmlFor="fullname" className="className='signup__col--label">Gender</label>
                                        <select className="form-select shadow-none
                                            signup__col--inp" aria-label="Default select example">
                                            <option selected value="1">Male</option>
                                            <option value="2">Female</option>
                                        
                                        </select>
                                        </div>
                                        <div className="col-md-12 mb-3">
                                            <label htmlFor="fullname" className="className='signup__col--label">Phone</label>
                                            <input type="text" className="form-control 
                                                shadow-none
                                            signup__col--inp" placeholder="Phone no"/>
                                        </div>
                                        <div className="col-md-12 mb-3">
                                            <label htmlFor="fullname" className="className='signup__col--label">Date of birth</label>
                                            <input type="date" 
                                            className="form-control shadow-none
                                            signup__col--inp" name="dob"/>
                                        </div>
                                        <div className="col-md-12">
                                            <Tag sendTags={setTags} tag={tag}/>
                                        </div>
                                        <div className="col-md-12 mb-3 ">
                                        <label htmlFor="exampleFormControlTextarea1" className="form-label">Bio</label>
                                        <textarea className="form-control shadow-none
                                            signup__col--inp" id="exampleFormControlTextarea1" rows={3}></textarea>
                                            <p>Brief description for your profile.</p>
                                        </div>
                                        <div className="col-md-6"></div>
                                        <div className="col-md-6 text-end">
                                            <button className="general--btn">Save changes</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
           </Fade>
        </>
    )
}
export default GeneralProfile;